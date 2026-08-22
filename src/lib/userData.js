import { supabase } from './supabaseClient';

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║             MoodBeats — User-Scoped Data Layer               ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  All operations securely derive user ID from active session   ║
 * ║  Protected by Supabase PostgreSQL Row Level Security (RLS)   ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/**
 * Helper to retrieve currently authenticated user ID safely and rapidly from active session.
 * Throws an error if no active session is found.
 */
async function getAuthenticatedUserId() {
  const { data: { session } } = await supabase.auth.getSession();
  if (session?.user?.id) {
    return session.user.id;
  }
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) {
    throw new Error('User not authenticated. Please log in to access personal space.');
  }
  return user.id;
}

// ─────────────────────────────────────────────────────────────────
// 1. SAVED / LIKED SONGS
// ─────────────────────────────────────────────────────────────────

export async function getSavedSongs() {
  const userId = await getAuthenticatedUserId();
  const { data, error } = await supabase
    .from('user_saved_songs')
    .select('*')
    .eq('user_id', userId)
    .order('saved_at', { ascending: false });

  console.log('[UserData Raw Response: getSavedSongs]', { count: data?.length, error });

  if (error) {
    console.error('[UserData] Error fetching saved songs:', error.message);
    throw error;
  }
  return data || [];
}

export async function saveSong(track) {
  if (!track) return null;
  const userId = await getAuthenticatedUserId();

  const trackId = String(track.id || track.track_id || '');
  const trackName = track.title || track.name || track.track_name || 'Unknown Track';
  const artist = track.artist || track.primaryArtists || 'Unknown Artist';
  const moodTag = track.mood_tag || track.mood || 'General';
  const imageUrl = track.image || track.image_url || track.artwork || 'icon.png';
  const streamUrl = track.downloadUrl || track.streamUrl || track.stream_url || '';

  const { data, error } = await supabase
    .from('user_saved_songs')
    .upsert({
      user_id: userId,
      track_id: trackId,
      track_name: trackName,
      artist: artist,
      mood_tag: moodTag,
      image_url: imageUrl,
      stream_url: streamUrl,
      saved_at: new Date().toISOString()
    }, { onConflict: 'user_id, track_id' })
    .select()
    .single();

  if (error) {
    console.error('[UserData] Error saving song:', error.message);
    throw error;
  }
  return data;
}

export async function removeSavedSong(trackId) {
  const userId = await getAuthenticatedUserId();
  const { data, error } = await supabase
    .from('user_saved_songs')
    .delete()
    .eq('user_id', userId)
    .eq('track_id', String(trackId))
    .select();

  if (error) {
    console.error('[UserData] Error removing saved song:', error.message);
    throw error;
  }
  return data;
}

// ─────────────────────────────────────────────────────────────────
// 2. MOOD HISTORY
// ─────────────────────────────────────────────────────────────────

export async function getMoodHistory(limit = 10) {
  const userId = await getAuthenticatedUserId();
  const { data, error } = await supabase
    .from('user_mood_history')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit);

  console.log('[UserData Raw Response: getMoodHistory]', { count: data?.length, error });

  if (error) {
    console.error('[UserData] Error fetching mood history:', error.message);
    throw error;
  }
  return data || [];
}

export async function logMood(mood, source = 'face_scan', confidence = 85) {
  if (!mood) return null;
  const userId = await getAuthenticatedUserId();

  const { data, error } = await supabase
    .from('user_mood_history')
    .insert({
      user_id: userId,
      detected_mood: mood,
      source: source,
      confidence: confidence,
      created_at: new Date().toISOString()
    })
    .select()
    .single();

  console.log('[UserData Raw Response: logMood]', { data, error });

  if (error) {
    console.error('[UserData] Error logging mood:', error.message);
    throw error;
  }
  return data;
}

// ─────────────────────────────────────────────────────────────────
// 3. USER PLAYLISTS & TRACKS
// ─────────────────────────────────────────────────────────────────

export async function getPlaylists() {
  const userId = await getAuthenticatedUserId();
  const { data, error } = await supabase
    .from('user_playlists')
    .select(`
      *,
      tracks:user_playlist_tracks(count)
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  console.log('[UserData Raw Response: getPlaylists]', { count: data?.length, error });

  if (error) {
    console.error('[UserData] Error fetching playlists:', error.message);
    throw error;
  }
  return data || [];
}

export async function createPlaylist(playlistName, description = '') {
  if (!playlistName) throw new Error('Playlist name is required');
  const userId = await getAuthenticatedUserId();

  const { data, error } = await supabase
    .from('user_playlists')
    .insert({
      user_id: userId,
      playlist_name: playlistName.trim(),
      description: description,
      cover_url: 'icon.png',
      created_at: new Date().toISOString()
    })
    .select()
    .single();

  console.log('[UserData Raw Response: createPlaylist]', { data, error });

  if (error) {
    console.error('[UserData] Error creating playlist:', error.message);
    throw error;
  }
  return data;
}

export async function getPlaylistTracks(playlistId) {
  if (!playlistId) return [];
  const { data, error } = await supabase
    .from('user_playlist_tracks')
    .select('*')
    .eq('playlist_id', playlistId)
    .order('added_at', { ascending: false });

  console.log('[UserData Raw Response: getPlaylistTracks]', { playlistId, count: data?.length, error });

  if (error) {
    console.error('[UserData] Error fetching playlist tracks:', error.message);
    throw error;
  }
  return data || [];
}

export async function addTrackToPlaylist(playlistId, track) {
  if (!playlistId || !track) return null;

  const trackId = String(track.id || track.track_id || '');
  const trackName = track.title || track.name || track.track_name || 'Unknown Track';
  const artist = track.artist || track.primaryArtists || 'Unknown Artist';
  const imageUrl = track.image || track.image_url || 'icon.png';
  const streamUrl = track.downloadUrl || track.streamUrl || track.stream_url || '';

  const { data, error } = await supabase
    .from('user_playlist_tracks')
    .insert({
      playlist_id: playlistId,
      track_id: trackId,
      track_name: trackName,
      artist: artist,
      image_url: imageUrl,
      stream_url: streamUrl,
      added_at: new Date().toISOString()
    })
    .select()
    .single();

  console.log('[UserData Raw Response: addTrackToPlaylist]', { data, error });

  if (error) {
    console.error('[UserData] Error adding track to playlist:', error.message);
    throw error;
  }
  return data;
}

export async function removeTrackFromPlaylist(playlistId, trackId) {
  const { data, error } = await supabase
    .from('user_playlist_tracks')
    .delete()
    .eq('playlist_id', playlistId)
    .eq('track_id', String(trackId))
    .select();

  console.log('[UserData Raw Response: removeTrackFromPlaylist]', { data, error });

  if (error) {
    console.error('[UserData] Error removing track from playlist:', error.message);
    throw error;
  }
  return data;
}

// ─────────────────────────────────────────────────────────────────
// 4. USER SETTINGS & PREFERENCES
// ─────────────────────────────────────────────────────────────────

export async function getUserSettings() {
  const userId = await getAuthenticatedUserId();
  const { data, error } = await supabase
    .from('user_settings')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle();

  console.log('[UserData Raw Response: getUserSettings]', { data, error });

  if (error) {
    console.error('[UserData] Error fetching user settings:', error.message);
    throw error;
  }

  // Return default settings if not yet saved in DB
  return data || {
    user_id: userId,
    preferred_language: 'Hindi',
    favorite_genres: ['Bollywood', 'Pop', 'Lo-Fi', 'Sufi'],
    theme_preference: 'dark'
  };
}

export async function updateUserSettings(settings) {
  const userId = await getAuthenticatedUserId();
  const { data, error } = await supabase
    .from('user_settings')
    .upsert({
      user_id: userId,
      preferred_language: settings.preferred_language || 'Hindi',
      favorite_genres: settings.favorite_genres || ['Bollywood', 'Pop', 'Lo-Fi', 'Sufi'],
      theme_preference: settings.theme_preference || 'dark',
      updated_at: new Date().toISOString()
    })
    .select()
    .single();

  console.log('[UserData Raw Response: updateUserSettings]', { data, error });

  if (error) {
    console.error('[UserData] Error updating user settings:', error.message);
    throw error;
  }
  return data;
}

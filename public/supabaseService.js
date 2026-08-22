/**
 * MoodBeats — Supabase Web & Mobile Client Integration
 * Handles Authentication, Session Management, Cloud Profile, "My Space" User Data Space & RLS
 */

const DEFAULT_SUPABASE_URL = 'https://xyzcompany.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

// Retrieve credentials from localStorage or environment
function getSupabaseConfig() {
  const customUrl = localStorage.getItem('moodbeats_supabase_url');
  const customKey = localStorage.getItem('moodbeats_supabase_key');
  return {
    url: customUrl || window.__ENV__?.SUPABASE_URL || DEFAULT_SUPABASE_URL,
    key: customKey || window.__ENV__?.SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY,
  };
}

let _supabaseInstance = null;

function getSupabase() {
  if (_supabaseInstance) return _supabaseInstance;
  if (typeof window.supabase !== 'undefined' && typeof window.supabase.createClient === 'function') {
    const config = getSupabaseConfig();
    _supabaseInstance = window.supabase.createClient(config.url, config.key, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
    return _supabaseInstance;
  }
  return null;
}

window.MoodSupabase = {
  getClient: getSupabase,

  // 1. Session & Auth State
  async getSession() {
    const client = getSupabase();
    if (!client) return null;
    try {
      const { data: { session } } = await client.auth.getSession();
      return session;
    } catch (e) {
      console.warn('[Supabase] getSession failed:', e);
      return null;
    }
  },

  async getUser() {
    const client = getSupabase();
    if (!client) return null;
    try {
      const { data: { user } } = await client.auth.getUser();
      return user || null;
    } catch (e) {
      return null;
    }
  },

  async signInWithEmail(email, password) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase client not initialized');
    const { data, error } = await client.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    if (error) throw error;
    return data;
  },

  async signUpWithEmail(email, password, fullName) {
    const client = getSupabase();
    if (!client) throw new Error('Supabase client not initialized');
    const { data, error } = await client.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: { full_name: fullName?.trim() || '' },
      },
    });
    if (error) throw error;
    return data;
  },

  async signInWithGoogle() {
    const client = getSupabase();
    if (!client) throw new Error('Supabase client not initialized');
    const { data, error } = await client.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });
    if (error) throw error;
    return data;
  },

  async signOut() {
    const client = getSupabase();
    if (!client) return;
    const { error } = await client.auth.signOut();
    if (error) throw error;
  },

  // 2. "My Space" User-Scoped Data Functions (Protected by RLS)

  // Saved Songs
  async getSavedSongs() {
    const client = getSupabase();
    const user = await this.getUser();
    if (!client || !user) return [];

    try {
      const { data, error } = await client
        .from('user_saved_songs')
        .select('*')
        .eq('user_id', user.id)
        .order('saved_at', { ascending: false });

      if (error) throw error;
      return (data || []).map(r => ({
        id: r.track_id,
        title: r.track_name,
        artist: r.artist,
        mood: r.mood_tag,
        image: r.image_url || 'icon.png',
        downloadUrl: r.stream_url,
        savedAt: r.saved_at
      }));
    } catch (e) {
      console.warn('[Supabase] getSavedSongs error:', e.message);
      return [];
    }
  },

  async saveSong(track) {
    const client = getSupabase();
    const user = await this.getUser();
    if (!client || !user || !track) return null;

    try {
      const { data, error } = await client.from('user_saved_songs').upsert({
        user_id: user.id,
        track_id: String(track.id || track.track_id),
        track_name: track.title || track.name || 'Unknown Track',
        artist: track.artist || track.primaryArtists || 'Unknown Artist',
        mood_tag: track.mood || track.mood_tag || 'General',
        image_url: track.image || track.image_url || 'icon.png',
        stream_url: track.downloadUrl || track.streamUrl || '',
        saved_at: new Date().toISOString()
      }, { onConflict: 'user_id, track_id' }).select().single();

      if (error) throw error;
      return data;
    } catch (e) {
      console.warn('[Supabase] saveSong error:', e.message);
      return null;
    }
  },

  async removeSavedSong(trackId) {
    const client = getSupabase();
    const user = await this.getUser();
    if (!client || !user) return;

    try {
      await client.from('user_saved_songs').delete().match({
        user_id: user.id,
        track_id: String(trackId)
      });
    } catch (e) {
      console.warn('[Supabase] removeSavedSong error:', e.message);
    }
  },

  // Mood History
  async logMood(mood, source = 'face_scan', confidence = 85) {
    const client = getSupabase();
    const user = await this.getUser();
    if (!client || !user) return null;

    try {
      const { data, error } = await client.from('user_mood_history').insert({
        user_id: user.id,
        detected_mood: mood,
        source: source,
        confidence: Number(confidence) || 85,
        created_at: new Date().toISOString()
      }).select().single();

      if (error) throw error;
      return data;
    } catch (e) {
      console.warn('[Supabase] logMood error:', e.message);
      return null;
    }
  },

  async getMoodHistory(limit = 15) {
    const client = getSupabase();
    const user = await this.getUser();
    if (!client || !user) return [];

    try {
      const { data, error } = await client
        .from('user_mood_history')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data || [];
    } catch (e) {
      console.warn('[Supabase] getMoodHistory error:', e.message);
      return [];
    }
  },

  // Playlists
  async getPlaylists() {
    const client = getSupabase();
    const user = await this.getUser();
    if (!client || !user) return [];

    try {
      const { data, error } = await client
        .from('user_playlists')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (e) {
      console.warn('[Supabase] getPlaylists error:', e.message);
      return [];
    }
  },

  async createPlaylist(name, description = '') {
    const client = getSupabase();
    const user = await this.getUser();
    if (!client || !user || !name) return null;

    try {
      const { data, error } = await client.from('user_playlists').insert({
        user_id: user.id,
        playlist_name: name.trim(),
        description: description,
        cover_url: 'icon.png',
        created_at: new Date().toISOString()
      }).select().single();

      if (error) throw error;
      return data;
    } catch (e) {
      console.warn('[Supabase] createPlaylist error:', e.message);
      return null;
    }
  },

  // Settings
  async getUserSettings() {
    const client = getSupabase();
    const user = await this.getUser();
    if (!client || !user) return null;

    try {
      const { data, error } = await client
        .from('user_settings')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) throw error;
      return data || {
        preferred_language: 'Hindi',
        favorite_genres: ['Bollywood', 'Pop', 'Lo-Fi', 'Sufi'],
        theme_preference: 'dark'
      };
    } catch (e) {
      console.warn('[Supabase] getUserSettings error:', e.message);
      return null;
    }
  },

  async updateUserSettings(settings) {
    const client = getSupabase();
    const user = await this.getUser();
    if (!client || !user || !settings) return null;

    try {
      const { data, error } = await client.from('user_settings').upsert({
        user_id: user.id,
        preferred_language: settings.preferred_language || 'Hindi',
        favorite_genres: settings.favorite_genres || ['Bollywood', 'Pop', 'Lo-Fi', 'Sufi'],
        theme_preference: settings.theme_preference || 'dark',
        updated_at: new Date().toISOString()
      }).select().single();

      if (error) throw error;
      return data;
    } catch (e) {
      console.warn('[Supabase] updateUserSettings error:', e.message);
      return null;
    }
  }
};

console.log('[MoodBeats] Supabase User Data & Personal Space module loaded.');

/**
 * MoodBeats — Supabase Web & Mobile Client Integration
 * Handles Authentication, Session Management, Cloud Profile, Liked Songs & Mood History Sync
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
    const session = await this.getSession();
    return session?.user || null;
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

  // 2. Cloud Database Syncing
  async syncMoodScan(mood, confidence, scanMode = 'camera') {
    const client = getSupabase();
    const user = await this.getUser();
    if (!client || !user) return null;

    try {
      const { data, error } = await client.from('mood_scans').insert({
        user_id: user.id,
        mood,
        confidence: Number(confidence) || 0,
        scan_mode: scanMode,
      });
      if (error) console.warn('[Supabase] syncMoodScan error:', error.message);
      return data;
    } catch (e) {
      console.warn('[Supabase] syncMoodScan error:', e);
    }
  },

  async syncLikedSong(song, isLiked) {
    const client = getSupabase();
    const user = await this.getUser();
    if (!client || !user || !song) return;

    try {
      if (isLiked) {
        await client.from('liked_songs').upsert({
          user_id: user.id,
          song_id: String(song.id || song.title),
          title: song.title,
          artist: song.artist,
          album: song.album || '',
          duration: song.duration || 0,
          image_url: song.image || '',
          download_url: song.downloadUrl || '',
        });
      } else {
        await client.from('liked_songs').delete().match({
          user_id: user.id,
          song_id: String(song.id || song.title),
        });
      }
    } catch (e) {
      console.warn('[Supabase] syncLikedSong error:', e);
    }
  },

  async fetchCloudLikedSongs() {
    const client = getSupabase();
    const user = await this.getUser();
    if (!client || !user) return [];

    try {
      const { data, error } = await client
        .from('liked_songs')
        .select('*')
        .order('liked_at', { ascending: false });
      if (error) throw error;
      return (data || []).map(row => ({
        id: row.song_id,
        title: row.title,
        artist: row.artist,
        album: row.album,
        duration: row.duration,
        image: row.image_url,
        downloadUrl: row.download_url,
      }));
    } catch (e) {
      console.warn('[Supabase] fetchCloudLikedSongs error:', e);
      return [];
    }
  },
};

console.log('[MoodBeats] Supabase service module loaded.');

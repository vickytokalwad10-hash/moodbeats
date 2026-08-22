import { createClient } from '@supabase/supabase-js';

// Retrieve Supabase credentials from Vite environment variables with runtime fallbacks
const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL ||
  (typeof process !== 'undefined' ? process.env?.SUPABASE_URL : null) ||
  (typeof window !== 'undefined' ? window.__ENV__?.SUPABASE_URL : '') ||
  'https://your-project.supabase.co';

const supabaseAnonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY ||
  (typeof process !== 'undefined' ? process.env?.SUPABASE_ANON_KEY : null) ||
  (typeof window !== 'undefined' ? window.__ENV__?.SUPABASE_ANON_KEY : '') ||
  'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  },
});

export default supabase;

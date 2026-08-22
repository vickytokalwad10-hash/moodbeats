import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const AuthContext = createContext({
  user: null,
  session: null,
  loading: true,
  signIn: async () => {},
  signUp: async () => {},
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    // Safety timeout: ensure loading state unblocks within 5s even on slow/offline networks
    const timeoutTimer = setTimeout(() => {
      if (isMounted) setLoading(false);
    }, 5000);

    // 1. Check & restore active session on app boot
    const initSession = async () => {
      try {
        const { data: { session: initialSession }, error } = await supabase.auth.getSession();
        if (error) {
          console.warn('[AuthContext] Session retrieval error:', error.message);
        }
        if (isMounted) {
          setSession(initialSession);
          setUser(initialSession?.user ?? null);
        }
      } catch (err) {
        console.error('[AuthContext] Failed to get session:', err);
      } finally {
        if (isMounted) setLoading(false);
        clearTimeout(timeoutTimer);
      }
    };

    initSession();

    // 2. Subscribe to auth state changes (SIGN_IN, SIGN_OUT, TOKEN_REFRESHED)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      if (isMounted) {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setLoading(false);
      }
    });

    // 3. Mobile Capacitor Deep Link Listener for OAuth Callbacks
    let appUrlListener = null;
    try {
      const capApp = window.Capacitor?.Plugins?.App;
      if (capApp && typeof capApp.addListener === 'function') {
        appUrlListener = capApp.addListener('appUrlOpen', async (event) => {
          if (event?.url && (event.url.includes('access_token') || event.url.includes('refresh_token') || event.url.includes('code='))) {
            const urlObj = new URL(event.url);
            const hash = urlObj.hash ? urlObj.hash.substring(1) : '';
            const params = new URLSearchParams(hash || urlObj.search);
            const accessToken = params.get('access_token');
            const refreshToken = params.get('refresh_token');
            if (accessToken && refreshToken) {
              await supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });
            }
          }
        });
      }
    } catch (e) {
      console.warn('[AuthContext] Deep link listener setup note:', e);
    }

    return () => {
      isMounted = false;
      clearTimeout(timeoutTimer);
      subscription?.unsubscribe();
      if (appUrlListener?.remove) appUrlListener.remove();
    };
  }, []);

  // Email & Password Sign In
  const signIn = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    if (error) throw error;
    return data;
  };

  // Email & Password Sign Up
  const signUp = async ({ email, password, fullName }) => {
    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          full_name: fullName?.trim() || '',
        },
      },
    });
    if (error) throw error;
    return data;
  };

  // Google OAuth Sign In (with Mobile Deep Link & Web Redirect Support)
  const signInWithGoogle = async (customRedirect) => {
    const isCapacitor = window.Capacitor?.isNativePlatform?.() || (typeof window !== 'undefined' && window.location.protocol === 'capacitor:');
    const defaultRedirect = isCapacitor ? 'moodbeats://login-callback' : window.location.origin;
    const redirectTo = customRedirect || defaultRedirect;

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });
    if (error) throw error;
    return data;
  };

  // Sign Out
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const value = {
    user,
    session,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;

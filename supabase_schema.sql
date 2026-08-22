-- ============================================================================
-- MoodBeats — Supabase PostgreSQL Database Schema
-- ============================================================================
-- Personal Data Space ("My Space") & Multi-User Cloud Architecture
-- Tables: user_saved_songs, user_mood_history, user_playlists, user_playlist_tracks, user_settings, profiles
-- Strictly isolated via PostgreSQL Row Level Security (RLS)
-- ============================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================================================
-- 1. USER PROFILES TABLE
-- ============================================================================
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text unique,
  full_name text,
  avatar_url text,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Trigger: Automatically provision profile & settings on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  -- 1. Insert Profile
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'avatar_url', null)
  )
  on conflict (id) do update
  set email = excluded.email,
      full_name = coalesce(excluded.full_name, profiles.full_name);

  -- 2. Insert Default User Settings
  insert into public.user_settings (user_id, preferred_language, favorite_genres, theme_preference)
  values (
    new.id,
    'Hindi',
    array['Bollywood', 'Pop', 'Lo-Fi', 'Sufi'],
    'dark'
  )
  on conflict (user_id) do nothing;

  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- ============================================================================
-- 2. USER SAVED / LIKED SONGS (`user_saved_songs`)
-- ============================================================================
create table if not exists public.user_saved_songs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  track_id text not null,
  track_name text not null,
  artist text not null,
  mood_tag text default 'General',
  image_url text,
  stream_url text,
  saved_at timestamptz default now() not null,
  constraint unique_user_track unique(user_id, track_id)
);

create index if not exists idx_saved_songs_user on public.user_saved_songs(user_id, saved_at desc);

-- RLS: user_saved_songs
alter table public.user_saved_songs enable row level security;

create policy "Users can select their own saved songs"
  on public.user_saved_songs for select
  using (auth.uid() = user_id);

create policy "Users can insert their own saved songs"
  on public.user_saved_songs for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own saved songs"
  on public.user_saved_songs for update
  using (auth.uid() = user_id);

create policy "Users can delete their own saved songs"
  on public.user_saved_songs for delete
  using (auth.uid() = user_id);


-- ============================================================================
-- 3. USER MOOD HISTORY (`user_mood_history`)
-- ============================================================================
create table if not exists public.user_mood_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  detected_mood text not null,
  source text default 'face_scan' not null, -- 'face_scan' | 'manual' | 'soundscape'
  confidence numeric(5, 2) default 85.00,
  created_at timestamptz default now() not null
);

create index if not exists idx_mood_history_user on public.user_mood_history(user_id, created_at desc);

-- RLS: user_mood_history
alter table public.user_mood_history enable row level security;

create policy "Users can view their own mood history"
  on public.user_mood_history for select
  using (auth.uid() = user_id);

create policy "Users can insert their own mood entries"
  on public.user_mood_history for insert
  with check (auth.uid() = user_id);

create policy "Users can delete their own mood entries"
  on public.user_mood_history for delete
  using (auth.uid() = user_id);


-- ============================================================================
-- 4. USER PLAYLISTS (`user_playlists`)
-- ============================================================================
create table if not exists public.user_playlists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  playlist_name text not null,
  description text,
  cover_url text,
  created_at timestamptz default now() not null
);

create index if not exists idx_user_playlists_user on public.user_playlists(user_id);

-- RLS: user_playlists
alter table public.user_playlists enable row level security;

create policy "Users can view their own playlists"
  on public.user_playlists for select
  using (auth.uid() = user_id);

create policy "Users can create their own playlists"
  on public.user_playlists for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own playlists"
  on public.user_playlists for update
  using (auth.uid() = user_id);

create policy "Users can delete their own playlists"
  on public.user_playlists for delete
  using (auth.uid() = user_id);


-- ============================================================================
-- 5. USER PLAYLIST TRACKS (`user_playlist_tracks`)
-- ============================================================================
create table if not exists public.user_playlist_tracks (
  id uuid primary key default gen_random_uuid(),
  playlist_id uuid references public.user_playlists(id) on delete cascade not null,
  track_id text not null,
  track_name text not null,
  artist text not null,
  image_url text,
  stream_url text,
  added_at timestamptz default now() not null
);

create index if not exists idx_playlist_tracks_pid on public.user_playlist_tracks(playlist_id, added_at desc);

-- RLS: user_playlist_tracks (Scoped by playlist ownership)
alter table public.user_playlist_tracks enable row level security;

create policy "Users can view tracks from their own playlists"
  on public.user_playlist_tracks for select
  using (
    exists (
      select 1 from public.user_playlists p
      where p.id = user_playlist_tracks.playlist_id
      and p.user_id = auth.uid()
    )
  );

create policy "Users can add tracks to their own playlists"
  on public.user_playlist_tracks for insert
  with check (
    exists (
      select 1 from public.user_playlists p
      where p.id = user_playlist_tracks.playlist_id
      and p.user_id = auth.uid()
    )
  );

create policy "Users can remove tracks from their own playlists"
  on public.user_playlist_tracks for delete
  using (
    exists (
      select 1 from public.user_playlists p
      where p.id = user_playlist_tracks.playlist_id
      and p.user_id = auth.uid()
    )
  );


-- ============================================================================
-- 6. USER SETTINGS & PREFERENCES (`user_settings`)
-- ============================================================================
create table if not exists public.user_settings (
  user_id uuid references auth.users(id) on delete cascade primary key,
  preferred_language text default 'Hindi' not null,
  favorite_genres text[] default array['Bollywood', 'Pop', 'Lo-Fi', 'Sufi'] not null,
  theme_preference text default 'dark' not null,
  updated_at timestamptz default now() not null
);

-- RLS: user_settings
alter table public.user_settings enable row level security;

create policy "Users can view their own settings"
  on public.user_settings for select
  using (auth.uid() = user_id);

create policy "Users can insert their own settings"
  on public.user_settings for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own settings"
  on public.user_settings for update
  using (auth.uid() = user_id);

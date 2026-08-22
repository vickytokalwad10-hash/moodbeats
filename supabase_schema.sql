-- ============================================================================
-- MoodBeats — Supabase PostgreSQL Database Schema
-- ============================================================================
-- AI-Powered Mood Music Player Database Schema
-- Includes Profiles, Mood History, User Playlists, Tracks, Liked Songs, & RLS
-- ============================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================================================
-- 1. PROFILES TABLE
-- ============================================================================
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique,
  full_name text,
  avatar_url text,
  preferred_language text default 'Hindi',
  streaming_quality text default '320kbps',
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

-- RLS: Profiles
alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone"
  on public.profiles for select
  using (true);

create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Trigger: Automatically create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
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
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- ============================================================================
-- 2. MOOD SCANS & HISTORY TABLE
-- ============================================================================
create table if not exists public.mood_scans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade not null,
  mood text not null,
  confidence numeric(5, 2) not null,
  scan_mode text default 'camera' not null, -- 'camera' | 'text' | 'soundscape'
  detected_expressions jsonb default '{}'::jsonb,
  created_at timestamptz default now() not null
);

-- Index for fast user scan lookups
create index if not exists idx_mood_scans_user_id on public.mood_scans(user_id, created_at desc);

-- RLS: Mood Scans
alter table public.mood_scans enable row level security;

create policy "Users can view their own mood history"
  on public.mood_scans for select
  using (auth.uid() = user_id);

create policy "Users can insert their own mood scans"
  on public.mood_scans for insert
  with check (auth.uid() = user_id);

create policy "Users can delete their own mood history"
  on public.mood_scans for delete
  using (auth.uid() = user_id);


-- ============================================================================
-- 3. CUSTOM PLAYLISTS TABLE
-- ============================================================================
create table if not exists public.playlists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade not null,
  name text not null,
  description text,
  mood text,
  is_public boolean default false not null,
  cover_url text,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

create index if not exists idx_playlists_user_id on public.playlists(user_id);

-- RLS: Playlists
alter table public.playlists enable row level security;

create policy "Playlists viewable by creator or if public"
  on public.playlists for select
  using (auth.uid() = user_id or is_public = true);

create policy "Users can create their own playlists"
  on public.playlists for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own playlists"
  on public.playlists for update
  using (auth.uid() = user_id);

create policy "Users can delete their own playlists"
  on public.playlists for delete
  using (auth.uid() = user_id);


-- ============================================================================
-- 4. PLAYLIST TRACKS TABLE
-- ============================================================================
create table if not exists public.playlist_tracks (
  id uuid primary key default gen_random_uuid(),
  playlist_id uuid references public.playlists on delete cascade not null,
  song_id text not null,
  title text not null,
  artist text not null,
  album text,
  duration integer default 0,
  image_url text,
  download_url text,
  position integer default 0 not null,
  added_at timestamptz default now() not null
);

create index if not exists idx_playlist_tracks_playlist on public.playlist_tracks(playlist_id, position asc);

-- RLS: Playlist Tracks
alter table public.playlist_tracks enable row level security;

create policy "Tracks viewable if user has access to playlist"
  on public.playlist_tracks for select
  using (
    exists (
      select 1 from public.playlists p
      where p.id = playlist_tracks.playlist_id
      and (p.user_id = auth.uid() or p.is_public = true)
    )
  );

create policy "Users can insert tracks to their own playlists"
  on public.playlist_tracks for insert
  with check (
    exists (
      select 1 from public.playlists p
      where p.id = playlist_tracks.playlist_id
      and p.user_id = auth.uid()
    )
  );

create policy "Users can update tracks in their own playlists"
  on public.playlist_tracks for update
  using (
    exists (
      select 1 from public.playlists p
      where p.id = playlist_tracks.playlist_id
      and p.user_id = auth.uid()
    )
  );

create policy "Users can delete tracks from their own playlists"
  on public.playlist_tracks for delete
  using (
    exists (
      select 1 from public.playlists p
      where p.id = playlist_tracks.playlist_id
      and p.user_id = auth.uid()
    )
  );


-- ============================================================================
-- 5. LIKED SONGS & FAVORITES TABLE
-- ============================================================================
create table if not exists public.liked_songs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade not null,
  song_id text not null,
  title text not null,
  artist text not null,
  album text,
  duration integer default 0,
  image_url text,
  download_url text,
  liked_at timestamptz default now() not null,
  constraint unique_user_song unique(user_id, song_id)
);

create index if not exists idx_liked_songs_user on public.liked_songs(user_id, liked_at desc);

-- RLS: Liked Songs
alter table public.liked_songs enable row level security;

create policy "Users can view their own liked songs"
  on public.liked_songs for select
  using (auth.uid() = user_id);

create policy "Users can add liked songs"
  on public.liked_songs for insert
  with check (auth.uid() = user_id);

create policy "Users can remove liked songs"
  on public.liked_songs for delete
  using (auth.uid() = user_id);


-- ============================================================================
-- 6. RECENTLY PLAYED TABLE
-- ============================================================================
create table if not exists public.recently_played (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade not null,
  song_id text not null,
  title text not null,
  artist text not null,
  album text,
  duration integer default 0,
  image_url text,
  download_url text,
  played_at timestamptz default now() not null
);

create index if not exists idx_recently_played_user on public.recently_played(user_id, played_at desc);

-- RLS: Recently Played
alter table public.recently_played enable row level security;

create policy "Users can view their own recently played history"
  on public.recently_played for select
  using (auth.uid() = user_id);

create policy "Users can record recently played tracks"
  on public.recently_played for insert
  with check (auth.uid() = user_id);

create policy "Users can clear their recently played history"
  on public.recently_played for delete
  using (auth.uid() = user_id);

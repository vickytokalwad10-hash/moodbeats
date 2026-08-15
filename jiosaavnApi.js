/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              MoodBeats — JioSaavn API Service                ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  Base: https://saavn.sumit.co  (JioSaavn unofficial wrapper) ║
 * ║  No API key / auth required.                                 ║
 * ║  Full support for: Songs (with 320kbps stream URLs),         ║
 * ║  Artists, Albums, Playlists, and Mood soundscapes.           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

// ─────────────────────────────────────────────────────────────────
// 1. HOST REGISTRY
// ─────────────────────────────────────────────────────────────────
const JSA_HOSTS = [
  'https://saavn.sumit.co',
  'https://jiosaavn-api-privatecvc2.vercel.app',
  'https://saavn.me',
  'https://jiosaavn.netlify.app',
];

let _jsaWorkingHost = JSA_HOSTS[0];

// ─────────────────────────────────────────────────────────────────
// 2. HTML ENTITY DECODER & SANITIZER
// ─────────────────────────────────────────────────────────────────
function jsaDecodeEntities(str) {
  if (!str || typeof str !== 'string') return str || '';
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

function jsaEscapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(jsaDecodeEntities(String(str)))
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ─────────────────────────────────────────────────────────────────
// 3. CORE FETCH WRAPPER
// ─────────────────────────────────────────────────────────────────
async function jsaFetch(path, timeoutMs = 8000) {
  const orderedHosts = [
    _jsaWorkingHost,
    ...JSA_HOSTS.filter(h => h !== _jsaWorkingHost),
  ];

  let lastError = null;

  for (const host of orderedHosts) {
    const url = `${host}${path}`;
    console.log(`[JSA] GET ${url}`);

    try {
      let status = 0;
      let json = null;

      // Safe timeout wrapper compatible with ALL Android WebView versions
      const fetchPromise = fetch(url, {
        headers: { 'Accept': 'application/json' },
      });

      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timeout')), timeoutMs)
      );

      try {
        const res = await Promise.race([fetchPromise, timeoutPromise]);
        status = res.status;
        json = await res.json();
      } catch (fetchErr) {
        console.warn(`[JSA] Fetch failed for ${url}: ${fetchErr.message}. Trying CapacitorHttp fallback...`);
        const capHttp = window.Capacitor?.Plugins?.CapacitorHttp || window.CapacitorHttp || window.Capacitor?.Http;
        if (capHttp && typeof capHttp.get === 'function') {
          const capRes = await capHttp.get({ url, headers: { 'Accept': 'application/json' } });
          status = capRes.status;
          json = typeof capRes.data === 'string' ? JSON.parse(capRes.data) : capRes.data;
        } else {
          throw fetchErr;
        }
      }

      if (status < 200 || status >= 300) {
        console.warn(`[JSA] ${host} responded ${status} for ${path}`);
        lastError = new Error(`HTTP ${status} from ${host}`);
        continue;
      }

      _jsaWorkingHost = host;
      return json;

    } catch (err) {
      console.warn(`[JSA] ${host} failed: ${err.message}`);
      lastError = err;
    }
  }

  const msg = `Music API unavailable: ${lastError?.message || 'network error'}`;
  console.error('[JSA] All hosts exhausted. Last error:', lastError);
  throw new Error(msg);
}

// ─────────────────────────────────────────────────────────────────
// 4. DATA MAPPERS
// ─────────────────────────────────────────────────────────────────

function _img(imageArr, fallback = 'icon.png') {
  if (!imageArr) return fallback;
  if (typeof imageArr === 'string') return imageArr || fallback;
  // Prefer 500x500 -> 150x150 -> 50x50
  return imageArr[2]?.url || imageArr[1]?.url || imageArr[0]?.url || fallback;
}

function _streamUrls(downloadUrlArr) {
  if (!downloadUrlArr || !downloadUrlArr.length) {
    return { primary: null, fallbacks: [] };
  }
  // Sort by quality descending (320kbps -> 160kbps -> 96kbps -> 48kbps -> 12kbps)
  const sorted = [...downloadUrlArr].sort((a, b) => {
    const qa = parseInt(a.quality) || 0;
    const qb = parseInt(b.quality) || 0;
    return qb - qa;
  });
  const [best, ...rest] = sorted;
  return {
    primary: best?.url || null,
    fallbacks: rest.map(u => u.url).filter(Boolean),
    allQualities: downloadUrlArr,
  };
}

function _mapSong(s) {
  if (!s) return null;
  const stream = _streamUrls(s.downloadUrl);
  return {
    id:          s.id,
    title:       jsaDecodeEntities(s.name || s.title || 'Unknown Song'),
    artist:      jsaDecodeEntities(
                   (s.artists?.primary?.map(a => a.name).join(', ')) ||
                   s.primaryArtists ||
                   s.subtitle ||
                   'Unknown Artist'
                 ),
    album:       jsaDecodeEntities(s.album?.name || s.album || ''),
    year:        s.year || '',
    duration:    Number(s.duration) || 0,
    language:    s.language || '',
    image:       _img(s.image),
    downloadUrl: stream.primary,
    streamFallbacks: stream.fallbacks,
    _raw:        s,
  };
}

function _mapArtist(a) {
  if (!a) return null;
  return {
    id:    a.id,
    name:  jsaDecodeEntities(a.name || 'Artist'),
    role:  jsaDecodeEntities(a.role || 'Artist'),
    image: _img(a.image),
    url:   a.url || '',
    _raw:  a,
  };
}

function _mapAlbum(a) {
  if (!a) return null;
  return {
    id:        a.id,
    name:      jsaDecodeEntities(a.name || 'Album'),
    year:      a.year || '',
    language:  a.language || '',
    image:     _img(a.image),
    artist:    jsaDecodeEntities((a.artists?.primary?.map(x => x.name).join(', ')) || ''),
    songCount: a.songCount || (a.songs?.length) || 0,
    songs:     (a.songs || []).map(_mapSong).filter(Boolean),
    _raw:      a,
  };
}

function _mapPlaylist(p) {
  if (!p) return null;
  return {
    id:        p.id,
    name:      jsaDecodeEntities(p.name || 'Playlist'),
    image:     _img(p.image),
    songCount: p.songCount || (p.songs?.length) || 0,
    language:  p.language || '',
    songs:     (p.songs || []).map(_mapSong).filter(Boolean),
    _raw:      p,
  };
}

// ─────────────────────────────────────────────────────────────────
// 5. SEARCH ENDPOINTS
// ─────────────────────────────────────────────────────────────────

async function jsaSearchSongs(query, limit = 20) {
  const enc = encodeURIComponent(query.trim());
  const json = await jsaFetch(`/api/search/songs?query=${enc}&page=1&limit=${limit}`);
  const results = json?.data?.results || json?.results || [];
  return results.map(_mapSong).filter(Boolean);
}

async function jsaSearchArtists(query, limit = 10) {
  const enc = encodeURIComponent(query.trim());
  const json = await jsaFetch(`/api/search/artists?query=${enc}&page=1&limit=${limit}`);
  const results = json?.data?.results || json?.results || [];
  return results.map(_mapArtist).filter(Boolean);
}

async function jsaSearchAlbums(query, limit = 10) {
  const enc = encodeURIComponent(query.trim());
  const json = await jsaFetch(`/api/search/albums?query=${enc}&page=1&limit=${limit}`);
  const results = json?.data?.results || json?.results || [];
  return results.map(_mapAlbum).filter(Boolean);
}

async function jsaSearchPlaylists(query, limit = 10) {
  const enc = encodeURIComponent(query.trim());
  const json = await jsaFetch(`/api/search/playlists?query=${enc}&page=1&limit=${limit}`);
  const results = json?.data?.results || json?.results || [];
  return results.map(_mapPlaylist).filter(Boolean);
}

/**
 * High-performance parallel search that returns full streamable songs,
 * artists with avatars, albums, and playlists.
 */
async function jsaSearchAll(query) {
  const enc = encodeURIComponent(query.trim());

  // Run searches in parallel with individual error resilience
  const [songsRes, artistsRes, albumsRes, playlistsRes] = await Promise.allSettled([
    jsaFetch(`/api/search/songs?query=${enc}&page=1&limit=20`),
    jsaFetch(`/api/search/artists?query=${enc}&page=1&limit=10`),
    jsaFetch(`/api/search/albums?query=${enc}&page=1&limit=8`),
    jsaFetch(`/api/search/playlists?query=${enc}&page=1&limit=8`),
  ]);

  let songs = [];
  let artists = [];
  let albums = [];
  let playlists = [];

  if (songsRes.status === 'fulfilled' && songsRes.value) {
    const rawList = songsRes.value?.data?.results || songsRes.value?.results || [];
    songs = rawList.map(_mapSong).filter(Boolean);
  }

  if (artistsRes.status === 'fulfilled' && artistsRes.value) {
    const rawList = artistsRes.value?.data?.results || artistsRes.value?.results || [];
    artists = rawList.map(_mapArtist).filter(Boolean);
  }

  if (albumsRes.status === 'fulfilled' && albumsRes.value) {
    const rawList = albumsRes.value?.data?.results || albumsRes.value?.results || [];
    albums = rawList.map(_mapAlbum).filter(Boolean);
  }

  if (playlistsRes.status === 'fulfilled' && playlistsRes.value) {
    const rawList = playlistsRes.value?.data?.results || playlistsRes.value?.results || [];
    playlists = rawList.map(_mapPlaylist).filter(Boolean);
  }

  // If songs search was empty, try the summary search endpoint as a fallback
  if (songs.length === 0 && artists.length === 0) {
    try {
      const summaryJson = await jsaFetch(`/api/search?query=${enc}`);
      const d = summaryJson?.data || summaryJson;
      if (d) {
        if (!songs.length && d.songs?.results) songs = d.songs.results.map(_mapSong).filter(Boolean);
        if (!artists.length && d.artists?.results) artists = d.artists.results.map(_mapArtist).filter(Boolean);
        if (!albums.length && d.albums?.results) albums = d.albums.results.map(_mapAlbum).filter(Boolean);
        if (!playlists.length && d.playlists?.results) playlists = d.playlists.results.map(_mapPlaylist).filter(Boolean);
      }
    } catch(e) {
      console.warn('[JSA] Summary search fallback failed:', e.message);
    }
  }

  return { songs, artists, albums, playlists };
}

// ─────────────────────────────────────────────────────────────────
// 6. DETAIL ENDPOINTS
// ─────────────────────────────────────────────────────────────────

async function jsaGetArtist(artistId) {
  const json = await jsaFetch(`/api/artists?id=${artistId}`);
  const a = json?.data || json;
  return {
    id:            a.id,
    name:          jsaDecodeEntities(a.name || 'Artist'),
    image:         _img(a.image),
    followerCount: a.followerCount || a.fanCount || '',
    isVerified:    a.isVerified || false,
    bio:           Array.isArray(a.bio) ? a.bio.map(b => b.text).join(' ') : (a.bio || ''),
    topSongs:      (a.topSongs  || []).map(_mapSong).filter(Boolean),
    topAlbums:     (a.topAlbums || []).map(_mapAlbum).filter(Boolean),
    similarArtists:(a.similarArtists || []).map(_mapArtist).filter(Boolean),
    _raw:          a,
  };
}

async function jsaGetAlbum(albumId) {
  const json = await jsaFetch(`/api/albums?id=${albumId}`);
  const a = json?.data || json;
  return _mapAlbum(a);
}

async function jsaGetPlaylist(playlistId) {
  const json = await jsaFetch(`/api/playlists?id=${playlistId}`);
  const p = json?.data || json;
  return _mapPlaylist(p);
}

async function jsaGetSong(songId) {
  if (!songId) return null;
  try {
    const json = await jsaFetch(`/api/songs?id=${songId}`);
    const data = json?.data || json;
    const rawSong = Array.isArray(data) ? data[0] : (data?.songs ? data.songs[0] : data);
    return rawSong ? _mapSong(rawSong) : null;
  } catch (err) {
    console.warn(`[JSA] Single song fetch failed for ${songId}:`, err.message);
  }
  return null;
}

async function jsaGetLyrics(songId) {
  if (!songId) return null;
  try {
    const json = await jsaFetch(`/api/lyrics?id=${songId}`);
    const data = json?.data || json;
    if (data?.lyrics) {
      return jsaDecodeEntities(data.lyrics);
    }
  } catch (err) {
    console.warn(`[JSA] Lyrics fetch failed for ${songId}:`, err.message);
  }
  return null;
}

// ─────────────────────────────────────────────────────────────────
// 7. MOOD & ACTIVITY SOUNDSCAPE BUILDER
// ─────────────────────────────────────────────────────────────────
const MOOD_QUERIES = {
  'Happy':           'happy hindi songs',
  'Sad':             'sad hindi songs',
  'Energetic':       'workout gym hindi songs',
  'Relaxed':         'chill lofi hindi songs',
  'Angry':           'powerful aggressive hindi songs',
  'Romantic':        'romantic bollywood songs',
  'Focused/Stressed':'focus study lo-fi hindi',
};

const SOUNDSCAPE_CONFIGS = {
  'workout':  { title: 'Workout Power', icon: 'zap', query: 'high energy workout gym pump hindi songs', bg: 'linear-gradient(135deg, #ff007f, #ff4500)' },
  'sleep':    { title: 'Midnight Chill', icon: 'moon', query: 'midnight calm ambient sleep lofi hindi', bg: 'linear-gradient(135deg, #1e1b4b, #312e81)' },
  'rain':     { title: 'Rainy Day Vibes', icon: 'cloud-rain', query: 'monsoon rain acoustic romance hindi', bg: 'linear-gradient(135deg, #0284c7, #0f766e)' },
  'focus':    { title: 'Deep Focus Lo-Fi', icon: 'coffee', query: 'lo-fi study focus instrumental chill beats', bg: 'linear-gradient(135deg, #7c3aed, #4f46e5)' },
  'roadtrip': { title: 'Highway Roadtrip', icon: 'car', query: 'road trip travel driving bollywood songs', bg: 'linear-gradient(135deg, #f59e0b, #d97706)' },
  'party':    { title: 'Party Anthems', icon: 'sparkles', query: 'club party dance hits non-stop hindi', bg: 'linear-gradient(135deg, #ec4899, #8b5cf6)' }
};

async function jsaGetMoodPlaylist(mood, limit = 20) {
  const query = MOOD_QUERIES[mood] || `${mood} hindi songs`;
  const songs = await jsaSearchSongs(query, limit);
  return songs.filter(s => s.downloadUrl);
}

async function jsaGetSoundscapePlaylist(key, limit = 25) {
  const config = SOUNDSCAPE_CONFIGS[key] || SOUNDSCAPE_CONFIGS['focus'];
  const songs = await jsaSearchSongs(config.query, limit);
  return {
    key,
    title: config.title,
    icon: config.icon,
    bg: config.bg,
    songs: songs.filter(s => s.downloadUrl)
  };
}

async function jsaGetTrackRadio(song, limit = 25) {
  if (!song) return [];
  const primaryArtist = song.artist ? song.artist.split(',')[0].trim() : '';
  const searchQueries = [
    primaryArtist ? `${primaryArtist} songs` : null,
    song.album ? `${song.album} songs` : null,
    song.genre ? `${song.genre} songs` : 'trending hindi songs'
  ].filter(Boolean);

  let pool = [];
  for (const q of searchQueries) {
    try {
      const res = await jsaSearchSongs(q, 15);
      pool = [...pool, ...res];
      if (pool.length >= limit) break;
    } catch(e) {}
  }

  // Deduplicate and filter out current song
  const seen = new Set([song.id]);
  const radioSongs = [song];
  
  for (const s of pool) {
    if (s && s.id && !seen.has(s.id) && s.downloadUrl) {
      seen.add(s.id);
      radioSongs.push(s);
      if (radioSongs.length >= limit) break;
    }
  }

  return radioSongs;
}

// ─────────────────────────────────────────────────────────────────
// 8. FEATURED PLAYLISTS
// ─────────────────────────────────────────────────────────────────
const JSA_FEATURED_PLAYLISTS = [
  { id: '159146025', label: 'Top 50 Hindi' },
  { id: '1134543260',label: 'Trending Today' },
  { id: '258683791', label: 'Bollywood Romance' },
  { id: '68809990',  label: 'Party Anthems' },
];

async function jsaGetFeaturedPlaylists() {
  const results = [];
  for (const { id, label } of JSA_FEATURED_PLAYLISTS) {
    try {
      const pl = await jsaGetPlaylist(id);
      if (pl) {
        pl.displayLabel = label;
        results.push(pl);
      }
    } catch (err) {
      console.warn(`[JSA] Could not load featured playlist ${id} (${label}):`, err.message);
    }
  }
  return results;
}

// ─────────────────────────────────────────────────────────────────
// 9. SMART STREAM URL RESOLUTION
// ─────────────────────────────────────────────────────────────────

function jsaBestStreamUrl(song) {
  if (!song) return null;
  const userQuality = localStorage.getItem('moodbeats_audio_quality') || 'auto';
  
  if (userQuality !== 'auto' && song._raw?.downloadUrl && Array.isArray(song._raw.downloadUrl)) {
    const targetKbps = userQuality.replace('kbps', '');
    const matched = song._raw.downloadUrl.find(u => String(u.quality).includes(targetKbps));
    if (matched?.url) return matched.url;
  }

  if (song.downloadUrl) return song.downloadUrl;
  if (song.streamFallbacks?.length) return song.streamFallbacks[0];
  if (song.streamUrl) return song.streamUrl;
  return null;
}

function jsaNextFallbackUrl(song, currentUrl) {
  if (!song) return null;
  const allUrls = [song.downloadUrl, ...(song.streamFallbacks || [])].filter(Boolean);
  const currentIdx = allUrls.indexOf(currentUrl);
  if (currentIdx >= 0 && currentIdx < allUrls.length - 1) {
    const next = allUrls[currentIdx + 1];
    console.log(`[JSA] Stream fallback: ${currentUrl} → ${next}`);
    return next;
  }
  return null;
}

// ─────────────────────────────────────────────────────────────────
// 10. EXPORT
// ─────────────────────────────────────────────────────────────────
window.JSA = {
  fetch:                  jsaFetch,
  searchSongs:            jsaSearchSongs,
  searchArtists:          jsaSearchArtists,
  searchAlbums:           jsaSearchAlbums,
  searchPlaylists:        jsaSearchPlaylists,
  searchAll:              jsaSearchAll,
  getArtist:              jsaGetArtist,
  getAlbum:               jsaGetAlbum,
  getPlaylist:            jsaGetPlaylist,
  getSong:                jsaGetSong,
  getMoodPlaylist:        jsaGetMoodPlaylist,
  getSoundscapePlaylist:  jsaGetSoundscapePlaylist,
  getTrackRadio:          jsaGetTrackRadio,
  soundscapeConfigs:      SOUNDSCAPE_CONFIGS,
  getFeaturedPlaylists:   jsaGetFeaturedPlaylists,
  getLyrics:              jsaGetLyrics,
  bestStreamUrl:          jsaBestStreamUrl,
  nextFallbackUrl:        jsaNextFallbackUrl,
  decodeEntities:         jsaDecodeEntities,
  escapeHtml:             jsaEscapeHtml,
  get workingHost()       { return _jsaWorkingHost; },
};

// Global escapeHtml fallback for direct usage
if (typeof window.escapeHtml !== 'function') {
  window.escapeHtml = jsaEscapeHtml;
}

console.log('[JSA] JioSaavn API service ready. Primary host:', _jsaWorkingHost);

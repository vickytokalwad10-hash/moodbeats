const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const CryptoJS = require('crypto-js');

const PORT = process.env.PORT || 3000;

// ─────────────────────────────────────────────────────────────────
// Built-in Native JioSaavn Engine with 320kbps DES Decryption
// ─────────────────────────────────────────────────────────────────

function decryptMedia(enc) {
  if (!enc) return [];
  try {
    const key = CryptoJS.enc.Utf8.parse('38346591');
    const decrypted = CryptoJS.DES.decrypt(enc, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    const raw = decrypted.toString(CryptoJS.enc.Utf8);
    if (!raw) return [];
    return [
      { quality: '320kbps', url: raw.replace(/_96\.(mp4|mp3)|_160\.(mp4|mp3)/, '_320.mp4') },
      { quality: '160kbps', url: raw.replace(/_96\.(mp4|mp3)|_320\.(mp4|mp3)/, '_160.mp4') },
      { quality: '96kbps', url: raw }
    ];
  } catch (e) {
    return [];
  }
}

function formatJioSong(s) {
  if (!s) return null;
  const rawImg = s.image || '';
  const images = [
    { quality: '50x50', url: rawImg ? rawImg.replace(/150x150|500x500/, '50x50') : 'icon.png' },
    { quality: '150x150', url: rawImg ? rawImg.replace(/50x50|500x500/, '150x150') : 'icon.png' },
    { quality: '500x500', url: rawImg ? rawImg.replace(/50x50|150x150/, '500x500') : 'icon.png' }
  ];
  return {
    id: s.id,
    name: s.song || s.title || 'Unknown Track',
    title: s.song || s.title || 'Unknown Track',
    album: { id: s.albumid || '', name: s.album || '' },
    year: s.year || '',
    duration: s.duration || '0',
    label: s.label || '',
    primaryArtists: s.primary_artists || s.singers || s.music || 'Unknown Artist',
    artist: s.primary_artists || s.singers || s.music || 'Unknown Artist',
    image: images,
    downloadUrl: decryptMedia(s.encrypted_media_url)
  };
}

function formatJioPlaylist(p) {
  if (!p) return null;
  const rawImg = p.image || '';
  const images = [
    { quality: '50x50', url: rawImg ? rawImg.replace(/150x150|500x500/, '50x50') : 'icon.png' },
    { quality: '150x150', url: rawImg ? rawImg.replace(/50x50|500x500/, '150x150') : 'icon.png' },
    { quality: '500x500', url: rawImg ? rawImg.replace(/50x50|150x150/, '500x500') : 'icon.png' }
  ];
  return {
    id: p.listid || p.id,
    name: p.listname || p.title || 'Playlist',
    title: p.listname || p.title || 'Playlist',
    image: images,
    songCount: parseInt(p.count || p.songCount || 0),
    songs: []
  };
}

async function jioFetch(params) {
  const qs = new URLSearchParams({
    _format: 'json',
    _marker: '0',
    cc: 'in',
    ...params
  }).toString();
  const url = `https://www.jiosaavn.com/api.php?${qs}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Referer': 'https://www.jiosaavn.com/'
    }
  });
  if (!res.ok) throw new Error(`JioSaavn error: ${res.status}`);
  return await res.json();
}

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.bin': 'application/octet-stream',
  '.mp3': 'audio/mpeg',
  '.mp4': 'video/mp4'
};

const syncSessions = {};
const streamCache = new Map();

function getCachedStream(songId) {
  const cached = streamCache.get(songId);
  if (cached && Date.now() < cached.expiresAt) {
    return cached.data;
  }
  streamCache.delete(songId);
  return null;
}

function setCachedStream(songId, data, ttlSec = 300) {
  streamCache.set(songId, {
    data,
    expiresAt: Date.now() + ttlSec * 1000
  });
}

async function handleRequest(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Range');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Range, Content-Length, Accept-Ranges');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = urlObj.pathname;

  // Stream Resolution Endpoint (/api/stream/:songId or /api/stream?id=...)
  if (pathname.startsWith('/api/stream') && !pathname.includes('/audio')) {
    try {
      const parts = pathname.split('/').filter(Boolean);
      let songId = (parts.length >= 3 && parts[1] === 'stream') ? parts[2] : (urlObj.searchParams.get('id') || urlObj.searchParams.get('songId'));
      if (!songId) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Missing song id parameter' }));
        return;
      }

      // Check Cache
      const cached = getCachedStream(songId);
      if (cached) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('X-Cache', 'HIT');
        res.end(JSON.stringify({ status: 'SUCCESS', ...cached }));
        return;
      }

      // Fetch fresh metadata from JioSaavn
      const data = await jioFetch({ __call: 'song.getDetails', pids: songId });
      const rawSong = data[songId] || Object.values(data)[0];
      if (!rawSong || !rawSong.encrypted_media_url) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 'FAILED', error: 'Song or media URL not found' }));
        return;
      }

      const mediaUrls = decryptMedia(rawSong.encrypted_media_url);
      const stream320 = mediaUrls.find(m => m.quality === '320kbps')?.url || mediaUrls[0]?.url;
      const stream160 = mediaUrls.find(m => m.quality === '160kbps')?.url;
      const stream96 = mediaUrls.find(m => m.quality === '96kbps')?.url;

      const responsePayload = {
        songId,
        title: rawSong.song || rawSong.title || 'Unknown Track',
        artist: rawSong.primary_artists || rawSong.singers || 'Unknown Artist',
        streamUrl: stream320 || stream160 || stream96,
        quality: '320kbps',
        fallbacks: [stream160, stream96].filter(Boolean),
        expiresIn: 300
      };

      setCachedStream(songId, responsePayload, 300);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('X-Cache', 'MISS');
      res.end(JSON.stringify({ status: 'SUCCESS', ...responsePayload }));
    } catch(e) {
      console.error('[Stream API Error]:', e);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'FAILED', error: e.message || 'Stream resolution failed' }));
    }
    return;
  }

  // Direct Audio Proxying Endpoint (/api/stream/audio or /api/proxy/audio)
  if (pathname === '/api/stream/audio' || pathname === '/api/proxy/audio') {
    const audioUrl = urlObj.searchParams.get('url');
    if (!audioUrl || !audioUrl.startsWith('http')) {
      res.statusCode = 400;
      res.end('Missing or invalid audio URL');
      return;
    }

    try {
      const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://www.jiosaavn.com/'
      };
      if (req.headers.range) {
        headers['Range'] = req.headers.range;
      }

      const client = audioUrl.startsWith('https') ? https : http;
      client.get(audioUrl, { headers }, (upstreamRes) => {
        res.statusCode = upstreamRes.statusCode;
        res.setHeader('Content-Type', upstreamRes.headers['content-type'] || 'audio/mp4');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Accept-Ranges', 'bytes');
        if (upstreamRes.headers['content-range']) {
          res.setHeader('Content-Range', upstreamRes.headers['content-range']);
        }
        if (upstreamRes.headers['content-length']) {
          res.setHeader('Content-Length', upstreamRes.headers['content-length']);
        }
        upstreamRes.pipe(res);
      }).on('error', (err) => {
        res.statusCode = 502;
        res.end('Audio proxy upstream error');
      });
    } catch (e) {
      res.statusCode = 500;
      res.end(e.message);
    }
    return;
  }

  // 1. IP endpoint
  if (pathname === '/api/ip') {
    const os = require('os');
    const networkInterfaces = os.networkInterfaces();
    let localIp = '127.0.0.1';
    for (const name of Object.keys(networkInterfaces)) {
      for (const net of networkInterfaces[name]) {
        if (net.family === 'IPv4' && !net.internal) {
          localIp = net.address;
          break;
        }
      }
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ip: localIp, port: PORT }));
    return;
  }

  // 2. Sync GET
  if (req.method === 'GET' && pathname.startsWith('/api/sync')) {
    const session = urlObj.searchParams.get('session');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if (session && syncSessions[session]) {
      res.end(JSON.stringify(syncSessions[session]));
      delete syncSessions[session];
    } else {
      res.end(JSON.stringify({ active: false }));
    }
    return;
  }

  // 3. Sync POST
  if (req.method === 'POST' && pathname.startsWith('/api/sync')) {
    const session = urlObj.searchParams.get('session');
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        if (session && data.mood) {
          syncSessions[session] = { active: true, mood: data.mood, confidence: data.confidence || 80 };
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: true }));
        } else {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Missing mood data' }));
        }
      } catch (e) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
    return;
  }

  // 4. YouTube Search
  if (pathname.startsWith('/api/yt-search')) {
    const query = urlObj.searchParams.get('q') || '';
    if (!query) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify([]));
      return;
    }

    const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&sp=EgIQAQ%253D%253D`;
    https.get(ytUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    }, (ytRes) => {
      let html = '';
      ytRes.on('data', c => { html += c; });
      ytRes.on('end', () => {
        let results = [];
        const seen = new Set();
        try {
          const match = html.match(/ytInitialData\s*=\s*({.+?});/);
          if (match) {
            const json = JSON.parse(match[1]);
            const contents = json.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents || json.contents?.sectionListRenderer?.contents;
            if (contents) {
              for (const c of contents) {
                if (c.itemSectionRenderer?.contents) {
                  for (const item of c.itemSectionRenderer.contents) {
                    if (item.videoRenderer) {
                      const v = item.videoRenderer;
                      const videoId = v.videoId;
                      const title = v.title?.runs?.[0]?.text;
                      const channel = v.ownerText?.runs?.[0]?.text || 'YouTube';
                      if (videoId && title && !seen.has(videoId)) {
                        seen.add(videoId);
                        results.push({ title, artist: channel, videoId, genre: 'YouTube' });
                        if (results.length >= 8) break;
                      }
                    }
                  }
                }
              }
            }
          }
        } catch(e) {}

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(results));
      });
    }).on('error', () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify([]));
    });
    return;
  }

  // 5. Search Songs (/api/search/songs)
  if (pathname.startsWith('/api/search/songs')) {
    try {
      const q = urlObj.searchParams.get('query') || urlObj.searchParams.get('q') || '';
      const limit = parseInt(urlObj.searchParams.get('limit') || '20');
      const data = await jioFetch({ __call: 'search.getResults', q, p: 1, n: limit });
      const results = (data.results || []).map(formatJioSong).filter(Boolean);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'SUCCESS', data: { results, total: results.length } }));
    } catch(e) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // 6. Search Playlists (/api/search/playlists)
  if (pathname.startsWith('/api/search/playlists')) {
    try {
      const q = urlObj.searchParams.get('query') || urlObj.searchParams.get('q') || '';
      const limit = parseInt(urlObj.searchParams.get('limit') || '15');
      const data = await jioFetch({ __call: 'search.getPlaylistResults', q, p: 1, n: limit });
      const results = (data.results || []).map(formatJioPlaylist).filter(Boolean);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'SUCCESS', data: { results, total: results.length } }));
    } catch(e) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // 7. Playlist Details (/api/playlists)
  if (pathname.startsWith('/api/playlists')) {
    try {
      const listid = urlObj.searchParams.get('id') || urlObj.searchParams.get('listid');
      if (!listid) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Missing playlist id' }));
        return;
      }
      const data = await jioFetch({ __call: 'playlist.getDetails', listid });
      const songs = (data.songs || data.list || []).map(formatJioSong).filter(Boolean);
      const rawImg = data.image || '';
      const images = [
        { quality: '50x50', url: rawImg ? rawImg.replace(/150x150|500x500/, '50x50') : 'icon.png' },
        { quality: '150x150', url: rawImg ? rawImg.replace(/50x50|500x500/, '150x150') : 'icon.png' },
        { quality: '500x500', url: rawImg ? rawImg.replace(/50x50|150x150/, '500x500') : 'icon.png' }
      ];
      const result = {
        id: data.listid || data.id,
        name: data.listname || data.title || 'Playlist',
        title: data.listname || data.title || 'Playlist',
        image: images,
        songCount: songs.length,
        songs: songs
      };
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'SUCCESS', data: result }));
    } catch(e) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // 8. Song Details (/api/songs)
  if (pathname.startsWith('/api/songs')) {
    try {
      const pids = urlObj.searchParams.get('id') || urlObj.searchParams.get('pids');
      if (!pids) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Missing song id' }));
        return;
      }
      const data = await jioFetch({ __call: 'song.getDetails', pids });
      const rawSong = data[pids] || Object.values(data)[0];
      const song = formatJioSong(rawSong);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'SUCCESS', data: song ? [song] : [] }));
    } catch(e) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // 9. All-in-one Search (/api/search)
  if (pathname.startsWith('/api/search')) {
    try {
      const q = urlObj.searchParams.get('query') || urlObj.searchParams.get('q') || '';
      const data = await jioFetch({ __call: 'search.getResults', q, p: 1, n: 20 });
      const results = (data.results || []).map(formatJioSong).filter(Boolean);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'SUCCESS', data: { results, songs: { results } } }));
    } catch(e) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // Static File Serving
  let filePath = pathname;
  if (filePath === '/') filePath = '/index.html';
  const safePath = path.normalize(filePath).replace(/^(\.\.[\/\\])+/, '');
  const fullPath = path.join(__dirname, safePath);

  fs.stat(fullPath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(fullPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.setHeader('Access-Control-Allow-Origin', '*');

    const stream = fs.createReadStream(fullPath);
    stream.on('error', (streamErr) => {
      console.error(streamErr);
      res.statusCode = 500;
      res.end('Internal Server Error');
    });
    stream.pipe(res);
  });
}

const server = http.createServer(handleRequest);

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`MoodBeats server running on port ${PORT}`);
  });
}

module.exports = handleRequest;

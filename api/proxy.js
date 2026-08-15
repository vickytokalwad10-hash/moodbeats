const https = require('https');
const http = require('http');
const CryptoJS = require('crypto-js');

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

const syncSessions = {};

// ─────────────────────────────────────────────────────────────────
// Serverless Handler
// ─────────────────────────────────────────────────────────────────

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  try {
    const urlObj = new URL(req.url, `https://${req.headers.host || 'localhost'}`);
    const pathname = urlObj.pathname;

    // 1. IP endpoint
    if (pathname === '/api/ip' || pathname === '/api/ip/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ ip: req.headers['x-forwarded-for'] || '127.0.0.1', port: 443 }));
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

    // 4. YouTube Search Scraper
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
      const q = urlObj.searchParams.get('query') || urlObj.searchParams.get('q') || '';
      const limit = parseInt(urlObj.searchParams.get('limit') || '20');
      const data = await jioFetch({ __call: 'search.getResults', q, p: 1, n: limit });
      const results = (data.results || []).map(formatJioSong).filter(Boolean);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'SUCCESS', data: { results, total: results.length } }));
      return;
    }

    // 6. Search Playlists (/api/search/playlists)
    if (pathname.startsWith('/api/search/playlists')) {
      const q = urlObj.searchParams.get('query') || urlObj.searchParams.get('q') || '';
      const limit = parseInt(urlObj.searchParams.get('limit') || '15');
      const data = await jioFetch({ __call: 'search.getPlaylistResults', q, p: 1, n: limit });
      const results = (data.results || []).map(formatJioPlaylist).filter(Boolean);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'SUCCESS', data: { results, total: results.length } }));
      return;
    }

    // 7. Playlist Details (/api/playlists)
    if (pathname.startsWith('/api/playlists')) {
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
      return;
    }

    // 8. Song Details (/api/songs)
    if (pathname.startsWith('/api/songs')) {
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
      return;
    }

    // 9. All-in-one Search (/api/search)
    if (pathname.startsWith('/api/search')) {
      const q = urlObj.searchParams.get('query') || urlObj.searchParams.get('q') || '';
      const data = await jioFetch({ __call: 'search.getResults', q, p: 1, n: 20 });
      const results = (data.results || []).map(formatJioSong).filter(Boolean);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ status: 'SUCCESS', data: { results, songs: { results } } }));
      return;
    }

    // Default 404 for unknown API
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'API route not found' }));
  } catch (err) {
    console.error('API Error:', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal Server Error', message: err.message }));
  }
};

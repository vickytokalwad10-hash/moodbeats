const https = require('https');
const http = require('http');

const JSA_HOSTS = [
  'https://saavn.sumit.co',
  'https://jiosaavn-api-privatecvc2.vercel.app',
  'https://saavn.me',
  'https://jiosaavn.netlify.app',
];
let _jsaWorkingHost = JSA_HOSTS[0];

const syncSessions = {};

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

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

        if (results.length === 0) {
          const idRegex = /"videoId":"([a-zA-Z0-9_-]{11})"/g;
          const titleRegex = /"title":{"runs":\[{"text":"([^"]+)"}\],"accessibility"/g;
          const ids = [];
          const titles = [];
          let m;
          while ((m = idRegex.exec(html)) !== null) ids.push(m[1]);
          while ((m = titleRegex.exec(html)) !== null) titles.push(m[1]);
          for (let i = 0; i < Math.min(ids.length, titles.length, 8); i++) {
            if (!seen.has(ids[i])) {
              seen.add(ids[i]);
              results.push({ title: titles[i], artist: 'YouTube Upload', videoId: ids[i], genre: 'YouTube' });
            }
          }
        }

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

  // 5. JioSaavn Proxy (/api/search, /api/songs, /api/playlists, /api/lyrics, etc.)
  const apiPath = pathname + urlObj.search;
  const orderedHosts = [_jsaWorkingHost, ...JSA_HOSTS.filter(h => h !== _jsaWorkingHost)];

  function tryHost(hostIndex) {
    if (hostIndex >= orderedHosts.length) {
      res.statusCode = 502;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'All music API hosts unavailable' }));
      return;
    }

    const host = orderedHosts[hostIndex];
    const fullUrl = `${host}${apiPath}`;
    const mod = fullUrl.startsWith('https') ? https : http;

    const jsaReq = mod.get(fullUrl, {
      headers: { 'Accept': 'application/json', 'User-Agent': 'Mozilla/5.0 MoodBeats/1.7.0' },
      timeout: 8000
    }, (apiRes) => {
      if (apiRes.statusCode < 200 || apiRes.statusCode >= 300) {
        apiRes.resume();
        tryHost(hostIndex + 1);
        return;
      }
      _jsaWorkingHost = host;
      let data = '';
      apiRes.on('data', chunk => { data += chunk; });
      apiRes.on('end', () => {
        try {
          JSON.parse(data);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('X-JSA-Host', host);
          res.end(data);
        } catch (e) {
          tryHost(hostIndex + 1);
        }
      });
    });

    jsaReq.on('error', () => tryHost(hostIndex + 1));
    jsaReq.on('timeout', () => { jsaReq.destroy(); tryHost(hostIndex + 1); });
  }

  tryHost(0);
};

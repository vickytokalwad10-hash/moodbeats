const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.bin': 'application/octet-stream' // extremely important for face-api shard files!
};

// Store active sync states for phone-to-laptop camera pairing
const syncSessions = {};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // API Route for getting server network IP (to generate QR codes)
  if (req.url === '/api/ip') {
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify({ ip: localIp, port: PORT }));
    return;
  }

  // API Route for phone-to-laptop real-time sync GET
  if (req.method === 'GET' && req.url.startsWith('/api/sync')) {
    const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const session = urlObj.searchParams.get('session');
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (session && syncSessions[session]) {
      res.end(JSON.stringify(syncSessions[session]));
      // Clean up session state after it has been fetched/read by laptop
      delete syncSessions[session];
    } else {
      res.end(JSON.stringify({ active: false }));
    }
    return;
  }

  // API Route for phone-to-laptop real-time sync POST
  if (req.method === 'POST' && req.url.startsWith('/api/sync')) {
    const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const session = urlObj.searchParams.get('session');
    
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        if (session && data.mood) {
          syncSessions[session] = {
            active: true,
            mood: data.mood,
            confidence: data.confidence || 80
          };
          console.log(`Sync Session [${session}]: Mood updated to ${data.mood} (${data.confidence}%)`);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.end(JSON.stringify({ success: true }));
        } else {
          res.statusCode = 400;
          res.end('Missing session parameter or mood data');
        }
      } catch (e) {
        res.statusCode = 400;
        res.end('Invalid JSON payload');
      }
    });
    return;
  }

  // API Route for keyless YouTube video search
  if (req.method === 'GET' && req.url.startsWith('/api/yt-search')) {
    const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const query = urlObj.searchParams.get('q') || '';
    
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (!query) {
      res.statusCode = 200;
      res.end(JSON.stringify([]));
      return;
    }
    
    const https = require('https');
    const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&sp=EgIQAQ%253D%253D`;
    
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    };
    
    https.get(ytUrl, options, (ytRes) => {
      let html = '';
      ytRes.on('data', chunk => {
        html += chunk.toString();
      });
      ytRes.on('end', () => {
        let results = [];
        const seenIds = new Set();
        
        try {
          const matchJson = html.match(/ytInitialData\s*=\s*({.+?});/);
          if (matchJson) {
            const json = JSON.parse(matchJson[1]);
            let contents;
            
            if (json.contents && json.contents.twoColumnSearchResultsRenderer) {
              contents = json.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents;
            } else if (json.contents && json.contents.sectionListRenderer) {
              contents = json.contents.sectionListRenderer.contents;
            }
            
            if (contents) {
              let items = [];
              for (const c of contents) {
                if (c.itemSectionRenderer) {
                  items = c.itemSectionRenderer.contents;
                  break;
                }
              }
              
              for (const item of items) {
                if (item.videoRenderer) {
                  const v = item.videoRenderer;
                  const title = v.title.runs[0].text;
                  const videoId = v.videoId;
                  const channel = v.ownerText.runs[0].text;
                  
                  results.push({
                    title: title,
                    artist: channel,
                    videoId: videoId,
                    genre: 'YouTube'
                  });
                  seenIds.add(videoId);
                  if (results.length >= 8) break;
                }
              }
            }
          }
        } catch (e) {
          console.warn("ytInitialData parse failed, running regex fallback:", e);
        }
        
        if (results.length === 0) {
          const videoTitleRegex = /"title":{"runs":\[{"text":"([^"]+)"}\],"accessibility"/g;
          const idRegex = /"videoId":"([a-zA-Z0-9_-]{11})"/g;
          
          const ids = [];
          const titles = [];
          
          let idMatch;
          while ((idMatch = idRegex.exec(html)) !== null) {
            ids.push(idMatch[1]);
          }
          
          let titleMatch;
          while ((titleMatch = videoTitleRegex.exec(html)) !== null) {
            titles.push(titleMatch[1]);
          }
          
          for (let i = 0; i < Math.min(ids.length, titles.length, 8); i++) {
            if (!seenIds.has(ids[i])) {
              seenIds.add(ids[i]);
              results.push({
                title: titles[i],
                artist: 'YouTube Upload',
                videoId: ids[i],
                genre: 'YouTube'
              });
            }
          }
        }
        
        res.statusCode = 200;
        res.end(JSON.stringify(results));
      });
    }).on('error', (err) => {
      console.error("YouTube search request failed:", err);
      res.statusCode = 500;
      res.end(JSON.stringify([]));
    });
    return;
  }

  // Normalize URL path and resolve relative path
  let filePath = req.url === '/' ? '/index.html' : req.url;
  // Strip query parameters
  filePath = filePath.split('?')[0];
  
  const fullPath = path.join(__dirname, filePath);

  // Security check: ensure path is inside project directory
  if (!fullPath.startsWith(__dirname)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

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
    res.setHeader('Access-Control-Allow-Origin', '*'); // Enable CORS

    const stream = fs.createReadStream(fullPath);
    stream.on('error', (streamErr) => {
      console.error(streamErr);
      res.statusCode = 500;
      res.end('Internal Server Error');
    });
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  const os = require('os');
  const networkInterfaces = os.networkInterfaces();
  let localIp = 'localhost';
  for (const name of Object.keys(networkInterfaces)) {
    for (const net of networkInterfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        localIp = net.address;
        break;
      }
    }
  }
  console.log(`MoodBeats local development server running!`);
  console.log(`Local Access: http://localhost:${PORT}`);
  console.log(`Network Access (for phone camera): http://${localIp}:${PORT}`);
  console.log(`Press Ctrl+C to stop the server.`);
});

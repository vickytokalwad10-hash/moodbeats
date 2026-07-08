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

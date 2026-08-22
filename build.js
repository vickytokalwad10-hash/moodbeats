const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.join(__dirname, 'public'),
  path.join(__dirname, '.vercel', 'output', 'static')
];

for (const dir of targetDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const files = [
    'index.html',
    'styles.css',
    'app.js',
    'jiosaavnApi.js',
    'supabaseService.js',
    'face-api.min.js',
    'lucide.min.js',
    'icon.png',
    'icon-192.png',
    'manifest.json',
    'sw.js',
    'privacy.html',
    '404.html'
  ];

  for (const file of files) {
    const src = path.join(__dirname, file);
    const dest = path.join(dir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  }

  const modelsSrc = path.join(__dirname, 'models');
  const modelsDest = path.join(dir, 'models');
  if (fs.existsSync(modelsSrc)) {
    fs.cpSync(modelsSrc, modelsDest, { recursive: true });
  }
}

// Generate .vercel/output/config.json for Build Output API v3
const configDir = path.join(__dirname, '.vercel', 'output');
fs.writeFileSync(path.join(configDir, 'config.json'), JSON.stringify({
  version: 3,
  routes: [
    { src: '/api/(.*)', dest: 'https://moodbeats-gtai.onrender.com/api/$1' },
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/index.html' }
  ]
}, null, 2));

console.log('Build output successfully created for Vercel Output API v3.');

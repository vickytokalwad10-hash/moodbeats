const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const files = [
  'index.html',
  'styles.css',
  'app.js',
  'jiosaavnApi.js',
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
  const dest = path.join(publicDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} -> public/${file}`);
  }
}

// Copy models directory
const modelsSrc = path.join(__dirname, 'models');
const modelsDest = path.join(publicDir, 'models');
if (fs.existsSync(modelsSrc)) {
  fs.cpSync(modelsSrc, modelsDest, { recursive: true });
  console.log('Copied models/ -> public/models/');
}

console.log('Build complete: public directory populated for Vercel edge deployment.');

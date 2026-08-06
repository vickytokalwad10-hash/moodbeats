const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'android', 'app', 'build', 'outputs', 'apk', 'debug', 'app-debug.apk');

if (!fs.existsSync(src)) {
  console.error('Source APK not found at:', src);
  process.exit(1);
}

const oneDriveDir = 'C:\\Users\\hp\\OneDrive\\Documents\\moodbeats';
const brainDir = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\0686ab16-657f-4bb4-b840-bab237be4adf';

if (!fs.existsSync(oneDriveDir)) {
  fs.mkdirSync(oneDriveDir, { recursive: true });
}

if (!fs.existsSync(brainDir)) {
  fs.mkdirSync(brainDir, { recursive: true });
}

const gradleContent = fs.readFileSync(path.join(__dirname, 'android', 'app', 'build.gradle'), 'utf8');
const versionMatch = gradleContent.match(/versionName\s+"([^"]+)"/);
const versionName = versionMatch ? versionMatch[1] : '1.3.0';
console.log(`Detected App Version: v${versionName}`);

const destinations = [
  path.join(oneDriveDir, 'moodbeats.apk'),
  path.join(oneDriveDir, `moodbeats-v${versionName}.apk`),
  path.join(brainDir, 'moodbeats.apk'),
  path.join(brainDir, `moodbeats-v${versionName}.apk`),
  path.join(__dirname, 'moodbeats.apk'),
  path.join(__dirname, `moodbeats-v${versionName}.apk`)
];

for (const dst of destinations) {
  fs.copyFileSync(src, dst);
  const stat = fs.statSync(dst);
  console.log(`Copied to: ${dst} (${(stat.size / 1024 / 1024).toFixed(2)} MB, modified: ${stat.mtime.toLocaleTimeString()})`);
}

console.log('\n--- OneDrive directory contents: ---');
for (const file of fs.readdirSync(oneDriveDir)) {
  const fileStat = fs.statSync(path.join(oneDriveDir, file));
  console.log(`${file}: ${(fileStat.size / 1024 / 1024).toFixed(2)} MB, ${fileStat.mtime.toLocaleString()}`);
}

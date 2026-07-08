# MoodBeats 🎵

> Let your mood pick the music. A real-time face expression classifier and custom music playlist generator.

MoodBeats is a modern, responsive single-page web application that curates personalized music playlists based on your current emotional state. It leverages client-side convolutional neural networks (`face-api.js`) to classify facial expressions or processes text sentiment inputs, streaming official music videos directly inside the app.

---

## ✨ Features

- **Double-Channel Mood Classification:**
  - **Text Sentiment Parser:** Type how you feel, and the app uses keyword matching and sentiment weights to classify your mood.
  - **Webcam Expression Classifier:** Captures video stream frames and runs a Tiny Yolo face detector to identify dominant emotions (*Happy, Sad, Angry, Romantic, Relaxed, Energetic, Focused*).
- **Real-Time Phone Camera Sync (Remote Scanner):**
  - Don't have a webcam on your laptop? Scan the dynamic pairing QR code on your computer screen to connect your phone camera.
  - Scan your face from your phone, and the playlist starts playing on your laptop speakers in real-time.
- **Floating Spotify-Style Media Player:** Supports direct playback of tracks via overlay controls (Play, Pause, Skip, and Close).
- **TV/Video Drawer Mode:** Slide up the drawer to watch the official YouTube music video inside the application.
- **Searchable Archive:** Type search queries or select genre tags (*Pop, Rock, EDM, Bollywood, Lofi, etc.*) to search, filter, and stream any of the 90+ curated tracks.
- **History Log:** View a chronological timeline of your scanned moods and jump back to previous states.
- **Dual Themes:** Clean toggling between dark mode and light mode.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 Custom Variables (Glassmorphism aesthetics), Vanilla JavaScript, Lucide Icons.
- **Machine Learning:** `face-api.js` (Tiny Face Detector, Landmarks-68, Face Expression Net).
- **Backend:** Native Node.js HTTP Server.
- **APIs:** YouTube Iframe API.

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Setup Directory
Clone this repository or download the source files to a folder on your computer.

### 3. Start the Local Server
Run the local HTTP server to serve the static assets and model weights without CORS restrictions:
```bash
node server.js
```

### 4. Open in Browser
Open your browser and navigate to:
```
http://localhost:3000
```

To pair your mobile phone, connect both devices to the same Wi-Fi network and open the network IP address listed in your terminal output (or scan the pairing QR code on the desktop app!).

---

## 📂 Project Structure

```
moodbeats/
├── models/                  # Neural network weight binary files
├── .gitignore               # Ignored logs and temp files
├── app.js                   # Application state engine & playback controls
├── download_models.js       # Script to load neural network shards
├── index.html               # Main page layout & templates
├── README.md                # Project documentation
├── server.js                # Local HTTP Node.js server
└── styles.css               # UI Styling sheet
```

---
*Created as a college project showcase. Developed with ❤️ by the MoodBeats Team.*

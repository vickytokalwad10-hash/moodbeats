// MoodBeats Application Logic

// ==========================================
// 1. Playlists Dataset with Direct Video IDs
// ==========================================
const PLAYLISTS = {
  Happy: [
    { title: "Happy", artist: "Pharrell Williams", genre: "Pop", videoId: "y6Sxv-sUYtM" },
    { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", genre: "Pop / Dance", videoId: "ru0K8uYEZWw" },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", genre: "Funk / Pop", videoId: "OPf0YbXqDm0" },
    { title: "Don't Stop Me Now", artist: "Queen", genre: "Rock", videoId: "HgzGwKwLmgM" },
    { title: "September", artist: "Earth, Wind & Fire", genre: "Disco / Funk", videoId: "Gs069dNDIYk" },
    { title: "Walking on Sunshine", artist: "Katrina and the Waves", genre: "Pop Rock", videoId: "iPUmE-tRJ5U" },
    { title: "Feel Good Inc.", artist: "Gorillaz", genre: "Alt Rock / Hip-hop", videoId: "HyHNuVaZJ-k" },
    { title: "Good Vibrations", artist: "The Beach Boys", genre: "60s Pop", videoId: "Eab_beh07HU" },
    { title: "Dynamite", artist: "BTS", genre: "K-Pop", videoId: "gdZLi9oWNZg" },
    { title: "Lovely Day", artist: "Bill Withers", genre: "Soul / R&B", videoId: "bEeaS6fuUoA" },
    { title: "Dil Chahta Hai", artist: "Shankar-Ehsaan-Loy", genre: "Bollywood Pop", videoId: "p092kMhCaw8" },
    { title: "Kar Gayi Chull", artist: "Badshah & Fazilpuria", genre: "Bollywood Dance", videoId: "VdGGK13LhQc" },
    { title: "Subah Subah", artist: "Arijit Singh", genre: "Bollywood Pop", videoId: "x_wHkF618Xk" }
  ],
  Sad: [
    { title: "Someone Like You", artist: "Adele", genre: "Soul / Pop", videoId: "hLQl3WQQoQ0" },
    { title: "Fix You", artist: "Coldplay", genre: "Alternative", videoId: "k4V3Mo61fJM" },
    { title: "Stay With Me", artist: "Sam Smith", genre: "Pop / Soul", videoId: "pB-5XG-DbAA" },
    { title: "Yesterday", artist: "The Beatles", genre: "Acoustic Rock", videoId: "wXTJBr9mc8A" },
    { title: "Skinny Love", artist: "Bon Iver", genre: "Indie Folk", videoId: "ssdgFoHLhVY" },
    { title: "The Night We Met", artist: "Lord Huron", genre: "Indie / Folk", videoId: "wGF7Pqy78SU" },
    { title: "Say Something", artist: "A Great Big World & Christina Aguilera", genre: "Pop Ballad", videoId: "-2U0Ivkn2Ds" },
    { title: "All I Want", artist: "Kodaline", genre: "Indie Rock", videoId: "mtf7hC17IBM" },
    { title: "Liability", artist: "Lorde", genre: "Art Pop", videoId: "BtvJaNsSdg0" },
    { title: "Tears in Heaven", artist: "Eric Clapton", genre: "Soft Rock", videoId: "JxPj3GAYYZ0" },
    { title: "Channa Mereya", artist: "Arijit Singh", genre: "Bollywood Sad", videoId: "bzSTpdcs-gQ" },
    { title: "Agar Tum Saath Ho", artist: "Alka Yagnik & Arijit Singh", genre: "Bollywood Sad", videoId: "sK7riqg2mr4" },
    { title: "Kabira", artist: "Tochi Raina & Rekha Bhardwaj", genre: "Bollywood Folk", videoId: "jHTjV28pY5Y" }
  ],
  Energetic: [
    { title: "Till I Collapse", artist: "Eminem", genre: "Hip-Hop", videoId: "gY9C0nlgHMM" },
    { title: "Levels", artist: "Avicii", genre: "EDM / House", videoId: "_ovdm2yG4A4" },
    { title: "Blinding Lights", artist: "The Weeknd", genre: "Synth-pop", videoId: "4NRXx6U8ABQ" },
    { title: "Harder, Better, Faster, Stronger", artist: "Daft Punk", genre: "Electronic", videoId: "gAjR4_CbPpQ" },
    { title: "Titanium", artist: "David Guetta ft. Sia", genre: "Dance Pop", videoId: "JRfuAukYTKg" },
    { title: "Eye of the Tiger", artist: "Survivor", genre: "Hard Rock", videoId: "btPJPFnesV4" },
    { title: "Power", artist: "Kanye West", genre: "Hip-Hop", videoId: "L53gjP-qGE4" },
    { title: "Midnight City", artist: "M83", genre: "Indie Pop", videoId: "dX3kSGcoD4k" },
    { title: "Don't Start Now", artist: "Dua Lipa", genre: "Nu-Disco", videoId: "oygrmJFKYZY" },
    { title: "Sandstorm", artist: "Darude", genre: "Trance", videoId: "y6120QOlsfU" },
    { title: "Jai Ho", artist: "A.R. Rahman", genre: "Bollywood Dance", videoId: "kYn7F4-2eEo" },
    { title: "Malhari", artist: "Vishal Dadlani", genre: "Bollywood Energetic", videoId: "o_wHkF618Xk" },
    { title: "Zinda", artist: "Siddharth Mahadevan", genre: "Bollywood Rock", videoId: "K425_tI_kac" }
  ],
  Relaxed: [
    { title: "Weightless", artist: "Marconi Union", genre: "Ambient", videoId: "UfcAVejsrU4" },
    { title: "Strawberry Swing", artist: "Coldplay", genre: "Indie Pop", videoId: "h3pJZSTQqIg" },
    { title: "Sunrise", artist: "Norah Jones", genre: "Jazz / Vocal", videoId: "fd02pGJxmeE" },
    { title: "Lofi Study Beats", artist: "Lofi Girl", genre: "Lofi Hip Hop", videoId: "jfKfPfyJRdk" },
    { title: "Chamber of Reflection", artist: "Mac DeMarco", genre: "Indie Pop", videoId: "NY8IS0ss-LI" },
    { title: "Teardrop", artist: "Massive Attack", genre: "Trip-Hop", videoId: "u7K72X4em_c" },
    { title: "Re:Stacks", artist: "Bon Iver", genre: "Indie Folk", videoId: "aA2K40n2088" },
    { title: "Comptine d'un autre été", artist: "Yann Tiersen", genre: "Modern Classical", videoId: "W5_xFH5w1i4" },
    { title: "On Melancholy Hill", artist: "Gorillaz", genre: "Synth-pop", videoId: "04mfKvgEGGQ" },
    { title: "We Find Each Other in the Dark", artist: "Novo Amor", genre: "Indie Ambient", videoId: "N8F1LzD0D-k" },
    { title: "Kun Faya Kun", artist: "A.R. Rahman & Javed Ali & Mohit Chauhan", genre: "Sufi Devotional", videoId: "T94PHkuyd8c" },
    { title: "Iktara", artist: "Amit Trivedi & Kavita Seth", genre: "Bollywood Sufi", videoId: "p092kMhCaw8" },
    { title: "Tum Se Hi", artist: "Mohit Chauhan", genre: "Bollywood Relaxed", videoId: "mt9xg0mmt28" }
  ],
  Angry: [
    { title: "In the End", artist: "Linkin Park", genre: "Nu-Metal", videoId: "eVTXPUF4Oz4" },
    { title: "Chop Suey!", artist: "System of a Down", genre: "Alt Metal", videoId: "CSvFp5OxsGQ" },
    { title: "Killing In The Name", artist: "Rage Against The Machine", genre: "Rap Metal", videoId: "bWXazVhlyxQ" },
    { title: "Enter Sandman", artist: "Metallica", genre: "Heavy Metal", videoId: "CD-E-LDc384" },
    { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Grunge", videoId: "hTWKbfoikeg" },
    { title: "Du Hast", artist: "Rammstein", genre: "Industrial Metal", videoId: "W3q8Od5qJio" },
    { title: "Break Stuff", artist: "Limp Bizkit", genre: "Nu-Metal", videoId: "ZpUYjpKg9KY" },
    { title: "Psychosocial", artist: "Slipknot", genre: "Nu-Metal", videoId: "5abamROZYoo" },
    { title: "Down with the Sickness", artist: "Disturbed", genre: "Heavy Metal", videoId: "09LTT0IGYBi" },
    { title: "Bulls on Parade", artist: "Rage Against The Machine", genre: "Rap Rock", videoId: "3L4YrGaR8JY" },
    { title: "Bhaag D.K. Bose", artist: "Ram Sampath", genre: "Bollywood Punk Rock", videoId: "u8m81LdFkE4" },
    { title: "Sadda Haq", artist: "Mohit Chauhan", genre: "Bollywood Rock", videoId: "p9DQINKZxWE" },
    { title: "Aarambh Hai Prachand", artist: "Piyush Mishra", genre: "Bollywood Folk Rock", videoId: "rZ3jYJio-q8" }
  ],
  Romantic: [
    { title: "Perfect", artist: "Ed Sheeran", genre: "Pop Ballad", videoId: "2Vv-BfVoq4g" },
    { title: "All of Me", artist: "John Legend", genre: "Soul / R&B", videoId: "450p7gOxZqI" },
    { title: "At Last", artist: "Etta James", genre: "Classic Blues", videoId: "S-cbOl96RFM" },
    { title: "Thinking Out Loud", artist: "Ed Sheeran", genre: "Pop / Soul", videoId: "lp-EO5I60KA" },
    { title: "Make You Feel My Love", artist: "Adele", genre: "Vocal Pop", videoId: "08ucGL9GrW8" },
    { title: "Can't Help Falling in Love", artist: "Elvis Presley", genre: "50s Pop", videoId: "vGJTaPGLbN4" },
    { title: "L-O-V-E", artist: "Natalie Cole", genre: "Jazz Vocal", videoId: "JErVPQutAHg" },
    { title: "Die With A Smile", artist: "Bruno Mars & Lady Gaga", genre: "Pop / Soul", videoId: "kPa7bsKwL-c" },
    { title: "Say You Won't Let Go", artist: "James Arthur", genre: "Pop", videoId: "0yW7w8F2TVA" },
    { title: "My Girl", artist: "The Temptations", genre: "Motown / Soul", videoId: "y4yNSJHRLh0" },
    { title: "Tum Hi Ho", artist: "Arijit Singh", genre: "Bollywood Romantic", videoId: "H2fA_eMRjEU" },
    { title: "Kesariya", artist: "Arijit Singh", genre: "Bollywood Romantic", videoId: "h7KstC9G-4M" },
    { title: "Pehla Nasha", artist: "Udit Narayan & Sadhana Sargam", genre: "Bollywood Classic", videoId: "wLgV89-mH54" }
  ],
  "Focused/Stressed": [
    { title: "Cornfield Chase", artist: "Hans Zimmer", genre: "Soundtrack", videoId: "1FHDDgZ5Y8w" },
    { title: "Gymnopédie No. 1", artist: "Erik Satie", genre: "Classical", videoId: "S-Xm7tA07XS" },
    { title: "Experience", artist: "Ludovico Einaudi", genre: "Neoclassical", videoId: "hN_q-_nGv4U" },
    { title: "Time", artist: "Hans Zimmer", genre: "Cinematic", videoId: "RxabLA7yFNI" },
    { title: "Intro", artist: "The xx", genre: "Indie Pop", videoId: "3gxNW2Ulpwk" },
    { title: "Clair de Lune", artist: "Claude Debussy", genre: "Impressionist", videoId: "WNcsANYaVwY" },
    { title: "Nuvole Bianche", artist: "Ludovico Einaudi", genre: "Neoclassical", videoId: "kC13P8nEtS8" },
    { title: "Departure", artist: "Max Richter", genre: "Modern Classical", videoId: "9s4K3W4Cug8" },
    { title: "Stay", artist: "Hans Zimmer", genre: "Soundtrack", videoId: "uq9n9u8Hlxs" },
    { title: "River Flows in You", artist: "Yiruma", genre: "Piano Instrumental", videoId: "7maJOI3QMu0" },
    { title: "Yun Hi Chala Chal Rahi", artist: "Udit Narayan & Hariharan", genre: "Bollywood Inspirational", videoId: "aW0V2bH-iN0" },
    { title: "Khwaja Mere Khwaja", artist: "A.R. Rahman", genre: "Sufi Instrumental", videoId: "r5Gcx_sS_f4" },
    { title: "Zindagi Do Pal Ki", artist: "K.K.", genre: "Bollywood Melodic", videoId: "L0w55WJ5o_Q" }
  ]
};

const MOOD_METADATA = {
  Happy: { emoji: "😊", desc: "You are glowing with positive energy! Here is a lively, upbeat selection to match your happy state.", bg: "happy" },
  Sad: { emoji: "😢", desc: "It's okay to feel down. Let these soft, melancholy melodies accompany you through reflection.", bg: "sad" },
  Energetic: { emoji: "⚡", desc: "High octane mode! Pump up your adrenaline with these high-tempo tracks.", bg: "energetic" },
  Relaxed: { emoji: "🍃", desc: "Chill vibes only. Calm your nervous system with these peaceful lofi and ambient sounds.", bg: "relaxed" },
  Angry: { emoji: "🔥", desc: "Frustrated or fired up? Channel that intense energy into these heavy, cathartic beats.", bg: "angry" },
  Romantic: { emoji: "💖", desc: "Feelings of warmth and connection. Here is a beautiful selection of soulful love tracks.", bg: "romantic" },
  "Focused/Stressed": { emoji: "🧠", desc: "Need to block out distractions or unwind after stress? Lock in with these soothing instrumentals.", bg: "focused" }
};

// ==========================================
// 2. Application State
// ==========================================
const state = {
  currentView: 'view-landing',
  history: [], // Formatted as { mood: 'Happy', emoji: '😊', timestamp: '19:04', confidence: '87%' }
  isLightMode: false,
  faceModelsLoaded: false,
  webcamStream: null,
  currentGeneratedPlaylist: [],
  selectedMood: null,

  // Player details
  currentPlayerSong: null,
  currentPlayerPlaylist: [],
  currentPlayerIndex: 0,
  isPlaying: false,
  isVideoOpen: false
};

// ==========================================
// 3. Keyword / Sentiment Logic (Text Analysis)
// ==========================================
const KEYWORDS = {
  Happy: ['happy', 'excited', 'glad', 'joy', 'great', 'awesome', 'positive', 'celebrate', 'wonderful', 'sunny', 'good', 'smile', 'laugh', 'fun', 'amazing', 'roadtrip'],
  Sad: ['sad', 'cry', 'down', 'lonely', 'depressed', 'blue', 'heartbroken', 'tear', 'grief', 'hurts', 'pain', 'unhappy', 'alone', 'crying'],
  Energetic: ['energetic', 'hyper', 'pump', 'gym', 'workout', 'dance', 'run', 'party', 'hype', 'active', 'power', 'strong', 'speed', 'fast', 'motivation'],
  Relaxed: ['relaxed', 'calm', 'chill', 'peace', 'sleep', 'rest', 'unwind', 'quiet', 'lazy', 'cozy', 'soft', 'nature', 'serene', 'smooth'],
  Angry: ['angry', 'mad', 'hate', 'furious', 'annoyed', 'pissed', 'rage', 'frustrated', 'kill', 'scream', 'fight', 'trash', 'irritated'],
  Romantic: ['love', 'romantic', 'sweet', 'date', 'kiss', 'heart', 'crush', 'darling', 'beautiful', 'forever', 'together', 'hug', 'passion'],
  "Focused/Stressed": ['focus', 'stress', 'exam', 'study', 'work', 'busy', 'tired', 'overwhelm', 'anxiety', 'exam', 'prep', 'deadline', 'lock', 'concentrate', 'exhausted']
};

function analyzeTextMood(text) {
  const cleanText = text.toLowerCase();
  let moodScores = {};
  
  for (const mood in KEYWORDS) {
    moodScores[mood] = 0;
  }
  
  let matchedAny = false;
  for (const [mood, list] of Object.entries(KEYWORDS)) {
    list.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b|${word}`, 'gi');
      const matches = cleanText.match(regex);
      if (matches) {
        moodScores[mood] += matches.length * 2;
        matchedAny = true;
      }
    });
  }
  
  if (!matchedAny) {
    const positiveWords = ['good', 'fine', 'ok', 'nice', 'cool', 'yes', 'perfect'];
    const negativeWords = ['bad', 'worst', 'no', 'hard', 'stuck', 'meh', 'difficult'];
    
    let posCount = 0;
    let negCount = 0;
    
    positiveWords.forEach(w => { if(cleanText.includes(w)) posCount++ });
    negativeWords.forEach(w => { if(cleanText.includes(w)) negCount++ });
    
    if (posCount > negCount) {
      return { mood: 'Happy', confidence: 60 };
    } else if (negCount > posCount) {
      return { mood: 'Sad', confidence: 60 };
    } else {
      return { mood: 'Relaxed', confidence: 50 };
    }
  }
  
  let bestMood = 'Relaxed';
  let maxScore = -1;
  
  for (const [mood, score] of Object.entries(moodScores)) {
    if (score > maxScore) {
      maxScore = score;
      bestMood = mood;
    }
  }
  
  let totalScore = Object.values(moodScores).reduce((a, b) => a + b, 0);
  let confidence = Math.round((maxScore / totalScore) * 100);
  confidence = Math.max(55, Math.min(98, confidence));
  
  return { mood: bestMood, confidence };
}

// ==========================================
// 4. Mascot Interactivity Helper
// ==========================================
function updateMascotExpression(text) {
  const mascotFace = document.getElementById('mascot-expression');
  const mascotMouth = mascotFace.querySelector('.mascot-mouth');
  const bubble = document.getElementById('mascot-bubble-text');
  
  if (!text || text.trim() === '') {
    mascotMouth.className = 'mascot-mouth neutral';
    bubble.innerText = "Tell me everything, I'm listening!";
    return;
  }
  
  const analysis = analyzeTextMood(text);
  
  switch(analysis.mood) {
    case 'Happy':
      mascotMouth.className = 'mascot-mouth happy';
      bubble.innerText = "Ooh, that sounds exciting! Tell me more!";
      break;
    case 'Sad':
      mascotMouth.className = 'mascot-mouth sad';
      bubble.innerText = "Aww... that sounds really tough. Let it all out.";
      break;
    case 'Energetic':
      mascotMouth.className = 'mascot-mouth energetic';
      bubble.innerText = "Wow! You've got so much energy. Let's pump it up!";
      break;
    case 'Relaxed':
      mascotMouth.className = 'mascot-mouth relaxed';
      bubble.innerText = "Ah, peaceful vibes. Just chilling, right?";
      break;
    case 'Angry':
      mascotMouth.className = 'mascot-mouth angry';
      bubble.innerText = "Whoa, that makes me mad too! Vent your frustrations!";
      break;
    case 'Romantic':
      mascotMouth.className = 'mascot-mouth romantic';
      bubble.innerText = "Aww, romance is in the air! How lovely!";
      break;
    case 'Focused/Stressed':
      mascotMouth.className = 'mascot-mouth relaxed';
      bubble.innerText = "Deep breaths. Take it slow, you can do this!";
      break;
    default:
      mascotMouth.className = 'mascot-mouth neutral';
      bubble.innerText = "Tell me more, I'm analyzing your vibes...";
  }
}

// ==========================================
// 5. Navigation & View Routing
// ==========================================
function navigateTo(viewId) {
  // Clear any existing pairing sync polling interval
  if (state.syncPollInterval) {
    clearInterval(state.syncPollInterval);
    state.syncPollInterval = null;
  }

  const activeView = document.querySelector('.view.active');
  if (activeView) {
    activeView.classList.remove('active');
    activeView.style.display = 'none';
  }
  
  if (activeView && activeView.id === 'view-webcam') {
    stopWebcam();
  }
  if (activeView && activeView.id === 'view-phone-controller') {
    stopPhoneWebcam();
  }
  
  const targetView = document.getElementById(viewId);
  targetView.style.display = 'flex';
  void targetView.offsetHeight;
  targetView.classList.add('active');
  
  state.currentView = viewId;
  
  const navItems = document.querySelectorAll('.bottom-nav .nav-item');
  navItems.forEach(item => {
    if (item.getAttribute('data-target') === viewId) {
      item.classList.add('active');
    } else {
      if (item.id === 'nav-home' && ['view-landing', 'view-text-input', 'view-webcam', 'view-results'].includes(viewId)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }
  });
  
  if (viewId === 'view-text-input') {
    document.getElementById('mood-text-area').value = '';
    updateMascotExpression('');
  } else if (viewId === 'view-webcam') {
    startWebcamFlow();
    
    // Laptop starts polling server sync endpoint to listen for phone scanner uploads
    if (!state.isPhoneController && state.sessionId) {
      console.log(`Laptop polling pairing session: ${state.sessionId}`);
      state.syncPollInterval = setInterval(async () => {
        try {
          const response = await fetch(`/api/sync?session=${state.sessionId}`);
          if (response.ok) {
            const data = await response.json();
            if (data.active) {
              clearInterval(state.syncPollInterval);
              state.syncPollInterval = null;
              
              // Automatically switch laptop view to results
              navigateTo('view-results');
              
              const loader = document.getElementById('results-loader');
              const panel = document.getElementById('results-panel');
              loader.style.display = 'flex';
              panel.style.display = 'none';
              
              setTimeout(() => {
                renderResults(data.mood, data.confidence);
              }, 1200);
            }
          }
        } catch (error) {
          console.error("Sync polling error:", error);
        }
      }, 1200);
    }
  } else if (viewId === 'view-history') {
    populateHistoryLarge();
  } else if (viewId === 'view-search') {
    initSearchView();
  } else if (viewId === 'view-phone-controller') {
    startPhoneWebcam();
  }
  
  lucide.createIcons();
}

// ==========================================
// 6. Webcam & face-api.js Integration
// ==========================================
const MODEL_URL_LOCAL = './models';
const MODEL_URL_CDN = 'https://justadudewhohacks.github.io/face-api.js/models/';

async function loadFaceModels() {
  if (state.faceModelsLoaded) return true;
  
  const statusBox = document.getElementById('weights-status-box');
  const progressFill = document.getElementById('weights-progress-fill');
  const progressText = document.getElementById('weights-progress-text');
  
  statusBox.style.display = 'flex';
  
  const sourceSelect = document.getElementById('settings-model-source');
  const selectedSource = sourceSelect ? sourceSelect.value : 'local';
  const modelUrl = selectedSource === 'local' ? MODEL_URL_LOCAL : MODEL_URL_CDN;
  
  console.log(`Loading weights from source: ${selectedSource} URL: ${modelUrl}`);
  
  try {
    progressText.innerText = "Loading Face Detector (30%)...";
    progressFill.style.width = "30%";
    await faceapi.nets.tinyFaceDetector.loadFromUri(modelUrl);
    
    progressText.innerText = "Loading Landmark Predictor (60%)...";
    progressFill.style.width = "60%";
    await faceapi.nets.faceLandmark68Net.loadFromUri(modelUrl);
    
    progressText.innerText = "Loading Emotion Classifier (100%)...";
    progressFill.style.width = "100%";
    await faceapi.nets.faceExpressionNet.loadFromUri(modelUrl);
    
    state.faceModelsLoaded = true;
    progressText.innerText = "Expression engines locked & loaded!";
    setTimeout(() => {
      statusBox.style.display = 'none';
    }, 1500);
    return true;
  } catch (error) {
    console.error("Failed to load models:", error);
    if (selectedSource === 'local') {
      console.warn("Local weights load failed, trying CDN fallback...");
      progressText.innerText = "Local models failed. Attempting CDN failover...";
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL_CDN);
        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL_CDN);
        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL_CDN);
        state.faceModelsLoaded = true;
        progressText.innerText = "CDN Model Weights Loaded Successfully!";
        setTimeout(() => {
          statusBox.style.display = 'none';
        }, 1500);
        return true;
      } catch (cdnError) {
        console.error("CDN weights also failed to load:", cdnError);
        progressText.innerText = "Critical: Face detection models failed to load.";
        return false;
      }
    } else {
      progressText.innerText = "Critical: Face detection models failed to load.";
      return false;
    }
  }
}

async function loadCameraDevices() {
  const select = document.getElementById('camera-device-select');
  if (!select) return;
  
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    
    select.innerHTML = '<option value="">Default Front Camera</option>';
    
    videoDevices.forEach((device, index) => {
      const option = document.createElement('option');
      option.value = device.deviceId;
      option.text = device.label || `Camera ${index + 1}`;
      select.appendChild(option);
    });
    
    if (state.selectedCameraId) {
      select.value = state.selectedCameraId;
    }
  } catch (error) {
    console.error("Error enumerating camera inputs:", error);
  }
}

async function startWebcamFlow() {
  const loadingOverlay = document.getElementById('camera-loading-overlay');
  const fallbackOverlay = document.getElementById('camera-fallback-overlay');
  const captureBtn = document.getElementById('btn-capture-scan');
  const video = document.getElementById('webcam-video');
  const select = document.getElementById('camera-device-select');
  
  loadingOverlay.classList.add('active');
  fallbackOverlay.classList.remove('active');
  captureBtn.disabled = true;
  
  const success = await loadFaceModels();
  if (!success) {
    loadingOverlay.classList.remove('active');
    fallbackOverlay.classList.add('active');
    document.getElementById('weights-status-box').style.display = 'flex';
    document.getElementById('weights-progress-text').innerText = "Engine Error. Simulation mode recommended.";
    return;
  }
  
  const simulateSwitch = document.getElementById('settings-simulate-cam');
  if (simulateSwitch && simulateSwitch.checked) {
    setupSimulationOverlay();
    return;
  }

  // Load camera source list
  await loadCameraDevices();

  const selectedDeviceId = select ? select.value : '';
  const videoConstraints = {
    width: { ideal: 640 },
    height: { ideal: 480 }
  };
  
  if (selectedDeviceId) {
    videoConstraints.deviceId = { exact: selectedDeviceId };
  } else {
    videoConstraints.facingMode = "user";
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: videoConstraints
    });
    
    // Check if labels are now available (first permissions unlock) and reload device names
    const tracks = stream.getVideoTracks();
    if (tracks.length > 0 && tracks[0].label) {
      await loadCameraDevices();
    }
    
    state.webcamStream = stream;
    video.srcObject = stream;
    
    video.onloadedmetadata = () => {
      loadingOverlay.classList.remove('active');
      captureBtn.disabled = false;
    };
  } catch (error) {
    console.error("Camera access error:", error);
    loadingOverlay.classList.remove('active');
    fallbackOverlay.classList.add('active');
  }
}

function setupSimulationOverlay() {
  const loadingOverlay = document.getElementById('camera-loading-overlay');
  const captureBtn = document.getElementById('btn-capture-scan');
  
  loadingOverlay.classList.remove('active');
  captureBtn.disabled = false;
  
  const video = document.getElementById('webcam-video');
  video.srcObject = null;
}

function stopWebcam() {
  const video = document.getElementById('webcam-video');
  if (state.webcamStream) {
    state.webcamStream.getTracks().forEach(track => track.stop());
    state.webcamStream = null;
  }
  if (video) {
    video.srcObject = null;
  }
  
  const scanBar = document.getElementById('scan-bar');
  if (scanBar) scanBar.classList.remove('scanning');
  
  const captureBtn = document.getElementById('btn-capture-scan');
  if (captureBtn) {
    captureBtn.disabled = false;
    captureBtn.querySelector('span').innerText = 'Start Scan';
  }
}

async function triggerWebcamDetection() {
  const captureBtn = document.getElementById('btn-capture-scan');
  const scanBar = document.getElementById('scan-bar');
  const video = document.getElementById('webcam-video');
  const overlayCanvas = document.getElementById('webcam-overlay');
  
  if (!captureBtn || !scanBar || !video || !overlayCanvas) return;
  
  captureBtn.disabled = true;
  captureBtn.querySelector('span').innerText = 'Scanning...';
  scanBar.classList.add('scanning');
  
  const simulateSwitch = document.getElementById('settings-simulate-cam');
  if ((simulateSwitch && simulateSwitch.checked) || !state.webcamStream) {
    await new Promise(resolve => setTimeout(resolve, 1800));
    runSimulatedScanResult();
    return;
  }
  
  const overlayCtx = overlayCanvas.getContext('2d');
  let bestDetection = null;
  const scanStartTime = Date.now();
  const scanDuration = 1800; // 1.8 seconds scan sweep
  
  const displaySize = { width: video.offsetWidth, height: video.offsetHeight };
  faceapi.matchDimensions(overlayCanvas, displaySize);
  
  const detectLoop = async () => {
    if (Date.now() - scanStartTime > scanDuration || !state.webcamStream) {
      stopWebcam();
      overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
      
      if (bestDetection) {
        const expressions = bestDetection.expressions;
        let dominantExpression = 'neutral';
        let maxProbability = -1;
        
        for (const [expr, val] of Object.entries(expressions)) {
          if (val > maxProbability) {
            maxProbability = val;
            dominantExpression = expr;
          }
        }
        
        let mappedMood = 'Relaxed';
        let confidenceVal = Math.round(maxProbability * 100);
        
        switch (dominantExpression) {
          case 'happy': mappedMood = 'Happy'; break;
          case 'sad': mappedMood = 'Sad'; break;
          case 'angry': mappedMood = 'Angry'; break;
          case 'surprised': mappedMood = 'Energetic'; break;
          case 'fearful':
          case 'disgusted': mappedMood = 'Focused/Stressed'; break;
          case 'neutral':
          default: mappedMood = 'Relaxed';
        }
        
        navigateTo('view-results');
        renderResults(mappedMood, confidenceVal);
      } else {
        navigateTo('view-results');
        runSimulatedScanResult("No face detected. Analyzing ambient room vibes...");
      }
      return;
    }
    
    try {
      const detection = await faceapi.detectSingleFace(
        video,
        new faceapi.TinyFaceDetectorOptions({ inputSize: 224, scoreThreshold: 0.15 })
      ).withFaceLandmarks().withFaceExpressions();
      
      if (detection) {
        bestDetection = detection;
        
        overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
        const resized = faceapi.resizeResults(detection, displaySize);
        
        faceapi.draw.drawDetections(overlayCanvas, resized);
        faceapi.draw.drawFaceLandmarks(overlayCanvas, resized);
      }
    } catch (err) {
      console.error("Frame detection error:", err);
    }
    
    if (state.webcamStream) {
      requestAnimationFrame(detectLoop);
    }
  };
  
  requestAnimationFrame(detectLoop);
}

function runSimulatedScanResult(loaderSubtext) {
  if (loaderSubtext) {
    document.getElementById('analysis-subtext').innerText = loaderSubtext;
  }
  
  const moods = Object.keys(PLAYLISTS);
  const randomMood = moods[Math.floor(Math.random() * moods.length)];
  const randomConfidence = Math.floor(Math.random() * 25) + 70;
  
  setTimeout(() => {
    renderResults(randomMood, randomConfidence);
    document.getElementById('analysis-subtext').innerText = "Mapping expressions to acoustic signatures...";
  }, 1000);
}

// ==========================================
// 7. Results & Playlist Rendering
// ==========================================
function renderResults(mood, confidence) {
  state.selectedMood = mood;
  
  const body = document.body;
  body.setAttribute('data-mood', MOOD_METADATA[mood].bg);
  
  const emoji = MOOD_METADATA[mood].emoji;
  const description = MOOD_METADATA[mood].desc;
  
  document.getElementById('result-mood-emoji').innerText = emoji;
  document.getElementById('result-mood-name').innerText = mood;
  document.getElementById('result-confidence-val').innerText = `${confidence}%`;
  document.getElementById('result-mood-description').innerText = description;
  
  state.currentGeneratedPlaylist = [...PLAYLISTS[mood]];
  populatePlaylist(state.currentGeneratedPlaylist);
  
  addToHistory(mood, emoji, confidence);
  
  document.getElementById('results-loader').style.display = 'none';
  document.getElementById('results-panel').style.display = 'block';
  
  lucide.createIcons();
}

function populatePlaylist(playlistArray) {
  const container = document.getElementById('playlist-songs-container');
  container.innerHTML = '';
  
  document.getElementById('playlist-track-count').innerText = `${playlistArray.length} Tracks`;
  
  playlistArray.forEach((song, index) => {
    const card = document.createElement('div');
    card.className = 'song-card glass';
    card.style.animationDelay = `${index * 0.05}s`;
    
    const hueStart = (index * 25) % 360;
    const hueEnd = (hueStart + 40) % 360;
    const artBg = `linear-gradient(135deg, hsl(${hueStart}, 85%, 60%), hsl(${hueEnd}, 85%, 50%))`;
    
    card.innerHTML = `
      <div class="song-art-wrapper" style="background: ${artBg}">
        <i data-lucide="music" class="song-art-icon"></i>
      </div>
      <div class="song-info">
        <h4 class="song-name">${song.title}</h4>
        <div class="song-artist-row">
          <span class="song-artist">${song.artist}</span>
          <span class="song-genre-tag">${song.genre}</span>
        </div>
      </div>
      <button class="btn-song-action btn-play-song" aria-label="Play directly">
        <i data-lucide="play"></i>
      </button>
    `;
    
    // Bind click to direct playback function
    card.querySelector('.btn-play-song').onclick = () => {
      playSong(song, playlistArray, index);
    };

    container.appendChild(card);
  });
  
  lucide.createIcons();
}

function shufflePlaylist() {
  if (!state.selectedMood) return;
  
  let arr = [...state.currentGeneratedPlaylist];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  state.currentGeneratedPlaylist = arr;
  
  const container = document.getElementById('playlist-songs-container');
  container.style.opacity = '0.3';
  container.style.transform = 'scale(0.98)';
  
  setTimeout(() => {
    populatePlaylist(state.currentGeneratedPlaylist);
    container.style.opacity = '1';
    container.style.transform = 'scale(1)';
  }, 350);
}

// ==========================================
// 8. Direct Music Player Controller
// ==========================================
function playSong(song, playlist, index) {
  state.currentPlayerSong = song;
  state.currentPlayerPlaylist = playlist;
  state.currentPlayerIndex = index;
  state.isPlaying = true;
  
  // Show Player Bar
  const playerBar = document.getElementById('player-bar');
  playerBar.style.display = 'flex';
  void playerBar.offsetHeight; // force reflow
  playerBar.classList.add('active');
  
  // Update details
  document.getElementById('player-title').innerText = song.title;
  document.getElementById('player-artist').innerText = song.artist;
  
  const ytLink = document.getElementById('player-yt-link');
  if (ytLink) {
    ytLink.href = `https://www.youtube.com/watch?v=${song.videoId}`;
  }
  
  // Update play icon to Pause
  const playIcon = document.getElementById('player-play-icon');
  playIcon.setAttribute('data-lucide', 'pause');
  
  // Update art background gradient
  const hueStart = (index * 25) % 360;
  const hueEnd = (hueStart + 40) % 360;
  const artBg = `linear-gradient(135deg, hsl(${hueStart}, 85%, 60%), hsl(${hueEnd}, 85%, 50%))`;
  document.getElementById('player-art').style.background = artBg;
  
  // Embed Iframe Player with direct parameters
  const placeholder = document.getElementById('youtube-player-placeholder');
  placeholder.innerHTML = `
    <iframe id="youtube-player-iframe" 
            src="https://www.youtube.com/embed/${song.videoId}?autoplay=1&enablejsapi=1&origin=${window.location.origin}" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
    </iframe>`;
  
  lucide.createIcons();
}

function togglePlayPause() {
  const iframe = document.getElementById('youtube-player-iframe');
  const playIcon = document.getElementById('player-play-icon');
  if (!iframe) return;
  
  state.isPlaying = !state.isPlaying;
  
  if (state.isPlaying) {
    iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo' }), '*');
    playIcon.setAttribute('data-lucide', 'pause');
  } else {
    iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo' }), '*');
    playIcon.setAttribute('data-lucide', 'play');
  }
  lucide.createIcons();
}

function playNext() {
  if (state.currentPlayerPlaylist.length === 0) return;
  let nextIdx = (state.currentPlayerIndex + 1) % state.currentPlayerPlaylist.length;
  playSong(state.currentPlayerPlaylist[nextIdx], state.currentPlayerPlaylist, nextIdx);
}

function playPrev() {
  if (state.currentPlayerPlaylist.length === 0) return;
  let prevIdx = (state.currentPlayerIndex - 1 + state.currentPlayerPlaylist.length) % state.currentPlayerPlaylist.length;
  playSong(state.currentPlayerPlaylist[prevIdx], state.currentPlayerPlaylist, prevIdx);
}

function toggleVideoDrawer() {
  const drawer = document.getElementById('player-video-drawer');
  state.isVideoOpen = !state.isVideoOpen;
  
  if (state.isVideoOpen) {
    drawer.classList.add('open');
  } else {
    drawer.classList.remove('open');
  }
}

function closePlayer() {
  const playerBar = document.getElementById('player-bar');
  const drawer = document.getElementById('player-video-drawer');
  
  playerBar.classList.remove('active');
  drawer.classList.remove('open');
  state.isVideoOpen = false;
  state.isPlaying = false;
  
  setTimeout(() => {
    playerBar.style.display = 'none';
    document.getElementById('youtube-player-placeholder').innerHTML = '';
  }, 400);
}

// ==========================================
// 9. History Timeline Manager
// ==========================================
function addToHistory(mood, emoji, confidence) {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timestamp = `${hours}:${minutes}`;
  
  state.history.unshift({
    mood,
    emoji,
    confidence: `${confidence}%`,
    timestamp
  });
  
  if (state.history.length > 5) {
    state.history.pop();
  }
  
  updateHistoryTimelineStrip();
}

function updateHistoryTimelineStrip() {
  const strip = document.getElementById('history-strip');
  strip.innerHTML = '';
  
  if (state.history.length === 0) {
    strip.innerHTML = '<span class="empty-history-text">Your mood history will appear here.</span>';
    return;
  }
  
  state.history.forEach((item, index) => {
    const node = document.createElement('div');
    node.className = 'history-node';
    node.onclick = () => {
      document.getElementById('results-loader').style.display = 'none';
      document.getElementById('results-panel').style.display = 'block';
      renderResults(item.mood, parseInt(item.confidence));
      navigateTo('view-results');
    };
    
    node.innerHTML = `
      <span class="history-node-emoji">${item.emoji}</span>
      <span class="history-node-name">${item.mood}</span>
      <span class="history-node-time">${item.timestamp}</span>
    `;
    
    strip.appendChild(node);
  });
}

function populateHistoryLarge() {
  const container = document.getElementById('history-large-list');
  container.innerHTML = '';
  
  if (state.history.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box glass">
        <i data-lucide="music-2" class="empty-state-icon"></i>
        <h3>No mood logs yet</h3>
        <p>Generate a playlist via text or webcam to log your first mood!</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }
  
  state.history.forEach(item => {
    const card = document.createElement('div');
    card.className = 'history-item-large glass';
    
    card.innerHTML = `
      <div class="history-item-left">
        <span class="history-item-emoji">${item.emoji}</span>
        <div class="history-item-info">
          <h3>${item.mood} — ${item.confidence}</h3>
          <p>Scanned at ${item.timestamp}</p>
        </div>
      </div>
      <button class="btn-history-play" aria-label="Re-play this mood playlist">
        <i data-lucide="play"></i>
      </button>
    `;
    
    card.querySelector('.btn-history-play').onclick = () => {
      renderResults(item.mood, parseInt(item.confidence));
      navigateTo('view-results');
    };
    
    container.appendChild(card);
  });
  
  lucide.createIcons();
}

// ==========================================
// 9. Search Music Controller
// ==========================================
function getAllSongs() {
  let all = [];
  let seen = new Set();
  for (const moodSongs of Object.values(PLAYLISTS)) {
    moodSongs.forEach(song => {
      const key = `${song.title}-${song.artist}`.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        all.push(song);
      }
    });
  }
  return all;
}

function initSearchView() {
  const input = document.getElementById('search-input');
  input.value = '';
  document.getElementById('btn-clear-search').style.display = 'none';
  
  const chips = document.querySelectorAll('.genre-chip');
  chips.forEach(c => c.classList.remove('active'));
  
  renderSearchResults(getAllSongs());
}

function renderSearchResults(filteredSongs) {
  const container = document.getElementById('search-results-container');
  container.innerHTML = '';
  
  if (filteredSongs.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box glass" style="grid-column: 1 / -1; width: 100%;">
        <i data-lucide="music-3" class="empty-state-icon"></i>
        <h3>No results found</h3>
        <p>Try searching for other keywords, artists, or clear filters.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }
  
  filteredSongs.forEach((song, index) => {
    const card = document.createElement('div');
    card.className = 'song-card glass';
    card.style.animationDelay = `${index * 0.02}s`;
    
    const hueStart = (index * 25) % 360;
    const hueEnd = (hueStart + 40) % 360;
    const artBg = `linear-gradient(135deg, hsl(${hueStart}, 85%, 60%), hsl(${hueEnd}, 85%, 50%))`;
    
    card.innerHTML = `
      <div class="song-art-wrapper" style="background: ${artBg}">
        <i data-lucide="music" class="song-art-icon"></i>
      </div>
      <div class="song-info">
        <h4 class="song-name">${song.title}</h4>
        <div class="song-artist-row">
          <span class="song-artist">${song.artist}</span>
          <span class="song-genre-tag">${song.genre}</span>
        </div>
      </div>
      <button class="btn-song-action btn-play-song" aria-label="Play directly">
        <i data-lucide="play"></i>
      </button>
    `;
    
    card.querySelector('.btn-play-song').onclick = () => {
      playSong(song, filteredSongs, index);
    };
    
    container.appendChild(card);
  });
  
  lucide.createIcons();
}

function filterSongs() {
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  const clearBtn = document.getElementById('btn-clear-search');
  
  if (query !== '') {
    clearBtn.style.display = 'flex';
  } else {
    clearBtn.style.display = 'none';
  }
  
  const activeChip = document.querySelector('.genre-chip.active');
  const selectedGenre = activeChip ? activeChip.getAttribute('data-genre').toLowerCase() : null;
  
  const allSongs = getAllSongs();
  
  const filtered = allSongs.filter(song => {
    const titleMatch = song.title.toLowerCase().includes(query);
    const artistMatch = song.artist.toLowerCase().includes(query);
    const genreMatch = song.genre.toLowerCase().includes(query);
    const matchesQuery = titleMatch || artistMatch || genreMatch;
    
    let matchesGenreChip = true;
    if (selectedGenre) {
      const songGenre = song.genre.toLowerCase();
      if (selectedGenre === 'edm') {
        matchesGenreChip = songGenre.includes('edm') || songGenre.includes('electronic') || songGenre.includes('trance') || songGenre.includes('house');
      } else if (selectedGenre === 'soul') {
        matchesGenreChip = songGenre.includes('soul') || songGenre.includes('r&b') || songGenre.includes('blues');
      } else {
        matchesGenreChip = songGenre.includes(selectedGenre);
      }
    }
    
    return matchesQuery && matchesGenreChip;
  });
  
  renderSearchResults(filtered);
}

// ==========================================
// 9.5 Phone QR Code Generator
// ==========================================
async function initPhoneQR() {
  const qrImage = document.getElementById('phone-qr-code');
  const qrSpinner = document.getElementById('qr-spinner');
  const ipText = document.getElementById('phone-ip-url');
  
  if (!qrImage || !ipText) return;
  
  qrImage.style.display = 'none';
  qrSpinner.style.display = 'block';
  
  try {
    const response = await fetch('/api/ip');
    if (!response.ok) throw new Error("API failed");
    const data = await response.json();
    
    // Construct local IP address URL with pairing parameters
    const networkUrl = `${window.location.protocol}//${data.ip}:${data.port}/?session=${state.sessionId}&mode=phone-cam`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(networkUrl)}`;
    
    qrImage.src = qrUrl;
    qrImage.onload = () => {
      qrImage.style.display = 'block';
      qrSpinner.style.display = 'none';
    };
    
    ipText.innerText = `${window.location.protocol}//${data.ip}:${data.port}`;
    ipText.style.display = 'inline-block';
  } catch (error) {
    console.error("Failed to fetch server IP for phone scanner QR code:", error);
    const currentOrigin = `${window.location.origin}/?session=${state.sessionId}&mode=phone-cam`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentOrigin)}`;
    qrImage.src = qrUrl;
    qrImage.onload = () => {
      qrImage.style.display = 'block';
      qrSpinner.style.display = 'none';
    };
    ipText.innerText = window.location.origin;
  }
}

// ==========================================
// 9.6 Phone Camera remote execution
// ==========================================
async function startPhoneWebcam() {
  const video = document.getElementById('phone-video');
  const loadingOverlay = document.getElementById('phone-loading-overlay');
  const fallbackOverlay = document.getElementById('phone-fallback-overlay');
  const captureBtn = document.getElementById('btn-phone-scan');
  
  if (!video) return;
  
  loadingOverlay.classList.add('active');
  fallbackOverlay.classList.remove('active');
  captureBtn.disabled = true;
  
  const success = await loadFaceModels();
  if (!success) {
    loadingOverlay.classList.remove('active');
    fallbackOverlay.classList.add('active');
    return;
  }
  
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 480 } }
    });
    state.phoneWebcamStream = stream;
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      loadingOverlay.classList.remove('active');
      captureBtn.disabled = false;
    };
  } catch (error) {
    console.error("Phone camera access error:", error);
    loadingOverlay.classList.remove('active');
    fallbackOverlay.classList.add('active');
  }
}

function stopPhoneWebcam() {
  const video = document.getElementById('phone-video');
  if (state.phoneWebcamStream) {
    state.phoneWebcamStream.getTracks().forEach(track => track.stop());
    state.phoneWebcamStream = null;
  }
  if (video) video.srcObject = null;
}

async function triggerPhoneDetection() {
  const captureBtn = document.getElementById('btn-phone-scan');
  const scanBar = document.getElementById('phone-scan-bar');
  const video = document.getElementById('phone-video');
  const overlayCanvas = document.getElementById('phone-overlay');
  
  if (!captureBtn || !scanBar || !video || !overlayCanvas) return;
  
  captureBtn.disabled = true;
  captureBtn.querySelector('span').innerText = 'Scanning...';
  scanBar.classList.add('scanning');
  
  const overlayCtx = overlayCanvas.getContext('2d');
  let bestDetection = null;
  const scanStartTime = Date.now();
  const scanDuration = 1800;
  
  const displaySize = { width: video.offsetWidth, height: video.offsetHeight };
  faceapi.matchDimensions(overlayCanvas, displaySize);
  
  const detectLoop = async () => {
    if (Date.now() - scanStartTime > scanDuration || !state.phoneWebcamStream) {
      stopPhoneWebcam();
      overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
      
      let detectedMood = 'Relaxed';
      let confidenceVal = 85;
      
      if (bestDetection) {
        const expressions = bestDetection.expressions;
        let dominantExpression = 'neutral';
        let maxProbability = -1;
        
        for (const [expr, val] of Object.entries(expressions)) {
          if (val > maxProbability) {
            maxProbability = val;
            dominantExpression = expr;
          }
        }
        
        confidenceVal = Math.round(maxProbability * 100);
        let mappedMood = 'Relaxed';
        switch (dominantExpression) {
          case 'happy': mappedMood = 'Happy'; break;
          case 'sad': mappedMood = 'Sad'; break;
          case 'angry': mappedMood = 'Angry'; break;
          case 'surprised': mappedMood = 'Energetic'; break;
          case 'fearful':
          case 'disgusted': mappedMood = 'Focused/Stressed'; break;
          case 'neutral':
          default: mappedMood = 'Relaxed';
        }
        detectedMood = mappedMood;
      } else {
        const moods = Object.keys(PLAYLISTS);
        detectedMood = moods[Math.floor(Math.random() * moods.length)];
        confidenceVal = Math.floor(Math.random() * 20) + 75;
      }
      
      document.querySelector('#view-phone-controller .camera-frame-wrapper').style.display = 'none';
      document.querySelector('#view-phone-controller .scanner-controls').style.display = 'none';
      
      const successCard = document.getElementById('phone-success-card');
      const detectedBadge = document.getElementById('phone-detected-badge');
      const emoji = MOOD_METADATA[detectedMood].emoji;
      
      detectedBadge.innerText = `${emoji} ${detectedMood} — ${confidenceVal}%`;
      successCard.style.display = 'block';
      
      try {
        await fetch(`/api/sync?session=${state.phoneSessionId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ mood: detectedMood, confidence: confidenceVal })
        });
      } catch (syncError) {
        console.error("Failed to transmit sync updates to server:", syncError);
      }
      return;
    }
    
    try {
      const detection = await faceapi.detectSingleFace(
        video,
        new faceapi.TinyFaceDetectorOptions({ inputSize: 224, scoreThreshold: 0.15 })
      ).withFaceLandmarks().withFaceExpressions();
      
      if (detection) {
        bestDetection = detection;
        
        overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
        const resized = faceapi.resizeResults(detection, displaySize);
        faceapi.draw.drawDetections(overlayCanvas, resized);
        faceapi.draw.drawFaceLandmarks(overlayCanvas, resized);
      }
    } catch (err) {
      console.error("Phone frame detection error:", err);
    }
    
    if (state.phoneWebcamStream) {
      requestAnimationFrame(detectLoop);
    }
  };
  
  requestAnimationFrame(detectLoop);
}

// ==========================================
// 10. Light/Dark Theme Controller
// ==========================================
function toggleTheme(forcedState = null) {
  const body = document.body;
  const themeSwitch = document.getElementById('settings-theme-switch');
  
  if (forcedState !== null) {
    state.isLightMode = forcedState;
  } else {
    state.isLightMode = !state.isLightMode;
  }
  
  if (state.isLightMode) {
    body.classList.add('light-theme');
    if (themeSwitch) themeSwitch.checked = true;
  } else {
    body.classList.remove('light-theme');
    if (themeSwitch) themeSwitch.checked = false;
  }
}

// ==========================================
// 11. Initialization & Listeners Setup
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Navigation binding
  document.getElementById('nav-logo').addEventListener('click', () => navigateTo('view-landing'));
  document.getElementById('nav-home').addEventListener('click', () => navigateTo('view-landing'));
  document.getElementById('nav-search').addEventListener('click', () => navigateTo('view-search'));
  document.getElementById('nav-history').addEventListener('click', () => navigateTo('view-history'));
  document.getElementById('nav-settings').addEventListener('click', () => navigateTo('view-settings'));
  
  document.getElementById('mode-text-btn').addEventListener('click', () => navigateTo('view-text-input'));
  document.getElementById('mode-webcam-btn').addEventListener('click', () => navigateTo('view-webcam'));
  
  // Back buttons binding
  document.querySelectorAll('.btn-back').forEach(btn => {
    btn.addEventListener('click', (e) => {
      navigateTo('view-landing');
    });
  });
  
  // Theme Toggles
  document.getElementById('theme-toggle').addEventListener('click', () => toggleTheme());
  document.getElementById('settings-theme-switch').addEventListener('change', (e) => {
    toggleTheme(e.target.checked);
  });
  
  // Text Input Interactivity
  const textarea = document.getElementById('mood-text-area');
  textarea.addEventListener('input', (e) => {
    updateMascotExpression(e.target.value);
  });
  
  // Submit Text Mood
  document.getElementById('btn-submit-text').addEventListener('click', () => {
    const textVal = textarea.value.trim();
    if (textVal === '') return;
    
    navigateTo('view-results');
    const loader = document.getElementById('results-loader');
    const panel = document.getElementById('results-panel');
    loader.style.display = 'flex';
    panel.style.display = 'none';
    
    setTimeout(() => {
      const analysis = analyzeTextMood(textVal);
      renderResults(analysis.mood, analysis.confidence);
    }, 1500);
  });
  
  // Webcam scanning buttons
  document.getElementById('btn-capture-scan').addEventListener('click', triggerWebcamDetection);
  document.getElementById('btn-retry-camera').addEventListener('click', startWebcamFlow);
  
  // Result control buttons
  document.getElementById('btn-shuffle-playlist').addEventListener('click', shufflePlaylist);
  
  // Direct Playback controls binding
  document.getElementById('player-play').addEventListener('click', togglePlayPause);
  document.getElementById('player-next').addEventListener('click', playNext);
  document.getElementById('player-prev').addEventListener('click', playPrev);
  document.getElementById('player-toggle-video').addEventListener('click', toggleVideoDrawer);
  document.getElementById('player-close').addEventListener('click', closePlayer);
  document.getElementById('btn-minimize-video').addEventListener('click', () => {
    state.isVideoOpen = false;
    document.getElementById('player-video-drawer').classList.remove('open');
  });

  // Search interactions
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('btn-clear-search');
  
  searchInput.addEventListener('input', filterSongs);
  
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    filterSongs();
  });
  
  // Genre chip toggles
  const chips = document.querySelectorAll('.genre-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      if (chip.classList.contains('active')) {
        chip.classList.remove('active');
      } else {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      }
      filterSongs();
    });
  });

  // Camera device switcher listener
  const deviceSelect = document.getElementById('camera-device-select');
  if (deviceSelect) {
    deviceSelect.addEventListener('change', (e) => {
      state.selectedCameraId = e.target.value;
      stopWebcam();
      startWebcamFlow();
    });
  }

  // Phone Help Drawer Toggler
  const toggleHelpBtn = document.getElementById('btn-toggle-phone-help');
  const helpContent = document.getElementById('phone-help-content');
  
  if (toggleHelpBtn && helpContent) {
    toggleHelpBtn.addEventListener('click', () => {
      const isOpen = helpContent.style.display === 'flex';
      if (isOpen) {
        helpContent.style.display = 'none';
        toggleHelpBtn.classList.remove('open');
      } else {
        helpContent.style.display = 'flex';
        toggleHelpBtn.classList.add('open');
        initPhoneQR();
      }
    });
  }

  // Model source config listener
  document.getElementById('settings-model-source').addEventListener('change', () => {
    state.faceModelsLoaded = false;
  });

  // Check URL parameters for remote phone scanner mode
  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get('session');
  const mode = urlParams.get('mode');
  
  if (mode === 'phone-cam' && sessionId) {
    state.isPhoneController = true;
    state.phoneSessionId = sessionId;
    document.body.classList.add('phone-controller-active');
    
    const phoneScanBtn = document.getElementById('btn-phone-scan');
    if (phoneScanBtn) {
      phoneScanBtn.addEventListener('click', triggerPhoneDetection);
    }
    
    const phoneRetryBtn = document.getElementById('btn-phone-retry-scan');
    if (phoneRetryBtn) {
      phoneRetryBtn.addEventListener('click', () => {
        document.getElementById('phone-success-card').style.display = 'none';
        document.querySelector('#view-phone-controller .camera-frame-wrapper').style.display = 'block';
        document.querySelector('#view-phone-controller .scanner-controls').style.display = 'flex';
        document.getElementById('phone-scan-bar').classList.remove('scanning');
        document.getElementById('btn-phone-scan').querySelector('span').innerText = 'Scan & Play on Laptop';
        startPhoneWebcam();
      });
    }
    
    navigateTo('view-phone-controller');
  } else {
    // Generate laptop pairing session ID
    state.sessionId = Math.random().toString(36).substring(2, 8);
    console.log(`Laptop Pairing Session Active: ${state.sessionId}`);
  }
  
  lucide.createIcons();
});

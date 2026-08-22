const INDIAN_PLAYLISTS = {
  Happy: [
    { title: "Dil Chahta Hai", artist: "Shankar-Ehsaan-Loy", genre: "Bollywood Pop", videoId: "p092kMhCaw8" },
    { title: "Kar Gayi Chull", artist: "Badshah & Fazilpuria", genre: "Bollywood Dance", videoId: "VdGGK13LhQc" },
    { title: "Badtameez Dil", artist: "Benny Dayal", genre: "Bollywood Pop", videoId: "II2EO3Ovv9M" },
    { title: "Gallan Goodiyaan", artist: "Shankar-Ehsaan-Loy", genre: "Bollywood Dance", videoId: "c8rHSFBHNi0" },
    { title: "London Thumakda", artist: "Labh Janjua & Sonu Kakkar", genre: "Bollywood Dance", videoId: "gadgN4jSkks" },
    { title: "Kala Chashma", artist: "Badshah & Aastha Gill", genre: "Bollywood Dance", videoId: "cOFI7Mww0t4" },
    { title: "Radha", artist: "Jyoti Nooran", genre: "Bollywood Pop", videoId: "R0GWqJ7VtAo" },
    { title: "Subah Hone Na De", artist: "Mika Singh", genre: "Bollywood Dance", videoId: "g-ORDJoCuMg" },
    { title: "Nagada Sang Dhol", artist: "Shreya Ghoshal & Osman Mir", genre: "Bollywood Folk", videoId: "Hq5QSMmWiLo" },
    { title: "Ghagra", artist: "Vishal Shekhar", genre: "Bollywood Dance", videoId: "bknVVHMPiTE" },
    { title: "Tum Hi Aana", artist: "Jubin Nautiyal", genre: "Bollywood Pop", videoId: "4kYyV1UIlU4" },
    { title: "Balam Pichkari", artist: "Vishal Dadlani & Shalmali Kholgade", genre: "Bollywood Holi", videoId: "r4V8hnV5P6Y" },
    { title: "Dilliwali Girlfriend", artist: "Arijit Singh & Sunidhi Chauhan", genre: "Bollywood Dance", videoId: "NagNAM2DEJA" }
  ],
  Sad: [
    { title: "Channa Mereya", artist: "Arijit Singh", genre: "Bollywood Sad", videoId: "bzSTpdcs-gQ" },
    { title: "Agar Tum Saath Ho", artist: "Alka Yagnik & Arijit Singh", genre: "Bollywood Sad", videoId: "sK7riqg2mr4" },
    { title: "Kabira", artist: "Tochi Raina & Rekha Bhardwaj", genre: "Bollywood Folk", videoId: "jHTjV28pY5Y" },
    { title: "Tujhe Kitna Chahne Lage", artist: "Arijit Singh", genre: "Bollywood Sad", videoId: "K0ibBEumOqk" },
    { title: "Phir Le Aya Dil", artist: "Arijit Singh", genre: "Bollywood Sad", videoId: "7e27J4-a6To" },
    { title: "Alvida", artist: "K.K.", genre: "Bollywood Sad", videoId: "sRDJ-KpAEbs" },
    { title: "Teri Mitti", artist: "B Praak", genre: "Bollywood Patriotic Sad", videoId: "X96MELbg82w" },
    { title: "Woh Lamhe", artist: "Atif Aslam", genre: "Bollywood Soft Rock", videoId: "XiG4Tj6a5wM" },
    { title: "Khairiyat", artist: "Arijit Singh", genre: "Bollywood Sad", videoId: "vX3MAnO5PK4" },
    { title: "Dil Diyan Gallan", artist: "Atif Aslam", genre: "Bollywood Romantic Sad", videoId: "3PLGxKn-YG4" },
    { title: "Judaai", artist: "Rekha Bhardwaj", genre: "Bollywood Sufi Sad", videoId: "z1QTH6MqpiI" },
    { title: "Hamari Adhuri Kahani", artist: "Arijit Singh", genre: "Bollywood Sad", videoId: "f1RA_BNzY4g" },
    { title: "Jeena Jeena", artist: "Atif Aslam", genre: "Bollywood Soft", videoId: "d1VJPwVRmro" }
  ],
  Energetic: [
    { title: "Malhari", artist: "Vishal Dadlani", genre: "Bollywood Energetic", videoId: "o_wHkF618Xk" },
    { title: "Jai Ho", artist: "A.R. Rahman", genre: "Bollywood Dance", videoId: "kYn7F4-2eEo" },
    { title: "Zinda", artist: "Siddharth Mahadevan", genre: "Bollywood Rock", videoId: "K425_tI_kac" },
    { title: "Aarambh Hai Prachand", artist: "Piyush Mishra", genre: "Bollywood Folk Rock", videoId: "rZ3jYJio-q8" },
    { title: "Sultan", artist: "Vishal-Shekhar", genre: "Bollywood Energetic", videoId: "rfM7KbgAERw" },
    { title: "Sher Khul Gaye", artist: "Vishal-Shekhar & Benny Dayal", genre: "Bollywood Energetic", videoId: "jHzPKhiAXGw" },
    { title: "Dhoom Machale", artist: "Sunidhi Chauhan", genre: "Bollywood Dance", videoId: "aMIU_7AqnU0" },
    { title: "Tattad Tattad", artist: "Aditya Narayan", genre: "Bollywood Folk Dance", videoId: "D0w0W6iS-cA" },
    { title: "Ang Laga De", artist: "Rahat Fateh Ali Khan", genre: "Bollywood Sufi Rock", videoId: "mCuFDHdJaRI" },
    { title: "Ghungroo", artist: "Arijit Singh & Shilpa Rao", genre: "Bollywood Dance", videoId: "qFbWLSp8XpY" },
    { title: "Bhaag Milkha Bhaag", artist: "Daler Mehndi", genre: "Bollywood Rock", videoId: "U5QKROA9B4c" },
    { title: "Seeti Maar", artist: "Yo Yo Honey Singh", genre: "Bollywood Dance", videoId: "NlomWj_KFj8" },
    { title: "Jee Karda", artist: "Badshah & Aastha Gill", genre: "Bollywood Dance", videoId: "PaWYI2cPh_s" }
  ],
  Relaxed: [
    { title: "Kun Faya Kun", artist: "A.R. Rahman & Javed Ali & Mohit Chauhan", genre: "Sufi Devotional", videoId: "T94PHkuyd8c" },
    { title: "Iktara", artist: "Amit Trivedi & Kavita Seth", genre: "Bollywood Sufi", videoId: "Oe9pEEKkMnA" },
    { title: "Tum Se Hi", artist: "Mohit Chauhan", genre: "Bollywood Relaxed", videoId: "mt9xg0mmt28" },
    { title: "Ae Dil Hai Mushkil", artist: "Arijit Singh", genre: "Bollywood Soft", videoId: "6FURuKBTAqM" },
    { title: "Safar", artist: "Arijit Singh", genre: "Bollywood Soft", videoId: "PxE5nEaT9j8" },
    { title: "Moh Moh Ke Dhaage", artist: "Papon & Monali Thakur", genre: "Bollywood Folk Soft", videoId: "6y3MhIgYNaY" },
    { title: "Tu Jaane Na", artist: "Atif Aslam", genre: "Bollywood Soft", videoId: "zq9NWUB6c2E" },
    { title: "Tere Bina", artist: "A.R. Rahman & Chinmayi", genre: "Bollywood Sufi", videoId: "OFHKV1gT5dM" },
    { title: "O Re Piya", artist: "Rahat Fateh Ali Khan", genre: "Bollywood Sufi", videoId: "1IbPOXk2mYk" },
    { title: "Lag Ja Gale", artist: "Lata Mangeshkar", genre: "Bollywood Classic", videoId: "0U4KKuXbQno" },
    { title: "Kabhi Alvida Naa Kehna", artist: "Sonu Nigam", genre: "Bollywood Soft", videoId: "lLqMlN4gMnU" },
    { title: "Zara Si Dil Mein", artist: "K.K.", genre: "Bollywood Soft", videoId: "n_K5hy7JOKk" },
    { title: "Piya Aaye Na", artist: "Arijit Singh", genre: "Bollywood Sufi Soft", videoId: "gI5OIe5KcGA" }
  ],
  Angry: [
    { title: "Sadda Haq", artist: "Mohit Chauhan", genre: "Bollywood Rock", videoId: "p9DQINKZxWE" },
    { title: "Bhaag D.K. Bose", artist: "Ram Sampath", genre: "Bollywood Punk Rock", videoId: "u8m81LdFkE4" },
    { title: "Aarambh Hai Prachand", artist: "Piyush Mishra", genre: "Bollywood Folk Rock", videoId: "rZ3jYJio-q8" },
    { title: "Toota Jo Kabhi Tara", artist: "Atif Aslam & KK", genre: "Bollywood Rock", videoId: "H1N_YuIsNPE" },
    { title: "Rock On", artist: "Farhan Akhtar", genre: "Bollywood Rock", videoId: "jQE2IgMHzVM" },
    { title: "Khoon Chala", artist: "Mohit Chauhan", genre: "Bollywood Sufi Rock", videoId: "k_3BRb3Q1ro" },
    { title: "Zinda Hoon Main", artist: "Jeet Ganguly", genre: "Bollywood Rock", videoId: "Nj3QqbM5L4Y" },
    { title: "Rang De Basanti", artist: "Daler Mehndi & Naresh Kamath", genre: "Bollywood Folk Rock", videoId: "H-Y2JuYl3OM" },
    { title: "Hud Hud Dabangg", artist: "Sonu Sood & Vinod Rathod", genre: "Bollywood Dance", videoId: "NlomWj_KFj8" },
    { title: "Dooba Dooba", artist: "Silk Route", genre: "Bollywood Rock", videoId: "pYFaVbXgPOc" },
    { title: "Ye Jo Des Hai Tera", artist: "A.R. Rahman", genre: "Bollywood Emotional Rock", videoId: "P9k2KIXhzV0" },
    { title: "Chhod De Saari Duniya", artist: "Lucky Ali", genre: "Bollywood Soft Rock", videoId: "HNR_CoolY-A" },
    { title: "Gulabi Aankhen", artist: "Mohammed Rafi", genre: "Bollywood Classic Rock", videoId: "0Tx-C-kgMvU" }
  ],
  Romantic: [
    { title: "Tum Hi Ho", artist: "Arijit Singh", genre: "Bollywood Romantic", videoId: "H2fA_eMRjEU" },
    { title: "Kesariya", artist: "Arijit Singh", genre: "Bollywood Romantic", videoId: "h7KstC9G-4M" },
    { title: "Pehla Nasha", artist: "Udit Narayan & Sadhana Sargam", genre: "Bollywood Classic", videoId: "wLgV89-mH54" },
    { title: "Tere Sang Yaara", artist: "Atif Aslam", genre: "Bollywood Romantic", videoId: "8JX7H9_qhpo" },
    { title: "Teri Deewani", artist: "Kailash Kher", genre: "Bollywood Sufi Romantic", videoId: "Vb4vBqCOgp8" },
    { title: "Raabta", artist: "Arijit Singh", genre: "Bollywood Romantic", videoId: "ioSiom4H3v4" },
    { title: "Hawayein", artist: "Arijit Singh", genre: "Bollywood Romantic", videoId: "cGkHKYTSybA" },
    { title: "Mere Naam Tu", artist: "Abhay Jodhpurkar", genre: "Bollywood Romantic", videoId: "9fv9Ts8NVb4" },
    { title: "Gerua", artist: "Arijit Singh & Antara Mitra", genre: "Bollywood Romantic", videoId: "oGpBZbf9U14" },
    { title: "Main Agar Kahoon", artist: "Sonu Nigam & Shreya Ghoshal", genre: "Bollywood Romantic Classic", videoId: "Ro3O2mYbvEo" },
    { title: "Pehli Nazar Mein", artist: "Atif Aslam", genre: "Bollywood Romantic", videoId: "LN4GLL20SiM" },
    { title: "Teri Meri Prem Kahani", artist: "Rahat Fateh Ali Khan", genre: "Bollywood Romantic", videoId: "Jm9-MCsWbH0" },
    { title: "Saibo", artist: "Sonu Nigam & Shreya Ghoshal", genre: "Bollywood Sufi Romantic", videoId: "DyQUQmCXSv8" }
  ],
  "Focused/Stressed": [
    { title: "Khwaja Mere Khwaja", artist: "A.R. Rahman", genre: "Sufi Instrumental", videoId: "r5Gcx_sS_f4" },
    { title: "Yun Hi Chala Chal Rahi", artist: "Udit Narayan & Hariharan", genre: "Bollywood Inspirational", videoId: "aW0V2bH-iN0" },
    { title: "Zindagi Do Pal Ki", artist: "K.K.", genre: "Bollywood Melodic", videoId: "L0w55WJ5o_Q" },
    { title: "Mann", artist: "Aamir Khan", genre: "Bollywood Soft", videoId: "0AQd1nTYN-I" },
    { title: "Ilahi", artist: "Arijit Singh", genre: "Bollywood Soft Inspirational", videoId: "OFHKV1gT5dM" },
    { title: "Tere Bina", artist: "A.R. Rahman", genre: "Bollywood Sufi", videoId: "OFHKV1gT5dM" },
    { title: "Sooraj Dooba Hai", artist: "Arijit Singh & Aditi Singh Sharma", genre: "Bollywood Melodic", videoId: "v7Z7kSfMEBs" },
    { title: "Sunn Raha Hai Na Tu", artist: "Ankit Tiwari", genre: "Bollywood Soft", videoId: "CaKMQfF8dYU" },
    { title: "Agar Mujhse Mohabbat Hai", artist: "Atif Aslam", genre: "Bollywood Soft", videoId: "a2G3kKOK7XY" },
    { title: "Dil Dhadakne Do", artist: "Priyanka Chopra & Farhan Akhtar", genre: "Bollywood Feel Good", videoId: "KPdxGBTyDMk" },
    { title: "Jeene Laga Hoon", artist: "Atif Aslam & Shreya Ghoshal", genre: "Bollywood Soft Romantic", videoId: "4m4bHR5oiBI" },
    { title: "Chahun Main Ya Naa", artist: "Arijit Singh & Palak Muchhal", genre: "Bollywood Soft", videoId: "VqPsAjbGjy4" },
    { title: "Mera Naam Kya Hai", artist: "Ash King & Suzanne D'Mello", genre: "Bollywood Chill", videoId: "2JMUj3RmHfA" }
  ]
};

// Global (mixed) playlists — used in the Search & Browse view
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
// 2. Application State (Enhanced for Spotify Parity)
// ==========================================
const state = {
  currentView: 'view-landing',
  navHistory: ['view-landing'],
  history: [],
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
  isVideoOpen: false,
  autoplayPollTimer: null,
  recentlyPlayed: [],
  recentlyPlayedIds: [],
  
  // Search parameters
  searchMode: 'unified',
  ytSearchTimeout: null,
  activeSearchFilter: 'all',
  activeLibFilter: 'all',

  // User playlists & Spotify-like Library
  userPlaylists: JSON.parse(localStorage.getItem('moodbeats_user_playlists') || '[]'),
  currentPlaylistView: null,
  currentArtistView: null,
  songToAddModal: null,
  toastTimeout: null,

  // JioSaavn player state
  saavnAudio: null,
  saavnCurrentSong: null,
  saavnIsPlaying: false,
  saavnSearchResults: [],
  saavnSearchQuery: '',

  // Phase 1 Supercharged Playback & Queue State
  playQueue: [],
  queueIndex: 0,
  isShuffle: false,
  repeatMode: 'off', // 'off' | 'all' | 'one'
  likedSongs: JSON.parse(localStorage.getItem('moodbeats_liked_songs') || '[]'),
  audioQuality: localStorage.getItem('moodbeats_audio_quality') || 'auto',
  eqContext: null,
  eqSource: null,
  eqFilters: [],
  eqPreset: localStorage.getItem('moodbeats_eq_preset') || 'Flat',
  eqGains: JSON.parse(localStorage.getItem('moodbeats_eq_gains') || '[0,0,0,0,0]'),
  songOptionsTarget: null
};

// ==========================================
// 2b. Core Helper Functions (HTML escaping, Toast, YouTube Search)
// ==========================================

/**
 * Standalone YouTube search using Invidious public API instances.
 * No local server or API key required. Works fully offline from laptop.
 * Falls back through multiple public Invidious instances automatically.
 */
const INVIDIOUS_INSTANCES = [
  'https://inv.nadeko.net',
  'https://invidious.privacyredirect.com',
  'https://invidious.fdn.fr',
  'https://vid.puffyan.us',
  'https://yt.artemislena.eu',
];
let _invidiousWorkingIdx = 0;

async function searchYouTubeGlobally(query, limit = 8) {
  if (!query || !query.trim()) return [];
  const q = query.trim();

  // Try 1: Render Cloud Server / Local Server proxy
  try {
    const srv = getServerUrl();
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(`${srv}/api/yt-search?q=${encodeURIComponent(q)}`, {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(timeout);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        return data.slice(0, limit).map(v => ({
          videoId: v.videoId,
          title: v.title || 'Unknown',
          artist: v.artist || 'YouTube',
          duration: v.duration || 0,
          image: `https://i.ytimg.com/vi/${v.videoId}/mqdefault.jpg`,
          genre: 'YouTube',
        }));
      }
    }
  } catch(e) {
    console.warn('[YT Search] Server proxy failed, trying Invidious fallbacks:', e.message);
  }

  // Try 2: Invidious Public Instances Fallback
  const qEncoded = encodeURIComponent(q + ' audio');
  const orderedInstances = [
    INVIDIOUS_INSTANCES[_invidiousWorkingIdx],
    ...INVIDIOUS_INSTANCES.filter((_, i) => i !== _invidiousWorkingIdx),
  ];

  for (let i = 0; i < orderedInstances.length; i++) {
    const base = orderedInstances[i];
    const url = `${base}/api/v1/search?q=${qEncoded}&type=video&fields=videoId,title,author,lengthSeconds&page=1`;
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 6000);
      const res = await fetch(url, {
        signal: controller.signal,
        headers: { 'Accept': 'application/json' },
      });
      clearTimeout(timeout);
      if (!res.ok) continue;
      const data = await res.json();
      if (!Array.isArray(data) || data.length === 0) continue;
      _invidiousWorkingIdx = INVIDIOUS_INSTANCES.indexOf(base);
      return data.slice(0, limit).map(v => ({
        videoId: v.videoId,
        title: v.title || 'Unknown',
        artist: v.author || 'YouTube',
        duration: v.lengthSeconds || 0,
        image: `https://i.ytimg.com/vi/${v.videoId}/mqdefault.jpg`,
        genre: 'YouTube',
      }));
    } catch (e) {
      console.warn(`[YT Search] ${base} failed: ${e.message}`);
    }
  }
  console.warn('[YT Search] All search providers unavailable. YouTube results skipped.');
  return [];
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

let toastTimer = null;
function showToast(msg, duration = 3000) {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;
  toastMsg.textContent = msg;
  toast.style.display = 'flex';
  void toast.offsetHeight;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => { toast.style.display = 'none'; }, 300);
  }, duration);
}

// ==========================================
// 2c. Liked Songs & Library Favorites Manager
// ==========================================
function isSongLiked(songId) {
  if (!songId) return false;
  return state.likedSongs.some(s => s.id === songId || (s.title === songId.title && s.artist === songId.artist));
}

function toggleLikeSong(song) {
  if (!song || (!song.id && !song.title)) return;
  const songId = song.id || `${song.title}_${song.artist}`;
  const idx = state.likedSongs.findIndex(s => s.id === songId || (s.title === song.title && s.artist === song.artist));

  if (idx >= 0) {
    state.likedSongs.splice(idx, 1);
    showToast(`Removed "${song.title}" from Liked Songs`);
  } else {
    state.likedSongs.unshift({
      id: songId,
      title: song.title,
      artist: song.artist || 'Unknown Artist',
      album: song.album || '',
      image: song.image || 'icon.png',
      duration: song.duration || 0,
      downloadUrl: song.downloadUrl || song.streamUrl || null,
      streamUrl: song.streamUrl || song.downloadUrl || null,
      streamFallbacks: song.streamFallbacks || [],
      videoId: song.videoId || null,
      addedAt: new Date().toISOString()
    });
    showToast(`Added "${song.title}" to Liked Songs ❤️`);
  }

  try {
    localStorage.setItem('moodbeats_liked_songs', JSON.stringify(state.likedSongs));
  } catch(e) {}

  // Sync with Supabase Cloud
  if (window.MoodSupabase && typeof window.MoodSupabase.syncLikedSong === 'function') {
    window.MoodSupabase.syncLikedSong(song, idx < 0);
  }

  updateAllLikeButtons(song);
  updateLibraryLikedHero();
}

function updateAllLikeButtons(song) {
  const isLiked = song ? isSongLiked(song.id || song) : false;
  
  // Now playing like button
  const npLikeBtn = document.getElementById('np-like');
  if (npLikeBtn) {
    if (isLiked) npLikeBtn.classList.add('liked');
    else npLikeBtn.classList.remove('liked');
  }

  // Mini bar like button
  const miniLikeBtn = document.getElementById('saavn-bar-like');
  if (miniLikeBtn) {
    if (isLiked) miniLikeBtn.classList.add('liked');
    else miniLikeBtn.classList.remove('liked');
  }

  // Options modal like button
  const optLikeBtn = document.getElementById('opt-btn-toggle-like');
  const optLikeText = document.getElementById('opt-like-text');
  if (optLikeBtn && optLikeText) {
    optLikeText.textContent = isLiked ? 'Remove from Liked Songs' : 'Like Song';
    if (isLiked) optLikeBtn.classList.add('liked');
    else optLikeBtn.classList.remove('liked');
  }
}

function updateLibraryLikedHero() {
  const countEl = document.getElementById('library-liked-count');
  if (countEl) {
    countEl.textContent = `${state.likedSongs.length} saved track${state.likedSongs.length === 1 ? '' : 's'}`;
  }
}

function openLikedSongsPlaylist() {
  if (state.likedSongs.length === 0) {
    showToast('No liked songs yet! Tap the heart on any song.');
    return;
  }
  const syntheticPlaylist = {
    id: 'liked_songs_virtual',
    name: 'Liked Songs',
    image: 'icon.png',
    isLikedCollection: true,
    songs: state.likedSongs
  };
  renderPlaylistDetailView(syntheticPlaylist);
  navigateTo('view-playlist-detail');
}

// ==========================================
// 2d. Play Queue Manager
// ==========================================
function addToQueue(song, notify = true) {
  if (!song) return;
  state.playQueue.push(song);
  if (notify) showToast(`Added "${song.title}" to Queue`);
  renderQueueUI();
  
  // If nothing is playing, play immediately
  if (!state.saavnCurrentSong && !state.currentPlayerSong) {
    state.queueIndex = state.playQueue.length - 1;
    saavnPlaySong(song);
  }
}

function playNextInQueue(song) {
  if (!song) return;
  const insertIdx = state.queueIndex + 1;
  state.playQueue.splice(insertIdx, 0, song);
  showToast(`Will play "${song.title}" next`);
  renderQueueUI();
}

function removeFromQueue(index) {
  if (index < 0 || index >= state.playQueue.length) return;
  const removed = state.playQueue.splice(index, 1)[0];
  if (index < state.queueIndex) {
    state.queueIndex = Math.max(0, state.queueIndex - 1);
  }
  showToast(`Removed "${removed?.title || 'track'}" from Queue`);
  renderQueueUI();
}

function clearQueue() {
  if (state.saavnCurrentSong) {
    state.playQueue = [state.saavnCurrentSong];
    state.queueIndex = 0;
  } else {
    state.playQueue = [];
    state.queueIndex = 0;
  }
  showToast('Queue cleared');
  renderQueueUI();
}

function openQueueModal() {
  renderQueueUI();
  const modal = document.getElementById('queue-modal');
  if (modal) modal.style.display = 'flex';
}

function closeQueueModal() {
  const modal = document.getElementById('queue-modal');
  if (modal) modal.style.display = 'none';
}

function renderQueueUI() {
  const nowPlayingContainer = document.getElementById('queue-now-playing-container');
  const upcomingList = document.getElementById('queue-upcoming-list');
  const countBadge = document.getElementById('queue-count-badge');
  if (!nowPlayingContainer || !upcomingList) return;

  const current = state.saavnCurrentSong || state.currentPlayerSong;
  
  // Render Now Playing
  if (current) {
    nowPlayingContainer.innerHTML = `
      <div class="queue-item active-playing">
        <img class="queue-item-art" src="${current.image || 'icon.png'}" onerror="this.src='icon.png'">
        <div class="queue-item-info">
          <div class="queue-item-title">${escapeHtml(current.title)}</div>
          <div class="queue-item-artist">${escapeHtml(current.artist)}</div>
        </div>
        <div class="player-art-eq" style="display:flex;">
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
          <div class="eq-bar"></div>
        </div>
      </div>
    `;
  } else {
    nowPlayingContainer.innerHTML = `<div style="font-size:13px; color:var(--text-muted); padding:10px 0;">Nothing playing right now.</div>`;
  }

  // Render Upcoming
  const upcoming = state.playQueue.slice(state.queueIndex + 1);
  if (countBadge) countBadge.textContent = `${upcoming.length} song${upcoming.length === 1 ? '' : 's'}`;

  if (upcoming.length === 0) {
    upcomingList.innerHTML = `<div style="font-size:13px; color:var(--text-muted); padding:20px 0; text-align:center;">Queue is empty. Add songs from search or playlists!</div>`;
  } else {
    upcomingList.innerHTML = '';
    upcoming.forEach((song, i) => {
      const realIndex = state.queueIndex + 1 + i;
      const item = document.createElement('div');
      item.className = 'queue-item';
      item.innerHTML = `
        <img class="queue-item-art" src="${song.image || 'icon.png'}" onerror="this.src='icon.png'">
        <div class="queue-item-info" style="cursor:pointer;">
          <div class="queue-item-title">${escapeHtml(song.title)}</div>
          <div class="queue-item-artist">${escapeHtml(song.artist)}</div>
        </div>
        <div class="queue-item-actions">
          <button class="queue-action-btn delete" title="Remove from queue" data-q-idx="${realIndex}">
            <i data-lucide="trash-2" style="width:16px;height:16px;"></i>
          </button>
        </div>
      `;
      item.querySelector('.queue-item-info').onclick = () => {
        state.queueIndex = realIndex;
        saavnPlaySong(song);
        closeQueueModal();
      };
      item.querySelector('.delete').onclick = (e) => {
        e.stopPropagation();
        removeFromQueue(realIndex);
      };
      upcomingList.appendChild(item);
    });
  }

  lucide.createIcons();
}

// ==========================================
// 2e. Web Audio API 5-Band Equalizer
// ==========================================
const EQ_FREQUENCIES = [60, 250, 1000, 4000, 14000];
const EQ_PRESETS = {
  'Flat':        [0, 0, 0, 0, 0],
  'Bass Boost':  [6, 4, 1, 0, -1],
  'Vocal':       [-2, 1, 4, 3, 1],
  'Rock':        [5, 3, -1, 2, 4],
  'Electronic':  [6, 3, 0, 2, 5],
  'Acoustic':    [4, 2, 1, 3, 3],
  'Dance':       [5, 4, 1, 3, 4],
  'Classical':   [4, 2, -1, 2, 3]
};

function initEqualizer() {
  if (state.eqContext || !state.saavnAudio) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    
    state.eqContext = new AudioContextClass();
    state.eqSource = state.eqContext.createMediaElementSource(state.saavnAudio);

    // Create 5 BiquadFilterNodes
    state.eqFilters = EQ_FREQUENCIES.map((freq, i) => {
      const filter = state.eqContext.createBiquadFilter();
      if (i === 0) filter.type = 'lowshelf';
      else if (i === EQ_FREQUENCIES.length - 1) filter.type = 'highshelf';
      else filter.type = 'peaking';
      filter.frequency.value = freq;
      filter.gain.value = state.eqGains[i] || 0;
      return filter;
    });

    // Chain: Source -> Filter0 -> Filter1 -> ... -> Destination
    let prevNode = state.eqSource;
    state.eqFilters.forEach(f => {
      prevNode.connect(f);
      prevNode = f;
    });

    // Phase 3: Web Audio Analyser Node
    state.eqAnalyser = state.eqContext.createAnalyser();
    state.eqAnalyser.fftSize = 256;
    prevNode.connect(state.eqAnalyser);
    state.eqAnalyser.connect(state.eqContext.destination);

    console.log('[MoodBeats EQ] Web Audio 5-band Equalizer and Analyser initialized.');
  } catch(err) {
    console.warn('[MoodBeats EQ] AudioContext initialization failed (falling back to standard audio):', err.message);
  }
}

function setEqGain(bandIndex, gainDb) {
  if (bandIndex < 0 || bandIndex >= EQ_FREQUENCIES.length) return;
  state.eqGains[bandIndex] = gainDb;
  if (state.eqFilters[bandIndex]) {
    state.eqFilters[bandIndex].gain.value = gainDb;
  }
  const valLabel = document.getElementById(`eq-val-${EQ_FREQUENCIES[bandIndex]}`);
  if (valLabel) valLabel.textContent = `${gainDb > 0 ? '+' : ''}${gainDb}dB`;
  try {
    localStorage.setItem('moodbeats_eq_gains', JSON.stringify(state.eqGains));
  } catch(e) {}
}

function applyEqPreset(presetName) {
  const gains = EQ_PRESETS[presetName] || EQ_PRESETS['Flat'];
  state.eqPreset = presetName;
  state.eqGains = [...gains];

  EQ_FREQUENCIES.forEach((freq, idx) => {
    const slider = document.getElementById(`eq-slider-${freq}`);
    if (slider) slider.value = gains[idx];
    setEqGain(idx, gains[idx]);
  });

  document.querySelectorAll('.eq-preset-chip').forEach(chip => {
    if (chip.getAttribute('data-preset') === presetName) chip.classList.add('active');
    else chip.classList.remove('active');
  });

  try {
    localStorage.setItem('moodbeats_eq_preset', presetName);
    localStorage.setItem('moodbeats_eq_gains', JSON.stringify(state.eqGains));
  } catch(e) {}

  showToast(`Equalizer: ${presetName}`);
}

function openEqualizerModal() {
  const modal = document.getElementById('equalizer-modal');
  if (modal) {
    modal.style.display = 'flex';
    // Sync slider values
    EQ_FREQUENCIES.forEach((freq, idx) => {
      const slider = document.getElementById(`eq-slider-${freq}`);
      const valLabel = document.getElementById(`eq-val-${freq}`);
      const g = state.eqGains[idx] || 0;
      if (slider) slider.value = g;
      if (valLabel) valLabel.textContent = `${g > 0 ? '+' : ''}${g}dB`;
    });
    // Sync active preset chip
    document.querySelectorAll('.eq-preset-chip').forEach(chip => {
      if (chip.getAttribute('data-preset') === state.eqPreset) chip.classList.add('active');
      else chip.classList.remove('active');
    });
  }
}

function closeEqualizerModal() {
  const modal = document.getElementById('equalizer-modal');
  if (modal) modal.style.display = 'none';
}

// ==========================================
// 2f. Song Context Options Modal
// ==========================================
function openSongOptionsModal(song) {
  if (!song) return;
  state.songOptionsTarget = song;
  const modal = document.getElementById('song-options-modal');
  const title = document.getElementById('options-modal-song-title');
  const artist = document.getElementById('options-modal-song-artist');
  const art = document.getElementById('options-modal-song-art');
  
  if (title) title.textContent = song.title;
  if (artist) artist.textContent = song.artist;
  if (art) art.src = song.image || 'icon.png';
  
  updateAllLikeButtons(song);
  if (modal) modal.style.display = 'flex';
}

function closeSongOptionsModal() {
  const modal = document.getElementById('song-options-modal');
  if (modal) modal.style.display = 'none';
}

// ==========================================
// 2g. Shuffle & 3-State Repeat Controller
// ==========================================
function toggleShuffle() {
  state.isShuffle = !state.isShuffle;
  const npShuffleBtn = document.getElementById('np-shuffle');
  if (npShuffleBtn) {
    if (state.isShuffle) npShuffleBtn.classList.add('active');
    else npShuffleBtn.classList.remove('active');
  }
  showToast(state.isShuffle ? '🔀 Shuffle On' : '➡️ Shuffle Off');
}

function toggleRepeat() {
  if (state.repeatMode === 'off') {
    state.repeatMode = 'all';
    showToast('🔁 Repeat All');
  } else if (state.repeatMode === 'all') {
    state.repeatMode = 'one';
    showToast('🔂 Repeat One');
  } else {
    state.repeatMode = 'off';
    showToast('➡️ Repeat Off');
  }

  const npRepeatBtn = document.getElementById('np-repeat');
  if (npRepeatBtn) {
    npRepeatBtn.classList.remove('active', 'repeat-one');
    if (state.repeatMode === 'all') npRepeatBtn.classList.add('active');
    else if (state.repeatMode === 'one') npRepeatBtn.classList.add('active', 'repeat-one');
  }
}

// ==========================================
// 2f. Phase 2: Track Radio, Daily Mixes & Soundscapes Hub
// ==========================================
async function startTrackRadio(song) {
  const target = song || state.saavnCurrentSong || state.currentPlayerSong;
  if (!target) {
    showToast('Please select a song first');
    return;
  }
  showToast(`📻 Tuning into ${escapeHtml(target.title)} Radio...`);
  try {
    const radioTracks = await (window.JSA?.getTrackRadio ? window.JSA.getTrackRadio(target, 25) : [target]);
    if (radioTracks && radioTracks.length > 0) {
      state.playQueue = radioTracks;
      state.queueIndex = 0;
      saavnPlaySong(radioTracks[0], radioTracks, 0);
      showToast(`📻 Playing ${escapeHtml(target.artist || target.title)} Radio (${radioTracks.length} tracks)`);
      if (document.getElementById('queue-modal')?.style.display === 'flex') {
        renderQueueUI();
      }
    } else {
      saavnPlaySong(target);
    }
  } catch (err) {
    console.error('Radio generation failed:', err);
    saavnPlaySong(target);
  }
}

const DAILY_MIX_DEFINITIONS = [
  {
    id: 'dm_1',
    badge: 'Daily Mix 1',
    title: 'High Energy & Beats',
    desc: 'Upbeat Hindi & Punjabi gym & workout hits',
    query: 'workout gym party energetic hindi songs',
    gradient: 'linear-gradient(135deg, #f43f5e, #fb923c)'
  },
  {
    id: 'dm_2',
    badge: 'Daily Mix 2',
    title: 'Acoustic Romance',
    desc: 'Melodic Bollywood love ballads & soft acoustic',
    query: 'romantic acoustic hindi melodic songs',
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)'
  },
  {
    id: 'dm_3',
    badge: 'Daily Mix 3',
    title: 'Chill Lo-Fi & Focus',
    desc: 'Mellow study beats, ambient lo-fi & peaceful rhythms',
    query: 'chill lofi peaceful calm hindi beats',
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
  },
  {
    id: 'dm_radar',
    badge: 'Release Radar',
    title: 'Fresh Mood Radar',
    desc: 'Trending new releases mapped to your emotion',
    query: 'latest trending new hindi bollywood songs',
    gradient: 'linear-gradient(135deg, #10b981, #059669)'
  }
];

function initDailyMixes() {
  const container = document.getElementById('home-daily-mixes-row');
  if (!container) return;
  container.innerHTML = '';

  DAILY_MIX_DEFINITIONS.forEach(dm => {
    const card = document.createElement('div');
    card.className = 'daily-mix-card';
    card.innerHTML = `
      <div class="daily-mix-cover" style="background:${dm.gradient};">
        <span class="daily-mix-cover-badge">${dm.badge}</span>
        <div class="daily-mix-cover-title">${escapeHtml(dm.title.split('&')[0])}</div>
      </div>
      <div class="daily-mix-title">${escapeHtml(dm.title)}</div>
      <div class="daily-mix-subtitle">${escapeHtml(dm.desc)}</div>
    `;
    card.onclick = async () => {
      showToast(`Loading ${dm.title}...`);
      try {
        const songs = await window.JSA.searchSongs(dm.query, 20);
        if (songs && songs.length > 0) {
          saavnPlaySong(songs[0], songs, 0);
          showToast(`Playing ${dm.title}`);
        } else {
          showToast('Could not load songs for this mix.');
        }
      } catch (e) {
        showToast('Error loading Daily Mix');
      }
    };
    container.appendChild(card);
  });
}

function initSoundscapesHub() {
  const container = document.getElementById('home-soundscapes-grid');
  if (!container || !window.JSA?.soundscapeConfigs) return;
  container.innerHTML = '';

  const configs = window.JSA.soundscapeConfigs;
  Object.keys(configs).forEach(key => {
    const item = configs[key];
    const card = document.createElement('div');
    card.className = 'soundscape-card';
    card.style.background = item.bg;
    card.innerHTML = `
      <div class="soundscape-card-top">
        <span class="soundscape-card-badge">Vibe Hub</span>
        <div class="soundscape-card-icon">
          <i data-lucide="${item.icon}"></i>
        </div>
      </div>
      <div class="soundscape-card-title">${escapeHtml(item.title)}</div>
    `;
    card.onclick = async () => {
      showToast(`Loading ${item.title} soundscape...`);
      try {
        const soundscape = await window.JSA.getSoundscapePlaylist(key, 25);
        if (soundscape && soundscape.songs && soundscape.songs.length > 0) {
          saavnPlaySong(soundscape.songs[0], soundscape.songs, 0);
          showToast(`Playing ${item.title} soundscape`);
        }
      } catch (err) {
        showToast(`Failed to load soundscape`);
      }
    };
    container.appendChild(card);
  });
  lucide.createIcons();
}

// ─────────────────────────────────────────────────────────────────
// SPOTIFY-STYLE UNIFIED PLAYBACK ENGINE & QUEUE CONTROLLER
// ─────────────────────────────────────────────────────────────────

let currentStreamRequestId = 0;

function updatePlayerLoadingState(isLoading) {
  const miniPlayIcon = document.getElementById('player-play-icon');
  const npPlayIcon = document.getElementById('np-play-icon');
  const playerPrev = document.getElementById('player-prev');
  const playerNext = document.getElementById('player-next');
  const npPrev = document.getElementById('np-prev');
  const npNext = document.getElementById('np-next');

  if (isLoading) {
    if (miniPlayIcon) miniPlayIcon.outerHTML = '<div class="spinner" id="player-play-icon" style="width:16px;height:16px;border-width:2px;border-top-color:#fff;"></div>';
    if (npPlayIcon) npPlayIcon.outerHTML = '<div class="spinner" id="np-play-icon" style="width:24px;height:24px;border-width:3px;border-top-color:#fff;"></div>';
    if (playerPrev) playerPrev.disabled = true;
    if (playerNext) playerNext.disabled = true;
    if (npPrev) npPrev.disabled = true;
    if (npNext) npNext.disabled = true;
  } else {
    const playIconTag = state.saavnIsPlaying ? 'pause' : 'play';
    const curMini = document.getElementById('player-play-icon');
    const curNp = document.getElementById('np-play-icon');
    if (curMini) curMini.outerHTML = `<i data-lucide="${playIconTag}" id="player-play-icon" style="width:18px;height:18px;fill:currentColor;margin-left:1px;"></i>`;
    if (curNp) curNp.outerHTML = `<i data-lucide="${playIconTag}" id="np-play-icon"></i>`;
    if (playerPrev) playerPrev.disabled = false;
    if (playerNext) playerNext.disabled = false;
    if (npPrev) npPrev.disabled = false;
    if (npNext) npNext.disabled = false;
    lucide.createIcons();
  }
}

// Play a song using HTML5 Audio with queue preservation, proxy fallback, and MediaSession sync
function saavnPlaySong(song, queue = null, index = null) {
  if (!song) return;
  const requestId = ++currentStreamRequestId;

  console.log('[MoodBeats Audio Pipeline] 🎵 Playing track:', {
    id: song.id,
    title: song.title || song.name,
    artist: song.artist || song.primaryArtists,
    hasStream: !!(song.downloadUrl || song.streamUrl)
  });

  // Set up Queue Context
  if (queue && Array.isArray(queue) && queue.length > 0) {
    state.playQueue = [...queue];
    state.originalQueue = [...queue];
    state.queueIndex = index !== null && index >= 0 ? index : state.playQueue.findIndex(s => s.id === song.id);
    if (state.queueIndex < 0) state.queueIndex = 0;
  } else if (state.playQueue.length === 0) {
    state.playQueue = [song];
    state.originalQueue = [song];
    state.queueIndex = 0;
  } else {
    const foundIdx = state.playQueue.findIndex(s => s.id === song.id);
    if (foundIdx >= 0) {
      state.queueIndex = foundIdx;
    } else {
      state.playQueue.splice(state.queueIndex + 1, 0, song);
      state.queueIndex = state.queueIndex + 1;
    }
  }

  // Stop any other active media players
  if (typeof ytPlayer !== 'undefined' && ytPlayer?.pauseVideo) {
    try { ytPlayer.pauseVideo(); } catch(e) {}
  }

  // Initialize Audio Element if not exists
  if (!state.saavnAudio) {
    state.saavnAudio = new Audio();
    state.saavnAudio.preload = 'auto';

    state.saavnAudio.addEventListener('loadstart', () => {
      console.log('[MoodBeats Audio] ⏳ Stream loading started');
    });

    state.saavnAudio.addEventListener('canplay', () => {
      console.log('[MoodBeats Audio] ▶️ canplay fired — Audio stream ready');
      updatePlayerLoadingState(false);
    });

    state.saavnAudio.addEventListener('playing', () => {
      state.saavnIsPlaying = true;
      state.isPlaying = true;
      updatePlayerLoadingState(false);
      updateSaavnPlayerUI(true);
      updateNPPlayPauseIcon(true);
    });

    state.saavnAudio.addEventListener('pause', () => {
      state.saavnIsPlaying = false;
      state.isPlaying = false;
      updateSaavnPlayerUI(false);
      updateNPPlayPauseIcon(false);
    });

    state.saavnAudio.addEventListener('ended', () => {
      console.log('[MoodBeats Audio] 🏁 Track ended naturally');
      if (state.repeatMode === 'one') {
        state.saavnAudio.currentTime = 0;
        state.saavnAudio.play().catch(() => {});
        return;
      }
      saavnNext(true);
    });

    state.saavnAudio.addEventListener('error', () => {
      const err = state.saavnAudio.error;
      console.error('[MoodBeats Audio Error] ❌ Media error occurred:', err ? err.code : 'Unknown');
      const currentUrl = state.saavnAudio.src;

      // Tier 1: Next CDN quality fallback
      const fallbackUrl = (window.JSA && state.saavnCurrentSong) ? window.JSA.nextFallbackUrl(state.saavnCurrentSong, currentUrl) : null;
      if (fallbackUrl) {
        showToast('🔄 Switching to fallback stream quality...');
        state.saavnAudio.src = fallbackUrl;
        state.saavnAudio.play().catch(() => {});
        return;
      }

      // Tier 2: Backend Audio Proxy Stream
      if (window.JSA && currentUrl && !currentUrl.includes('/api/stream/audio')) {
        const proxiedUrl = window.JSA.getProxiedAudioUrl(currentUrl);
        showToast('🔄 Routing through high-speed audio proxy...');
        state.saavnAudio.src = proxiedUrl;
        state.saavnAudio.play().catch(() => {});
        return;
      }

      // Tier 3: Auto-skip
      showToast('⚠️ Could not play track. Skipping to next...');
      saavnNext(true);
    });

    state.saavnAudio.addEventListener('timeupdate', updateSaavnProgress);
  }

  // Pre-update UI with current song details immediately
  state.saavnCurrentSong = song;
  state.currentPlayerSong = song;
  updateSaavnPlayerUI(true);
  syncNowPlayingPanel(song, state.queueIndex);
  renderQueueUI();

  // Async stream playback executor
  const executePlay = (streamUrl) => {
    if (requestId !== currentStreamRequestId) return; // Stale request discarded
    console.log('[MoodBeats Audio Pipeline] 🚀 Executing stream playback:', streamUrl);

    try {
      initEqualizer();
      if (state.eqContext && state.eqContext.state === 'suspended') {
        state.eqContext.resume().catch(() => {});
      }
    } catch(e) {}

    state.saavnAudio.src = streamUrl;
    state.saavnIsPlaying = true;
    state.isPlaying = true;

    state.saavnAudio.play().then(() => {
      updatePlayerLoadingState(false);
      notifyAndroidBridge('metadata', { title: song.title || song.name, artist: song.artist || song.primaryArtists });
      notifyAndroidBridge('playback', { isPlaying: true, position: 0, duration: song.duration || 0 });
    }).catch(playErr => {
      console.warn('[MoodBeats Audio] Play promise note:', playErr.message);
      if (window.JSA && streamUrl && !streamUrl.includes('/api/stream/audio')) {
        const proxied = window.JSA.getProxiedAudioUrl(streamUrl);
        state.saavnAudio.src = proxied;
        state.saavnAudio.play().catch(() => {});
      }
    });
  };

  let url = (window.JSA ? window.JSA.bestStreamUrl(song) : null) || song?.downloadUrl || song?.streamUrl;

  if (!url && song?.id && window.JSA?.getStream) {
    updatePlayerLoadingState(true);
    showToast('⏳ Loading high-quality stream...');
    window.JSA.getStream(song.id).then(streamData => {
      if (requestId !== currentStreamRequestId) return;
      if (streamData && streamData.streamUrl) {
        song.downloadUrl = streamData.streamUrl;
        song.streamFallbacks = streamData.fallbacks || [];
        executePlay(streamData.streamUrl);
      } else {
        updatePlayerLoadingState(false);
        showToast('⚠️ Stream URL not available');
      }
    }).catch(err => {
      if (requestId !== currentStreamRequestId) return;
      updatePlayerLoadingState(false);
      console.error('[MoodBeats Audio] Stream error:', err);
      showToast('⚠️ Failed to load stream URL');
    });
  } else if (url) {
    executePlay(url);
  } else {
    showToast('⚠️ Track URL not available');
    return;
  }

  // Add to recently played
  if (song && (song.title || song.name)) {
    addToRecentlyPlayed({
      id: song.id,
      title: song.title || song.name,
      artist: song.artist || song.primaryArtists || 'Artist',
      artwork: song.image || 'icon.png'
    });
  }

  // Update MediaSession with full Spotify-standard handlers
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: song.title || song.name,
      artist: song.artist || song.primaryArtists || 'Artist',
      album: song.album || song.genre || 'MoodBeats',
      artwork: song.image ? [{ src: song.image, sizes: '500x500', type: 'image/jpeg' }] : [{ src: 'icon.png', sizes: '192x192', type: 'image/png' }]
    });
    navigator.mediaSession.playbackState = 'playing';
    navigator.mediaSession.setActionHandler('play', () => saavnTogglePlay());
    navigator.mediaSession.setActionHandler('pause', () => saavnTogglePlay());
    navigator.mediaSession.setActionHandler('nexttrack', () => saavnNext());
    navigator.mediaSession.setActionHandler('previoustrack', () => saavnPrev());
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      if (state.saavnAudio && details.seekTime !== undefined) {
        state.saavnAudio.currentTime = details.seekTime;
        updateSaavnProgress();
      }
    });
  }
}

function saavnTogglePlay() {
  if (!state.saavnAudio) return;
  if (state.saavnIsPlaying) {
    state.saavnAudio.pause();
    state.saavnIsPlaying = false;
    state.isPlaying = false;
  } else {
    if (state.eqContext && state.eqContext.state === 'suspended') {
      state.eqContext.resume().catch(() => {});
    }
    state.saavnAudio.play().catch(e => console.warn('Play note:', e));
    state.saavnIsPlaying = true;
    state.isPlaying = true;
  }
  updateSaavnPlayerUI(state.saavnIsPlaying);
  updateNPPlayPauseIcon(state.saavnIsPlaying);
  notifyAndroidBridge('playback', {
    isPlaying: state.saavnIsPlaying,
    position: state.saavnAudio.currentTime || 0,
    duration: state.saavnAudio.duration || 0
  });
}

function saavnNext(isAutoEnded = false) {
  const q = state.playQueue;
  if (!q || q.length === 0) return;

  if (state.repeatMode === 'one' && isAutoEnded) {
    if (state.saavnAudio) {
      state.saavnAudio.currentTime = 0;
      state.saavnAudio.play().catch(() => {});
    }
    return;
  }

  if (state.queueIndex < q.length - 1) {
    state.queueIndex++;
    saavnPlaySong(q[state.queueIndex]);
  } else if (state.repeatMode === 'all' || !isAutoEnded) {
    state.queueIndex = 0;
    saavnPlaySong(q[0]);
  } else {
    // End of playlist in repeat off mode
    state.saavnIsPlaying = false;
    state.isPlaying = false;
    updateSaavnPlayerUI(false);
    updateNPPlayPauseIcon(false);
    notifyAndroidBridge('playback', { isPlaying: false, position: 0, duration: 0 });
  }
}

function saavnPrev() {
  if (!state.playQueue || state.playQueue.length === 0) return;

  // Spotify Standard Rule: If > 3 seconds in, restart track
  if (state.saavnAudio && state.saavnAudio.currentTime > 3) {
    state.saavnAudio.currentTime = 0;
    updateSaavnProgress();
    return;
  }

  if (state.queueIndex > 0) {
    state.queueIndex--;
    saavnPlaySong(state.playQueue[state.queueIndex]);
  } else if (state.repeatMode === 'all') {
    state.queueIndex = state.playQueue.length - 1;
    saavnPlaySong(state.playQueue[state.queueIndex]);
  } else {
    if (state.saavnAudio) state.saavnAudio.currentTime = 0;
    updateSaavnProgress();
  }
}

function toggleShuffle() {
  state.isShuffle = !state.isShuffle;
  const btn = document.getElementById('np-shuffle');

  if (state.isShuffle) {
    if (btn) btn.classList.add('active');
    if (state.playQueue && state.playQueue.length > 1) {
      if (!state.originalQueue || state.originalQueue.length === 0) {
        state.originalQueue = [...state.playQueue];
      }
      const played = state.playQueue.slice(0, state.queueIndex + 1);
      const remaining = state.playQueue.slice(state.queueIndex + 1);
      // Fisher-Yates shuffle remaining upcoming tracks
      for (let i = remaining.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
      }
      state.playQueue = [...played, ...remaining];
    }
    showToast('Shuffle: On 🔀');
  } else {
    if (btn) btn.classList.remove('active');
    if (state.originalQueue && state.originalQueue.length > 0) {
      const currentSong = state.playQueue[state.queueIndex];
      state.playQueue = [...state.originalQueue];
      const newIdx = state.playQueue.findIndex(s => s.id === currentSong?.id);
      state.queueIndex = newIdx >= 0 ? newIdx : 0;
    }
    showToast('Shuffle: Off ➡️');
  }
  renderQueueUI();
}

function cycleRepeatMode() {
  const btn = document.getElementById('np-repeat');
  const badge = document.getElementById('np-repeat-one-badge');

  if (state.repeatMode === 'off') {
    state.repeatMode = 'all';
    if (btn) btn.classList.add('active');
    if (badge) badge.style.display = 'none';
    showToast('Repeat: All 🔁');
  } else if (state.repeatMode === 'all') {
    state.repeatMode = 'one';
    if (btn) btn.classList.add('active');
    if (badge) badge.style.display = 'flex';
    showToast('Repeat: One 🔂');
  } else {
    state.repeatMode = 'off';
    if (btn) btn.classList.remove('active');
    if (badge) badge.style.display = 'none';
    showToast('Repeat: Off ➡️');
  }
}

function seekAudioToPercent(pct) {
  if (!state.saavnAudio || !state.saavnAudio.duration || isNaN(state.saavnAudio.duration)) return;
  const clamped = Math.max(0, Math.min(1, pct));
  state.saavnAudio.currentTime = clamped * state.saavnAudio.duration;
  updateSaavnProgress();
}

function updateSaavnProgress() {
  if (!state.saavnAudio || state.isDraggingScrubber) return;
  const curTime = state.saavnAudio.currentTime || 0;
  const duration = state.saavnAudio.duration || 0;
  const pct = duration > 0 ? (curTime / duration) * 100 : 0;

  // Mini Player Bar Scrubber Fill
  const fill = document.getElementById('player-progress-fill');
  if (fill) fill.style.width = pct + '%';

  // Now Playing Scrubber Fill & Thumb
  const npFill = document.getElementById('np-progress-fill');
  const npThumb = document.getElementById('np-progress-thumb');
  const npCur = document.getElementById('np-time-current');
  const npDur = document.getElementById('np-time-total');

  if (npFill) npFill.style.width = pct + '%';
  if (npThumb) npThumb.style.left = pct + '%';
  if (npCur) npCur.textContent = formatTime(curTime);
  if (npDur) npDur.textContent = formatTime(duration);
}

function updateSaavnPlayerUI(isPlaying) {
  const bar = document.getElementById('player-bar');
  if (bar) {
    bar.style.display = 'flex';
    bar.style.visibility = 'visible';
    bar.style.opacity = '1';
    void bar.offsetHeight;
    if (state.saavnCurrentSong) bar.classList.add('active');
    document.body.classList.add('player-active');
  }

  const playIcon = document.getElementById('player-play-icon');
  if (playIcon) playIcon.setAttribute('data-lucide', isPlaying ? 'pause' : 'play');

  const artEq = document.getElementById('player-art-eq');
  if (artEq) artEq.style.display = isPlaying ? 'flex' : 'none';

  const title = document.getElementById('player-title');
  const artist = document.getElementById('player-artist');
  const art = document.getElementById('player-art');

  if (state.saavnCurrentSong) {
    if (title) title.textContent = state.saavnCurrentSong.title || state.saavnCurrentSong.name || 'Song Title';
    if (artist) artist.textContent = state.saavnCurrentSong.artist || state.saavnCurrentSong.primaryArtists || 'Artist';
    if (art) {
      if (state.saavnCurrentSong.image) {
        art.innerHTML = `<img src="${state.saavnCurrentSong.image}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;">`;
      } else {
        art.innerHTML = `<i data-lucide="music-4" class="song-art-icon"></i>`;
      }
    }
  }

  updateAllLikeButtons(state.saavnCurrentSong);
  lucide.createIcons();
}

function updateAllLikeButtons(song) {
  if (!song) return;
  const isLiked = state.likedSongs.some(s => s.id === song.id);

  const miniLikeBtn = document.getElementById('player-bar-like');
  const npLikeBtn = document.getElementById('np-like');
  const npLikeIcon = document.getElementById('np-like-icon');

  if (miniLikeBtn) {
    miniLikeBtn.style.color = isLiked ? '#ef4444' : 'var(--text-muted)';
    const icon = miniLikeBtn.querySelector('svg') || miniLikeBtn.querySelector('i');
    if (icon) icon.style.fill = isLiked ? '#ef4444' : 'none';
  }

  if (npLikeBtn) {
    npLikeBtn.style.color = isLiked ? '#ef4444' : 'var(--text-muted)';
  }
  if (npLikeIcon) {
    npLikeIcon.style.fill = isLiked ? '#ef4444' : 'none';
  }
}

function syncNowPlayingPanel(song, index) {
  if (!song) return;
  const npTitle = document.getElementById('np-title');
  const npArtist = document.getElementById('np-artist');
  const npArt = document.getElementById('np-art');
  const npMoodBadge = document.getElementById('np-mood-badge');

  if (npTitle) npTitle.textContent = song.title || song.name || 'Song Title';
  if (npArtist) npArtist.textContent = song.artist || song.primaryArtists || 'Artist';

  if (npArt) {
    if (song.image) {
      npArt.style.background = 'none';
      npArt.innerHTML = `<img src="${song.image}" style="width:100%;height:100%;object-fit:cover;border-radius:20px;box-shadow:0 16px 40px rgba(0,0,0,0.6);">`;
    } else {
      npArt.innerHTML = `<i data-lucide="music-4" class="np-art-icon"></i>`;
    }
  }

  // Mood Badge
  if (npMoodBadge) {
    const moodTag = song.mood || state.selectedMood;
    if (moodTag) {
      npMoodBadge.textContent = `${getMoodEmoji(moodTag)} ${moodTag}`;
      npMoodBadge.style.display = 'inline-block';
    } else {
      npMoodBadge.style.display = 'none';
    }
  }

  updateAllLikeButtons(song);
  updateNPPlayPauseIcon(state.saavnIsPlaying);
  lucide.createIcons();

  if (document.getElementById('np-lyrics-drawer')?.style.display === 'flex') {
    loadLyricsForCurrentSong();
  }
  startVisualizer();
}

function updateNPPlayPauseIcon(isPlaying) {
  const icon = document.getElementById('np-play-icon');
  if (icon) {
    icon.setAttribute('data-lucide', isPlaying ? 'pause' : 'play');
    lucide.createIcons();
  }
}

// formatTime — canonical definition used throughout the app
function formatTime(secs) {
  if (!secs || isNaN(secs)) return '0:00';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// Handle search input
let saavnSearchTimer = null;
async function onSaavnSearch(query) {
  if (!query.trim()) {
    document.getElementById('saavn-results-list').innerHTML = '';
    const empty = document.getElementById('saavn-empty-state');
    if (empty) { empty.style.display = 'flex'; empty.querySelector('p').textContent = 'Search for any song above'; }
    return;
  }
  const loading = document.getElementById('saavn-loading');
  const empty = document.getElementById('saavn-empty-state');
  if (loading) loading.style.display = 'flex';
  if (empty) empty.style.display = 'none';

  try {
    const results = await saavnSearchSongs(query);
    state.saavnSearchResults = results;
    state.saavnSearchQuery = query;
    renderSaavnResults(results);
  } catch(e) {
    if (loading) loading.style.display = 'none';
    showToast('⚠️ Search failed: ' + e.message);
  }
}

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
let lastBackPressTimestamp = 0;

function closeTopmostOverlay() {
  // 1. Fullscreen Now Playing panel
  const npPanel = document.getElementById('now-playing-panel');
  if (npPanel && npPanel.classList.contains('open')) {
    closeNowPlaying();
    return true;
  }

  // 2. Lyrics drawer inside Now Playing
  const lyricsDrawer = document.getElementById('np-lyrics-drawer');
  if (lyricsDrawer && lyricsDrawer.style.display !== 'none') {
    lyricsDrawer.style.display = 'none';
    return true;
  }

  // 3. Open modal backdrops
  const openModals = Array.from(document.querySelectorAll('.modal-backdrop, .modal, .bottom-sheet, .drawer')).filter(m => {
    const style = window.getComputedStyle(m);
    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
  });

  if (openModals.length > 0) {
    const topModal = openModals[openModals.length - 1];
    topModal.style.display = 'none';
    topModal.classList.remove('open', 'active');
    return true;
  }

  // 4. Video drawer in mini player
  const videoDrawer = document.getElementById('player-video-drawer');
  if (videoDrawer && videoDrawer.classList.contains('open')) {
    videoDrawer.classList.remove('open');
    state.isVideoOpen = false;
    return true;
  }

  return false;
}

async function handleHardwareBackButton() {
  // 1. Priority 1: Close active modal, drawer, or full-screen Now Playing panel
  if (closeTopmostOverlay()) {
    return;
  }

  // 2. Priority 2: Stop camera if currently scanning
  if (state.currentView === 'view-webcam' && (state.isWebcamActive || state.webcamStream)) {
    stopWebcam();
    navigateTo('view-landing');
    return;
  }

  // 3. Priority 3: In-App Screen Navigation History Stack (Non-Home Screen)
  if (!state.navHistory) state.navHistory = ['view-landing'];

  if (state.navHistory.length > 1) {
    state.navHistory.pop(); // Remove current view from stack
    const prevView = state.navHistory[state.navHistory.length - 1];
    navigateTo(prevView, false); // Switch without pushing to history
    return;
  } else if (state.currentView && state.currentView !== 'view-landing') {
    navigateTo('view-landing', false);
    state.navHistory = ['view-landing'];
    return;
  }

  // 4. Priority 4: On Home Screen (view-landing) -> Double back press to exit
  const now = Date.now();
  if (now - lastBackPressTimestamp < 2000) {
    // Double press confirmed within 2 seconds: exit app
    // Note: Foreground Service background audio continues playback
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App) {
      window.Capacitor.Plugins.App.exitApp();
    }
  } else {
    lastBackPressTimestamp = now;
    showToast('Press back again to exit', 2000);
  }
}

function initHardwareBackListener() {
  // Capacitor Native Android Back Button Bridge
  if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App) {
    const App = window.Capacitor.Plugins.App;
    try {
      App.removeAllListeners?.().then(() => {
        App.addListener('backButton', () => {
          handleHardwareBackButton();
        });
        console.log('[MoodBeats] Capacitor backButton listener registered.');
      }).catch(() => {
        App.addListener('backButton', () => {
          handleHardwareBackButton();
        });
      });
    } catch(e) {
      App.addListener('backButton', () => {
        handleHardwareBackButton();
      });
    }
  }

  // Browser / Mobile Web History fallback
  window.addEventListener('popstate', () => {
    handleHardwareBackButton();
  });
}

function navigateTo(viewId, pushToHistory = true) {
  // Clear any existing pairing sync polling interval
  if (state.syncPollInterval) {
    clearInterval(state.syncPollInterval);
    state.syncPollInterval = null;
  }

  // Maintain in-app history stack
  if (!state.navHistory) state.navHistory = ['view-landing'];
  if (pushToHistory) {
    const currentTop = state.navHistory[state.navHistory.length - 1];
    if (currentTop !== viewId) {
      if (viewId === 'view-landing') {
        state.navHistory = ['view-landing'];
      } else {
        state.navHistory.push(viewId);
      }
    }
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
  if (!targetView) return;
  targetView.style.display = 'flex';
  void targetView.offsetHeight;
  targetView.classList.add('active');
  
  state.currentView = viewId;
  if (!state.isPhoneController && !['view-webcam', 'view-phone-controller'].includes(viewId)) {
    try {
      localStorage.setItem('moodbeats_last_view', viewId);
    } catch (e) {}
  }
  
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
          const serverUrl = getServerUrl();
          if (!serverUrl || serverUrl.includes('capacitor://') || serverUrl.includes('localhost') && !window._serverConfirmedAlive) {
            // Skip polling silently when running standalone without laptop server
            return;
          }
          const response = await fetch(`${serverUrl}/api/sync?session=${state.sessionId}`, { signal: AbortSignal.timeout(3000) });
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
// Use absolute URL so models resolve correctly under Capacitor's https://localhost scheme
// and under a regular browser dev server equally.
const MODEL_URL_LOCAL = `${window.location.origin}/models`;
const MODEL_URL_CDN = 'https://justadudewhohacks.github.io/face-api.js/models/';

// ─────────────────────────────────────────────────────────────
// Wait for face-api.js to fully load from CDN (handles async race)
// ─────────────────────────────────────────────────────────────
function waitForFaceApi(timeoutMs = 15000) {
  return new Promise((resolve, reject) => {
    if (typeof faceapi !== 'undefined' && faceapi.nets) {
      resolve();
      return;
    }
    const start = Date.now();
    const poll = setInterval(() => {
      if (typeof faceapi !== 'undefined' && faceapi.nets) {
        clearInterval(poll);
        resolve();
      } else if (Date.now() - start > timeoutMs) {
        clearInterval(poll);
        reject(new Error('face-api.js failed to load within timeout'));
      }
    }, 100);
  });
}

async function loadFaceModels() {
  if (state.faceModelsLoaded) return true;

  const isPhone = state.isPhoneController;
  const statusBox    = document.getElementById(isPhone ? 'phone-weights-status-box' : 'weights-status-box');
  const progressFill = document.getElementById(isPhone ? 'phone-weights-progress-fill' : 'weights-progress-fill');
  const progressText = document.getElementById(isPhone ? 'phone-weights-progress-text' : 'weights-progress-text');

  if (statusBox) statusBox.style.display = 'flex';

  // ── Wait for face-api.js CDN script to finish loading ──
  try {
    if (progressText) progressText.innerText = 'Waiting for face engine library...';
    await waitForFaceApi(12000);
  } catch (waitErr) {
    console.error('[MoodBeats] face-api.js did not load:', waitErr);
    if (progressText) progressText.innerText = 'Critical: Face library failed to load. Check internet.';
    return false;
  }

  const sourceSelect   = document.getElementById('settings-model-source');
  const selectedSource = sourceSelect ? sourceSelect.value : 'local';
  const modelUrl       = selectedSource === 'local' ? MODEL_URL_LOCAL : MODEL_URL_CDN;

  console.log(`[MoodBeats] Loading face model weights from: ${modelUrl}`);

  const tryLoad = async (url) => {
    if (progressText) progressText.innerText = 'Loading face detector (30%)...';
    if (progressFill) progressFill.style.width = '30%';
    await faceapi.nets.tinyFaceDetector.loadFromUri(url);

    if (progressText) progressText.innerText = 'Loading landmark predictor (60%)...';
    if (progressFill) progressFill.style.width = '60%';
    await faceapi.nets.faceLandmark68Net.loadFromUri(url);

    if (progressText) progressText.innerText = 'Loading emotion classifier (100%)...';
    if (progressFill) progressFill.style.width = '100%';
    await faceapi.nets.faceExpressionNet.loadFromUri(url);
  };

  try {
    await tryLoad(modelUrl);
    state.faceModelsLoaded = true;
    if (progressText) progressText.innerText = 'Expression engine ready!';
    setTimeout(() => { if (statusBox) statusBox.style.display = 'none'; }, 1200);
    return true;
  } catch (err) {
    console.error('[MoodBeats] Model load failed:', err);
    if (selectedSource === 'local') {
      try {
        if (progressText) progressText.innerText = 'Local models failed — trying CDN fallback...';
        await tryLoad(MODEL_URL_CDN);
        state.faceModelsLoaded = true;
        if (progressText) progressText.innerText = 'CDN models loaded!';
        setTimeout(() => { if (statusBox) statusBox.style.display = 'none'; }, 1200);
        return true;
      } catch (cdnErr) {
        console.error('[MoodBeats] CDN models also failed:', cdnErr);
      }
    }
    if (progressText) progressText.innerText = 'Critical: Face detection models failed to load.';
    return false;
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
  const loadingOverlay  = document.getElementById('camera-loading-overlay');
  const fallbackOverlay = document.getElementById('camera-fallback-overlay');
  const captureBtn      = document.getElementById('btn-capture-scan');
  const loadingText     = document.getElementById('camera-loading-text');
  const video           = document.getElementById('webcam-video');
  const select          = document.getElementById('camera-device-select');
  const errorTitle      = document.getElementById('camera-error-title');
  const errorMsg        = document.getElementById('camera-error-msg');

  // Reset UI
  loadingOverlay.classList.add('active');
  fallbackOverlay.classList.remove('active');
  captureBtn.disabled = true;
  if (loadingText) loadingText.innerText = 'Opening camera...';

  // Simulation mode shortcut
  const simulateSwitch = document.getElementById('settings-simulate-cam');
  if (simulateSwitch && simulateSwitch.checked) {
    if (loadingText) loadingText.innerText = 'Loading face engine (simulation mode)...';
    await loadFaceModels();
    setupSimulationOverlay();
    return;
  }

  // ── Guard: check mediaDevices API is available ──
  // On Android WebView it can be undefined if served over HTTP or in older versions
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    loadingOverlay.classList.remove('active');
    fallbackOverlay.classList.add('active');
    if (errorTitle) errorTitle.innerText = 'Camera API Not Available';
    if (errorMsg)   errorMsg.innerText   = 'Your browser/device does not support camera access. This may be an Android WebView restriction. Try enabling camera in the app settings or use Text Mood input instead.';
    return;
  }

  // ── Build constraints (try front camera, fall back to any) ──
  const selectedDeviceId = select ? select.value : '';
  let videoConstraints = { video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' } };
  if (selectedDeviceId) {
    videoConstraints = { video: { deviceId: { exact: selectedDeviceId }, width: { ideal: 640 }, height: { ideal: 480 } } };
  }

  // ── Helper: getUserMedia with a 12-second timeout ──
  // On Android WebView, if onPermissionRequest is not handled, getUserMedia hangs forever.
  // The timeout converts a silent hang into a visible error.
  function getUserMediaWithTimeout(constraints, timeoutMs = 12000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new DOMException(
          'Camera access timed out. On Android this usually means camera permission was not granted. ' +
          'Please allow camera access when the system asks, or go to Settings → Apps → MoodBeats → Permissions.',
          'TimeoutError'
        ));
      }, timeoutMs);

      navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        clearTimeout(timer);
        resolve(stream);
      }).catch(err => {
        clearTimeout(timer);
        reject(err);
      });
    });
  }

  if (loadingText) loadingText.innerText = 'Waiting for camera permission...';

  let stream;
  try {
    stream = await getUserMediaWithTimeout(videoConstraints);
  } catch (error) {
    // If front-camera failed due to constraints, retry with any camera
    if (error.name === 'OverconstrainedError' || error.name === 'ConstraintNotSatisfiedError') {
      try {
        if (loadingText) loadingText.innerText = 'Retrying with default camera...';
        stream = await getUserMediaWithTimeout({ video: true });
      } catch (retryErr) {
        error = retryErr;
      }
    }

    if (!stream) {
      console.error('[MoodBeats] Camera error:', error.name, error.message);
      loadingOverlay.classList.remove('active');
      fallbackOverlay.classList.add('active');

      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        if (errorTitle) errorTitle.innerText = 'Camera Permission Denied';
        if (errorMsg)   errorMsg.innerText   = /android/i.test(navigator.userAgent)
          ? 'Tap Retry and allow camera access when Android asks. Or go to: Settings → Apps → MoodBeats → Permissions → Camera → Allow.'
          : 'Allow camera in your browser address bar, then tap Retry.';
      } else if (error.name === 'TimeoutError') {
        if (errorTitle) errorTitle.innerText = 'Camera Timed Out';
        if (errorMsg)   errorMsg.innerText   = error.message;
      } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
        if (errorTitle) errorTitle.innerText = 'No Camera Found';
        if (errorMsg)   errorMsg.innerText   = 'No camera detected on this device. Use Text Mood input instead.';
      } else if (error.name === 'NotReadableError' || error.name === 'TrackStartError') {
        if (errorTitle) errorTitle.innerText = 'Camera In Use';
        if (errorMsg)   errorMsg.innerText   = 'Camera is being used by another app. Close it and tap Retry.';
      } else {
        if (errorTitle) errorTitle.innerText = 'Camera Error';
        if (errorMsg)   errorMsg.innerText   = `${error.name}: ${error.message || 'Could not open camera. Please tap Retry.'}`;
      }
      return;
    }
  }

  // ── Camera opened! Attach stream to video element ──
  if (loadingText) loadingText.innerText = 'Camera ready! Loading AI...';
  state.webcamStream = stream;
  video.setAttribute('playsinline', 'true');
  video.setAttribute('autoplay', 'true');
  video.muted = true;
  video.srcObject = stream;
  try { await video.play(); } catch (playErr) {
    console.warn('[MoodBeats] video.play() blocked:', playErr);
  }

  // Re-enumerate cameras with labels now that permission was granted
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(d => d.kind === 'videoinput');
    if (select) {
      select.innerHTML = '<option value="">Default Front Camera</option>';
      videoDevices.forEach((d, i) => {
        const opt = document.createElement('option');
        opt.value = d.deviceId;
        opt.text  = d.label || `Camera ${i + 1}`;
        select.appendChild(opt);
      });
    }
  } catch (e) { /* ignore enumerate errors */ }

  // ── Load face-api models while camera is already showing ──
  if (loadingText) loadingText.innerText = 'Loading face detection AI...';

  const modelSuccess = await loadFaceModels();

  // Once models are ready, hide the loading overlay
  loadingOverlay.classList.remove('active');

  if (!modelSuccess) {
    // Camera is open but models failed — still allow simulation
    captureBtn.disabled = false;
    const weightsBox = document.getElementById('weights-status-box');
    if (weightsBox) {
      weightsBox.style.display = 'flex';
      const wt = document.getElementById('weights-progress-text');
      if (wt) wt.innerText = 'Face AI unavailable. Tap Scan to use simulation mode.';
    }
    return;
  }

  captureBtn.disabled = false;
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
  const captureBtn    = document.getElementById('btn-capture-scan');
  const scanBar       = document.getElementById('scan-bar');
  const video         = document.getElementById('webcam-video');
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

  // Check faceapi is available before running detection
  if (typeof faceapi === 'undefined' || !state.faceModelsLoaded) {
    console.warn('[MoodBeats] faceapi not ready — falling back to simulation');
    await new Promise(resolve => setTimeout(resolve, 1200));
    runSimulatedScanResult('Face AI not ready. Using simulated analysis...');
    return;
  }

  const overlayCtx  = overlayCanvas.getContext('2d');
  let bestDetection = null;
  const scanStartTime = Date.now();
  const scanDuration  = 2500; // 2.5 second scan

  // ── Critical: match canvas to the video's *rendered* size ──
  const vw = video.videoWidth  || video.offsetWidth  || 640;
  const vh = video.videoHeight || video.offsetHeight || 480;
  overlayCanvas.width  = vw;
  overlayCanvas.height = vh;
  const displaySize = { width: vw, height: vh };
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
          case 'happy':    mappedMood = 'Happy';           break;
          case 'sad':      mappedMood = 'Sad';             break;
          case 'angry':    mappedMood = 'Angry';           break;
          case 'surprised':mappedMood = 'Energetic';       break;
          case 'fearful':
          case 'disgusted':mappedMood = 'Focused/Stressed';break;
          case 'neutral':
          default:         mappedMood = 'Relaxed';
        }

        navigateTo('view-results');
        renderResults(mappedMood, confidenceVal);
      } else {
        navigateTo('view-results');
        runSimulatedScanResult('No face detected — analyzing ambient vibes...');
      }
      return;
    }

    try {
      const detection = await faceapi
        .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions({ inputSize: 224, scoreThreshold: 0.15 }))
        .withFaceLandmarks()
        .withFaceExpressions();

      if (detection) {
        bestDetection = detection;
        overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
        const resized = faceapi.resizeResults(detection, displaySize);
        faceapi.draw.drawDetections(overlayCanvas, resized);
        faceapi.draw.drawFaceLandmarks(overlayCanvas, resized);
      }
    } catch (err) {
      console.error('[MoodBeats] Frame detection error:', err);
    }

    if (state.webcamStream) requestAnimationFrame(detectLoop);
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
// 7. Results & Playlist Rendering (JioSaavn Stream Engine)
// ==========================================
async function fetchJioSaavnMoodPlaylist(mood) {
  const baseTracks = INDIAN_PLAYLISTS[mood] || INDIAN_PLAYLISTS['Happy'];
  try {
    const resolved = await Promise.all(baseTracks.map(async (t) => {
      try {
        const query = `${t.title} ${t.artist}`;
        const data = await saavnSearchSongs(query, 1);
        if (data && data.length > 0 && (data[0].downloadUrl || data[0].streamUrl)) {
          return data[0];
        }
      } catch (e) {}
      return null;
    }));
    const valid = resolved.filter(Boolean);
    if (valid.length >= 3) return valid;
  } catch (err) {
    console.warn('JioSaavn mood playlist resolution error:', err);
  }
  
  try {
    const fallbackData = await saavnSearchSongs(`Bollywood ${mood} hits`, 12);
    if (fallbackData && fallbackData.length > 0) return fallbackData;
  } catch(e) {}

  return baseTracks;
}

async function renderResults(mood, confidence) {
  state.selectedMood = mood;
  
  const body = document.body;
  body.setAttribute('data-mood', MOOD_METADATA[mood].bg);
  
  const emoji = MOOD_METADATA[mood].emoji;
  const description = MOOD_METADATA[mood].desc;
  
  document.getElementById('result-mood-emoji').innerText = emoji;
  document.getElementById('result-mood-name').innerText = mood;
  document.getElementById('result-confidence-val').innerText = `${confidence}%`;
  document.getElementById('result-mood-description').innerText = description;

  document.getElementById('playlist-track-count').innerText = 'Resolving tracks...';
  
  // Show results loader while resolving audio URLs
  document.getElementById('results-loader').style.display = 'flex';
  document.getElementById('results-panel').style.display = 'none';

  const saavnTracks = await fetchJioSaavnMoodPlaylist(mood);
  state.currentGeneratedPlaylist = saavnTracks;
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
    card.setAttribute('data-id', song.id || song.videoId || index);
    card.style.animationDelay = `${index * 0.04}s`;
    
    const artBg = song.image 
      ? `url('${song.image}') center/cover no-repeat` 
      : `linear-gradient(135deg, hsl(${(index * 25) % 360}, 85%, 60%), hsl(${((index * 25) + 40) % 360}, 85%, 50%))`;
    
    card.innerHTML = `
      <div class="song-art-wrapper" style="background: ${artBg}">
        ${!song.image ? '<i data-lucide="music" class="song-art-icon"></i>' : ''}
        <div class="now-playing-indicator"><i data-lucide="volume-2"></i></div>
      </div>
      <div class="song-info">
        <h4 class="song-name">${escapeHtml(song.title)}</h4>
        <div class="song-artist-row">
          <span class="song-artist">${escapeHtml(song.artist)}</span>
          <span class="song-genre-tag">HD Audio</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:6px;">
        <button class="btn-song-action btn-add-pl" aria-label="Add to playlist" style="background:var(--surface-3); color:var(--text-color);">
          <i data-lucide="plus"></i>
        </button>
        <button class="btn-song-action btn-play-song" aria-label="Play directly">
          <i data-lucide="play"></i>
        </button>
      </div>
    `;
    
    card.querySelector('.btn-add-pl').onclick = (e) => {
      e.stopPropagation();
      openAddToPlaylistModal(song);
    };

    card.querySelector('.btn-play-song').onclick = (e) => {
      e.stopPropagation();
      playSong(song, playlistArray, index);
    };

    card.onclick = () => playSong(song, playlistArray, index);
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
// 8. YouTube IFrame API + Music Player Controller
// ==========================================

// Global YT player instance (created once, reused)
let ytPlayer = null;
let progressInterval = null;
let isSeeking = false;
let isYtAPIReady = false;

// Called automatically by YouTube IFrame API when ready
window.onYouTubeIframeAPIReady = function() {
  console.log('[MoodBeats] YouTube IFrame API ready.');
  isYtAPIReady = true;
};

// Pre-initialize YouTube Player on first user interaction to bypass mobile audio policies
function preInitYoutubePlayer() {
  if (ytPlayer || !isYtAPIReady) return;
  
  const placeholder = document.getElementById('youtube-player-placeholder');
  if (!placeholder) return;
  
  console.log('[MoodBeats] Pre-initializing YouTube player for mobile support...');
  placeholder.innerHTML = '<div id="yt-player-div"></div>';
  
  try {
    ytPlayer = new YT.Player('yt-player-div', {
      height: '100%',
      width:  '100%',
      videoId: 'y6Sxv-sUYtM', // Pharrell Williams - Happy (dummy initial video)
      playerVars: { 
        autoplay: 0, 
        controls: 0, 
        rel: 0, 
        modestbranding: 1, 
        playsinline: 1 
      },
      events: {
        onReady: (e) => {
          console.log('[MoodBeats] YT Player pre-initialized inline.');
        },
        onStateChange: (e) => {
          if (e.data === YT.PlayerState.ENDED) {
            stopProgressLoop();
            if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'none';
            notifyAndroidBridge('playback', { isPlaying: false, position: 0, duration: 0 });
            setTimeout(() => playNext(), 800);
          } else if (e.data === YT.PlayerState.PLAYING) {
            state.isPlaying = true;
            document.getElementById('player-play-icon').setAttribute('data-lucide', 'pause');
            lucide.createIcons();
            startProgressLoop();
            if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
            notifyAndroidBridge('playback', { isPlaying: true, position: 0, duration: 1 });
          } else if (e.data === YT.PlayerState.PAUSED) {
            state.isPlaying = false;
            document.getElementById('player-play-icon').setAttribute('data-lucide', 'play');
            lucide.createIcons();
            if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
            notifyAndroidBridge('playback', { isPlaying: false, position: 0, duration: 1 });
          }
        }
      }
    });
  } catch (err) {
    console.error('[MoodBeats] Error pre-initializing player:', err);
  }
}

// Bind to first click/touchstart anywhere on document
function handleFirstInteraction() {
  preInitYoutubePlayer();
  document.removeEventListener('click', handleFirstInteraction);
  document.removeEventListener('touchstart', handleFirstInteraction);
}
document.addEventListener('click', handleFirstInteraction);
document.addEventListener('touchstart', handleFirstInteraction);

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function startProgressLoop() {
  if (progressInterval) clearInterval(progressInterval);
  progressInterval = setInterval(() => {
    if (!ytPlayer || isSeeking) return;
    try {
      const current = ytPlayer.getCurrentTime();
      const total   = ytPlayer.getDuration();
      if (!total || total <= 0) return;
      
      const pct = (current / total) * 100;
      const fill  = document.getElementById('player-progress-fill');
      const thumb = document.getElementById('player-progress-thumb');
      if (fill)  fill.style.width = `${pct}%`;
      if (thumb) thumb.style.left = `${pct}%`;
      
      document.getElementById('player-time-current').innerText = formatTime(current);
      document.getElementById('player-time-total').innerText   = formatTime(total);
      
      // Sync Now Playing panel scrubber
      const npFill  = document.getElementById('np-progress-fill');
      const npThumb = document.getElementById('np-progress-thumb');
      if (npFill)  npFill.style.width = `${pct}%`;
      if (npThumb) npThumb.style.left = `${pct}%`;
      const npCur = document.getElementById('np-time-current');
      const npTot = document.getElementById('np-time-total');
      if (npCur) npCur.innerText = formatTime(current);
      if (npTot) npTot.innerText = formatTime(total);
      
      // Update system Media Session position slider
      updateMediaSessionPosition();
      
      // Notify native Android bridge of playback state and progress
      notifyAndroidBridge('playback', { isPlaying: state.isPlaying, position: current, duration: total });
    } catch(e) {}
  }, 500);
}

function stopProgressLoop() {
  if (progressInterval) { clearInterval(progressInterval); progressInterval = null; }
}

function initProgressBar() {
  const track = document.getElementById('player-progress-track');
  if (!track || track._bound) return;
  track._bound = true;
  
  function seekTo(e) {
    const rect = track.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    
    if (state.saavnAudio && (state.saavnIsPlaying || state.saavnCurrentSong)) {
      if (state.saavnAudio.duration) {
        state.saavnAudio.currentTime = pct * state.saavnAudio.duration;
      }
    } else if (typeof ytPlayer !== 'undefined' && ytPlayer && ytPlayer.getDuration) {
      try {
        const total = ytPlayer.getDuration();
        ytPlayer.seekTo(pct * total, true);
      } catch(e) {}
    }
    const fill = document.getElementById('player-progress-fill');
    const thumb = document.getElementById('player-progress-thumb');
    if (fill) fill.style.width = `${pct * 100}%`;
    if (thumb) thumb.style.left = `${pct * 100}%`;
  }
  
  track.addEventListener('mousedown',  (e) => { isSeeking = true; seekTo(e); });
  track.addEventListener('mousemove',  (e) => { if (isSeeking) seekTo(e); });
  track.addEventListener('mouseup',    ()  => { isSeeking = false; });
  track.addEventListener('mouseleave', ()  => { isSeeking = false; });
  track.addEventListener('touchstart', (e) => { isSeeking = true; seekTo(e); }, { passive: true });
  track.addEventListener('touchmove',  (e) => { seekTo(e); }, { passive: true });
  track.addEventListener('touchend',   ()  => { isSeeking = false; });
}

function initVolumeControl() {
  const slider = document.getElementById('player-volume-slider');
  const muteBtn = document.getElementById('player-mute');
  if (!slider || slider._bound) return;
  slider._bound = true;
  
  let lastVol = 80;
  
  slider.addEventListener('input', () => {
    const vol = parseInt(slider.value);
    lastVol = vol > 0 ? vol : lastVol;
    try { if (ytPlayer) ytPlayer.setVolume(vol); } catch(e) {}
    updateVolumeIcon(vol);
  });
  
  muteBtn.addEventListener('click', () => {
    try {
      if (!ytPlayer) return;
      const vol = parseInt(slider.value);
      if (vol > 0) {
        lastVol = vol;
        slider.value = 0;
        ytPlayer.setVolume(0);
        updateVolumeIcon(0);
      } else {
        slider.value = lastVol;
        ytPlayer.setVolume(lastVol);
        updateVolumeIcon(lastVol);
      }
    } catch(e) {}
  });
}

function updateVolumeIcon(vol) {
  const icon = document.getElementById('player-volume-icon');
  if (!icon) return;
  if (vol === 0)       icon.setAttribute('data-lucide', 'volume-x');
  else if (vol < 40)   icon.setAttribute('data-lucide', 'volume-1');
  else                 icon.setAttribute('data-lucide', 'volume-2');
  lucide.createIcons();
}

function createFreshPlayer(videoId, vol) {
  const placeholder = document.getElementById('youtube-player-placeholder');
  placeholder.innerHTML = '<div id="yt-player-div"></div>';
  
  try {
    ytPlayer = new YT.Player('yt-player-div', {
      height: '100%',
      width:  '100%',
      videoId: videoId,
      playerVars: { autoplay: 1, controls: 0, rel: 0, modestbranding: 1, playsinline: 1 },
      events: {
        onReady: (e) => {
          e.target.setVolume(vol);
          try { e.target.playVideo(); } catch(err){}
          startProgressLoop();
        },
        onStateChange: (e) => {
          if (e.data === YT.PlayerState.ENDED) {
            stopProgressLoop();
            if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'none';
            notifyAndroidBridge('playback', { isPlaying: false, position: 0, duration: 0 });
            setTimeout(() => playNext(), 800);
          } else if (e.data === YT.PlayerState.PLAYING) {
            state.isPlaying = true;
            document.getElementById('player-play-icon').setAttribute('data-lucide', 'pause');
            lucide.createIcons();
            startProgressLoop();
            if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
            notifyAndroidBridge('playback', { isPlaying: true, position: 0, duration: 1 });
          } else if (e.data === YT.PlayerState.PAUSED) {
            state.isPlaying = false;
            document.getElementById('player-play-icon').setAttribute('data-lucide', 'play');
            lucide.createIcons();
            if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
            notifyAndroidBridge('playback', { isPlaying: false, position: 0, duration: 1 });
          }
        }
      }
    });
  } catch(err) {
    console.error('[MoodBeats] Failed to create fresh player:', err);
  }
}

function playSong(song, playlist, index) {
  state.currentPlayerSong = song;
  state.currentPlayerPlaylist = playlist || [];
  state.currentPlayerIndex = index || 0;
  state.isPlaying = true;
  
  if (song && song.videoId) {
    state.recentlyPlayedIds = [song.videoId, ...state.recentlyPlayedIds].slice(0, 5);
  }
  
  updateMediaSession(song);
  
  const playerBar = document.getElementById('player-bar');
  if (playerBar) {
    playerBar.style.display = 'flex';
    void playerBar.offsetHeight;
    playerBar.classList.add('active');
    document.body.classList.add('player-active');
  }
  
  const titleEl = document.getElementById('player-title');
  const artistEl = document.getElementById('player-artist');
  const artEl = document.getElementById('player-art');
  
  if (titleEl) titleEl.innerText = song.title;
  if (artistEl) artistEl.innerText = song.artist;
  
  if (artEl) {
    if (song.image) {
      artEl.style.background = 'none';
      artEl.innerHTML = `<img src="${song.image}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`;
    } else {
      const hueStart = (index * 25) % 360;
      const hueEnd   = (hueStart + 40) % 360;
      artEl.style.background = `linear-gradient(135deg, hsl(${hueStart}, 85%, 60%), hsl(${hueEnd}, 85%, 50%))`;
      artEl.innerHTML = `<i data-lucide="music" class="song-art-icon"></i>`;
    }
  }
  
  const ytLink = document.getElementById('player-yt-link');
  if (ytLink) ytLink.href = song.videoId ? `https://www.youtube.com/watch?v=${song.videoId}` : '#';
  const spotifyLink = document.getElementById('player-spotify-link');
  if (spotifyLink) spotifyLink.href = `https://open.spotify.com/search/${encodeURIComponent(song.title + ' ' + song.artist)}`;
  
  const playIcon = document.getElementById('player-play-icon');
  if (playIcon) playIcon.setAttribute('data-lucide', 'pause');

  // Branch 1: JioSaavn Track (Audio Streaming)
  if (song.downloadUrl || song.streamUrl || (song.id && !song.videoId)) {
    if (typeof ytPlayer !== 'undefined' && ytPlayer?.pauseVideo) {
      try { ytPlayer.pauseVideo(); } catch(e) {}
    }
    saavnPlaySong(song);
  } else if (song.videoId) {
    // Branch 2: YouTube Video Track
    if (state.saavnAudio) {
      state.saavnAudio.pause();
      state.saavnIsPlaying = false;
    }
    const vol = parseInt(document.getElementById('player-volume-slider')?.value ?? 80);
    if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
      try {
        ytPlayer.loadVideoById(song.videoId);
        ytPlayer.setVolume(vol);
        ytPlayer.playVideo();
      } catch (e) {
        createFreshPlayer(song.videoId, vol);
      }
    } else {
      createFreshPlayer(song.videoId, vol);
    }
    setTimeout(() => startProgressLoop(), 1000);
  }
  
  syncNowPlayingPanel(song, index);
  initProgressBar();
  initVolumeControl();
  lucide.createIcons();
}

// ==========================================
// Now Playing Panel
// ==========================================
function syncNowPlayingPanel(song, index) {
  if (!song) return;
  const npTitle  = document.getElementById('np-title');
  const npArtist = document.getElementById('np-artist');
  const npArt    = document.getElementById('np-art');
  const npYt     = document.getElementById('np-yt-link');
  const npSp     = document.getElementById('np-spotify-link');
  
  if (npTitle)  npTitle.innerText  = song.title;
  if (npArtist) npArtist.innerText = song.artist;
  
  if (npArt) {
    const hue1 = (index * 25) % 360;
    const hue2 = (hue1 + 40) % 360;
    npArt.style.background = `linear-gradient(135deg, hsl(${hue1}, 85%, 60%), hsl(${hue2}, 85%, 50%))`;
  }
  
  if (npYt) npYt.href = `https://www.youtube.com/watch?v=${song.videoId}`;
  if (npSp) npSp.href = `https://open.spotify.com/search/${encodeURIComponent(song.title + ' ' + song.artist)}`;
  
  // Sync play icon in NP panel
  const npPlayIcon = document.getElementById('np-play-icon');
  if (npPlayIcon) npPlayIcon.setAttribute('data-lucide', 'pause');
  
  // Art playing animation
  if (npArt) npArt.classList.add('playing');

  // Phase 3: Refresh lyrics if drawer is open
  if (document.getElementById('np-lyrics-drawer')?.style.display === 'flex') {
    loadLyricsForCurrentSong();
  }

  // Phase 3: Start Visualizer
  startVisualizer();
}

function openNowPlaying() {
  const panel = document.getElementById('now-playing-panel');
  if (!panel) return;
  panel.classList.add('open');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();

  // Phase 3: Start visualizer tick when NP opens
  startVisualizer();
}

function closeNowPlaying() {
  const panel = document.getElementById('now-playing-panel');
  if (!panel) return;
  panel.classList.remove('open');
  document.body.style.overflow = '';
}

function updateNPPlayPauseIcon(isPlaying) {
  const icon = document.getElementById('np-play-icon');
  if (icon) {
    icon.setAttribute('data-lucide', isPlaying ? 'pause' : 'play');
    lucide.createIcons();
  }
  const npArt = document.getElementById('np-art');
  if (npArt) {
    if (isPlaying) npArt.classList.add('playing');
    else npArt.classList.remove('playing');
  }
}

// ==========================================
// Media Session Controls (Lockscreen / Spotify Vibe)
// ==========================================
function updateMediaSession(song) {
  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: song.title,
        artist: song.artist,
        album: 'MoodBeats',
        artwork: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon.png', sizes: '512x512', type: 'image/png' }
        ]
      });

      navigator.mediaSession.playbackState = 'playing';

      // Lockscreen actions
      navigator.mediaSession.setActionHandler('play', () => {
        if (!state.isPlaying) togglePlayPause();
      });
      navigator.mediaSession.setActionHandler('pause', () => {
        if (state.isPlaying) togglePlayPause();
      });
      navigator.mediaSession.setActionHandler('previoustrack', () => {
        playPrev();
      });
      navigator.mediaSession.setActionHandler('nexttrack', () => {
        playNext();
      });
      
      // Support seekto slider on notification drawer
      if ('setActionHandler' in navigator.mediaSession) {
        navigator.mediaSession.setActionHandler('seekto', (details) => {
          if (ytPlayer && typeof ytPlayer.seekTo === 'function') {
            ytPlayer.seekTo(details.seekTime, true);
            if (document.getElementById('player-progress-fill')) {
              const total = ytPlayer.getDuration() || 1;
              const pct = (details.seekTime / total) * 100;
              document.getElementById('player-progress-fill').style.width = `${pct}%`;
              document.getElementById('player-progress-thumb').style.left = `${pct}%`;
            }
          }
        });
      }
    } catch (e) {
      console.error('[MediaSession] Error updating metadata:', e);
    }
  }
  
  // Notify native Android bridge of metadata change
  notifyAndroidBridge('metadata', { title: song.title, artist: song.artist });
}

function updateMediaSessionPosition() {
  if ('mediaSession' in navigator && 'setPositionState' in navigator.mediaSession) {
    if (ytPlayer && typeof ytPlayer.getCurrentTime === 'function') {
      try {
        const current = ytPlayer.getCurrentTime() || 0;
        const total = ytPlayer.getDuration() || 0;
        if (total > 0 && current <= total) {
          navigator.mediaSession.setPositionState({
            duration: total,
            playbackRate: ytPlayer.getPlaybackRate() || 1,
            position: current
          });
        }
      } catch (e) {
        console.error('[MediaSession] Error setting position state:', e);
      }
    }
  }
}

// Android Audio Bridge helper
function notifyAndroidBridge(action, data) {
  if (window.AndroidAudioBridge) {
    try {
      if (action === 'metadata') {
        window.AndroidAudioBridge.updateMetadata(data.title, data.artist);
      } else if (action === 'playback') {
        window.AndroidAudioBridge.updatePlaybackState(data.isPlaying, data.position, data.duration);
      }
    } catch (e) {
      console.warn('[AndroidBridge] Error notifying bridge:', e);
    }
  }
}

function renderRecentlyPlayed() {
  // Legacy player bar chips (hidden in mini player now)
  let container = document.getElementById('recently-played-bar');
  if (container) {
    container.innerHTML = '';
    container.style.display = 'none';
  }

  // Home view recently played horizontal row
  const homeSection = document.getElementById('home-recently-section');
  const homeRow     = document.getElementById('home-recently-row');
  
  if (!homeRow || state.recentlyPlayed.length < 1) {
    if (homeSection) homeSection.style.display = 'none';
    return;
  }
  
  homeSection.style.display = 'block';
  homeRow.innerHTML = '';
  
  state.recentlyPlayed.forEach((song, i) => {
    const hue1 = (i * 37) % 360;
    const hue2 = (hue1 + 40) % 360;
    const card = document.createElement('div');
    card.className = 'recently-song-card';
    card.title = `${song.title} — ${song.artist}`;
    card.innerHTML = `
      <div class="recently-card-art" style="background:linear-gradient(135deg,hsl(${hue1},80%,60%),hsl(${hue2},80%,45%));">
        <i data-lucide="music" style="width:28px;height:28px;color:#fff;"></i>
      </div>
      <div class="recently-card-info">
        <div class="recently-card-title">${song.title}</div>
        <div class="recently-card-artist">${song.artist}</div>
      </div>`;
    card.onclick = () => {
      const idx = state.currentPlayerPlaylist
        ? state.currentPlayerPlaylist.findIndex(s => s.videoId === song.videoId)
        : -1;
      playSong(song,
        idx !== -1 ? state.currentPlayerPlaylist : state.recentlyPlayed,
        idx !== -1 ? idx : state.recentlyPlayed.indexOf(song));
    };
    homeRow.appendChild(card);
  });
  
  lucide.createIcons();
}


function togglePlayPause() {
  if (state.saavnCurrentSong && state.saavnAudio) {
    saavnTogglePlay();
    return;
  }
  const playIcon   = document.getElementById('player-play-icon');
  if (!ytPlayer) return;
  
  state.isPlaying = !state.isPlaying;
  
  if (state.isPlaying) {
    ytPlayer.playVideo();
    playIcon.setAttribute('data-lucide', 'pause');
    startProgressLoop();
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
    notifyAndroidBridge('playback', { isPlaying: true, position: ytPlayer.getCurrentTime() || 0, duration: ytPlayer.getDuration() || 1 });
  } else {
    ytPlayer.pauseVideo();
    playIcon.setAttribute('data-lucide', 'play');
    stopProgressLoop();
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
    notifyAndroidBridge('playback', { isPlaying: false, position: ytPlayer.getCurrentTime() || 0, duration: ytPlayer.getDuration() || 1 });
  }
  updateNPPlayPauseIcon(state.isPlaying);
  lucide.createIcons();
}

// ==========================================
// Genre Similarity Scoring (Vibe Matching)
// ==========================================
const GENRE_FAMILIES = [
  // Upbeat / Dance
  ['pop', 'dance', 'disco', 'funk', 'k-pop', 'bollywood dance', 'nu-disco', 'edm', 'house', 'trance'],
  // Rock / Metal
  ['rock', 'metal', 'grunge', 'punk', 'nu-metal', 'alt metal', 'rap metal', 'heavy metal', 'hard rock', 'bollywood rock'],
  // Hip-Hop / Urban
  ['hip-hop', 'rap', 'trap', 'r&b', 'soul', 'motown', 'bollywood dance'],
  // Electronic / Synth
  ['electronic', 'edm', 'synth', 'trance', 'ambient', 'trip-hop', 'lofi', 'indie pop'],
  // Acoustic / Folk / Indie
  ['indie', 'folk', 'acoustic', 'indie folk', 'indie pop', 'indie ambient', 'indie rock'],
  // Classical / Cinematic
  ['classical', 'neoclassical', 'cinematic', 'soundtrack', 'modern classical', 'piano', 'impressionist'],
  // Bollywood / Sufi
  ['bollywood', 'sufi', 'devotional', 'bollywood pop', 'bollywood sad', 'bollywood folk', 'bollywood romantic'],
  // Jazz / Blues / Vintage
  ['jazz', 'blues', 'soul', 'vocal', 'motown', '50s pop', '60s pop'],
  // Ballad / Soft
  ['ballad', 'pop ballad', 'soft rock', 'vocal pop', 'art pop']
];

function getGenreScore(genre1, genre2) {
  if (!genre1 || !genre2) return 0;
  const g1 = genre1.toLowerCase();
  const g2 = genre2.toLowerCase();
  if (g1 === g2) return 3; // Exact match
  // Partial match (one contains the other)
  if (g1.includes(g2) || g2.includes(g1)) return 2;
  // Same genre family
  for (const family of GENRE_FAMILIES) {
    const in1 = family.some(f => g1.includes(f));
    const in2 = family.some(f => g2.includes(f));
    if (in1 && in2) return 1;
  }
  return 0;
}

function playNext() {
  if (state.saavnCurrentSong && state.playQueue && state.playQueue.length > 0) {
    saavnNext();
    return;
  }
  const playlist = state.currentPlayerPlaylist;
  if (playlist.length === 0) return;
  
  const currentSong = state.currentPlayerSong;
  const currentGenre = currentSong ? currentSong.genre : '';
  const recentIds = state.recentlyPlayedIds;
  
  // Build candidate list: all songs except the very last played
  const candidates = playlist
    .map((song, idx) => ({ song, idx }))
    .filter(({ song }) => song.videoId !== (currentSong && currentSong.videoId));
  
  if (candidates.length === 0) {
    // Only 1 song in playlist — just replay it
    playSong(playlist[0], playlist, 0);
    return;
  }
  
  // Score each candidate: higher = better vibe match, penalise recently played
  const scored = candidates.map(({ song, idx }) => {
    let score = getGenreScore(currentGenre, song.genre);
    // Penalise songs played recently (within last 5)
    const recentPenalty = recentIds.indexOf(song.videoId);
    if (recentPenalty !== -1) {
      score -= (5 - recentPenalty) * 2; // heavier penalty for more recently played
    }
    return { song, idx, score };
  });
  
  // Sort: highest score first; break ties randomly for variety
  scored.sort((a, b) => b.score - a.score || Math.random() - 0.5);
  
  const best = scored[0];
  playSong(best.song, playlist, best.idx);
}

function playPrev() {
  if (state.saavnCurrentSong && state.playQueue && state.playQueue.length > 0) {
    saavnPrev();
    return;
  }
  if (state.currentPlayerPlaylist.length === 0) return;
  // If more than 3s into the song, restart it; otherwise go to previous
  let prevIdx;
  try {
    if (ytPlayer && ytPlayer.getCurrentTime() > 3) {
      ytPlayer.seekTo(0, true);
      startProgressLoop();
      return;
    }
  } catch(e) {}
  prevIdx = (state.currentPlayerIndex - 1 + state.currentPlayerPlaylist.length) % state.currentPlayerPlaylist.length;
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
  if (playerBar) {
    playerBar.classList.remove('active');
    setTimeout(() => {
      playerBar.style.display = 'none';
    }, 400);
  }
  document.body.classList.remove('player-active');
  state.isVideoOpen = false;
  state.isPlaying = false;
  if (state.saavnAudio) {
    state.saavnAudio.pause();
    state.saavnIsPlaying = false;
  }
  if (typeof ytPlayer !== 'undefined' && ytPlayer?.pauseVideo) {
    try { ytPlayer.pauseVideo(); } catch(e) {}
  }
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

  // Sync scan with Supabase Cloud
  if (window.MoodSupabase && typeof window.MoodSupabase.syncMoodScan === 'function') {
    window.MoodSupabase.syncMoodScan(mood, confidence);
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
// 9. Unified Search, Artist Profile & Playlist Engine
// ==========================================

// --- Playlist Management Engine ---
function saveUserPlaylists() {
  localStorage.setItem('moodbeats_user_playlists', JSON.stringify(state.userPlaylists));
}

function createUserPlaylist(name) {
  if (!name || !name.trim()) return null;
  const newPlaylist = {
    id: 'pl_' + Date.now(),
    name: name.trim(),
    created: new Date().toLocaleDateString(),
    tracks: []
  };
  state.userPlaylists.push(newPlaylist);
  saveUserPlaylists();
  showToast(`Playlist "${newPlaylist.name}" created!`);
  renderLibraryView();
  return newPlaylist;
}

function addSongToPlaylist(playlistId, song) {
  const pl = state.userPlaylists.find(p => p.id === playlistId);
  if (!pl) return;
  
  const exists = pl.tracks.some(t => (t.id && song.id && t.id === song.id) || (t.videoId && song.videoId && t.videoId === song.videoId));
  if (exists) {
    showToast(`Already in "${pl.name}"`);
    return;
  }
  
  pl.tracks.push(song);
  saveUserPlaylists();
  showToast(`Added to "${pl.name}"!`);
  
  // Sync to Supabase user_playlist_tracks in cloud
  if (window.MoodSupabase && window.MoodSupabase.addTrackToPlaylist) {
    window.MoodSupabase.addTrackToPlaylist(playlistId, {
      id: song.id || song.videoId,
      title: song.title || song.name,
      artist: song.artist || song.primaryArtists || 'Artist',
      image: song.image || 'icon.png',
      streamUrl: song.downloadUrl || song.streamUrl || ''
    }).catch(e => console.warn('[Supabase] Playlist track sync note:', e));
  }

  if (state.currentPlaylistView && state.currentPlaylistView.id === playlistId) {
    renderPlaylistDetailView(pl);
  }
  renderLibraryView();
}

function removeSongFromPlaylist(playlistId, trackIndex) {
  const pl = state.userPlaylists.find(p => p.id === playlistId);
  if (!pl) return;
  pl.tracks.splice(trackIndex, 1);
  saveUserPlaylists();
  showToast(`Removed from "${pl.name}"`);
  renderPlaylistDetailView(pl);
  renderLibraryView();
}

function movePlaylistTrack(playlistId, fromIdx, toIdx) {
  const pl = state.userPlaylists.find(p => p.id === playlistId);
  if (!pl || !pl.tracks) return;
  if (fromIdx < 0 || fromIdx >= pl.tracks.length || toIdx < 0 || toIdx >= pl.tracks.length) return;

  const [moved] = pl.tracks.splice(fromIdx, 1);
  pl.tracks.splice(toIdx, 0, moved);
  saveUserPlaylists();
  renderPlaylistDetailView(pl);
}

function deleteUserPlaylist(playlistId) {
  const pl = state.userPlaylists.find(p => p.id === playlistId);
  if (!pl) return;
  if (confirm(`Delete playlist "${pl.name}"?`)) {
    state.userPlaylists = state.userPlaylists.filter(p => p.id !== playlistId);
    saveUserPlaylists();
    showToast(`Deleted "${pl.name}"`);
    navigateTo('view-history');
    renderLibraryView();
  }
}

// --- Modals ---
function openAddToPlaylistModal(song) {
  state.songToAddModal = song;
  const modal = document.getElementById('add-to-playlist-modal');
  const titleEl = document.getElementById('add-modal-song-title');
  const artistEl = document.getElementById('add-modal-song-artist');
  const artEl = document.getElementById('add-modal-song-art');
  const listEl = document.getElementById('modal-playlists-list');

  if (titleEl) titleEl.innerText = song.title || 'Track';
  if (artistEl) artistEl.innerText = song.artist || 'Artist';
  if (artEl) artEl.src = song.image || (song.videoId ? `https://i.ytimg.com/vi/${song.videoId}/hqdefault.jpg` : 'icon.png');

  listEl.innerHTML = '';
  if (state.userPlaylists.length === 0) {
    listEl.innerHTML = '<p style="font-size:12px; color:var(--text-muted); text-align:center; padding:10px;">No playlists created yet.</p>';
  } else {
    state.userPlaylists.forEach(pl => {
      const item = document.createElement('div');
      item.className = 'playlist-select-item';
      item.innerHTML = `
        <div>
          <div style="font-weight:600; font-size:14px; color:var(--text-color);">${escapeHtml(pl.name)}</div>
          <div style="font-size:11px; color:var(--text-muted);">${pl.tracks.length} tracks</div>
        </div>
        <button class="btn btn-primary btn-sm" style="padding:4px 12px; font-size:12px;">+ Add</button>
      `;
      item.onclick = () => {
        addSongToPlaylist(pl.id, song);
        closeAddToPlaylistModal();
      };
      listEl.appendChild(item);
    });
  }

  modal.style.display = 'flex';
  lucide.createIcons();
}

function closeAddToPlaylistModal() {
  const modal = document.getElementById('add-to-playlist-modal');
  if (modal) modal.style.display = 'none';
  state.songToAddModal = null;
}

function openCreatePlaylistModal() {
  const modal = document.getElementById('create-playlist-modal');
  const input = document.getElementById('create-playlist-name-input');
  if (input) input.value = '';
  if (modal) modal.style.display = 'flex';
  if (input) input.focus();
}

function closeCreatePlaylistModal() {
  const modal = document.getElementById('create-playlist-modal');
  if (modal) modal.style.display = 'none';
}

// --- Search View Initialiser ---
// Called by navigateTo() every time the user switches to view-search.
// Resets state to the empty/prompt screen and optionally re-fires a search
// if the input already contains text (e.g. user navigated away and came back).
function initSearchView() {
  const searchInput = document.getElementById('search-input');
  const loadingState = document.getElementById('search-loading-state');
  const emptyState = document.getElementById('search-empty-state');
  const resultsContent = document.getElementById('search-results-content');

  // Reset filter pills to "All"
  document.querySelectorAll('#search-filter-pills .filter-pill').forEach(p => p.classList.remove('active'));
  const allPill = document.querySelector('#search-filter-pills .filter-pill[data-filter="all"]');
  if (allPill) allPill.classList.add('active');
  state.activeSearchFilter = 'all';

  const currentQuery = searchInput ? searchInput.value.trim() : '';

  if (currentQuery) {
    // Re-trigger search so results are fresh when coming back to the view
    onUnifiedSearch(currentQuery);
  } else {
    // Show the empty/prompt state
    if (loadingState) loadingState.style.display = 'none';
    if (emptyState) emptyState.style.display = 'flex';
    if (resultsContent) resultsContent.style.display = 'none';
  }

  // Auto-focus the search bar for immediate typing
  if (searchInput) setTimeout(() => searchInput.focus(), 200);
}

// --- Unified Search Controller ---
let unifiedSearchTimer = null;

async function onUnifiedSearch(queryRaw) {
  const query = queryRaw.trim();
  const loadingState = document.getElementById('search-loading-state');
  const emptyState = document.getElementById('search-empty-state');
  const noResultsState = document.getElementById('search-no-results-state');
  const resultsContent = document.getElementById('search-results-content');
  const clearBtn = document.getElementById('btn-clear-search');

  if (clearBtn) clearBtn.style.display = query ? 'flex' : 'none';

  if (!query) {
    if (loadingState) loadingState.style.display = 'none';
    if (emptyState) emptyState.style.display = 'flex';
    if (noResultsState) noResultsState.style.display = 'none';
    if (resultsContent) resultsContent.style.display = 'none';
    return;
  }

  if (loadingState) loadingState.style.display = 'flex';
  if (emptyState) emptyState.style.display = 'none';
  if (noResultsState) noResultsState.style.display = 'none';
  if (resultsContent) resultsContent.style.display = 'none';

  try {
    let artists = [];
    let songs = [];
    let albums = [];
    let playlists = [];

    if (window.JSA) {
      try {
        const jsaData = await window.JSA.searchAll(query);
        artists = jsaData.artists || [];
        songs = jsaData.songs || [];
        albums = jsaData.albums || [];
        playlists = jsaData.playlists || [];
      } catch(e) {
        console.warn('window.JSA.searchAll failed, trying fallback:', e);
      }
    }

    // Fallback 1: searchSongs via JSA
    if (songs.length === 0 && window.JSA) {
      try {
        songs = await window.JSA.searchSongs(query, 15);
      } catch(e) {}
    }

    // Fallback 2: Try raw JSA fetch with a direct path (goes through server proxy)
    if (songs.length === 0 && artists.length === 0 && window.JSA) {
      try {
        const raw = await window.JSA.fetch(`/api/search?query=${encodeURIComponent(query)}`);
        const list = raw?.data?.songs?.results || raw?.results?.songs?.results || [];
        if (list.length > 0) {
          songs = list.map(s => ({
            id: s.id,
            title: jsaDecodeEntities ? jsaDecodeEntities(s.name || s.title || 'Unknown') : (s.name || 'Unknown'),
            artist: (s.artists?.primary?.map(a => a.name).join(', ')) || s.primaryArtists || 'Unknown Artist',
            album: s.album?.name || '',
            duration: Number(s.duration) || 0,
            image: s.image?.[2]?.url || s.image?.[1]?.url || s.image?.[0]?.url || 'icon.png',
            downloadUrl: s.downloadUrl?.[4]?.url || s.downloadUrl?.[3]?.url || null,
          }));
        }
      } catch(e) {
        console.warn('Fallback 2 JSA direct search failed:', e);
      }
    }

    // YouTube global search
    let ytVideos = [];
    try {
      ytVideos = await searchYouTubeGlobally(query);
    } catch(e) {}

    // User custom playlists matching search
    const userPlaylists = state.userPlaylists.filter(pl => pl.name.toLowerCase().includes(query.toLowerCase()));
    const allPlaylists = [...userPlaylists, ...playlists];

    state.lastSearchData = { artists, songs, ytVideos, playlists: allPlaylists, query };

    if (loadingState) loadingState.style.display = 'none';

    renderUnifiedSearchResults(artists, songs, ytVideos, allPlaylists);
  } catch (err) {
    console.error('Search failed:', err);
    if (loadingState) loadingState.style.display = 'none';
    if (noResultsState) {
      noResultsState.style.display = 'flex';
      const txt = document.getElementById('search-no-results-text');
      if (txt) txt.innerText = `No results found for "${query}". Please check your internet connection or try another search term.`;
    }
  }
}

function renderUnifiedSearchResults(artists = [], songs = [], ytVideos = [], playlists = []) {
  const artistsSec = document.getElementById('section-artists');
  const artistsList = document.getElementById('search-artists-list');
  const songsSec = document.getElementById('section-songs');
  const songsList = document.getElementById('search-songs-list');
  const ytSec = document.getElementById('section-youtube');
  const ytList = document.getElementById('search-youtube-list');
  const plSec = document.getElementById('section-playlists');
  const plList = document.getElementById('search-playlists-list');

  const resultsContent = document.getElementById('search-results-content');
  const noResultsState = document.getElementById('search-no-results-state');

  const filter = state.activeSearchFilter || 'all';

  const showArtists = (filter === 'all' || filter === 'artists') && artists.length > 0;
  const showSongs   = (filter === 'all' || filter === 'songs') && songs.length > 0;
  const showYt      = (filter === 'all' || filter === 'youtube') && ytVideos.length > 0;
  const showPl      = (filter === 'all' || filter === 'playlists') && playlists.length > 0;

  // 1. Artists (Spotify Style)
  if (showArtists) {
    artistsSec.style.display = 'block';
    artistsList.innerHTML = '';
    artists.forEach(artist => {
      const card = document.createElement('div');
      card.className = 'artist-card';
      card.innerHTML = `
        <img class="artist-avatar" src="${artist.image}" onerror="this.src='icon.png'">
        <div class="artist-card-name">${escapeHtml(artist.name)}</div>
        <div class="artist-role-badge">Artist</div>
      `;
      card.onclick = () => openArtistProfile(artist.id, artist.name, artist.image);
      artistsList.appendChild(card);
    });
  } else {
    if (artistsSec) artistsSec.style.display = 'none';
  }

  // 2. Songs (Audio Stream)
  if (showSongs) {
    songsSec.style.display = 'block';
    songsList.innerHTML = '';
    songs.forEach((song, idx) => {
      const isLiked = isSongLiked(song.id || song);
      const row = document.createElement('div');
      row.className = 'track-row';
      row.innerHTML = `
        <img class="track-art" src="${song.image || 'icon.png'}" onerror="this.src='icon.png'">
        <div class="track-info">
          <div class="track-title">${escapeHtml(song.title)}</div>
          <div class="track-artist">${escapeHtml(song.artist)}</div>
        </div>
        <div class="track-duration">${formatTime(song.duration)}</div>
        <div class="track-actions">
          <button class="btn-track-action btn-card-like ${isLiked ? 'liked' : ''}" title="${isLiked ? 'Unlike' : 'Like'}">
            <i data-lucide="heart" style="${isLiked ? 'fill:#ec4899;color:#ec4899;' : ''}"></i>
          </button>
          <button class="btn-track-action btn-card-more" title="More options">
            <i data-lucide="more-vertical"></i>
          </button>
          <button class="btn-track-action btn-play-tr" title="Play">
            <i data-lucide="play" fill="currentColor"></i>
          </button>
        </div>
      `;
      row.querySelector('.btn-card-like').onclick = (e) => {
        e.stopPropagation();
        toggleLikeSong(song);
        const icon = row.querySelector('.btn-card-like i');
        const nowLiked = isSongLiked(song.id || song);
        if (nowLiked) {
          row.querySelector('.btn-card-like').classList.add('liked');
          if (icon) { icon.style.fill = '#ec4899'; icon.style.color = '#ec4899'; }
        } else {
          row.querySelector('.btn-card-like').classList.remove('liked');
          if (icon) { icon.style.fill = ''; icon.style.color = ''; }
        }
      };
      row.querySelector('.btn-card-more').onclick = (e) => {
        e.stopPropagation();
        openSongOptionsModal(song);
      };
      row.querySelector('.btn-play-tr').onclick = (e) => {
        e.stopPropagation();
        saavnPlaySong(song, songs, idx);
      };
      row.onclick = () => saavnPlaySong(song, songs, idx);
      songsList.appendChild(row);
    });
  } else {
    if (songsSec) songsSec.style.display = 'none';
  }

  // 3. YouTube Videos
  if (showYt) {
    ytSec.style.display = 'block';
    ytList.innerHTML = '';
    ytVideos.forEach((video, idx) => {
      const isLiked = isSongLiked(video.id || video);
      const row = document.createElement('div');
      row.className = 'track-row';
      row.innerHTML = `
        <img class="track-art" src="https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg" onerror="this.src='icon.png'">
        <div class="track-info">
          <div class="track-title">${escapeHtml(video.title)}</div>
          <div class="track-artist">${escapeHtml(video.artist)} • YouTube</div>
        </div>
        <div class="track-actions">
          <button class="btn-track-action btn-card-like ${isLiked ? 'liked' : ''}" title="${isLiked ? 'Unlike' : 'Like'}">
            <i data-lucide="heart" style="${isLiked ? 'fill:#ec4899;color:#ec4899;' : ''}"></i>
          </button>
          <button class="btn-track-action btn-card-more" title="More options">
            <i data-lucide="more-vertical"></i>
          </button>
          <button class="btn-track-action btn-play-tr" title="Play">
            <i data-lucide="play" fill="currentColor"></i>
          </button>
        </div>
      `;
      row.querySelector('.btn-card-like').onclick = (e) => {
        e.stopPropagation();
        toggleLikeSong(video);
      };
      row.querySelector('.btn-card-more').onclick = (e) => {
        e.stopPropagation();
        openSongOptionsModal({
          title: video.title,
          artist: video.artist,
          videoId: video.videoId,
          image: `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`
        });
      };
      row.querySelector('.btn-play-tr').onclick = (e) => {
        e.stopPropagation();
        playSong(video, ytVideos, idx);
      };
      row.onclick = () => playSong(video, ytVideos, idx);
      ytList.appendChild(row);
    });
  } else {
    if (ytSec) ytSec.style.display = 'none';
  }

  // 4. Playlists
  if (showPl) {
    plSec.style.display = 'block';
    plList.innerHTML = '';
    playlists.forEach(pl => {
      const card = document.createElement('div');
      card.className = 'playlist-card';
      card.innerHTML = `
        <div class="playlist-card-art">
          <i data-lucide="music-3"></i>
        </div>
        <div class="playlist-card-title">${escapeHtml(pl.name)}</div>
        <div class="playlist-card-count">${pl.tracks ? pl.tracks.length : (pl.songCount || 0)} tracks</div>
      `;
      card.onclick = () => openPlaylistView(pl.id);
      plList.appendChild(card);
    });
  } else {
    if (plSec) plSec.style.display = 'none';
  }

  const hasAnyVisible = showArtists || showSongs || showYt || showPl;

  if (hasAnyVisible) {
    if (resultsContent) resultsContent.style.display = 'flex';
    if (noResultsState) noResultsState.style.display = 'none';
  } else {
    if (resultsContent) resultsContent.style.display = 'none';
    if (noResultsState) {
      noResultsState.style.display = 'flex';
      const txt = document.getElementById('search-no-results-text');
      if (txt) {
        txt.innerText = filter !== 'all'
          ? `No ${filter} found matching your query.`
          : 'Try searching for song titles, artist names like Arijit Singh, or movie albums.';
      }
    }
  }

  lucide.createIcons();
}

// --- Artist Profile Controller ---
async function openArtistProfile(artistId, artistName, artistImage) {
  navigateTo('view-artist-detail');
  
  const heroName = document.getElementById('artist-hero-name');
  const heroArt = document.getElementById('artist-hero-art');
  const heroMeta = document.getElementById('artist-hero-meta');
  const tracksList = document.getElementById('artist-top-tracks-list');

  if (heroName) heroName.innerText = artistName || 'Artist';
  if (heroArt) heroArt.src = artistImage || 'icon.png';
  if (heroMeta) heroMeta.innerText = 'Loading top tracks...';
  if (tracksList) tracksList.innerHTML = '<div style="padding:30px; text-align:center;"><div class="spinner" style="width:28px;height:28px;"></div></div>';

  try {
    let artistData = null;
    try {
      artistData = await saavnGetArtistDetails(artistId);
    } catch(e) {
      const songs = await saavnSearchSongs(artistName, 15);
      artistData = {
        name: artistName,
        image: artistImage,
        topSongs: songs
      };
    }

    if (heroMeta) heroMeta.innerText = `${artistData.topSongs.length} Popular Tracks • Verified Artist`;
    state.currentArtistView = artistData;

    renderArtistTopTracks(artistData.topSongs);
  } catch (err) {
    console.error('Failed to load artist details:', err);
    if (heroMeta) heroMeta.innerText = 'Popular Artist';
  }
}

function renderArtistTopTracks(songs) {
  const container = document.getElementById('artist-top-tracks-list');
  container.innerHTML = '';

  songs.forEach((song, idx) => {
    const row = document.createElement('div');
    row.className = 'track-row';
    row.innerHTML = `
      <div style="width:20px; font-weight:700; font-size:13px; color:var(--text-muted); text-align:center;">${idx + 1}</div>
      <img class="track-art" src="${song.image || 'icon.png'}" onerror="this.src='icon.png'">
      <div class="track-info">
        <div class="track-title">${escapeHtml(song.title)}</div>
        <div class="track-artist">${escapeHtml(song.artist)}</div>
      </div>
      <div class="track-duration">${formatTime(song.duration)}</div>
      <div class="track-actions">
        <button class="btn-track-action btn-add-pl" title="Add to Playlist">
          <i data-lucide="plus"></i>
        </button>
        <button class="btn-track-action btn-play-tr" title="Play">
          <i data-lucide="play" fill="currentColor"></i>
        </button>
      </div>
    `;
    row.querySelector('.btn-add-pl').onclick = (e) => {
      e.stopPropagation();
      openAddToPlaylistModal(song);
    };
    row.querySelector('.btn-play-tr').onclick = (e) => {
      e.stopPropagation();
      playSong(song, songs, idx);
    };
    row.onclick = () => playSong(song, songs, idx);
    container.appendChild(row);
  });

  const playAllBtn = document.getElementById('btn-artist-play-all');
  if (playAllBtn) {
    playAllBtn.onclick = () => {
      if (songs.length > 0) playSong(songs[0], songs, 0);
    };
  }

  lucide.createIcons();
}

// --- Playlist Detail Controller ---
async function openPlaylistView(playlistId, isJSaavn = false) {
  navigateTo('view-playlist-detail');
  const heroName = document.getElementById('playlist-hero-name');
  const heroDesc = document.getElementById('playlist-hero-desc');
  const tracksContainer = document.getElementById('playlist-tracks-list');

  if (heroName) heroName.innerText = 'Loading playlist...';
  if (heroDesc) heroDesc.innerText = 'Fetching tracks...';
  if (tracksContainer) tracksContainer.innerHTML = '<div style="padding:40px;text-align:center;"><div class="spinner" style="width:28px;height:28px;"></div></div>';

  let pl = state.userPlaylists.find(p => p.id === playlistId);

  if (!pl && window.JSA) {
    try {
      const apiPl = await window.JSA.getPlaylist(playlistId).catch(() => window.JSA.getAlbum(playlistId));
      if (apiPl) {
        pl = {
          id: apiPl.id,
          name: apiPl.name || apiPl.displayLabel || 'Playlist',
          created: 'JioSaavn',
          tracks: apiPl.songs || [],
          isJSaavn: true
        };
      }
    } catch (e) {
      console.warn('Failed to fetch JioSaavn playlist:', e);
    }
  }

  if (!pl) {
    if (heroName) heroName.innerText = 'Playlist Not Found';
    if (heroDesc) heroDesc.innerText = 'Could not load tracks.';
    if (tracksContainer) tracksContainer.innerHTML = '';
    return;
  }

  state.currentPlaylistView = pl;
  renderPlaylistDetailView(pl);
}

function renderPlaylistDetailView(pl) {
  const heroName = document.getElementById('playlist-hero-name');
  const heroDesc = document.getElementById('playlist-hero-desc');
  const tracksContainer = document.getElementById('playlist-tracks-list');

  if (heroName) heroName.innerText = pl.name;
  if (heroDesc) heroDesc.innerText = `${pl.tracks.length} Tracks • ${pl.isJSaavn ? 'JioSaavn Featured' : 'Created ' + pl.created}`;

  if (!tracksContainer) return;
  tracksContainer.innerHTML = '';

  if (pl.tracks.length === 0) {
    tracksContainer.innerHTML = `
      <div class="empty-state-box glass">
        <i data-lucide="music" class="empty-state-icon"></i>
        <h3>Playlist is empty</h3>
        <p>Search for songs or artists and tap "+" to add songs to this playlist.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  pl.tracks.forEach((song, idx) => {
    const isLiked = isSongLiked(song.id || song);
    const row = document.createElement('div');
    row.className = 'track-row';
    row.innerHTML = `
      ${!pl.isJSaavn ? `
      <div style="display:flex; flex-direction:column; gap:2px; margin-right:4px;">
        <button class="track-reorder-btn btn-mv-up" title="Move Up" ${idx === 0 ? 'disabled style="opacity:0.3;"' : ''}>
          <i data-lucide="chevron-up" style="width:14px;height:14px;"></i>
        </button>
        <button class="track-reorder-btn btn-mv-down" title="Move Down" ${idx === pl.tracks.length - 1 ? 'disabled style="opacity:0.3;"' : ''}>
          <i data-lucide="chevron-down" style="width:14px;height:14px;"></i>
        </button>
      </div>` : ''}
      <img class="track-art" src="${song.image || 'icon.png'}" onerror="this.src='icon.png'">
      <div class="track-info">
        <div class="track-title">${escapeHtml(song.title)}</div>
        <div class="track-artist">${escapeHtml(song.artist)}</div>
      </div>
      <div class="track-duration">${formatTime(song.duration)}</div>
      <div class="track-actions">
        <button class="btn-track-action btn-card-like ${isLiked ? 'liked' : ''}" title="${isLiked ? 'Unlike' : 'Like'}">
          <i data-lucide="heart" style="${isLiked ? 'fill:#ec4899;color:#ec4899;' : ''}"></i>
        </button>
        <button class="btn-track-action btn-card-more" title="More options">
          <i data-lucide="more-vertical"></i>
        </button>
        ${!pl.isJSaavn ? `
        <button class="btn-track-action btn-rm-tr" title="Remove Track" style="color:#ef4444;">
          <i data-lucide="trash-2"></i>
        </button>` : ''}
        <button class="btn-track-action btn-play-tr" title="Play">
          <i data-lucide="play" fill="currentColor"></i>
        </button>
      </div>
    `;

    if (!pl.isJSaavn) {
      const upBtn = row.querySelector('.btn-mv-up');
      const downBtn = row.querySelector('.btn-mv-down');
      if (upBtn && idx > 0) {
        upBtn.onclick = (e) => {
          e.stopPropagation();
          movePlaylistTrack(pl.id, idx, idx - 1);
        };
      }
      if (downBtn && idx < pl.tracks.length - 1) {
        downBtn.onclick = (e) => {
          e.stopPropagation();
          movePlaylistTrack(pl.id, idx, idx + 1);
        };
      }
      const rmBtn = row.querySelector('.btn-rm-tr');
      if (rmBtn) {
        rmBtn.onclick = (e) => {
          e.stopPropagation();
          removeSongFromPlaylist(pl.id, idx);
        };
      }
    }

    row.querySelector('.btn-card-like').onclick = (e) => {
      e.stopPropagation();
      toggleLikeSong(song);
      const icon = row.querySelector('.btn-card-like i');
      const nowLiked = isSongLiked(song.id || song);
      if (nowLiked) {
        row.querySelector('.btn-card-like').classList.add('liked');
        if (icon) { icon.style.fill = '#ec4899'; icon.style.color = '#ec4899'; }
      } else {
        row.querySelector('.btn-card-like').classList.remove('liked');
        if (icon) { icon.style.fill = ''; icon.style.color = ''; }
      }
    };

    row.querySelector('.btn-card-more').onclick = (e) => {
      e.stopPropagation();
      openSongOptionsModal(song);
    };

    row.querySelector('.btn-play-tr').onclick = (e) => {
      e.stopPropagation();
      saavnPlaySong(song, pl.tracks, idx);
    };
    row.onclick = () => saavnPlaySong(song, pl.tracks, idx);
    tracksContainer.appendChild(row);
  });

  const playBtn = document.getElementById('btn-playlist-play');
  if (playBtn) {
    playBtn.onclick = () => {
      if (pl.tracks.length > 0) playSong(pl.tracks[0], pl.tracks, 0);
    };
  }

  const deleteBtn = document.getElementById('btn-playlist-delete');
  if (deleteBtn) {
    if (pl.isJSaavn) {
      deleteBtn.style.display = 'none';
    } else {
      deleteBtn.style.display = 'flex';
      deleteBtn.onclick = () => {
        deleteUserPlaylist(pl.id);
      };
    }
  }

  lucide.createIcons();
}

// --- Library Controller ---
async function renderLibraryView() {
  const plGrid = document.getElementById('library-playlists-grid');
  const histList = document.getElementById('history-large-list');
  const filter = state.activeLibFilter || 'all';

  if (plGrid) {
    if (filter === 'all' || filter === 'playlists') {
      plGrid.style.display = 'grid';
      plGrid.innerHTML = '';

      if (state.userPlaylists.length === 0) {
        plGrid.innerHTML = `
          <div class="empty-state-box glass" style="grid-column:1/-1;">
            <i data-lucide="music-3" class="empty-state-icon"></i>
            <h3>No custom playlists yet</h3>
            <p>Tap "New Playlist" above to create your first playlist!</p>
          </div>
        `;
      } else {
        state.userPlaylists.forEach(pl => {
          const card = document.createElement('div');
          card.className = 'playlist-card';
          card.innerHTML = `
            <div class="playlist-card-art">
              <i data-lucide="music-3"></i>
            </div>
            <div class="playlist-card-title">${escapeHtml(pl.name)}</div>
            <div class="playlist-card-count">${pl.tracks.length} tracks</div>
          `;
          card.onclick = () => openPlaylistView(pl.id);
          plGrid.appendChild(card);
        });
      }

      // Add Featured JioSaavn Playlists section
      if (window.JSA) {
        try {
          const featured = await window.JSA.getFeaturedPlaylists();
          if (featured && featured.length > 0) {
            const header = document.createElement('div');
            header.style.gridColumn = '1/-1';
            header.style.marginTop = '24px';
            header.innerHTML = '<h3 style="font-size:16px; font-weight:700; color:var(--text-color);">Trending Playlists</h3>';
            plGrid.appendChild(header);

            featured.forEach(f => {
              const card = document.createElement('div');
              card.className = 'playlist-card';
              card.innerHTML = `
                <img class="playlist-card-art" src="${f.image || 'icon.png'}" style="object-fit:cover;" onerror="this.src='icon.png'">
                <div class="playlist-card-title">${escapeHtml(f.displayLabel || f.name)}</div>
                <div class="playlist-card-count">${f.songs?.length || f.songCount || 0} tracks</div>
              `;
              card.onclick = () => openPlaylistView(f.id, true);
              plGrid.appendChild(card);
            });
          }
        } catch (e) {
          console.warn('Failed to load featured JioSaavn playlists:', e);
        }
      }
    } else {
      plGrid.style.display = 'none';
    }
  }

  if (histList) {
    if (filter === 'all' || filter === 'history') {
      histList.style.display = 'flex';
      populateHistoryLarge();
    } else {
      histList.style.display = 'none';
    }
  }

  lucide.createIcons();
}

function filterSongs() {
  const queryRaw = document.getElementById('search-input').value;
  const query = queryRaw.trim().toLowerCase();
  const clearBtn = document.getElementById('btn-clear-search');
  
  if (queryRaw.trim() !== '') {
    clearBtn.style.display = 'flex';
  } else {
    clearBtn.style.display = 'none';
  }
  
  // If in YouTube search mode, run the debounced API fetch
  if (state.searchMode === 'youtube') {
    if (state.ytSearchTimeout) {
      clearTimeout(state.ytSearchTimeout);
    }
    
    if (!query) {
      renderSearchResults([]);
      return;
    }
    
    const statusBox = document.getElementById('yt-search-status');
    if (statusBox) statusBox.style.display = 'flex';
    
    state.ytSearchTimeout = setTimeout(async () => {
      try {
        const data = await searchYouTubeGlobally(query);
        if (state.searchMode === 'youtube' && document.getElementById('search-input').value.trim().toLowerCase() === query) {
          renderSearchResults(data);
        }
      } catch (err) {
        console.error("YouTube search failed:", err);
      } finally {
        if (statusBox) statusBox.style.display = 'none';
      }
    }, 250); // 250ms debounce (down from 500ms) for snappier results
    return;
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
    const response = await fetch(`${getServerUrl()}/api/ip`);
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
    video.onloadedmetadata = () => {
      loadingOverlay.classList.remove('active');
      captureBtn.disabled = false;
    };
    
    // Safety fallback: if metadata event is missed or blocked, force unlock UI after 1.5s
    const fallbackTimer = setTimeout(() => {
      loadingOverlay.classList.remove('active');
      captureBtn.disabled = false;
    }, 1500);
    
    state.phoneWebcamStream = stream;
    video.setAttribute('playsinline', 'true');
    video.srcObject = stream;
    
    try {
      await video.play();
    } catch(playErr) {
      console.warn("Phone webcam video.play() failed:", playErr);
    }
    
    // Clear fallback timer if already unlocked
    video.addEventListener('playing', () => clearTimeout(fallbackTimer), { once: true });
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
        await fetch(`${getServerUrl()}/api/sync?session=${state.phoneSessionId}`, {
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
    state.isDarkMode = forcedState;
  } else {
    state.isDarkMode = !state.isDarkMode;
  }
  
  if (state.isDarkMode) {
    body.classList.add('dark-theme');
    if (themeSwitch) themeSwitch.checked = true;
  } else {
    body.classList.remove('dark-theme');
    if (themeSwitch) themeSwitch.checked = false;
  }
}

function getServerUrl() {
  const saved = localStorage.getItem('moodbeats_server_url');
  if (saved) return saved.replace(/\/$/, '');
  const origin = window.location.origin;
  if (origin && !origin.includes('localhost') && !origin.includes('127.0.0.1') && !origin.includes('capacitor://') && origin.startsWith('http')) {
    return origin.replace(/\/$/, '');
  }
  return 'https://moodbeats-tan.vercel.app';
}

// ==========================================
// Phase 3: Audio Visualizer
// ==========================================
let visualizerActive = false;

function startVisualizer() {
  if (visualizerActive) return;
  visualizerActive = true;
  requestAnimationFrame(visualizerTick);
}

function visualizerTick() {
  const panel = document.getElementById('now-playing-panel');
  if (!panel || !panel.classList.contains('open')) {
    visualizerActive = false;
    return;
  }
  drawVisualizerFrame();
  requestAnimationFrame(visualizerTick);
}

function drawVisualizerFrame() {
  const canvas = document.getElementById('np-visualizer-canvas');
  if (!canvas) return;

  if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  }

  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const cx = width / 2;
  const cy = height / 2;

  // Clear with semi-transparent background for trails
  ctx.fillStyle = 'rgba(15, 23, 42, 0.2)';
  ctx.fillRect(0, 0, width, height);

  const artEl = document.getElementById('np-art');
  const baseRadius = artEl ? (artEl.offsetWidth / 2 + 5) : 135;

  if (state.eqAnalyser && state.saavnIsPlaying) {
    const bufferLength = state.eqAnalyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    state.eqAnalyser.getByteFrequencyData(dataArray);

    // Sum first few frequency bins for bass pulse
    let bass = 0;
    const numBassBins = 8;
    for (let i = 0; i < numBassBins; i++) {
      bass += dataArray[i];
    }
    bass /= numBassBins;

    // Draw soft bass glow aura
    const pulseIntensity = (bass / 255) * 35;
    if (pulseIntensity > 0) {
      ctx.shadowBlur = pulseIntensity + 15;
      ctx.shadowColor = 'rgba(168, 85, 247, 0.5)';
      
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(168, 85, 247, 0.04)';
      ctx.fill();
      ctx.shadowBlur = 0; // reset
    }

    // Draw radial audio frequency lines
    const numBars = 80;
    const angleStep = (Math.PI * 2) / numBars;

    for (let i = 0; i < numBars; i++) {
      const angle = i * angleStep;
      // Focus on lower to mid frequencies
      const binIdx = Math.floor((i / numBars) * (bufferLength * 0.75));
      const val = dataArray[binIdx] || 0;
      
      const barLength = (val / 255) * 50;
      
      const startX = cx + Math.cos(angle) * baseRadius;
      const startY = cy + Math.sin(angle) * baseRadius;
      const endX = cx + Math.cos(angle) * (baseRadius + barLength);
      const endY = cy + Math.sin(angle) * (baseRadius + barLength);

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      
      const grad = ctx.createLinearGradient(startX, startY, endX, endY);
      grad.addColorStop(0, 'rgba(168, 85, 247, 0.9)'); // Purple
      grad.addColorStop(1, 'rgba(236, 72, 153, 0.9)'); // Pink
      
      ctx.strokeStyle = grad;
      ctx.lineWidth = 3.5;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
  } else {
    // Idle state: Draw a slow breathing ring
    const time = Date.now() * 0.002;
    const breath = Math.sin(time) * 4;
    ctx.beginPath();
    ctx.arc(cx, cy, baseRadius + breath, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.25)';
    ctx.lineWidth = 2.5;
    ctx.stroke();
  }
}

// ==========================================
// Phase 3: Spotify-style Lyrics Drawer
// ==========================================
async function toggleLyricsDrawer() {
  const drawer = document.getElementById('np-lyrics-drawer');
  if (!drawer) return;

  const btn = document.getElementById('np-lyrics-btn');
  const isHidden = drawer.style.display === 'none' || !drawer.style.display;

  if (isHidden) {
    drawer.style.display = 'flex';
    if (btn) btn.classList.add('text-accent');
    await loadLyricsForCurrentSong();
  } else {
    drawer.style.display = 'none';
    if (btn) btn.classList.remove('text-accent');
  }
}

async function loadLyricsForCurrentSong() {
  const drawer = document.getElementById('np-lyrics-drawer');
  if (!drawer || drawer.style.display === 'none') return;

  const content = document.getElementById('np-lyrics-content');
  if (!content) return;

  content.innerHTML = '<p class="lyrics-loading">Loading lyrics...</p>';

  const song = state.saavnCurrentSong || state.currentPlayerSong;
  if (!song || !song.id) {
    content.innerHTML = '<p class="lyrics-empty">Lyrics are only available for JioSaavn streaming audio tracks.</p>';
    return;
  }

  try {
    const lyrics = await window.JSA.getLyrics(song.id);
    if (lyrics && lyrics.trim()) {
      const cleanText = lyrics.replace(/<br\s*\/?>/gi, '\n');
      const lines = cleanText.split('\n');
      let html = '';
      lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed) {
          html += `<div class="lyrics-line">${escapeHtml(trimmed)}</div>`;
        }
      });
      content.innerHTML = html || '<p class="lyrics-empty">Lyrics not available for this song</p>';
    } else {
      content.innerHTML = '<p class="lyrics-empty">Lyrics not available for this song</p>';
    }
  } catch (err) {
    console.error('[MoodBeats Lyrics] Error loading lyrics:', err);
    content.innerHTML = '<p class="lyrics-empty">Failed to load lyrics</p>';
  }
}

function closeLyricsDrawer() {
  const drawer = document.getElementById('np-lyrics-drawer');
  if (drawer) {
    drawer.style.display = 'none';
  }
  const btn = document.getElementById('np-lyrics-btn');
  if (btn) btn.classList.remove('text-accent');
}

// ==========================================
// Phase 3: Social Sharing Card
// ==========================================
function openShareCardModal(song) {
  if (!song) return;
  state.shareTargetSong = song;

  const modal = document.getElementById('share-card-modal');
  const title = document.getElementById('share-card-title');
  const artist = document.getElementById('share-card-artist');
  const art = document.getElementById('share-card-art');
  const moodText = document.getElementById('share-card-mood-text');

  if (title) title.innerText = song.title || 'Track Title';
  if (artist) artist.innerText = song.artist || 'Artist';
  if (art) art.src = song.image || 'icon.png';

  // Determine current vibe/mood
  const vibe = state.selectedMood || 'Groovy';
  const emoji = MOOD_METADATA[vibe]?.emoji || '✨';
  if (moodText) moodText.innerText = `${emoji} Vibe: ${vibe}`;

  if (modal) modal.style.display = 'flex';
}

function closeShareCardModal() {
  const modal = document.getElementById('share-card-modal');
  if (modal) modal.style.display = 'none';
  state.shareTargetSong = null;
}

function shareSongNative() {
  const song = state.shareTargetSong;
  if (!song) return;

  const vibe = state.selectedMood || 'Groovy';
  const emoji = MOOD_METADATA[vibe]?.emoji || '✨';
  const vibeText = `${emoji} Vibe: ${vibe}`;
  const shareUrl = `${window.location.origin}/?song=${song.id || song.videoId}`;

  const shareData = {
    title: `MoodBeats - ${song.title}`,
    text: `Vibing to "${song.title}" by ${song.artist} on MoodBeats. Vibe: ${vibeText}!`,
    url: shareUrl
  };

  if (navigator.share) {
    navigator.share(shareData)
      .then(() => {
        showToast('✨ Shared successfully!');
        closeShareCardModal();
      })
      .catch((err) => {
        console.warn('[MoodBeats Share] Native share failed, copying link instead:', err);
        copyShareLinkToClipboard(song);
      });
  } else {
    copyShareLinkToClipboard(song);
  }
}

function copyShareLinkToClipboard(song) {
  const target = song || state.shareTargetSong;
  if (!target) return;

  const link = `${window.location.origin}/?song=${target.id || target.videoId}`;
  navigator.clipboard.writeText(link)
    .then(() => {
      showToast('✨ Song link copied to clipboard!');
      closeShareCardModal();
    })
    .catch(() => {
      const input = document.createElement('input');
      input.value = link;
      document.body.appendChild(input);
      input.select();
      try {
        document.execCommand('copy');
        showToast('✨ Song link copied to clipboard!');
        closeShareCardModal();
      } catch (err) {
        showToast('❌ Failed to copy link');
      }
      document.body.removeChild(input);
    });
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
      handleHardwareBackButton();
    });
  });
  
  // Theme Toggles
  document.getElementById('theme-toggle').addEventListener('click', () => toggleTheme());
  document.getElementById('settings-theme-switch').addEventListener('change', (e) => {
    toggleTheme(e.target.checked);
  });
  
  // Update greeting based on time of day
  const greetingEl = document.getElementById('home-greeting-text');
  if (greetingEl) {
    const hour = new Date().getHours();
    let greeting = 'Good day 👋';
    if (hour >= 5 && hour < 12)  greeting = 'Good morning ☀️';
    else if (hour >= 12 && hour < 17) greeting = 'Good afternoon 🌤️';
    else if (hour >= 17 && hour < 21) greeting = 'Good evening 🌆';
    else greeting = 'Good night 🌙';
    greetingEl.textContent = greeting;
  }
  
  // ─────────────────────────────────────────────────────────────────
  // SPOTIFY-STYLE MINI & FULL-SCREEN PLAYER CONTROLS BINDING
  // ─────────────────────────────────────────────────────────────────

  // Mini Player Bar Controls
  const miniPlayBtn = document.getElementById('player-play');
  const miniPrevBtn = document.getElementById('player-prev');
  const miniNextBtn = document.getElementById('player-next');
  const miniLikeBtn = document.getElementById('player-bar-like');
  const miniQueueBtn = document.getElementById('player-bar-queue');
  const miniTimeline = document.getElementById('mini-player-timeline');

  if (miniPlayBtn) miniPlayBtn.addEventListener('click', (e) => { e.stopPropagation(); saavnTogglePlay(); });
  if (miniPrevBtn) miniPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); saavnPrev(); });
  if (miniNextBtn) miniNextBtn.addEventListener('click', (e) => { e.stopPropagation(); saavnNext(); });
  if (miniLikeBtn) miniLikeBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleLikeSong(state.saavnCurrentSong); });
  if (miniQueueBtn) miniQueueBtn.addEventListener('click', (e) => { e.stopPropagation(); openQueueModal(); });

  // Now Playing Panel Controls
  const npCloseBtn = document.getElementById('np-close');
  const npPlayBtn = document.getElementById('np-play');
  const npPrevBtn = document.getElementById('np-prev');
  const npNextBtn = document.getElementById('np-next');
  const npShuffleBtn = document.getElementById('np-shuffle');
  const npRepeatBtn = document.getElementById('np-repeat');
  const npLikeBtn = document.getElementById('np-like');
  const npAddPlaylistBtn = document.getElementById('np-add-playlist-btn');
  const npQueueBtn = document.getElementById('np-queue-btn');
  const npMuteBtn = document.getElementById('np-mute');
  const npVolSlider = document.getElementById('np-volume-slider');
  const npProgressTrack = document.getElementById('np-progress-track');

  if (npCloseBtn) npCloseBtn.addEventListener('click', closeNowPlaying);
  if (npPlayBtn) npPlayBtn.addEventListener('click', saavnTogglePlay);
  if (npPrevBtn) npPrevBtn.addEventListener('click', saavnPrev);
  if (npNextBtn) npNextBtn.addEventListener('click', saavnNext);
  if (npShuffleBtn) npShuffleBtn.addEventListener('click', toggleShuffle);
  if (npRepeatBtn) npRepeatBtn.addEventListener('click', cycleRepeatMode);
  if (npLikeBtn) npLikeBtn.addEventListener('click', () => toggleLikeSong(state.saavnCurrentSong));
  if (npAddPlaylistBtn) npAddPlaylistBtn.addEventListener('click', () => openAddToPlaylistModal(state.saavnCurrentSong));
  if (npQueueBtn) npQueueBtn.addEventListener('click', openQueueModal);

  // Volume Controls (Sync HTML5 Audio Volume)
  if (npVolSlider) {
    npVolSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value) / 100;
      if (state.saavnAudio) {
        state.saavnAudio.volume = Math.max(0, Math.min(1, val));
        state.saavnAudio.muted = false;
      }
      const volIcon = document.getElementById('np-volume-icon');
      if (volIcon) volIcon.setAttribute('data-lucide', val === 0 ? 'volume-x' : (val < 0.5 ? 'volume-1' : 'volume-2'));
      lucide.createIcons();
    });
  }

  if (npMuteBtn) {
    npMuteBtn.addEventListener('click', () => {
      if (!state.saavnAudio) return;
      state.saavnAudio.muted = !state.saavnAudio.muted;
      const isMuted = state.saavnAudio.muted;
      const volIcon = document.getElementById('np-volume-icon');
      if (volIcon) volIcon.setAttribute('data-lucide', isMuted ? 'volume-x' : 'volume-2');
      if (npVolSlider) npVolSlider.value = isMuted ? 0 : Math.round(state.saavnAudio.volume * 100);
      lucide.createIcons();
    });
  }

  // Interactive Drag & Scrub Seek Handlers
  function setupScrubber(trackEl) {
    if (!trackEl) return;
    let isDragging = false;

    const computeAndSeek = (e) => {
      const rect = trackEl.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const pct = (clientX - rect.left) / rect.width;
      seekAudioToPercent(pct);
    };

    trackEl.addEventListener('click', (e) => {
      e.stopPropagation();
      computeAndSeek(e);
    });

    trackEl.addEventListener('pointerdown', (e) => {
      isDragging = true;
      state.isDraggingScrubber = true;
      computeAndSeek(e);

      const onMove = (moveEvt) => {
        if (!isDragging) return;
        computeAndSeek(moveEvt);
      };

      const onUp = () => {
        isDragging = false;
        state.isDraggingScrubber = false;
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerup', onUp);
      };

      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    });
  }

  setupScrubber(miniTimeline);
  setupScrubber(npProgressTrack);
  
  // Close NP panel on swipe down
  let npTouchStartY = 0;
  const npPanel = document.getElementById('now-playing-panel');
  if (npPanel) {
    npPanel.addEventListener('touchstart', (e) => {
      npTouchStartY = e.touches[0].clientY;
    }, { passive: true });
    npPanel.addEventListener('touchend', (e) => {
      const dy = e.changedTouches[0].clientY - npTouchStartY;
      if (dy > 80) closeNowPlaying();
    }, { passive: true });
  }
  
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
  
  // Player close / dismiss button
  const playerCloseBtn = document.getElementById('player-close');
  if (playerCloseBtn) {
    playerCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.saavnAudio) {
        state.saavnAudio.pause();
        state.saavnIsPlaying = false;
        state.isPlaying = false;
        updateSaavnPlayerUI(false);
      }
      const bar = document.getElementById('player-bar');
      if (bar) bar.style.display = 'none';
      document.body.classList.remove('player-active');
    });
  }

  // Unified Search interactions
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('btn-clear-search');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      if (unifiedSearchTimer) clearTimeout(unifiedSearchTimer);
      unifiedSearchTimer = setTimeout(() => onUnifiedSearch(e.target.value), 350);
    });
  }
  
  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      onUnifiedSearch('');
    });
  }

  // Search Filter Pills (All, Artists, Songs, YouTube, Playlists)
  const searchFilterPills = document.querySelectorAll('#search-filter-pills .filter-pill');
  searchFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      searchFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeSearchFilter = pill.getAttribute('data-filter') || 'all';
      if (searchInput) onUnifiedSearch(searchInput.value);
    });
  });

  // Library Filter Pills
  const libFilterPills = document.querySelectorAll('#library-filter-pills .lib-pill');
  libFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      libFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeLibFilter = pill.getAttribute('data-lib-filter') || 'all';
      renderLibraryView();
    });
  });

  // Navigation Back Buttons
  const btnArtistBack = document.getElementById('btn-artist-back');
  if (btnArtistBack) btnArtistBack.addEventListener('click', () => navigateTo('view-search'));

  const btnPlaylistBack = document.getElementById('btn-playlist-back');
  if (btnPlaylistBack) btnPlaylistBack.addEventListener('click', () => navigateTo('view-history'));

  // Playlist Modals
  const btnLibNewPl = document.getElementById('btn-lib-new-playlist');
  if (btnLibNewPl) btnLibNewPl.addEventListener('click', openCreatePlaylistModal);

  const btnModalCreateNew = document.getElementById('btn-modal-create-new-playlist');
  if (btnModalCreateNew) {
    btnModalCreateNew.addEventListener('click', () => {
      closeAddToPlaylistModal();
      openCreatePlaylistModal();
    });
  }

  const btnSaveNewPl = document.getElementById('btn-save-new-playlist');
  if (btnSaveNewPl) {
    btnSaveNewPl.addEventListener('click', () => {
      const nameInput = document.getElementById('create-playlist-name-input');
      const val = nameInput ? nameInput.value : '';
      if (val.trim()) {
        createUserPlaylist(val);
        closeCreatePlaylistModal();
      } else {
        showToast('Please enter a playlist name');
      }
    });
  }

  const btnCloseAddModal = document.getElementById('btn-close-add-modal');
  if (btnCloseAddModal) btnCloseAddModal.addEventListener('click', closeAddToPlaylistModal);

  const btnCloseCreateModal = document.getElementById('btn-close-create-modal');
  if (btnCloseCreateModal) btnCloseCreateModal.addEventListener('click', closeCreatePlaylistModal);

  // Initial Library, Daily Mixes & Soundscapes Hub Render
  renderLibraryView();
  initDailyMixes();
  initSoundscapesHub();

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

  // Initialize and bind Server URL settings
  const serverUrlInput = document.getElementById('settings-server-url');
  const saveServerUrlBtn = document.getElementById('btn-save-server-url');
  if (serverUrlInput && saveServerUrlBtn) {
    const saved = localStorage.getItem('moodbeats_server_url');
    if (saved) {
      serverUrlInput.value = saved;
    } else {
      serverUrlInput.value = window.location.origin;
    }

    saveServerUrlBtn.addEventListener('click', () => {
      let val = serverUrlInput.value.trim();
      if (val) {
        val = val.replace(/\/$/, '');
        localStorage.setItem('moodbeats_server_url', val);
        alert('Server URL saved successfully!\n' + val);
      } else {
        localStorage.removeItem('moodbeats_server_url');
        serverUrlInput.value = window.location.origin;
        alert('Server URL reset to default!');
      }
    });
  }

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

    // Restore saved view if present (Search, History, Results, Settings)
    try {
      const savedView = localStorage.getItem('moodbeats_last_view');
      if (savedView && document.getElementById(savedView) && !['view-webcam', 'view-phone-controller'].includes(savedView)) {
        navigateTo(savedView);
      }
    } catch (e) {}
  }

  // Handle shared song link URL parameters
  const sharedSongId = urlParams.get('song');
  if (sharedSongId && window.JSA) {
    window.JSA.getSong(sharedSongId).then(song => {
      if (song) {
        saavnPlaySong(song);
        openNowPlaying();
      }
    }).catch(err => {
      console.warn('[MoodBeats] Failed to load shared song:', err);
    });
  }
  
  lucide.createIcons();
  
  // Initialize Hardware Back Button Listener (Capacitor & Web)
  initHardwareBackListener();
  
  // Initialize Supabase Auth & Cloud Sync
  initSupabaseAuthUI();
  
  // Pre-warm face models silently in the background 3s after page load
  // so they are ready instantly when the user navigates to the scan view
  setTimeout(() => {
    if (typeof faceapi !== 'undefined' && !state.faceModelsLoaded) {
      const MODEL_URL = `${window.location.origin}/models`;
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
      ]).then(() => {
        state.faceModelsLoaded = true;
        console.log('[MoodBeats] Face models pre-loaded in background.');
      }).catch(() => {
        // Silent fail — will retry when user navigates to scan view
      });
    }
  }, 3000);

  // Register PWA Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('[MoodBeats] Service Worker registered with scope:', reg.scope))
        .catch((err) => console.error('[MoodBeats] Service Worker registration failed:', err));
    });
  }

  // Phase 1: Play Queue Controls & Modals
  const btnNpQueue = document.getElementById('np-queue-btn');
  const btnSaavnQueue = document.getElementById('saavn-bar-queue');
  const btnCloseQueue = document.getElementById('btn-close-queue-modal');
  const btnClearQueue = document.getElementById('btn-clear-queue');

  if (btnNpQueue) btnNpQueue.addEventListener('click', openQueueModal);
  if (btnSaavnQueue) btnSaavnQueue.addEventListener('click', openQueueModal);
  if (btnCloseQueue) btnCloseQueue.addEventListener('click', closeQueueModal);
  if (btnClearQueue) btnClearQueue.addEventListener('click', clearQueue);

  // Phase 1: Liked Songs & Favorites
  const btnNpLike = document.getElementById('np-like');
  const btnSaavnLike = document.getElementById('saavn-bar-like');
  if (btnNpLike) {
    btnNpLike.addEventListener('click', () => {
      const current = state.saavnCurrentSong || state.currentPlayerSong;
      if (current) toggleLikeSong(current);
    });
  }
  if (btnSaavnLike) {
    btnSaavnLike.addEventListener('click', (e) => {
      e.stopPropagation();
      const current = state.saavnCurrentSong || state.currentPlayerSong;
      if (current) toggleLikeSong(current);
    });
  }

  // Liked Songs hero card in Library
  const heroLikedCard = document.getElementById('library-liked-hero');
  const btnPlayAllLiked = document.getElementById('btn-play-all-liked');
  if (heroLikedCard) heroLikedCard.addEventListener('click', openLikedSongsPlaylist);
  if (btnPlayAllLiked) {
    btnPlayAllLiked.addEventListener('click', (e) => {
      e.stopPropagation();
      if (state.likedSongs.length > 0) {
        saavnPlaySong(state.likedSongs[0], state.likedSongs, 0);
      } else {
        showToast('No liked songs yet! Tap the heart on any track.');
      }
    });
  }
  updateLibraryLikedHero();

  // Phase 1: Shuffle & Repeat Buttons in Now Playing
  if (npShuffle) {
    npShuffle.addEventListener('click', () => toggleShuffle());
  }
  if (npRepeat) {
    npRepeat.addEventListener('click', () => toggleRepeat());
  }

  // Phase 1: Equalizer Controls & Modals
  const btnNpEq = document.getElementById('np-eq-btn');
  const btnSettingsEq = document.getElementById('btn-open-equalizer-settings');
  const btnCloseEq = document.getElementById('btn-close-equalizer-modal');
  const btnResetEq = document.getElementById('btn-reset-eq');

  if (btnNpEq) btnNpEq.addEventListener('click', openEqualizerModal);
  if (btnSettingsEq) btnSettingsEq.addEventListener('click', openEqualizerModal);
  if (btnCloseEq) btnCloseEq.addEventListener('click', closeEqualizerModal);
  if (btnResetEq) btnResetEq.addEventListener('click', () => applyEqPreset('Flat'));

  // Preset chips click binding
  document.querySelectorAll('.eq-preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const preset = chip.getAttribute('data-preset');
      if (preset) applyEqPreset(preset);
    });
  });

  // EQ Sliders input binding
  EQ_FREQUENCIES.forEach((freq, idx) => {
    const slider = document.getElementById(`eq-slider-${freq}`);
    if (slider) {
      slider.addEventListener('input', (e) => {
        setEqGain(idx, parseFloat(e.target.value));
        // Unset active preset chip if custom slider moved
        document.querySelectorAll('.eq-preset-chip').forEach(c => c.classList.remove('active'));
      });
    }
  });

  // Audio Streaming Quality Selector
  const qualitySelect = document.getElementById('settings-audio-quality');
  if (qualitySelect) {
    qualitySelect.value = state.audioQuality;
    qualitySelect.addEventListener('change', (e) => {
      state.audioQuality = e.target.value;
      localStorage.setItem('moodbeats_audio_quality', e.target.value);
      showToast(`Audio quality set to: ${qualitySelect.options[qualitySelect.selectedIndex].text}`);
      const badge = document.getElementById('saavn-bar-quality-badge');
      if (badge) badge.textContent = e.target.value === 'auto' ? 'HQ' : e.target.value.replace('kbps', 'k');
    });
  }

  // Keyboard Shortcuts Modal & Settings Link
  const btnOpenShortcuts = document.getElementById('btn-open-shortcuts-settings');
  const btnCloseShortcuts = document.getElementById('btn-close-shortcuts-modal');
  const shortcutsModal = document.getElementById('shortcuts-modal');
  if (btnOpenShortcuts && shortcutsModal) {
    btnOpenShortcuts.addEventListener('click', () => { shortcutsModal.style.display = 'flex'; });
  }
  if (btnCloseShortcuts && shortcutsModal) {
    btnCloseShortcuts.addEventListener('click', () => { shortcutsModal.style.display = 'none'; });
  }

  // Song Options Modal Actions
  const btnCloseOptionsModal = document.getElementById('btn-close-options-modal');
  if (btnCloseOptionsModal) btnCloseOptionsModal.addEventListener('click', closeSongOptionsModal);

  // Phase 2: Track Radio Buttons
  const btnNpRadio = document.getElementById('np-radio-btn');
  if (btnNpRadio) {
    btnNpRadio.addEventListener('click', () => {
      const current = state.saavnCurrentSong || state.currentPlayerSong;
      if (current) startTrackRadio(current);
    });
  }

  const optBtnStartRadio = document.getElementById('opt-btn-start-radio');
  if (optBtnStartRadio) {
    optBtnStartRadio.addEventListener('click', () => {
      const target = state.songOptionsTarget;
      closeSongOptionsModal();
      if (target) startTrackRadio(target);
    });
  }

  const optBtnPlayNext = document.getElementById('opt-btn-play-next');
  if (optBtnPlayNext) {
    optBtnPlayNext.addEventListener('click', () => {
      if (state.songOptionsTarget) playNextInQueue(state.songOptionsTarget);
      closeSongOptionsModal();
    });
  }

  const optBtnAddQueue = document.getElementById('opt-btn-add-queue');
  if (optBtnAddQueue) {
    optBtnAddQueue.addEventListener('click', () => {
      if (state.songOptionsTarget) addToQueue(state.songOptionsTarget);
      closeSongOptionsModal();
    });
  }

  const optBtnToggleLike = document.getElementById('opt-btn-toggle-like');
  if (optBtnToggleLike) {
    optBtnToggleLike.addEventListener('click', () => {
      if (state.songOptionsTarget) toggleLikeSong(state.songOptionsTarget);
      closeSongOptionsModal();
    });
  }

  const optBtnAddPlaylist = document.getElementById('opt-btn-add-playlist');
  if (optBtnAddPlaylist) {
    optBtnAddPlaylist.addEventListener('click', () => {
      const target = state.songOptionsTarget;
      closeSongOptionsModal();
      if (target) openAddToPlaylistModal(target);
    });
  }

  // Phase 3: Lyrics, Visualizer, and Share Card bindings
  const npLyricsBtn = document.getElementById('np-lyrics-btn');
  if (npLyricsBtn) npLyricsBtn.addEventListener('click', toggleLyricsDrawer);

  const btnCloseLyrics = document.getElementById('btn-close-lyrics');
  if (btnCloseLyrics) btnCloseLyrics.addEventListener('click', closeLyricsDrawer);

  const npShareBtn = document.getElementById('np-share-btn');
  if (npShareBtn) {
    npShareBtn.addEventListener('click', () => {
      const current = state.saavnCurrentSong || state.currentPlayerSong;
      if (current) openShareCardModal(current);
    });
  }

  const optBtnShareSong = document.getElementById('opt-btn-share-song');
  if (optBtnShareSong) {
    optBtnShareSong.addEventListener('click', () => {
      const target = state.songOptionsTarget;
      closeSongOptionsModal();
      if (target) openShareCardModal(target);
    });
  }

  const btnCloseShareModal = document.getElementById('btn-close-share-modal');
  if (btnCloseShareModal) btnCloseShareModal.addEventListener('click', closeShareCardModal);

  const btnNativeShare = document.getElementById('btn-native-share');
  if (btnNativeShare) btnNativeShare.addEventListener('click', shareSongNative);

  const btnCopyShareLink = document.getElementById('btn-copy-share-link');
  if (btnCopyShareLink) btnCopyShareLink.addEventListener('click', () => copyShareLinkToClipboard());

  // Global Desktop Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    // Ignore when typing in inputs or textareas
    const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') return;

    switch (e.code) {
      case 'Space':
        e.preventDefault();
        saavnTogglePlay();
        break;
      case 'KeyK':
      case 'KeyN':
        e.preventDefault();
        saavnNext();
        break;
      case 'KeyJ':
      case 'KeyP':
        e.preventDefault();
        saavnPrev();
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (state.saavnAudio && state.saavnAudio.duration) {
          state.saavnAudio.currentTime = Math.min(state.saavnAudio.duration, state.saavnAudio.currentTime + 5);
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (state.saavnAudio) {
          state.saavnAudio.currentTime = Math.max(0, state.saavnAudio.currentTime - 5);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (state.saavnAudio) {
          state.saavnAudio.volume = Math.min(1, state.saavnAudio.volume + 0.05);
          showToast(`Volume: ${Math.round(state.saavnAudio.volume * 100)}%`);
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (state.saavnAudio) {
          state.saavnAudio.volume = Math.max(0, state.saavnAudio.volume - 0.05);
          showToast(`Volume: ${Math.round(state.saavnAudio.volume * 100)}%`);
        }
        break;
      case 'KeyL':
        e.preventDefault();
        const cur = state.saavnCurrentSong || state.currentPlayerSong;
        if (cur) toggleLikeSong(cur);
        break;
      case 'KeyS':
        e.preventDefault();
        toggleShuffle();
        break;
      case 'KeyR':
        e.preventDefault();
        toggleRepeat();
        break;
    }
  });

  // Expose global MoodBeats controls for native Android bridge
  window.MoodBeats = {
    play: () => {
      if (state.saavnAudio && !state.saavnIsPlaying) {
        saavnTogglePlay();
      } else if (ytPlayer && !state.isPlaying) {
        togglePlayPause();
      }
    },
    pause: () => {
      if (state.saavnAudio && state.saavnIsPlaying) {
        saavnTogglePlay();
      } else if (ytPlayer && state.isPlaying) {
        togglePlayPause();
      }
    },
    toggle: () => {
      if (state.saavnAudio) {
        saavnTogglePlay();
      } else if (ytPlayer) {
        togglePlayPause();
      }
    },
    next: () => {
      if (state.saavnAudio && state.saavnCurrentSong) {
        saavnNext();
      } else {
        playNext();
      }
    },
    prev: () => {
      if (state.saavnAudio && state.saavnCurrentSong) {
        saavnPrev();
      } else {
        playPrev();
      }
    },
    seekTo: (time) => {
      if (state.saavnAudio && state.saavnAudio.duration) {
        state.saavnAudio.currentTime = Math.max(0, Math.min(time, state.saavnAudio.duration));
      } else if (ytPlayer && typeof ytPlayer.seekTo === 'function') {
        ytPlayer.seekTo(time, true);
      }
    }
  };
});

// ==========================================
// 12. Supabase Auth & Cloud Sync Controller
// ==========================================
function initSupabaseAuthUI() {
  const authModal = document.getElementById('auth-modal');
  const btnAuthTrigger = document.getElementById('btn-auth-trigger');
  const btnCloseAuthModal = document.getElementById('btn-close-auth-modal');
  const tabLogin = document.getElementById('tab-auth-login');
  const tabSignup = document.getElementById('tab-auth-signup');
  const loggedOutSection = document.getElementById('auth-logged-out-section');
  const loggedInSection = document.getElementById('auth-logged-in-section');
  const alertBanner = document.getElementById('auth-alert-banner');
  const emailForm = document.getElementById('auth-email-form');
  const nameGroup = document.getElementById('auth-name-group');
  const confirmGroup = document.getElementById('auth-confirm-group');
  const inputName = document.getElementById('auth-input-name');
  const inputEmail = document.getElementById('auth-input-email');
  const inputPassword = document.getElementById('auth-input-password');
  const inputConfirm = document.getElementById('auth-input-confirm');
  const btnSubmit = document.getElementById('btn-auth-submit');
  const btnSubmitText = document.getElementById('btn-auth-submit-text');
  const btnGoogle = document.getElementById('btn-google-auth');
  const btnSignOut = document.getElementById('btn-auth-signout');
  const btnSyncCloud = document.getElementById('btn-sync-cloud');
  const userProfileName = document.getElementById('user-profile-name');
  const userProfileEmail = document.getElementById('user-profile-email');
  const userAvatarCircle = document.getElementById('user-avatar-circle');
  const headerUserIcon = document.getElementById('header-user-icon');

  let currentAuthTab = 'login';

  const showAlert = (msg, isError = true) => {
    if (!alertBanner) return;
    alertBanner.style.display = 'flex';
    alertBanner.style.background = isError ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)';
    alertBanner.style.color = isError ? '#fca5a5' : '#86efac';
    alertBanner.style.border = isError ? '1px solid rgba(239,68,68,0.3)' : '1px solid rgba(16,185,129,0.3)';
    alertBanner.innerHTML = `<span>${isError ? '⚠️' : '✅'}</span><span>${msg}</span>`;
  };

  const hideAlert = () => {
    if (alertBanner) alertBanner.style.display = 'none';
  };

  const updateAuthUI = async () => {
    if (!window.MoodSupabase) return;
    const user = await window.MoodSupabase.getUser();

    if (user) {
      if (loggedOutSection) loggedOutSection.style.display = 'none';
      if (loggedInSection) loggedInSection.style.display = 'block';

      const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'User';
      const email = user.email || '';

      if (userProfileName) userProfileName.textContent = displayName;
      if (userProfileEmail) userProfileEmail.textContent = email;
      if (userAvatarCircle) userAvatarCircle.textContent = displayName.charAt(0).toUpperCase();

      if (headerUserIcon && headerUserIcon.parentElement) {
        headerUserIcon.parentElement.style.borderColor = 'rgba(168, 85, 247, 0.6)';
        headerUserIcon.parentElement.style.background = 'rgba(168, 85, 247, 0.2)';
      }

      // Load My Space Personal Data
      try {
        const [savedSongs, moodHistory, playlists] = await Promise.all([
          window.MoodSupabase.getSavedSongs(),
          window.MoodSupabase.getMoodHistory(10),
          window.MoodSupabase.getPlaylists()
        ]);

        // 1. Stats
        const statSongs = document.getElementById('myspace-stat-songs');
        const statMoods = document.getElementById('myspace-stat-moods');
        const statPlaylists = document.getElementById('myspace-stat-playlists');
        const savedBadge = document.getElementById('myspace-saved-badge');
        const moodBadge = document.getElementById('myspace-mood-badge');

        if (statSongs) statSongs.textContent = savedSongs.length;
        if (statMoods) statMoods.textContent = moodHistory.length;
        if (statPlaylists) statPlaylists.textContent = playlists.length;
        if (savedBadge) savedBadge.textContent = `${savedSongs.length} track${savedSongs.length === 1 ? '' : 's'}`;
        if (moodBadge) moodBadge.textContent = `${moodHistory.length} scan${moodHistory.length === 1 ? '' : 's'}`;

        // 2. Render Saved Songs
        const savedListEl = document.getElementById('myspace-saved-list');
        if (savedListEl) {
          if (savedSongs.length === 0) {
            savedListEl.innerHTML = `
              <div style="padding:14px; background:rgba(255,255,255,0.02); border:1px dashed var(--border-color); border-radius:10px; text-align:center; font-size:12px; color:var(--text-muted);">
                No songs saved yet — tap the heart on any track to save it here.
              </div>
            `;
          } else {
            savedListEl.innerHTML = savedSongs.map(s => `
              <div class="myspace-song-row" style="display:flex; align-items:center; gap:10px; padding:8px 10px; background:rgba(255,255,255,0.03); border-radius:8px; cursor:pointer;" data-track-id="${escapeHtml(s.id)}">
                <img src="${escapeHtml(s.image)}" style="width:32px; height:32px; border-radius:6px; object-fit:cover;" onerror="this.src='icon.png'">
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:600; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(s.title)}</div>
                  <div style="font-size:11px; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(s.artist)}</div>
                </div>
                <button class="myspace-play-btn" style="background:rgba(99,102,241,0.2); border:none; color:#a5b4fc; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer;">▶</button>
              </div>
            `).join('');

            // Attach play click
            savedListEl.querySelectorAll('.myspace-song-row').forEach((row, idx) => {
              row.onclick = () => {
                const targetSong = savedSongs[idx];
                if (targetSong) {
                  saavnPlaySong({
                    id: targetSong.id,
                    title: targetSong.title,
                    artist: targetSong.artist,
                    image: targetSong.image,
                    downloadUrl: targetSong.downloadUrl,
                    streamUrl: targetSong.downloadUrl
                  });
                  if (authModal) authModal.style.display = 'none';
                }
              };
            });
          }
        }

        // 3. Render Mood Timeline
        const moodListEl = document.getElementById('myspace-mood-timeline');
        if (moodListEl) {
          if (moodHistory.length === 0) {
            moodListEl.innerHTML = `
              <div style="padding:14px; background:rgba(255,255,255,0.02); border:1px dashed var(--border-color); border-radius:10px; text-align:center; font-size:12px; color:var(--text-muted);">
                No mood history recorded yet — take a mood scan on the home screen to discover music matching your vibe!
              </div>
            `;
          } else {
            const getEmoji = (m) => {
              const str = (m || '').toLowerCase();
              if (str.includes('happy') || str.includes('joy')) return '😄';
              if (str.includes('sad')) return '😢';
              if (str.includes('energetic') || str.includes('party')) return '⚡';
              if (str.includes('calm') || str.includes('chill')) return '🧘';
              if (str.includes('focus') || str.includes('study')) return '🎯';
              if (str.includes('romantic') || str.includes('love')) return '💖';
              return '✨';
            };

            moodListEl.innerHTML = moodHistory.map(m => `
              <div style="display:flex; align-items:center; gap:10px; padding:8px 10px; background:rgba(255,255,255,0.03); border-radius:8px;">
                <span style="font-size:20px;">${getEmoji(m.detected_mood)}</span>
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:600; color:#fff;">${escapeHtml(m.detected_mood)}</div>
                  <div style="font-size:10px; color:var(--text-muted);">${new Date(m.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })} • ${m.source === 'face_scan' ? 'Face Scan' : 'Manual'}</div>
                </div>
                <span style="font-size:10px; background:rgba(34,197,94,0.15); color:#4ade80; padding:2px 6px; border-radius:4px; font-weight:600;">${Math.round(m.confidence || 85)}%</span>
              </div>
            `).join('');
          }
        }

        // 4. Render Playlists
        const playlistListEl = document.getElementById('myspace-playlist-list');
        if (playlistListEl) {
          if (playlists.length === 0) {
            playlistListEl.innerHTML = `
              <div style="padding:14px; background:rgba(255,255,255,0.02); border:1px dashed var(--border-color); border-radius:10px; text-align:center; font-size:12px; color:var(--text-muted);">
                No custom playlists created yet — tap "+ Create" above to build your first soundscape collection!
              </div>
            `;
          } else {
            playlistListEl.innerHTML = playlists.map(p => `
              <div style="display:flex; align-items:center; gap:10px; padding:8px 10px; background:rgba(255,255,255,0.03); border-radius:8px;">
                <span style="font-size:16px;">🎵</span>
                <div style="flex:1; min-width:0;">
                  <div style="font-size:13px; font-weight:600; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(p.playlist_name)}</div>
                  <div style="font-size:10px; color:var(--text-muted);">Created ${new Date(p.created_at).toLocaleDateString()}</div>
                </div>
              </div>
            `).join('');
          }
        }
      } catch (spaceErr) {
        console.warn('[My Space] Error loading personal data:', spaceErr);
      }
    } else {
      if (loggedOutSection) loggedOutSection.style.display = 'block';
      if (loggedInSection) loggedInSection.style.display = 'none';

      if (headerUserIcon && headerUserIcon.parentElement) {
        headerUserIcon.parentElement.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        headerUserIcon.parentElement.style.background = 'rgba(255, 255, 255, 0.08)';
      }
    }
  };

  // Create Playlist Button
  const btnNewPlaylist = document.getElementById('btn-myspace-new-playlist');
  if (btnNewPlaylist) {
    btnNewPlaylist.onclick = async () => {
      const name = prompt('Enter a name for your new playlist:');
      if (name && name.trim()) {
        try {
          await window.MoodSupabase.createPlaylist(name.trim());
          showToast(`Playlist "${name.trim()}" created! 📂`);
          updateAuthUI();
        } catch(e) {
          showToast('Failed to create playlist');
        }
      }
    };
  }

  // Open / Close Modal
  if (btnAuthTrigger) {
    btnAuthTrigger.addEventListener('click', () => {
      hideAlert();
      updateAuthUI();
      if (authModal) authModal.style.display = 'flex';
    });
  }

  if (btnCloseAuthModal) {
    btnCloseAuthModal.addEventListener('click', () => {
      if (authModal) authModal.style.display = 'none';
    });
  }

  // Tabs
  if (tabLogin) {
    tabLogin.addEventListener('click', () => {
      currentAuthTab = 'login';
      tabLogin.classList.add('active');
      tabLogin.style.background = 'rgba(255,255,255,0.12)';
      tabLogin.style.color = '#fff';
      if (tabSignup) {
        tabSignup.classList.remove('active');
        tabSignup.style.background = 'transparent';
        tabSignup.style.color = 'var(--text-muted)';
      }
      if (nameGroup) nameGroup.style.display = 'none';
      if (confirmGroup) confirmGroup.style.display = 'none';
      if (btnSubmitText) btnSubmitText.textContent = 'Sign In';
      hideAlert();
    });
  }

  if (tabSignup) {
    tabSignup.addEventListener('click', () => {
      currentAuthTab = 'signup';
      tabSignup.classList.add('active');
      tabSignup.style.background = 'rgba(255,255,255,0.12)';
      tabSignup.style.color = '#fff';
      if (tabLogin) {
        tabLogin.classList.remove('active');
        tabLogin.style.background = 'transparent';
        tabLogin.style.color = 'var(--text-muted)';
      }
      if (nameGroup) nameGroup.style.display = 'block';
      if (confirmGroup) confirmGroup.style.display = 'block';
      if (btnSubmitText) btnSubmitText.textContent = 'Create Account';
      hideAlert();
    });
  }

  // Email Submit
  if (emailForm) {
    emailForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      hideAlert();

      const email = inputEmail?.value?.trim() || '';
      const password = inputPassword?.value || '';
      const confirmPass = inputConfirm?.value || '';
      const fullName = inputName?.value?.trim() || '';

      if (!email.includes('@') || !email.includes('.')) {
        showAlert('Please enter a valid email address.');
        return;
      }
      if (password.length < 6) {
        showAlert('Password must be at least 6 characters.');
        return;
      }
      if (currentAuthTab === 'signup' && password !== confirmPass) {
        showAlert('Passwords do not match.');
        return;
      }

      if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.style.opacity = '0.6';
      }

      try {
        if (currentAuthTab === 'login') {
          await window.MoodSupabase.signInWithEmail(email, password);
          showToast('Signed in successfully! 🎉');
        } else {
          const res = await window.MoodSupabase.signUpWithEmail(email, password, fullName);
          if (res && res.session) {
            showToast('Account created & logged in! 🎉');
          } else {
            showAlert('Account created! Please check your email for confirmation link.', false);
            return;
          }
        }
        await updateAuthUI();
        setTimeout(() => {
          if (authModal) authModal.style.display = 'none';
        }, 800);
      } catch (err) {
        console.error('[Supabase Auth UI Error]:', err);
        let msg = err.message || 'Authentication error';
        if (msg.toLowerCase().includes('invalid login credentials')) {
          msg = 'Invalid email or password.';
        }
        showAlert(msg);
      } finally {
        if (btnSubmit) {
          btnSubmit.disabled = false;
          btnSubmit.style.opacity = '1';
        }
      }
    });
  }

  // Google OAuth
  if (btnGoogle) {
    btnGoogle.addEventListener('click', async () => {
      try {
        await window.MoodSupabase.signInWithGoogle();
      } catch (err) {
        showAlert(err.message || 'Google sign in failed');
      }
    });
  }

  // Sign Out
  if (btnSignOut) {
    btnSignOut.addEventListener('click', async () => {
      try {
        await window.MoodSupabase.signOut();
        showToast('Signed out of MoodBeats');
        await updateAuthUI();
      } catch (err) {
        showToast('Error signing out');
      }
    });
  }

  // Cloud Sync
  if (btnSyncCloud) {
    btnSyncCloud.addEventListener('click', async () => {
      try {
        btnSyncCloud.disabled = true;
        btnSyncCloud.innerHTML = '<i data-lucide="refresh-cw" class="animate-spin"></i><span>Syncing...</span>';
        if (window.lucide) lucide.createIcons();

        const cloudLikes = await window.MoodSupabase.fetchCloudLikedSongs();
        if (cloudLikes && cloudLikes.length > 0) {
          // Merge with local state
          const existingIds = new Set(state.likedSongs.map(s => s.id));
          cloudLikes.forEach(song => {
            if (!existingIds.has(song.id)) {
              state.likedSongs.push(song);
            }
          });
          try {
            localStorage.setItem('moodbeats_liked_songs', JSON.stringify(state.likedSongs));
          } catch(e) {}
          updateLibraryLikedHero();
        }
        showToast('Favorites & history synced from Supabase Cloud! ☁️');
      } catch (err) {
        showToast('Cloud sync completed');
      } finally {
        btnSyncCloud.disabled = false;
        btnSyncCloud.innerHTML = '<i data-lucide="refresh-cw"></i><span>Sync Favorites & History Now</span>';
        if (window.lucide) lucide.createIcons();
      }
    });
  }

  // Check on load
  updateAuthUI();
}

// ─────────────────────────────────────────────────────────────────
// SKELETON LOADING CONTROLLER & HELPERS
// ─────────────────────────────────────────────────────────────────

function dismissAppBootSkeleton() {
  const bootSkeleton = document.getElementById('app-boot-skeleton');
  if (bootSkeleton) {
    bootSkeleton.style.opacity = '0';
    setTimeout(() => {
      bootSkeleton.style.display = 'none';
    }, 450);
  }
}

function renderTrackSkeletons(container, count = 5) {
  if (!container) return;
  container.innerHTML = Array.from({ length: count }).map((_, i) => `
    <div class="skeleton-track-row" style="display:flex; align-items:center; gap:12px; padding:10px 14px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.04); border-radius:12px; margin-bottom:8px;">
      <div class="skeleton-shimmer" style="width:48px; height:48px; border-radius:8px; flex-shrink:0;"></div>
      <div style="flex:1; min-width:0;">
        <div class="skeleton-shimmer" style="width:${i % 2 === 0 ? '60%' : '45%'}; height:14px; border-radius:4px; margin-bottom:6px;"></div>
        <div class="skeleton-shimmer" style="width:${i % 2 === 0 ? '35%' : '25%'}; height:11px; border-radius:4px;"></div>
      </div>
      <div class="skeleton-shimmer" style="width:36px; height:12px; border-radius:4px;"></div>
    </div>
  `).join('');
}

// Dismiss boot skeleton once app DOM and Lucide icons are initialized
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(dismissAppBootSkeleton, 350);
});


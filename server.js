// server.js
const express = require('express');
const bcrypt  = require('bcrypt');
const multer  = require('multer');
const fs      = require('fs');
const path    = require('path');

const app = express();
const upload = multer({ dest: path.join(__dirname, 'uploads/') });
const POSTS_FILE = path.join(__dirname, 'posts.json');
const SALT_ROUNDS = 10;

let currentUser = null;              // ← add this

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));  // serve public/

// === LOGIN ===
app.post('/api/login', (req, res) => {
  const { password } = req.body;
  if (!password || password.length < 4) {
    return res.json({ success: false, message: 'Password too short!' });
  }
  currentUser = 'anon_' + Math.random().toString(36).substring(2, 8);
  res.json({ success: true, username: currentUser });
});

// === GET POSTS ===
app.get('/api/posts', (req, res) => {
  if (!fs.existsSync(POSTS_FILE)) return res.json([]);
  const all = JSON.parse(fs.readFileSync(POSTS_FILE));
  res.json(all);
});

// === NEW POST ===
app.post('/api/post', upload.array('attachments'), async (req, res) => {
  if (!currentUser) return res.status(401).json({ success: false });
  const text = req.body.text || '';
  const hashed = await bcrypt.hash(text, SALT_ROUNDS);
  const attachments = (req.files || []).map(f => f.filename);
  const entry = { username: currentUser, hashed, attachments, timestamp: Date.now() };
  const existing = fs.existsSync(POSTS_FILE)
    ? JSON.parse(fs.readFileSync(POSTS_FILE))
    : [];
  existing.push(entry);
  fs.writeFileSync(POSTS_FILE, JSON.stringify(existing, null, 2));
  res.json({ success: true });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Whispr listening on ${PORT}`));

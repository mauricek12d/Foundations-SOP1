const express = require('express'); // Import express framework
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Import jsonwebtoken for token generation
const fs = require('fs'); // Import file system module for file operations
const path = require('path'); // Import path module for handling file paths
const router = express.Router(); // Create a new router instance
const authMiddleware = require('../Middleware/authMiddleware'); // Import authentication middleware


const USERS_FILE = path.join(__dirname, '../user.json'); // Path to the user data file

// Middleware to parse JSON requests
const loadUsers = () => {
  if (!fs.existsSync(USERS_FILE)) return [];
  const data = fs.readFileSync(USERS_FILE);
  return JSON.parse(data);
};

// Function to save users to the file
const saveUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// Authentication routes
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  saveUsers(users);

  res.status(201).json({ message: 'User registered' });
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();
  const user = users.find(u => u.username === username);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ message: 'Login successful', token });
});

// Protected route example
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: `Hello, ${req.user.username}. You're authenticated.` });
});

module.exports = router;

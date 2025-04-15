const express = require('express');
const router = express.Router();
const { getAllPosts, createPost } = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getAllPosts);
router.post('/', authMiddleware, createPost);

module.exports = router;

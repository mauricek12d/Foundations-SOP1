const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (_req, res) => {
  try {
    const reviews = await Post.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load reviews' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newReview = new Post(req.body);
    const saved = await newReview.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Failed to save review' });
  }
});

module.exports = router;

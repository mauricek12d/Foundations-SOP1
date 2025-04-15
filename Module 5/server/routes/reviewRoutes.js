const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const errorHandling = require('../utils/errorHandling');

router.get('/', async (_req, res) => {
  try {
    const reviews = await Post.find();
    res.json(reviews);
  } catch (err) {
    errorHandling(res, err, 500, 'Failed to load reviews');
  }
});

router.post('/', async (req, res) => {
  try {
    const newReview = new Post(req.body);
    const saved = await newReview.save();
    res.status(201).json(saved);
  } catch (err) {
    errorHandling(res, err, 400, 'Failed to create review');
  }
});

module.exports = router;

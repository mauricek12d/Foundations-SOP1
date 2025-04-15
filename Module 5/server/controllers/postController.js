const Post = require('../models/post');
const errorHandling = require('../utils/errorHandling');

const getAllPosts = async (_req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    errorHandling(res, err, 500, 'Failed to load posts');
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = new Post({ title, content, author });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ error: 'Invalid post data' });
  }
};

module.exports = {
  getAllPosts,
  createPost
};

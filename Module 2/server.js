const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Allow requests from your front-end
app.use(express.json()); // Parse JSON from body

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello World' });
});

// Handles the form submissions
app.post('/api/reviews', (req, res) => {
  const { name, movie, review } = req.body;
  console.log('New review submitted:', { name, movie, review });

  res.status(201).json({ message: 'Review received!', data: req.body });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// This is a basic Express server that handles CORS and JSON parsing.
// It includes a sample API route and a POST route for handling form submissions.

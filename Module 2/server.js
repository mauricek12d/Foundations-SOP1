const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors()); // Allows the frontend to access the backend
app.use(express.json()); // Allows the server to parse JSON data

// The GET route
app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello World' });
});

// The POST route
// This route handles the submission of movie reviews
app.post('/api/reviews', (req, res) => {
  const { name, movie, review } = req.body;

  if (!name || !movie || !review) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  const newReview = { 
    name, 
    movie, 
    review, 
    timestamp: new Date().toISOString() 
  };

  const filePath = path.join(__dirname, 'reviews.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    let reviews = [];
    if (data) {
      try {
        reviews = JSON.parse(data);
      } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
        return res.status(500).json({ error: 'Internal server error' });
      }
    }

    reviews.push(newReview);

    fs.writeFile(filePath, JSON.stringify(reviews, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing file:', writeErr);
        return res.status(500).json({ error: 'Internal server error' });
      }

      res.json({ message: 'Review submitted successfully', data: newReview });
    });
  });
});

// app.listen allows the server to listen for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
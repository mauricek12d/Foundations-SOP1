const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const postRoutes = require('./routes/postRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

dotenv.config(); 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/posts', postRoutes);
app.use('/api/reviews', reviewRoutes);

app.get('/', (_req, res) => {
  res.send('Welcome to the Movie Reviews API');
  });

connectDB().then(() => {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

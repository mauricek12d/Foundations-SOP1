require('dotenv').config(); // Load environment variables from .env file
const express = require('express'); // Import express framework
const cors = require('cors'); // Imports CORS middleware
const authRoutes = require('./routes/auth'); // Imports authentication routes
const app = express(); // Creates an Express application

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

app.use('/api', authRoutes); // Use authentication routes for all requests starting with /api

app.get('/', (req, res) => {
    res.send('Welcome to the API!'); // Respond with a welcome message for the root route
    });

// Start the server
const PORT = process.env.PORT || 3000; // Set the port to the value in .env or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log the server start message
});
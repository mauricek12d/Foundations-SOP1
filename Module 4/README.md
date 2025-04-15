# Module 4 - Auth with Node.js, Bcrypt, and JWT

This module demonstrates a basic authentication system using **Node.js**, **Express**, **bcrypt** for password hashing, and **JWT (JSON Web Token)** for securing protected routes.

## ✅ Features

- User registration (`/api/register`)
- User login and JWT generation (`/api/login`)
- Middleware to protect routes (`/api/protected`)
- User data stored in a local `user.json` file

---

## 🔧 Setup

1. Clone the repository or navigate to your project directory.
2. Install dependencies:

   ```bash
   npm install

3. Create a .env file
    
    ```bash
    JWT_SECRET=your_jwt_secret_key

4. Start the server:
    
    ```bash
    node server.js

5. API Endpoints 

   Test the API Endpoints in Terminal
   
   ```bash
   
   curl -X POST http://localhost:3000/api/register \
   -H "Content-Type: application/json" \
   -d '{"username": "testuser", "password": "password123"}'

6. LOGIN

   Test the Login Route in Terminal
   
   ```bash
   
   curl -X POST http://localhost:3000/api/login \
   -H "Content-Type: application/json" \
   -d '{"username": "testuser", "password": "password123"}'

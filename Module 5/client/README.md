# 📰 Movie Blog App

This fullstack app allows users to view and post movie reviews. Built with **React**, **Node.js**, **Express**, and **MongoDB**, it demonstrates the core functionality of a blog with dynamic routing and backend CRUD operations.

---

## ✅ Features

- Add and view blog posts (movie reviews)
- React front end with routing and form handling
- Express REST API with Mongoose models
- MongoDB data storage with Mongoose ODM
- Environment variables via `.env`
- Organized folder structure with clear separation of concerns
- CSS styling inspired by Module 1 layout

---

## 🔧 Technologies

- React (client)
- React Router DOM
- Express.js (server)
- MongoDB + Mongoose
- Node.js
- CORS, dotenv

---

## How to use

### 1. Clone the repository

```bash
git clone https://github.com/mauricek12d/Foundations-SOP1.git
cd "Module 5"

```

---

### 2. Set up the Server

```bash
cd server
npm install

Create a .env file in /server with the following content:

PORT=3001
MONGO_URI=mongodb+srv://<your_user>:<your_password>@<cluster>.mongodb.net/?retryWrites=true&w=majority

Start the server:

node server.js

```
---

### 3. Set up the Client

```bash
cd ../client

npm install

npm start



# 🍽️ Royal Dine - MERN Stack Restaurant Reservation App

Welcome to **Royal Dine**!  
A modern, full-stack restaurant reservation web application built with the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS.  
Easily browse our menu, learn about us, and reserve your table online!  

---

## 🚀 Features

- 📝 **Online Table Reservation**  
  Book your table with a simple form and get instant feedback.

- 📋 **Dynamic Menu**  
  Browse delicious dishes with images and prices.

- 🏠 **Modern UI**  
  Responsive, mobile-friendly, and visually appealing design using Tailwind CSS.

- 📧 **Contact Form**  
  Reach out to us directly from the website.

- 🔒 **Validation & Error Handling**  
  Robust backend validation for all reservation fields.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express, MongoDB (Mongoose), Validator
- **Other:** dotenv, CORS

---

## 📁 Project Structure

```
MERN STACK RESTRO RESERVE/
│
├── backend/
│   ├── controllers/         # Express controllers (reservation logic)
│   ├── db/                  # Database connection logic
│   ├── models/              # Mongoose models (Reservation schema)
│   ├── routes/              # Express routes (API endpoints)
│   ├── utils/               # Utility classes (ApiError, ApiResponse, asyncHandler)
│   ├── .env                 # Environment variables
│   ├── app.js               # Express app setup
│   └── server.js            # Server entry point
│
├── frontend/
│   ├── src/
│   │   ├── Components/      # React components (Home, Menu, Reserve, etc.)
│   │   ├── App.jsx          # Main App component with routing
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Tailwind CSS import
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite configuration
│   └── package.json         # Frontend dependencies & scripts
│
└── README.md                # Project documentation
```

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/royal-dine-mern.git
cd MERN STACK RESTRO RESERVE
```

### 2. Setup Backend

```bash
cd backend
npm install
# Create a .env file (see .env.example or below)
npm run dev
```

**.env example:**
```
PORT=8000
FRONTEND_URI=http://localhost:5173
MONGODB_NAME=restro
MONGODB_URI=your_mongodb_connection_string
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---


## 📄 License

This project is licensed under the MIT License.

---

## 💡 Inspiration

Built as a learning project to demonstrate a full-stack reservation system with modern web technologies.

---

Enjoy your meal at **Royal Dine**! 🍛🍲🍕  
```

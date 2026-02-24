💰 MERN Expense Tracker

A full-stack Expense Tracking application built using the MERN stack (MongoDB, Express, React, Node.js) with JWT Authentication and Chart.js visualization.

🚀 Features

🔐 User Authentication (Register / Login)

🔑 JWT-based Protected Routes

➕ Add Income & Expense Transactions

🗂 Category-wise Expense Tracking

📊 Pie Chart Visualization (Chart.js)

📋 Transaction History Table

🧾 Secure Delete Functionality

🎨 Responsive UI using Bootstrap

🛠 Tech Stack
Frontend

React (Vite)

Bootstrap 5

Axios

React Router

Chart.js

react-chartjs-2

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

bcrypt (Password hashing)

CORS

dotenv

📁 Project Structure
expense-tracker/
│
├── backend/
│   ├── Controllers/
│   ├── Models/
│   ├── routes/
│   ├── Middleware/
│   ├── DataBase/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
└── README.md
🔐 Authentication Flow

User registers or logs in

Backend generates JWT token

Token stored in localStorage

Axios interceptor attaches token to every request

Backend verifies token via auth middleware

User-specific transactions are returned

⚙️ Environment Variables

Create a .env file inside backend/:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/expense_tracker
JWT_SECRET=your_secret_key
🖥 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
2️⃣ Backend Setup
cd backend
npm install
npm start

Server runs on:

http://localhost:5000
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

App runs on:

http://localhost:5173
📊 Screens

Login Page

Register Page

Dashboard

Add Transaction Form

Category Pie Chart

Transaction List

🔒 Security Features

Passwords hashed using bcrypt

JWT token authentication

Protected routes via middleware

User-specific data isolation

📈 Future Improvements

Monthly expense analytics

Income vs Expense bar chart

Dark mode

Export transactions as CSV

Profile page

👨‍💻 Author

Syed Mohammed Zubair
Full Stack MERN Developer

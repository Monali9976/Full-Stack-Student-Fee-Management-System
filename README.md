# 💳 Student Fee Management System

A full-stack web application that allows students to log in, manage their profile, and simulate their fee payment status through a secure interface.

---

## 🔧 Features

- 🧑‍🎓 **All Students Page** – View a list of all students and their fee payment status.
- 👤 **Profile Page** – Students can log in, update their name/email, and view payment status.
- 💰 **Simulated Payment** – Students can simulate a fee payment through a fake card interface.
- 🔐 **Authentication** – Secure login using JWT (JSON Web Tokens).
- 📡 **Backend API** – Built with Node.js + Express and connected to MongoDB.
- 💻 **Frontend** – Built with React and styled using Tailwind CSS.
- 🌐 **Protected Routes** – Access control for profile and payment pages.

---

## 🖼️ Screenshots

> Replace these with real screenshots when available

- `SignupPage`: User registration with name, email, password
- `LoginPage`: Login form with background image
- `ProfilePage`: Shows user info and payment button
- `PaymentPage`: Simulated credit card and Pay Now button
- `AllStudentsPage`: Table with student list and fee status

---

## 🧰 Tech Stack

| Layer     | Tech |
|-----------|------|
| Frontend  | React, React Router, Axios, Tailwind CSS |
| Backend   | Node.js, Express.js |
| Database  | MongoDB (with Mongoose) |
| Auth      | JWT Token-based Authentication |

---

## 🚀 Getting Started

### 1. Clone the project

## bash
git clone https://github.com/your-username/student-fee-management.git
cd student-fee-management


2. Setup Backend
cd Backend
npm install

📝 Create a .env file:
PORT=5000
MONGO_URI=mongodb://localhost:27017/student-fees
JWT_SECRET=your_jwt_secret

Start backend:
npm start

3. Setup Frontend
cd ../Frontend
npm install

📝 Create a .env file:
REACT_APP_API_URL=http://localhost:5000/api

Start frontend:
npm start

🧪 Test Information
You can test the application with the following steps:

✅ Signup / Login
Visit http://localhost:3000/signup
Create a test student account:
Name: Test Student
Email: test@example.com
Password: 123456
Login at http://localhost:3000/login

🔐 Protected Pages
Once logged in:
Visit /profile to view and edit student details
If fees are not paid, click Pay Fees to simulate payment
Navigate to /payment → see dummy card info → click Pay Now

📋 View All Students
Visit /students
You’ll see the list of all registered students and their current Fees Paid status


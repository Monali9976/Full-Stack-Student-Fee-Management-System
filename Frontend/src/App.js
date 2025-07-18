import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AllStudentsPage from './pages/AllStudentsPage';
import ProfilePage from './pages/ProfilePage';
import PaymentPage from './pages/PaymentPage';

function App() {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/students" element={<AllStudentsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/pay" element={<PaymentPage />} />
      </Routes>
    </>
  );
}

export default App;
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();

  const handlePayment = async () => {
    await axios.put(`${process.env.REACT_APP_API_URL}/students/pay`, {}, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    alert('Payment simulated successfully!');
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Simulate Payment</h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p>Card No: 4111 1111 1111 1111</p>
          <p>Expiry: 12/30</p>
          <p>CVV: 123</p>
        </div>
        <button onClick={handlePayment} className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Pay Now</button>
      </div>
    </div>
  );
};

export default PaymentPage;

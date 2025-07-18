import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feesPaid, setFeesPaid] = useState(false);

  const fetchProfile = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/students/profile`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setUser(res.data);
    setName(res.data.name);
    setEmail(res.data.email);
    setFeesPaid(res.data.feesPaid);
  };

  const updateProfile = async () => {
    await axios.put(
      `${process.env.REACT_APP_API_URL}/students/profile`,
      { name, email },
      { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
    alert('Profile updated');
  };

  const payFees = async () => {
    await axios.put(
  `${process.env.REACT_APP_API_URL}/students/pay`,
  {},
  { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
);

    setFeesPaid(true);
    alert('Fees marked as paid');
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1740&q=80')" }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-1">Fees Paid</label>
            <input
              value={feesPaid ? 'Yes' : 'No'}
              readOnly
              className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-100"
            />
          </div>
          <button onClick={updateProfile} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Update Profile
          </button>
          {!feesPaid && (
            <button onClick={payFees} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Pay Fees
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

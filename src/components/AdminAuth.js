import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const AdminAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here
    // For demonstration, let's just redirect to the admin dashboard
    navigate('/admin-dash');
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-600 min-h-screen">
      <div className="container mx-auto py-20">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="form-input mt-1 block w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input type="password" id="password" className="form-input mt-1 block w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 w-full">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;

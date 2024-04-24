import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import FootBar from './Footbar';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here if needed
    // For demonstration, let's just navigate to the home page
    navigate('/');
  };

  // Dummy data for admin functions
  const adminFunctions = [
    { id: 1, title: 'Manage Users', icon: '👥' },
    { id: 2, title: 'Manage Books', icon: '📚' },
    { id: 3, title: 'Analytics', icon: '📊' },
    // Add more admin functions as needed
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="container mx-auto py-20 flex-grow">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Admin Dashboard</h2>
          <div className="grid grid-cols-3 gap-6">
            {adminFunctions.map(func => (
              <div key={func.id} className="flex flex-col items-center justify-center">
                <div className="bg-indigo-700 rounded-full p-4 mb-2">
                  <span className="text-2xl">{func.icon}</span>
                </div>
                <h1 className="text-lg font-bold">{func.title}</h1>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
      <FootBar />
    </div>
  );
};

export default AdminDashboard;

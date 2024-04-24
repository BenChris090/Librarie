import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import FootBar from './Footbar';
import { FaBook } from "react-icons/fa";

// Importing images
import DASH_PIC1 from '../images/bg1.jpg';
import DASH_PIC2 from '../images/bg2.jpg';
import DASH_PIC3 from '../images/bg3.jpg';

const Dashboard = () => {
  const { displayName } = useParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here if needed
    // For demonstration, let's just navigate to the home page
    navigate('/');
  };

  // Dummy data for user's books
  const userBooks = [
    { id: 1, title: 'Serene Sunlight', author: 'Eleanor Gracewood', coverUrl: DASH_PIC1, description: 'A serene forest with sunlight filtering through the trees.' },
    { id: 2, title: 'Majestic Mountain', author: 'Maximilian Vanderbilt', coverUrl: DASH_PIC2, description: 'A majestic mountain peak with clouds swirling around it.' },
    { id: 3, title: 'Vast Horizon', author: 'Adelaide Montague', coverUrl: DASH_PIC3, description: 'A vast desert landscape with sand dunes stretching to the horizon.' },
    // Add more dummy data as needed
  ];

  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-600 min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="container mx-auto py-20">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Welcome, {displayName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userBooks.map(book => (
              <div key={book.id} className="flex flex-col items-center justify-center">
                <img src={book.coverUrl} alt={book.title} className="w-full md:w-64 h-auto object-cover rounded-md mb-2" />
                <h1 className="text-lg font-bold text-center">{book.title}</h1>
                <p className="text-sm text-gray-500">{book.author}</p>           
                <p className="text-lg text-gray-700 mb-4">{book.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
      <FootBar/>
    </div>
  );
};

export default Dashboard;

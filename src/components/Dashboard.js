import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import FootBar from './Footbar';
import { FaBook } from "react-icons/fa";


let DASH_PIC1 = require('../images/bg1.jpg');
let DASH_PIC2 = require('../images/bg2.jpg');
let DASH_PIC3 = require('../images/bg3.jpg');

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
    { id: 1, title: 'A serene forest with sunlight filtering through the trees.', author: 'Author 1', coverUrl: DASH_PIC1 },
    { id: 2, title: 'A majestic mountain peak with clouds swirling around it.', author: 'Author 2', coverUrl: DASH_PIC2 },
    { id: 3, title: 'A vast desert landscape with sand dunes stretching to the horizon.', author: 'Author 3', coverUrl: DASH_PIC3 },
    // Add more dummy data as needed
  ];

  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="container mx-auto py-20">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Welcome, {displayName}</h2>
          <div className="grid grid-cols-3 gap-6">
            {userBooks.map(book => (
              <div key={book.id} className="flex flex-col items-center justify-center">
                <img src={book.coverUrl} alt={book.title} className="w-32 h-32 object-cover rounded-md mb-2" />
                <h1 className="text-lg font-bold">{book.title}</h1>
                <p className="text-sm text-gray-500">{book.author}</p>
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

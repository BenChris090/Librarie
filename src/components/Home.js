import React from 'react';
import Navbar from "./Navbar";
import FootBar from "./Footbar";
import { NavLink,Link } from "react-router-dom";
import { FaAt, FaFacebook, FaStar, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsApple,BsAndroid2 } from "react-icons/bs"




// Image URLs
let HOME_PIC1 = require('../images/bg1.jpg');
let HOME_PIC2 = require('../images/bg2.jpg');
let HOME_PIC3 = require('../images/bg3.jpg');
let HOME_PIC4 = require('../images/bg4.jpg');
let HOME_PIC5 = require('../images/bg5.jpg');
let HOME_PIC6 = require('../images/bg6.jpg');

const Home = () => {
  // Image descriptions
  const imageDescriptions = [
    "A serene forest with sunlight filtering through the trees.",
    "A majestic mountain peak with clouds swirling around it.",
    "A vast desert landscape with sand dunes stretching to the horizon.",
    "A tranquil beach with crystal-clear turquoise water and palm trees.",
    "A colorful sunset over a calm lake with mountains in the background.",
    "A futuristic city skyline with tall skyscrapers and flying cars.",
  ];

  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-600 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Librarie</h1>
          <p className="text-lg md:text-xl mb-8">Discover your next adventure in our vast collection of books.</p>
          <Link to="/books-page" className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-400 hover:text-white transition duration-300 inline-block">Start Exploring</Link>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 px-4">
        {imageDescriptions.map((description, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg">
            <img src={eval(`HOME_PIC${index + 1}`)} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-6 bg-gray-100 rounded-b-lg">
              <h2 className="text-xl font-semibold mb-2">Book Title</h2>
              <p className="text-gray-700">{description}</p>
              <Link to="/books-page" className="block text-center mt-4 text-indigo-700 hover:text-indigo-900 font-semibold">Read More</Link>
            </div>
          </div>
        ))}
      </div>
      <FootBar/>
    </div>
  );
};

export default Home;

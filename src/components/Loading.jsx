import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import FootBar from './FoobBar';

const LoadingPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        <div className="text-white text-center">
          <h2 className="text-4xl font-semibold mb-4">Loading...</h2>
          <p className="text-lg">Please wait while we prepare something amazing for you!</p>
        </div>
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24 mt-8"></div>
      </div>
      <FootBar />
    </div>
  );
};

export default LoadingPage;

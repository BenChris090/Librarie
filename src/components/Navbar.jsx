import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";






const Navbar = ({ isLoggedIn }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-indigo-700 px-4 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link to="/" className="text-white text-3xl font-bold flex items-center mr-auto pr-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 00-.707.293l-8 8a1 1 0 000 1.414l8 8a1 1 0 001.414-1.414L4.414 12H18a1 1 0 100-2H4.414l6.293-6.293A1 1 0 0010 3z" clipRule="evenodd" />
                        </svg>
                        Librarie
                    </Link>
                </div>
                <button className="block md:hidden text-white" onClick={toggleNavbar}>
                    <FaBars />
                </button>
                <div className={`hidden md:flex space-x-10 text-xl items-center`}>
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/books-page" className="text-white hover:text-gray-300">Books</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                    {isLoggedIn ? null : <Link to="/user-auth" className="text-white hover:text-gray-300">Login</Link>}
                    {/* Add more navigation links as needed */}
                </div>
            </div>
            <div className={`container mx-auto mt-4 ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col space-y-4 md:hidden">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/books-page" className="text-white hover:text-gray-300">Books</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                    </li>
                    <li>
                        {isLoggedIn ? null : <Link to="/user-auth" className="text-white hover:text-gray-300">Login</Link>}
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

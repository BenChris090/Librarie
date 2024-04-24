import React from 'react';
import Navbar from "./Navbar";
import FootBar from "./Footbar";
import { NavLink,Link } from "react-router-dom";
import { FaAt, FaFacebook, FaStar, FaInstagram, FaTwitter } from "react-icons/fa";



const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 min-h-screen">
      <Navbar isLoggedIn={true} />
      <div className="container mx-auto py-20">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-8 text-center">About Librarie</h2>
          <p className="text-lg text-gray-700 mb-4">
            Librarie, the pinnacle of literary excellence, was founded in 2024 by the visionary leader, Benedict Christian
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With a commitment to providing top-tier literary works and a curated selection of books from around the globe, Librarie has become synonymous with sophistication, intellect, and cultural refinement.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our esteemed team of experts ensures that only the finest literature graces our shelves, catering to the discerning tastes of our esteemed clientele.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            At Librarie, we believe that books are not just a source of knowledge but a gateway to enlightenment, inspiration, and transformation.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Join us on this unparalleled journey of literary exploration and embark on a quest for intellectual enrichment and cultural immersion.
          </p>
        </div>
      </div>
      <FootBar />
    </div>
  );
};

export default About;

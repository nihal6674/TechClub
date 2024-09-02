import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaCalendarAlt, FaHandHoldingHeart, FaUserPlus, FaCommentDots, FaBlog } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black p-4 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-mono font-bold bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
          Tech Enthusiasts Club
        </h1>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="flex items-center hover:text-green-400 transition duration-300">
            <FaHome className="mr-2" /> Home
          </a>
          <a href="#about" className="flex items-center hover:text-blue-400 transition duration-300">
            <FaInfoCircle className="mr-2" /> About
          </a>
          <a href="#events" className="flex items-center hover:text-pink-400 transition duration-300">
            <FaCalendarAlt className="mr-2" /> Events
          </a>
          <a href="#benefits" className="flex items-center hover:text-green-400 transition duration-300">
            <FaHandHoldingHeart className="mr-2" /> Benefits
          </a>
          <a href="#join" className="flex items-center hover:text-blue-400 transition duration-300">
            <FaUserPlus className="mr-2" /> Join
          </a>
          <a href="#testimonials" className="flex items-center hover:text-pink-400 transition duration-300">
            <FaCommentDots className="mr-2" /> Testimonials
          </a>
          <a href="#blog" className="flex items-center hover:text-green-400 transition duration-300">
            <FaBlog className="mr-2" /> Blog
          </a>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black p-4 space-y-4">
          <a href="#home" className="flex items-center hover:text-green-400 transition duration-300">
            <FaHome className="mr-2" /> Home
          </a>
          <a href="#about" className="flex items-center hover:text-blue-400 transition duration-300">
            <FaInfoCircle className="mr-2" /> About
          </a>
          <a href="#events" className="flex items-center hover:text-pink-400 transition duration-300">
            <FaCalendarAlt className="mr-2" /> Events
          </a>
          <a href="#benefits" className="flex items-center hover:text-green-400 transition duration-300">
            <FaHandHoldingHeart className="mr-2" /> Benefits
          </a>
          <a href="#join" className="flex items-center hover:text-blue-400 transition duration-300">
            <FaUserPlus className="mr-2" /> Join
          </a>
          <a href="#testimonials" className="flex items-center hover:text-pink-400 transition duration-300">
            <FaCommentDots className="mr-2" /> Testimonials
          </a>
          <a href="#blog" className="flex items-center hover:text-green-400 transition duration-300">
            <FaBlog className="mr-2" /> Blog
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

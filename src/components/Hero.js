import React from 'react';
import heroBackground from '../components/heroBackground.jpg'; 

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to the Tech Enthusiasts Club</h1>
          <p className="text-lg md:text-xl mb-8">Join us to explore and innovate the latest in technology!</p>
          <a href="#join" className="bg-green-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-green-600 transition duration-300">
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import { FaPen, FaHandshake, FaCalendarCheck } from 'react-icons/fa'; 

const HowToJoin = () => {
  return (
    <section id="join" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 bg-clip-text text-transparent text-center">
          How to Join
        </h2>
        <div className="flex flex-col items-center space-y-12">
          <div className="flex flex-col items-center">
            <div className="bg-green-400 w-16 h-16 rounded-full flex justify-center items-center shadow-lg">
              <FaPen className="text-black text-2xl" />
            </div>
            <p className="mt-4 text-lg">Fill out the registration form</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex justify-center items-center shadow-lg">
              <FaHandshake className="text-black text-2xl" />
            </div>
            <p className="mt-4 text-lg">Attend our introductory meeting</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-pink-500 w-16 h-16 rounded-full flex justify-center items-center shadow-lg">
              <FaCalendarCheck className="text-black text-2xl" />
            </div>
            <p className="mt-4 text-lg">Start participating in our events and activities</p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;

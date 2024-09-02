import React from 'react';
import { FaTachometerAlt, FaNetworkWired, FaTools, FaTrophy } from 'react-icons/fa';

const MemberBenefits = () => {
  return (
    <section id="benefits" className="py-16 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gradient bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 bg-clip-text">
          Member Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaTachometerAlt className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Exclusive Workshops</h3>
            <p className="text-gray-600">Access to exclusive workshops and seminars that enhance your skills and knowledge.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaNetworkWired className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Networking Opportunities</h3>
            <p className="text-gray-600">Connect with industry professionals and build valuable relationships.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaTools className="text-4xl text-orange-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Tech Resources</h3>
            <p className="text-gray-600">Gain access to the latest tech resources and tools to stay ahead in the field.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaTrophy className="text-4xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Hackathons & Competitions</h3>
            <p className="text-gray-600">Participate in exciting hackathons and competitions to showcase your skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberBenefits;

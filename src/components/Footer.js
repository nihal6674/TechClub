import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Tech Enthusiasts Club. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

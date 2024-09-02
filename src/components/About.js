import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-center mb-12">
          The Tech Enthusiasts Club is a vibrant community of individuals passionate about exploring and innovating in the field of technology. We provide a platform for tech enthusiasts to connect, learn, and collaborate on exciting projects.
        </p>
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-16"> 
          <div className="md:w-1/3">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="text-base md:text-lg">
              Our mission is to foster a community where technology enthusiasts can share knowledge, collaborate on projects, and stay updated with the latest trends and innovations in the tech world.
            </p>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Our Vision
            </h3>
            <p className="text-base md:text-lg">
              We envision a future where technology is accessible to all and is used to solve the world’s most pressing challenges. We aim to be at the forefront of technological advancement and innovation.
            </p>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Our Values
            </h3>
            <p className="text-base md:text-lg">
              We value creativity, collaboration, and continuous learning. Our community is built on the principles of inclusivity and respect, encouraging members to bring their unique perspectives and ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

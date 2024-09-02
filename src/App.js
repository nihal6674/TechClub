import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero'; 
import About from './components/About';
import Events from './components/Events';
import MemberBenefits from './components/MemberBenefits';
import HowToJoin from './components/HowToJoin';
import Testimonials from './components/Testimonials';
import TechBlog from './components/TechBlog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <div className="pt-16"> 
        <HeroSection />
        <About />
        <Events />
        <MemberBenefits />
        <HowToJoin />
        <Testimonials />
        <TechBlog />
        <Footer />
      </div>
    </div>
  );
}

export default App;

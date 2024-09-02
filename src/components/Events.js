import React, { useState, useEffect } from 'react';

const Events = () => {
  const events = [
    {
      title: 'Tech Talk: AI Innovations',
      description: 'Join us for a discussion on the latest advancements in AI and machine learning.',
      date: '2024-10-10',
      link: '#',
    },
    {
      title: 'Hackathon: Code for Change',
      description: 'Participate in our hackathon to build innovative solutions for real-world problems.',
      date: '2024-11-01',
      link: '#',
    },
    {
      title: 'Competitive Coding Competition',
      description: 'Showcase your coding skills in our competitive coding competition and win exciting prizes.',
      date: '2024-12-15',
      link: '#',
    },
  ];

  const calculateDaysToGo = (eventDate) => {
    const today = new Date();
    const eventDateObj = new Date(eventDate);
    const timeDifference = eventDateObj - today;
    const daysToGo = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysToGo >= 0 ? daysToGo : 0;
  };

  return (
    <section id="events" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="relative bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-gradient bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 bg-clip-text">
                {event.title}
              </h3>
              <p className="text-lg mb-4">{event.description}</p>
              <p className="text-lg mb-4 text-green-400 font-semibold">
                {calculateDaysToGo(event.date)} days to go
              </p>
              <a href={event.link} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:from-green-500 hover:to-blue-600 transition duration-300">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

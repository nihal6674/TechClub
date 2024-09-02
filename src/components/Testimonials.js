import React from 'react';
import { FaStar } from 'react-icons/fa';

import userImage1 from '../components/user1.jpeg';
import userImage2 from '../components/user2.jpeg';
import userImage3 from '../components/user3.jpeg';
import userImage4 from '../components/user4.jpeg';
import userImage5 from '../components/user5.jpeg';
import userImage6 from '../components/user6.jpeg';

const getStarRating = () => {
  const ratings = [4, 4.2, 4.5, 5];
  return ratings[Math.floor(Math.random() * ratings.length)];
};

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const stars = [];
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} />);
  }
  
  if (halfStar) {
    stars.push(<FaStar key="half" className="text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />);
  }
  
  return <span className="text-yellow-400 flex items-center">{stars}</span>;
};

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", position: "CEO at Company", quote: "Amazing service, highly recommended!", image: userImage1, rating: getStarRating() },
    { name: "Natasha Noic", position: "CTO at Company", quote: "Incredible experience, will use again.", image: userImage2, rating: getStarRating() },
    { name: "Alice Johnson", position: "Marketing Director", quote: "A game-changer for our business.", image: userImage3, rating: getStarRating() },
    { name: "Bob Brown", position: "Product Manager", quote: "Exceptional quality and support.", image: userImage5, rating: getStarRating() },
    { name: "Charlie Davis", position: "UX Designer", quote: "Very pleased with the results!", image: userImage1, rating: getStarRating() },
    { name: "Emily Wilson", position: "HR Specialist", quote: "Fantastic service! Will definitely return.", image: userImage4, rating: getStarRating() },
    { name: "Michael Taylor", position: "Software Engineer", quote: "Highly professional and efficient.", image: userImage5, rating: getStarRating() },
    { name: "Sarah Lee", position: "Content Writer", quote: "Impressive results and timely delivery.", image: userImage3, rating: getStarRating() },
    { name: "David Brown", position: "Sales Manager", quote: "Exceptional experience from start to finish.", image: userImage6, rating: getStarRating() },
    { name: "Jessica Green", position: "Product Designer", quote: "Exceeded our expectations in every way.", image: userImage2, rating: getStarRating() },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          What Our Alumni Say
        </h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex gap-8 animate-marquee"
              style={{
                width: `${testimonials.length * 500}px`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg max-w-md w-80 shrink-0"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700">
                    {renderStars(testimonial.rating)} {' '}
                    {testimonial.quote}
                  </p>
                </div>
              ))}
              {testimonials.map((testimonial, index) => (
                <div
                  key={index + testimonials.length}
                  className="bg-white p-6 rounded-lg shadow-lg max-w-md w-80 shrink-0"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700">
                    {renderStars(testimonial.rating)} {' '}
                    {testimonial.quote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;

import React from 'react';

import blogImage1 from '../components/blog1.png';
import blogImage2 from '../components/blog2.jpeg';
import blogImage3 from '../components/blog3.png';
import blogImage4 from '../components/blog4.png';
import blogImage5 from '../components/blog5.png';
import blogImage6 from '../components/blog6.png';

const TechBlog = () => {
  const blogPosts = [
    {
      title: 'Understanding React Hooks',
      description: 'A deep dive into React Hooks, including useState and useEffect.',
      content: `React Hooks were introduced in React 16.8 to help developers use state and other React features without writing a class. 
        The most common hooks are useState and useEffect. useState allows you to add state to functional components, while useEffect 
        lets you perform side effects in your components. Understanding these hooks is crucial for writing modern React applications.`,
      image: blogImage1,
      link: '#',
    },
    {
      title: 'The Future of Web Development',
      description: 'Exploring emerging trends and technologies in web development.',
      content: `Web development is an ever-evolving field with new trends and technologies emerging constantly. 
        Some of the current trends include serverless architecture, progressive web apps (PWAs), and the rise of JavaScript frameworks 
        like React, Vue, and Angular. It's important for developers to stay updated with these trends to build future-proof and efficient applications.`,
      image: blogImage2,
      link: '#',
    },
    {
      title: 'Tailwind CSS Tips and Tricks',
      description: 'Learn how to make the most of Tailwind CSS in your projects.',
      content: `Tailwind CSS is a utility-first CSS framework that allows for rapid UI development. 
        By using utility classes, you can build custom designs without writing custom CSS. 
        Some tips for using Tailwind effectively include using responsive utilities, leveraging the configuration file for custom themes, 
        and utilizing built-in components for faster development.`,
      image: blogImage3,
      link: '#',
    },
    {
      title: 'Getting Started with TypeScript',
      description: 'An introduction to TypeScript and its benefits over JavaScript.',
      content: `TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It introduces static typing to the language, which can help catch errors early in the development process. 
        Key features include type annotations, interfaces, and generics. TypeScript enhances code readability and maintainability, making it a popular choice for large-scale applications.`,
      image: blogImage4,
      link: '#',
    },
    {
      title: 'Modern CSS Grid Layout',
      description: 'A guide to using CSS Grid Layout for creating responsive web designs.',
      content: `CSS Grid Layout is a powerful tool for creating complex web layouts with ease. It provides a two-dimensional grid-based layout system that allows you to position elements precisely on a grid. 
        By using grid lines, grid areas, and grid cells, you can create responsive designs that adapt to various screen sizes. CSS Grid simplifies the creation of both simple and intricate layouts.`,
      image: blogImage5,
      link: '#',
    },
    {
      title: 'Introduction to WebAssembly',
      description: 'Understanding WebAssembly and its role in modern web development.',
      content: `WebAssembly (Wasm) is a binary instruction format designed to be a compilation target for high-level languages like C, C++, and Rust. It enables fast execution of code on the web by providing a low-level virtual machine that runs alongside JavaScript. 
        WebAssembly enhances performance for applications that require heavy computation and allows developers to use languages other than JavaScript in web development.`,
      image: blogImage6,
      link: '#',
    },
  ];

  return (
    <section id="blog" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-h-screen overflow-y-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
          Tech Blog
        </h2>
        <div className="flex flex-col gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-lg mb-4">{post.description}</p>
                <p className="text-base mb-4">{post.content}</p>
                <a
                  href={post.link}
                  className="text-blue-400 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
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
        /* Custom scrollbar styles for WebKit browsers */
        .max-h-screen::-webkit-scrollbar {
          width: 8px;
        }
        .max-h-screen::-webkit-scrollbar-track {
          background: #2d2d2d;
        }
        .max-h-screen::-webkit-scrollbar-thumb {
          background: #4a4a4a;
          border-radius: 4px;
        }
        .max-h-screen::-webkit-scrollbar-thumb:hover {
          background: #6a6a6a;
        }
        /* Custom scrollbar styles for Firefox */
        .max-h-screen {
          scrollbar-width: thin;
          scrollbar-color: #4a4a4a #2d2d2d;
        }
      `}</style>
    </section>
  );
};

export default TechBlog;

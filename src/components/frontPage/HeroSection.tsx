import React, { useEffect } from 'react';
import RightSideSVG from './graphic'; // Ensure this path is correct

const HeroSection: React.FC = () => {
  useEffect(() => {
  }, []);

  return (
    <section className="relative flex justify-between items-center p-8 bg-gradient-to-r from-purple-700 to-blue-500 text-white overflow-hidden h-screen">
      <div className="max-w-md z-10">
        <h1 className="text-5xl font-bold mb-4 animate-bounce">Market Forecast</h1>
        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="space-x-4">
          <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-700 transition transform hover:scale-105">More details</button>
          <button className="border border-pink-500 text-pink-500 py-2 px-4 rounded hover:bg-pink-500 hover:text-white transition transform hover:scale-105">View demo</button>
        </div>
      </div>
      <svg
        className="absolute top-0 left-0 w-full h-full -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ff00ff', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: '#00ffff', stopOpacity: 0.5 }} />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient1)" />
        
        <g>
          <circle cx="200" cy="300" r="80" fill="#fff" opacity="0.5">
            <animate
              attributeName="r"
              from="80"
              to="120"
              dur="10s"
              repeatCount="indefinite"
              begin="0s"
              values="80;120;80"
            />
          </circle>
          <circle cx="600" cy="200" r="100" fill="#fff" opacity="0.5">
            <animate
              attributeName="r"
              from="100"
              to="140"
              dur="15s"
              repeatCount="indefinite"
              begin="0s"
              values="100;140;100"
            />
          </circle>
        </g>
      </svg>
    </section>
  );
};

export default HeroSection;

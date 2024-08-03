import { Link, Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const HeroSection: React.FC = () => {
  const handleClick = (navigate: (path: string) => void) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Prevent the default link behavior
    navigate('/home'); // Navigate to the /home page
  };
  const navigate = useNavigate();
  return (

    <div>
      <div className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
        {/* Logo */}
        <div className="text-3xl font-bold flex items-center space-x-2">
          <span>Dunkin Trades</span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link
            to="/"
            className="px-4 py-2 bg-purple-600 rounded-md text-white hover:bg-purple-500 transition duration-300 ease-in-out"
            onClick={handleClick(navigate)}
          >
            Log In
          </Link>
          <Link
            to="/"
            className="px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-500 transition duration-300 ease-in-out"
            onClick={handleClick(navigate)}
          >
            Sign In
          </Link>
        </div>
      </div>
      <section className="relative flex justify-between items-center p-8 bg-gradient-to-r from-purple-700 to-blue-500 text-white overflow-hidden h-screen">
        <div className="max-w-md z-10">
          <h1 className="text-5xl font-bold mb-4 animate-bounce">Market Forecast</h1>
          <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="space-x-4">
            <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-400 transition transform hover:scale-105 hover:text-black">More details</button>
            <button className="border border-teal-500 text-teal-300 py-2 px-4 rounded hover:bg-teal-500 hover:text-white transition transform hover:scale-105">View demo</button>
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
              <stop offset="0%" style={{ stopColor: '#ff7f50', stopOpacity: 0.7 }} />
              <stop offset="100%" style={{ stopColor: '#1e90ff', stopOpacity: 0.7 }} />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient1)" />

          <g>
            <circle cx="150" cy="250" r="60" fill="#ffffff" opacity="0.6">
              <animate
                attributeName="r"
                from="60"
                to="100"
                dur="8s"
                repeatCount="indefinite"
                values="60;100;60"
              />
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 150 250"
                to="360 150 250"
                dur="10s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="650" cy="350" r="80" fill="#ffffff" opacity="0.6">
              <animate
                attributeName="r"
                from="80"
                to="120"
                dur="12s"
                repeatCount="indefinite"
                values="80;120;80"
              />
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 650 350"
                to="360 650 350"
                dur="14s"
                repeatCount="indefinite"
              />
            </circle>
            <rect x="300" y="150" width="100" height="100" fill="#ffffff" opacity="0.5">
              <animate
                attributeName="width"
                from="100"
                to="150"
                dur="10s"
                repeatCount="indefinite"
                values="100;150;100"
              />
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 350 200"
                to="360 350 200"
                dur="16s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
        </svg>


      </section>
    </div>

  );
};

export default HeroSection;

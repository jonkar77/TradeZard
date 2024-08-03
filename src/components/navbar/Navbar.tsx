import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';

const handleClick = (navigate: (path: string) => void) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault(); // Prevent the default link behavior
  navigate('/home'); // Navigate to the /home page
};

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
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
          Home
        </Link>
        <Link
          to="/"
          className="px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-500 transition duration-300 ease-in-out"
          onClick={handleClick(navigate)}
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-3xl font-bold flex items-center space-x-2">
        <span>YourLogo</span>
      </div>

      {/* Navigation Links */}
      <div className="space-x-4">
        <a
          href="#"
          className="px-4 py-2 bg-purple-600 rounded-md text-white hover:bg-purple-500 transition duration-300 ease-in-out"
        >
          Log In
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-500 transition duration-300 ease-in-out"
        >
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

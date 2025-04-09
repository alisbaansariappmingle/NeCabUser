import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";


function Header() {
  return (
    <header className="bg-[#42A147]/90 backdrop-blur-md shadow-md sticky top-0 z-50 py-4 px-6 md:px-10 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* <img src={logo} alt="NE-CAB Logo" className="h-10" /> */}
        <h1 className="text-white text-2xl font-bold tracking-wide drop-shadow-sm">NE- <span className='text-yellow-500'>Cab</span></h1>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-8 text-white font-medium text-lg">
        <Link to="/" className="hover:text-yellow-300 transition-all duration-300">Home</Link>
        <Link to="/service" className="hover:text-yellow-300 transition-all duration-300">Services</Link>
        <Link to="/about" className="hover:text-yellow-300 transition-all duration-300">About Us</Link>
        <Link to="/cantact" className="hover:text-yellow-300 transition-all duration-300">Contact</Link>
      </nav>

      {/* Download Button */}
      <div>
        <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-xl transition-all duration-300 shadow-md">
          <FaDownload className="w-5 h-5" />
          Download App
        </button>
      </div>
    </header>
  );
}

export default Header;

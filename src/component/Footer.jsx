import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

        {/* About Us */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            We are a fast and reliable bike taxi service, making daily commutes quick, affordable, and hassle-free.
            <br /><br />
            Our mission is to provide seamless transportation solutions, helping you beat the traffic and reach your destination on time, every time.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-yellow-300 transition">Gallery</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Services</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Explore More */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-semibold mb-4">Explore More</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Download App</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300 text-sm">Phone: <span className="text-white">1234567890</span></p>
          <p className="text-gray-300 text-sm">
            Email: <a href="mailto:cablowhelp@gmail.com" className="text-white hover:text-yellow-300 transition">info2344@gmail.com</a>
          </p>
          <p className="text-gray-300 text-sm">Address: vndfvbfd</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-5 pt-3 border-t border-yellow-700 text-center text-sm text-gray-400">
        <span className="text-yellow-400 font-semibold">NE-CAB</span> 2024 © All Rights Reserved <span className="text-yellow-400 font-semibold"></span>
      </div>
    </footer>
  );
};

export default Footer;

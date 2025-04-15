// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-pink-500 mb-4">Herselfcare</h2>
          <p className="text-sm text-gray-300">
            Empowering individuals with tools and resources to detect breast cancer early,
            stay informed, and take control of their health.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-pink-400 transition">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-pink-400 transition">Blog</Link></li>
            <li><Link to="/learning" className="hover:text-pink-400 transition">Learning</Link></li>
            <li><Link to="/hospitals" className="hover:text-pink-400 transition">Hospital Search</Link></li>
            <li><Link to="/login" className="hover:text-pink-400 transition">Login</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">📧 Email: support@herselfcare.com</p>
          <p className="text-sm text-gray-300 mt-1">📞 Phone: +91-9876543210</p>
          <div className="flex space-x-4 mt-4">
            {/* Placeholder social icons (use actual icons later) */}
            <a href="#" className="text-gray-400 hover:text-pink-400 transition">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Herselfcare. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

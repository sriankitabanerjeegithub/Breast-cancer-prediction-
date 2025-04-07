// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-900 text-white text-center py-6 ">
    <div className="max-w-6xl mx-auto px-4">
      <p className="text-lg">&copy; {new Date().getFullYear()} Herselfcare. All Rights Reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <Link to="/about" className="hover:text-pink-400">About Us</Link>
        <Link to="/blog" className="hover:text-pink-400">Blog</Link>
        <Link to="/learning" className="hover:text-pink-400">Learning</Link>
      </div>
    </div>
  </footer>
);

export default Footer;

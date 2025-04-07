import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Menu, X } from "lucide-react"; // Import icons
import { FaTasks } from "react-icons/fa"; // Import To-Do List Icon

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu
    const navigate = useNavigate(); // Use for navigation

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full fixed top-0 left-0 z-30">
            {/* Upper Navbar (Logo & Nearest Services) */}
            <div className="w-full bg-black py-1 flex items-center justify-between px-6 shadow-md">
                {/* Sliding Logo */}
                <Link to="/">
                    <img 
                        src="/logo3.jpeg" 
                        alt="Logo3" 
                        className="h-16 w-auto transition-transform duration-500 ease-in-out transform hover:translate-x-[-5px]" 
                    />
                </Link>

                {/* Nearest Services Button */}
                <Link 
                    to="/hospitals" 
                    className="flex items-center gap-2 bg-white text-white px-4 py-2 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
                >
                    <MapPin size={20} />
                    Nearest Services
                </Link>
            </div>

            {/* Main Navbar */}
            <nav className="w-full bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    {/* Left Side - Navigation Links */}
                    <div className="flex items-center gap-6">
                        <Link 
                            to="/" 
                            className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition"
                            // onClick={() => navigate(0)}
                        >
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
                            About Us
                        </Link>
                        <Link to="/blog" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
                            Blog
                        </Link>
                        <Link to="/learning" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
                            Learning
                        </Link>
                        <Link to="/todo" className="text-pink-500 text-3xl hover:text-pink-700 transition duration-300">
                            <FaTasks />
                        </Link>
                    </div>

                    {/* Right Side - Authentication Buttons (Hidden on Mobile) */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/signin">
                            <button className="bg-gray-800 text-black px-6 py-2 rounded-full text-lg font-bold hover:bg-gray-900 transition">
                                Login
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="bg-pink-500 text-black px-6 py-2 rounded-full text-lg font-bold hover:bg-pink-600 transition">
                                Sign Up
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-gray-700" onClick={toggleMenu}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden bg-white shadow-lg flex flex-col items-center gap-4 py-4">
                        <Link to="/" className="text-black text-lg font-semibold hover:text-pink-500 transition">
                            Home
                        </Link>
                        <Link to="/about" className="text-black text-lg font-semibold hover:text-pink-500 transition">
                            About Us
                        </Link>
                        <Link to="/blog" className="text-black text-lg font-semibold hover:text-pink-500 transition">
                            Blog
                        </Link>
                        <Link to="/learning" className="text-black text-lg font-semibold hover:text-pink-500 transition">
                            Learning
                        </Link>
                        <Link to="/todo" className="text-pink-500 text-3xl hover:text-pink-700 transition duration-300">
                            <FaTasks />
                        </Link>
                        <Link to="/signin" className="text-black text-lg font-semibold hover:text-pink-500 transition">
                            Login
                        </Link>
                        <Link to="/signup" className="text-black text-lg font-semibold hover:text-pink-500 transition">
                            Sign Up
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;

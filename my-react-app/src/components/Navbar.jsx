// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MapPin, Menu, X } from "lucide-react"; // Import icons
// import { FaTasks } from "react-icons/fa"; // Import To-Do List Icon

// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false); // State for mobile menu
//     const navigate = useNavigate(); // Use for navigation

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="w-full fixed top-0 left-0 z-30">
//             {/* Upper Navbar (Logo & Nearest Services) */}
//             <div className="w-full bg-black py-1 flex items-center justify-between px-6 shadow-md">
//                 {/* Sliding Logo */}
//                 <Link to="/">
//                     <img 
//                         src="/logo3.jpeg" 
//                         alt="Logo3" 
//                         className="h-16 w-auto transition-transform duration-500 ease-in-out transform hover:translate-x-[-5px]" 
//                     />
//                 </Link>

//                 {/* Nearest Services Button */}
//                 <Link 
//                     to="/hospitals" 
//                     className="flex items-center gap-2 bg-white text-white px-4 py-2 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
//                 >
//                     <MapPin size={20} />
//                     Nearest Services
//                 </Link>
//             </div>

//             {/* Main Navbar */}
//             <nav className="w-full bg-white shadow-md">
//                 <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//                     {/* Left Side - Navigation Links */}
//                     <div className="flex items-center gap-6">
//                         <Link 
//                             to="/" 
//                             className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition"
//                             // onClick={() => navigate(0)}
//                         >
//                             Home
//                         </Link>
//                         <Link to="/about" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             About Us
//                         </Link>
//                         <Link to="/blog" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             Blog
//                         </Link>
//                         <Link to="/learning" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             Learning
//                         </Link>
//                         <Link to="/todo" className="text-pink-500 text-3xl hover:text-pink-700 transition duration-300">
//                             <FaTasks />
//                         </Link>
//                     </div>

//                     {/* Right Side - Authentication Buttons (Hidden on Mobile) */}
//                     <div className="hidden md:flex items-center gap-6">
//                         <Link to="/signin">
//                             <button className="bg-gray-800 text-black px-6 py-2 rounded-full text-lg font-bold hover:bg-gray-900 transition">
//                                 Login
//                             </button>
//                         </Link>
//                         <Link to="/signup">
//                             <button className="bg-pink-500 text-black px-6 py-2 rounded-full text-lg font-bold hover:bg-pink-600 transition">
//                                 Sign Up
//                             </button>
//                         </Link>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button className="md:hidden text-gray-700" onClick={toggleMenu}>
//                         {isOpen ? <X size={28} /> : <Menu size={28} />}
//                     </button>
//                 </div>

//                 {/* Mobile Menu Dropdown */}
//                 {isOpen && (
//                     <div className="md:hidden bg-white shadow-lg flex flex-col items-center gap-4 py-4">
//                         <Link to="/" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Home
//                         </Link>
//                         <Link to="/about" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             About Us
//                         </Link>
//                         <Link to="/blog" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Blog
//                         </Link>
//                         <Link to="/learning" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Learning
//                         </Link>
//                         <Link to="/todo" className="text-pink-500 text-3xl hover:text-pink-700 transition duration-300">
//                             <FaTasks />
//                         </Link>
//                         <Link to="/signin" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Login
//                         </Link>
//                         <Link to="/signup" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Sign Up
//                         </Link>
//                     </div>
//                 )}
//             </nav>
//         </div>
//     );
// }

// export default Navbar;




//old  code
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MapPin, Menu, X } from "lucide-react"; // Import icons
// import { FaTasks } from "react-icons/fa"; // Import To-Do List Icon
// import i18n from "i18next"; // Import i18n to handle language switching
// import { useTranslation } from 'react-i18next'; // Import useTranslation

// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false); // State for mobile menu
//     const navigate = useNavigate(); // Use for navigation
//     const { i18n } = useTranslation(); // Initialize i18n for language switching

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="w-full fixed top-0 left-0 z-30">
//             {/* Upper Navbar (Logo & Nearest Services) */}
//             <div className="w-full bg-black py-1 flex items-center justify-between px-6 shadow-md">
//                 {/* Sliding Logo */}
//                 <Link to="/">
//                     <img 
//                         src="/logo3.jpeg" 
//                         alt="Logo3" 
//                         className="h-16 w-auto transition-transform duration-500 ease-in-out transform hover:translate-x-[-5px]" 
//                     />
//                 </Link>

//                 {/* Nearest Services Button */}
//                 <Link 
//                     to="/hospitals" 
//                     className="flex items-center gap-2 bg-white text-white px-4 py-2 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
//                 >
//                     <MapPin size={20} />
//                     Nearest Services 
//                 </Link>
//                 <Link to="/drai" className="flex items-center gap-1 text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             <Bot size={20} />
//                             Ask AI
//                         </Link>

//             </div>

//             {/* Main Navbar */}
//             <nav className="w-full bg-white shadow-md">
//                 <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//                     {/* Left Side - Navigation Links */}
//                     <div className="flex items-center gap-6">
//                         <Link 
//                             to="/" 
//                             className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition"
//                         >
//                             Home
//                         </Link>
//                         <Link to="/about" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             About Us
//                         </Link>
//                         <Link to="/blog" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             Blog
//                         </Link>
//                         <Link to="/learning" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             Learning
//                         </Link>
//                         <Link to="/todo" className="text-pink-500 text-3xl hover:text-pink-700 transition duration-300">
//                             <FaTasks />
//                         </Link>
//                     </div>

//                     {/* Right Side - Language & Authentication Buttons (Hidden on Mobile) */}
//                     <div className="hidden md:flex items-center gap-6">
//                         {}

//                         <Link to="/signin">
//                             <button className="bg-gray-800 text-black px-6 py-2 rounded-full text-lg font-bold hover:bg-gray-900 transition">
//                                 Login
//                             </button>
//                         </Link>
//                         <Link to="/signup">
//                             <button className="bg-pink-500 text-black px-6 py-2 rounded-full text-lg font-bold hover:bg-pink-600 transition">
//                                 Sign Up
//                             </button>
//                         </Link>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button className="md:hidden text-gray-700" onClick={toggleMenu}>
//                         {isOpen ? <X size={28} /> : <Menu size={28} />}
//                     </button>
//                 </div>

//                 {/* Mobile Menu Dropdown */}
//                 {isOpen && (
//                     <div className="md:hidden bg-white shadow-lg flex flex-col items-center gap-4 py-4">
//                         <Link to="/" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Home
//                         </Link>
//                         <Link to="/about" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             About Us
//                         </Link>
//                         <Link to="/blog" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Blog
//                         </Link>
//                         <Link to="/learning" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Learning
//                         </Link>
//                         <Link to="/todo" className="text-pink-500 text-3xl hover:text-pink-700 transition duration-300">
//                             <FaTasks />
//                         </Link>
//                         <Link to="/signin" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Login
//                         </Link>
//                         <Link to="/signup" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Sign Up
//                         </Link>
//                     </div>
//                 )}
//             </nav>

//         </div>
//     );
// }

// export default Navbar;
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MapPin, Menu, X, Bot } from "lucide-react"; // Added Bot icon
// import { FaTasks } from "react-icons/fa";
// import { useTranslation } from 'react-i18next';
// import { useAuth0 } from "@auth0/auth0-react";
// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const { loginWithRedirect,logout } = useAuth0();
//     const navigate = useNavigate();
//     const { i18n } = useTranslation();

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };
//     const handleLogin = () => {
//         loginWithRedirect({
//             redirectUri: window.location.origin + '/pages/Dashboard'  // This redirects to /dashboard after login
//         });
//     };

//     return (
//         <div className="w-full fixed top-0 left-0 z-30">
//             {/* Upper Navbar (Logo & Nearest Services) */}
//             <div className="w-full bg-black py-1 flex items-center justify-between px-6 shadow-md">
//                 <Link to="/">
//                     <img 
//                         src="/logo3.jpeg" 
//                         alt="Logo3" 
//                         className="h-16 w-auto transition-transform duration-500 ease-in-out transform hover:translate-x-[-5px]" 
//                     />
//                 </Link>

//                 <Link 
//                     to="/hospitals" 
//                     className="flex items-center gap-2 bg-white text-white px-4 py-2 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
//                 >
//                     <MapPin size={20} />
//                     Nearest Services 
//                 </Link>
//             </div>

//             {/* Main Navbar */}
//             <nav className="w-full bg-white shadow-md">
//                 <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//                     {/* Left Side - Navigation Links */}
//                     <div className="flex items-center gap-6">
//                         <Link 
//                             to="/" 
//                             className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition"
//                         >
//                             Home
//                         </Link>
//                         <Link to="/about" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             About Us
//                         </Link>
//                         <Link to="/blog" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             Blog
//                         </Link>
//                         <Link to="/learning" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             Learning
//                         </Link>
//                         <Link to="/todo" className="text-pink-500 text-3xl hover:text-pink-700 transition duration-300">
//                             <FaTasks />
//                         </Link>
//                         {/* NEW: DrAi link */}
//                         <Link to="/drai" className="flex items-center gap-1 text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             <Bot size={20} />
//                             Ask AI
//                         </Link>
                       
//                     </div>

//                     {/* Right Side - Auth Buttons */}
//                     <div className="hidden md:flex items-center gap-6">
//                         {/* <Link to="/signin"> */}
//                             {/* <button className="bg-gray-800 text-black px-6 py-2 rounded-full text-lg font-bold hover:bg-gray-900 transition">
//                                 Login
//                             </button> */}
//                              <li>
//                         <button onClick={() => loginWithRedirect()}>Log In</button>
//                         </li>
//                         {/* </Link> */}
//                         {/* <Link to="/signup"> */}
//                         <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//       Log Out
//     </button>
//                         {/* </Link> */}
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button className="md:hidden text-gray-700" onClick={toggleMenu}>
//                         {isOpen ? <X size={28} /> : <Menu size={28} />}
//                     </button>
//                 </div>

//                 {/* Mobile Menu Dropdown */}
//                 {isOpen && (
//                     <div className="md:hidden bg-white shadow-lg flex flex-col items-center gap-4 py-4">
//                         <Link to="/" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Home
//                         </Link>
//                         <Link to="/about" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             About Us
//                         </Link>
//                         <Link to="/blog" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Blog
//                         </Link>
//                         <Link to="/learning" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Learning
//                         </Link>
//                         <Link to="/todo" className="text-pink-500 text-3xl hover:text-pink-700 transition duration-300">
//                             <FaTasks />
//                         </Link>
//                         {/* NEW: DrAi link */}
//                         <Link to="/drai" className="flex items-center gap-1 text-black text-lg font-semibold hover:text-pink-500 transition">
//                             <Bot size={20} />
//                             Ask AI
//                         </Link>
//                         <Link to="/signin" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Login
//                         </Link>
//                         <Link to="/signup" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Sign Up
//                         </Link>
//                     </div>
//                 )}
//             </nav>
//         </div>
//     );
// }

// export default Navbar;
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MapPin, Menu, X, Bot } from "lucide-react"; // Added Bot icon
// import { FaTasks } from "react-icons/fa";
// import { useTranslation } from 'react-i18next';
// import { useAuth0 } from "@auth0/auth0-react";
// //import { Auth0ProviderWithNavigate } from './auth0-provider-with-navigate';


// function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
//     const navigate = useNavigate();
//     const { i18n } = useTranslation();

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     // ✅ UPDATED: Use handleLogin to set redirect target
//     const handleLogin = () => {
//         loginWithRedirect({
//             appState: { returnTo: '/dashboard' }  // Store where you want to go after login
//         });
//     };
    
//     return (
//         <div className="w-full fixed top-0 left-0 z-30">
//             {/* Upper Navbar (Logo & Nearest Services) */}
//             <div className="w-full bg-black py-1 flex items-center justify-between px-6 shadow-md">
//                 <Link to="/">
//                     <img 
//                         src="/logo3.jpeg" 
//                         alt="Logo3" 
//                         className="h-16 w-auto transition-transform duration-500 ease-in-out transform hover:translate-x-[-5px]" 
//                     />
//                 </Link>

//                 <Link 
//                     to="/hospitals" 
//                     className="flex items-center gap-2 bg-white text-white px-4 py-2 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
//                 >
//                     <MapPin size={20} />
//                     Nearest Services 
//                 </Link>
//             </div>

//             {/* Main Navbar */}
//             <nav className="w-full bg-white shadow-md">
//                 <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//                     {/* Left Side - Navigation Links */}
//                     <div className="flex items-center gap-6">
//                         <Link 
//                             to="/" 
//                             className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition"
//                         >
//                             Home
//                         </Link>
//                         <Link to="/about" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             About Us
//                         </Link>
//                         <Link to="/blog" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             Blog
//                         </Link>
//                         <Link to="/learning" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             Learning
//                         </Link>
//                         {/* <Link to="/todo" className="text-pink-500 text-3xl hover:text-pink-700 transition duration-300">
//                             <FaTasks />
//                         </Link> */}
//                         {/* NEW: DrAi link */}
//                         <Link to="/drai" className="flex items-center gap-1 text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             <Bot size={20} />
//                             Ask AI
//                         </Link>     
//                     </div>

//                     {/* Right Side - Auth Buttons */}
//                     <div className="hidden md:flex items-center gap-6">
//                         <li>
//                             {/* ✅ UPDATED: Use handleLogin here */}
//                             <button onClick={handleLogin}>Log In</button>
//                         </li>
//                         <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//                             Log Out
//                         </button>
//                         <Link to="/predict" className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
//                             predict
//                         </Link>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button className="md:hidden text-gray-700" onClick={toggleMenu}>
//                         {isOpen ? <X size={28} /> : <Menu size={28} />}
//                     </button>
//                 </div>

//                 {/* Mobile Menu Dropdown */}
//                 {isOpen && (
//                     <div className="md:hidden bg-white shadow-lg flex flex-col items-center gap-4 py-4">
//                         <Link to="/" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Home
//                         </Link>
//                         <Link to="/about" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             About Us
//                         </Link>
//                         <Link to="/blog" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Blog
//                         </Link>
//                         <Link to="/learning" className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Learning
//                         </Link>
//                         {/* <Link to="/todo" className="text-pink-500 text-3xl hover:text-pink-700 transition duration-300">
//                             <FaTasks />
//                         </Link> */}
//                         <Link to="/drai" className="flex items-center gap-1 text-black text-lg font-semibold hover:text-pink-500 transition">
//                             <Bot size={20} />
//                             Ask AI
//                         </Link>
//                         <button onClick={handleLogin} className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Login
//                         </button>
//                         <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="text-black text-lg font-semibold hover:text-pink-500 transition">
//                             Log Out
//                         </button>

//                     </div>
//                 )}
//             </nav>
//         </div>
//     );
// }

// export default Navbar;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Menu, X, Bot } from "lucide-react"; // Added Bot icon
import { useTranslation } from 'react-i18next';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { loginWithRedirect, logout, isAuthenticated, isLoading, user } = useAuth0();
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogin = () => {
        loginWithRedirect({
            appState: { returnTo: '/dashboard' }  // You can change this if needed
        });
    };

    // ✅ NEW: Predict button logic
    const handlePredictClick = () => {
        if (isAuthenticated) {
            navigate('/predict');
        } else {
            loginWithRedirect();
        }
    };

    return (
        <div className="w-full fixed top-0 left-0 z-30">
            {/* Upper Navbar (Logo & Nearest Services) */}
            <div className="w-full bg-black py-1 flex items-center justify-between px-6 shadow-md">
                <Link to="/">
                    <img 
                        src="/logo3.jpeg" 
                        alt="Logo3" 
                        className="h-16 w-auto transition-transform duration-500 ease-in-out transform hover:translate-x-[-5px]" 
                    />
                </Link>

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
                        {/* NEW: DrAi link */}
                        <Link to="/drai" className="flex items-center gap-1 text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
                            <Bot size={20} />
                            Ask AI
                        </Link>     
                    </div>

                    {/* Right Side - Auth Buttons */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* ✅ Predict button with logic */}
                        <button
                            onClick={handlePredictClick}
                            className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition"
                        >
                            Predict
                        </button>

                        {!isAuthenticated ? (
                            <button onClick={handleLogin} className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition">
                                Login
                            </button>
                        ) : (
                            <div className="flex items-center gap-4">
                                <span className="text-gray-700 text-sm">Welcome, {user?.name}</span>
                                <button
                                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                    className="text-gray-700 text-lg font-semibold hover:text-pink-500 transition"
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
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
                        <Link to="/drai" className="flex items-center gap-1 text-black text-lg font-semibold hover:text-pink-500 transition">
                            <Bot size={20} />
                            Ask AI
                        </Link>
                        {/* ✅ Predict button for mobile */}
                        <button
                            onClick={handlePredictClick}
                            className="text-black text-lg font-semibold hover:text-pink-500 transition"
                        >
                            Predict
                        </button>
                        {!isAuthenticated ? (
                            <button onClick={handleLogin} className="text-black text-lg font-semibold hover:text-pink-500 transition">
                                Login
                            </button>
                        ) : (
                            <button
                                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                className="text-black text-lg font-semibold hover:text-pink-500 transition"
                            >
                                Log Out
                            </button>
                        )}
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;

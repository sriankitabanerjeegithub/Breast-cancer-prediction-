import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";



function Home() {
    return (
        <div className="h-screen w-full">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div 
                className="absolute top-0 left-0 h-screen w-screen bg-cover bg-center z-0 mt-30"
                style={{ backgroundImage: "url('/positive.jpeg')" }}
            >
                {/* Animated Heading - Coming from Left */}
                <motion.h1  
                    initial={{ y: "-30", opacity: 0 }} 
                    animate={{ y: 65, opacity: 1 }} 
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-bold text-black italic z-10 ml-20"
                >
                    <u>Explore Us</u>
                </motion.h1>

                {/* Animated Paragraph - Coming from Right */}
                <motion.p 
                    initial={{ y: -20, x: 0 }} 
                    animate={{ 
                        y: 200, 
                        x: window.innerWidth >= 1024 ? -30 : window.innerWidth >= 768 ? -5 : -10  
                    }} 
                    transition={{ duration: 0.8 }}
                    className="text-4xl text-black italic mt-4 text-center md:text-left px-6 
                               max-w-[90%] md:max-w-[60%] ml-0 md:ml-6 lg:ml-12"
                >
                    Welcome to Herselfcare, your online <br />
                    guide to breast cancer prediction <br />
                    and prevention. Take control of <br />
                    your health with our innovative <br />
                    risk assessment tool.
                </motion.p>
            </div>
           


            {/* Section BELOW the background image */}
            <div className="relative w-full mt-[115vh] flex flex-col items-center py-7">
                <p className="text-2xl text-black italic ml-[-50px] font-light">
                    Empowering Early Detection
                </p>
                <h2 className="text-5xl font-bold text-black mt-6 ml-[10px] italic relative">
                    <span className="relative inline-block border-b-4 border-black pb-1">
                        Enhancing
                    </span>
                    , <span className="text-[#f707b3]">peace of mind</span>
                </h2>
                <p className="text-3xl text-black italic ml-[100] mt-10 font-light">
                Early detection can save lives,<br />
                 and our Breast Cancer Prediction & Awareness <br />
                 Platform is here to help you take control <br />
                 of your health. By analyzing key medical data,<br /> 
                 our tool provides quick and easy risk assessments,<br />
                  empowering you to make informed decisions.<br />
                   Along with prediction,<br />
                    we offer valuable resources, <br />
                    expert blogs, and a hospital search feature<br />
                     to guide you on your journey. Prioritize your well-being <br />
                     today—because awareness and action are the first steps toward a healthier future!
                </p>
            </div>

            {/* Image Section */}
            <div className="relative w-full flex flex-col items-center py-6 bg-pink-100">
                <div className="flex justify-center items-center gap-20 mt-10">
                    <img src="image1.jpeg" alt="Health Awareness" className="w-[450px] h-[450px] object-cover rounded-lg shadow-lg"/>
                    <img src="image5.png" alt="Medical Consultation" className="w-[450px] h-[450px] object-cover rounded-lg shadow-lg"/>
                    <img src="image6.jpeg" alt="Cancer Detection" className="w-[450px] h-[450px] object-cover rounded-lg shadow-lg"/>
                    <img src="image3.jpeg" alt="Health Awareness" className="w-[450px] h-[450px] object-cover rounded-lg shadow-lg"/>
                </div>
            </div>

 {/* Section BELOW the background image */}
 <div className="relative w-full mt-[5vh] flex flex-col items-center py-6">
                <p className="text-2xl text-black italic ml-[-50px] font-light">
                    Be sure, Be safe
                </p>
                <h2 className="text-5xl font-bold text-black mt-6 ml-[10px] italic relative">
                    <span className="relative inline-block border-b-4 border-black pb-1">
                        Your Health
                    </span>
                    , <span className="text-[#f707b3]">Your Priority</span>
                </h2>
                <p className="text-3xl text-black italic ml-[100] mt-10 font-light">
                Our Breast Cancer Prediction & Awareness<br />
                Platform helps assess breast cancer risk<br /> 
                by analyzing medical data and providing <br />
                quick predictions. It offers a user-friendly <br />
                experience, along with resources for education <br />
                and hospital search. Take a proactive step toward<br /> 
                early detection and stay informed about your health!
                </p>
            </div>







            {/* Testimonials Section with Animation */}
            <div 
                className="relative w-full h-full bg-cover bg-center mt-10"
                style={{ backgroundImage: "url('/flower.jpeg')" }}
            >
                <div className="flex flex-wrap items-center justify-center h-full bg-opacity-50 text-black italic">
                    <h2 className="text-2xl text-left pl-0 ml-20">A good word means a lot</h2>

                    <p className="text-6xl font-bold mt-2 max-w-[80%]  text-center ml-20 italic">
                        Client testimonial
                    </p>
                    <p className="text-2xl mt-2 max-w-[80%] font-bold text-center ml-20 italic">
                        It’s always the word of mouth that’s the best advice.
                    </p>
                    <div className="relative z-10 flex flex-wrap justify-center mt-2 gap-15 max-w-4xl">
                        {[ 
                            { name: "Sarah Johnson", text: "I found this platform incredibly helpful and informative. The predictions gave me peace of mind.", image: "/girls.jpeg" },
                            { name: "Climily Carter", text: "A fantastic tool for early detection and awareness. Highly recommended!", image: "/girls1.jpeg" },
                            { name: "Michael Lee", text: "This website provided me with valuable insights and reassurance.", image: "/girls2.jpeg" },
                        ].map((testimonial, index) => (
                            <motion.div 
                                key={index} 
                                className="bg-white p-6 pt-10 rounded-lg shadow-lg max-w-sm text-center relative"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.3 }}
                            >
                                <img src={testimonial.image} alt={testimonial.name} 
                                    className="w-16 h-16 rounded-full mx-auto mb-4 absolute -top-6 left-1/2 transform -translate-x-1/2 border-4 border-white" />
                                <p className="italic">{`“${testimonial.text}”`}</p>
                                <h4 className="font-bold mt-2">- {testimonial.name}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

             
            {/* Login Button Below Testimonials */}
            <div className="flex justify-center mt-10">
                <Link to="/signup" className="bg-pink-500 text-black text-xl font-bold py-3 px-6 rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
                    Login
                </Link>
            </div>

{/* Footer */}
<footer className="bg-gray-900 text-white text-center py-6 mt-10">
                <div className="max-w-6xl mx-auto px-4">
                    <p className="text-lg">&copy; {new Date().getFullYear()} Herselfcare. All Rights Reserved.</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <Link to="/about" className="hover:text-pink-400">About Us</Link>
                        <Link to="/blog" className="hover:text-pink-400">Blog</Link>
                        <Link to="/contact" className="hover:text-pink-400">Contact</Link>
                    </div>
                </div>
            </footer>

            
        </div>
        
    );
}

export default Home;

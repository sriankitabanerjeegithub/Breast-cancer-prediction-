// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:5000/api/auth/register", {
//                 name,
//                 email,
//                 password
//             });
//             alert("Registration Successful! Please Log In.");
//             navigate("/signin");
//         } catch (error) {
//             console.error("Signup Error:", error.response.data.message);
//             alert("Signup failed! Try again.");
//         }
//     };

//     return (
//         <div>
//             <h2>Sign Up</h2>
//             <form onSubmit={handleSignUp}>
//                 <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 <button type="submit">Sign Up</button>
//             </form>
//             <p>Already have an account? <a href="/signin">Sign In</a></p>
//         </div>
//     );
// };

// export default SignUp;
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", {
                name,
                email,
                password
            });
            alert("Registration Successful! Please Log In.");
            navigate("/signin");
        } catch (error) {
            console.error("Signup Error:", error.response.data.message);
            alert("Signup failed! Try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-pink-200">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
            >
                <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">Sign Up</h2>
                <form onSubmit={handleSignUp} className="space-y-5">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-purple-600 text-black py-2 rounded-xl hover:bg-purple-700 transition duration-300"
                    >
                        Sign Up
                    </motion.button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <a href="/signin" className="text-purple-600 font-semibold hover:underline">
                        Sign In
                    </a>
                </p>
            </motion.div>
        </div>
    );
};

export default SignUp;

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SignIn = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleSignIn = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
//             localStorage.setItem("token", response.data.token);
//             alert("Login Successful!");
//             navigate("/Dashboard"); // Redirect to dashboard or home
//         } catch (error) {
//             console.error("Login Error:", error.response.data.message);
//             alert("Invalid credentials!");
//         }
//     };

//     return (
//         <div>
//             <h2>Sign In</h2>
//             <form onSubmit={handleSignIn}>
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 <button type="submit">Sign In</button>
//             </form>
//             <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//         </div>
//     );
// };

// export default SignIn;
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            localStorage.setItem("token", response.data.token);
            alert("Login Successful!");
            navigate("/Dashboard");
        } catch (error) {
            console.error("Login Error:", error.response.data.message);
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-purple-100">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
            >
                <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">Sign In</h2>
                <form onSubmit={handleSignIn} className="space-y-5">
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
                        Sign In
                    </motion.button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-purple-600 font-semibold hover:underline">
                        Sign Up
                    </a>
                </p>
            </motion.div>
        </div>
    );
};

export default SignIn;

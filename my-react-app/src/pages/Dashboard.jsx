// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const navigate = useNavigate(); // ✅ Define navigate

//     const handleLogout = () => {
//         localStorage.removeItem("token"); // Remove user token
//         window.location.href = "/signin"; // Redirect to Sign-In page
//     };

//     return (
//         <div>
//             <h1>Welcome to the Dashboard 🎉</h1>
//             <p>This is a protected page that only logged-in users can access.</p>
//             <button onClick={() => navigate("/predict")}>Go to Predict Page</button> {/* ✅ Fixed path */}
//             <button onClick={handleLogout}>Logout</button>
//         </div>
//     );
// };

// export default Dashboard;
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
    const navigate = useNavigate();

    // const handleLogout = () => {
    //     localStorage.removeItem("token");
    //     window.location.href = "/signin";
    // };

    return (
        <div className="h-screen w-full bg-gradient-to-r from-purple-300 via-purple-900 to-purple-800 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-center"
            >
                <h1 className="text-3xl font-extrabold text-purple-700 mb-4 italic">
                     Your Path to Breast Health Clarity
                </h1>
                <p className="text-gray-600 mb-6">
                    Unlocking a Helthier Future together!
                </p>
                <div className="flex flex-col gap-4">
                    <motion.button
                        whileHover={{ scale: 1.08, rotate: 1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/predict")}
                        className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-2 px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        🔍 Start Prediction
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.08, rotate: -1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleLogout}
                        className="bg-gradient-to-r from-red-500 via-pink-500 to-red-400 text-white py-2 px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        🚪 Logout
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default Dashboard;

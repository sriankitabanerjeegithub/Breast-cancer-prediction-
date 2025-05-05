// import { useState } from "react";

// export default function Predict() {
//   const [inputValues, setInputValues] = useState("");
//   const [prediction, setPrediction] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setInputValues(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       let features = inputValues.split(",").map((val) => parseFloat(val.trim()));
//       features = features.slice(0, 31).concat(Array(31 - features.length).fill(0));
      
//       const response = await fetch("http://127.0.0.1:8000/predict", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ features }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch prediction");
//       }

//       const data = await response.json();
//       setPrediction(data.prediction === 1 ? "Cancerous" : "Non-Cancerous");
//     } catch (error) {
//       console.error("Error predicting:", error);
//       setPrediction("Error fetching prediction. Please check API connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4">Breast Cancer Prediction</h1>
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <textarea
//           placeholder="Enter up to 31 comma-separated values (remaining will be filled with 0)"
//           value={inputValues}
//           onChange={handleChange}
//           className="w-full p-2 border rounded h-24"
//         />
//         <button
//           type="submit"
//           className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           disabled={loading}
//         >
//           {loading ? "Predicting..." : "Predict"}
//         </button>
//       </form>
//       {prediction && (
//         <div
//           className={`mt-4 p-3 text-lg font-bold text-center border rounded
//           ${prediction === "Cancerous" ? "text-red-500 border-red-500" : "text-green-500 border-green-500"}`}
//         >
//           Prediction: {prediction}
//         </div>
//       )}
//     </div>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";

export default function Predict() {
  const [inputValues, setInputValues] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputValues(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let features = inputValues.split(",").map((val) => parseFloat(val.trim()));
      features = features.slice(0, 31).concat(Array(31 - features.length).fill(0));

      const response = await fetch("https://project-4-q0gb.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ features }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction");
      }

      const data = await response.json();
      setPrediction(data.prediction === 1 ? "Cancerous" : "Non-Cancerous");
    } catch (error) {
      console.error("Error predicting:", error);
      setPrediction("Error fetching prediction. Please check API connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-tr from-purple-800 via-pink-600 to-indigo-700 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-6 max-w-lg w-full bg-white shadow-2xl rounded-3xl"
      >
        <h1 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
          🧪 Breast Cancer Prediction
        </h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <textarea
            placeholder="Enter your testing data..."
            value={inputValues}
            onChange={handleChange}
            className="w-full p-3 border-2 border-purple-400 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            {loading ? "Predicting..." : "🔍 Predict"}
          </motion.button>
        </form>

        {prediction && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`mt-6 p-4 text-lg font-bold text-center border-2 rounded-xl shadow-md
              ${
                prediction === "Cancerous"
                  ? "text-red-600 border-red-400 bg-red-50"
                  : prediction === "Non-Cancerous"
                  ? "text-green-600 border-green-400 bg-green-50"
                  : "text-gray-600 border-gray-400 bg-gray-100"
              }`}
          >
            Prediction: {prediction}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

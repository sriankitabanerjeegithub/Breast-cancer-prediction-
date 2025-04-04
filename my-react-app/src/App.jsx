import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";  
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Dashboard from "./pages/Dashboard.jsx"; 
import Predict from "./components/Predict";
import ProtectedRoute from "./ProtectedRoute.jsx";
import HospitalSearch from "./components/HospitalSearch";  // ✅ Import HospitalSearch
import About from "./pages/About";
import Blog from "./pages/Blog";
import Learning from "./pages/Learning";
import Todo from "./pages/todo.jsx";
import { FaTasks } from "react-icons/fa";

function App() {
    return (
        <Router>
            
            <Routes>
            

                <Route path="/" element={<Home />} /> {/* ✅ Set Home as the default page */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/predict" element={<Predict />} />
                <Route path="/hospitals" element={<HospitalSearch />} /> 
                 {/* ✅ Add a new route for Hospital Search */}
                 <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/todo" element={<Todo />} />


            </Routes>
        </Router>
    );
}

export default App;

// import "./index.css";
// import "./App.css";
// import './i18n'; // This initializes your language setup

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home.jsx";  
// import SignUp from "./pages/SignUp.jsx";
// import SignIn from "./pages/SignIn.jsx";
// import Dashboard from "./pages/Dashboard.jsx"; 
// import Predict from "./components/Predict";
// import ProtectedRoute from "./ProtectedRoute.jsx";
// import HospitalSearch from "./components/HospitalSearch";  // ✅ Import HospitalSearch
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Learning from "./pages/Learning";
// import Todo from "./pages/todo.jsx";
// import { FaTasks } from "react-icons/fa";
// //import ScrollToTop from "./utils/ScrollToTop";
// function App() {

//     return (
        

   
//         <Router>
            
//             <Routes>
            

//                 <Route path="/" element={<Home />} /> {/* ✅ Set Home as the default page */}
//                 <Route path="/signup" element={<SignUp />} />
//                 <Route path="/signin" element={<SignIn />} />
//                 <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//                 <Route path="/predict" element={<Predict />} />
//                 <Route path="/hospitals" element={<HospitalSearch />} /> 
//                  {/* ✅ Add a new route for Hospital Search */}
//                  <Route path="/about" element={<About />} />
//                 <Route path="/blog" element={<Blog />} />
//                 <Route path="/learning" element={<Learning />} />
//                 <Route path="/todo" element={<Todo />} />


//             </Routes>
//         </Router>
        
//     );
// }

// export default App;
// import "./index.css";
// import "./App.css";
// import './i18n'; // This initializes your language setup

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home.jsx";  
// import SignUp from "./pages/SignUp.jsx";
// import SignIn from "./pages/SignIn.jsx";
// import Dashboard from "./pages/Dashboard.jsx"; 
// import Predict from "./components/Predict";
// import ProtectedRoute from "./ProtectedRoute.jsx";
// import HospitalSearch from "./components/HospitalSearch";  
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Learning from "./pages/Learning";
// import Todo from "./pages/todo.jsx";
// import { FaTasks } from "react-icons/fa";
// import { useTranslation } from 'react-i18next'; // Import useTranslation for language switching

// function App() {
//   const { i18n } = useTranslation(); // Initialize i18next in App.jsx

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);  // Change language logic
//   };
//   const { t } = useTranslation();  // Initialize translation hook

//   return (

//     <div>
//     <h1>{t('welcome')}</h1>  {/* Displays "Welcome" based on selected language */}
 

//     <Router>
//       <div className="app">
//         {/* Language Dropdown for Switching Languages */}
//         <select 
//           onChange={(e) => changeLanguage(e.target.value)} 
//           defaultValue="en" 
//           className="bg-white border border-gray-300 rounded-full px-4 py-1 text-sm font-medium text-gray-700 hover:border-pink-500 transition"
//         >
//           <option value="en">🇺🇸 English</option>
//           <option value="fr">🇫🇷 Français</option>
//           <option value="zh">🇨🇳 中文</option>
//           <option value="ja">🇯🇵 日本語</option>
//           <option value="ru">🇷🇺 Русский</option>
//           <option value="de">🇩🇪 Deutsch</option>
//           <option value="pt">🇵🇹 Português</option>
//           <option value="hi">🇮🇳 हिंदी</option>
//           <option value="bn">🇧🇩 বাংলা</option>
//           <option value="ko">🇰🇷 한국어</option>
//         </select>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//           <Route path="/predict" element={<Predict />} />
//           <Route path="/hospitals" element={<HospitalSearch />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/learning" element={<Learning />} />
//           <Route path="/todo" element={<Todo />} />
//         </Routes>
//       </div>
//     </Router>
//     </div>
//   );
// }

// export default App;
import DrAi from "./components/drai";
import "./index.css";
import "./App.css";
import './i18n'; // This initializes your language setup

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";  
// import SignUp from "./pages/SignUp.jsx";
// import SignIn from "./pages/SignIn.jsx";
import Dashboard from "./pages/Dashboard.jsx"; 
import Predict from "./components/Predict";
import ProtectedRoute from "./ProtectedRoute.jsx";
import HospitalSearch from "./components/HospitalSearch";  
import About from "./pages/About";
import Blog from "./pages/Blog";
import Learning from "./pages/Learning";
import Todo from "./pages/todo.jsx";
import { FaTasks } from "react-icons/fa";
import { useTranslation } from 'react-i18next'; // Import useTranslation for language switching

function App() {
  const { t, i18n } = useTranslation();  // ✅ Use it once and destructure both t and i18n

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);  // Change language logic
  };

  return (
    <div>
      {/* Language Dropdown and a test heading */}
      {/* <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>{t('welcome')}</h1>

      <select
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        defaultValue="en"
        style={{ padding: '0.5rem', fontSize: '1rem', marginTop: '1rem' }}
      >
        <option value="en">🇺🇸 English</option>
        <option value="hi">🇮🇳 हिंदी</option>
      </select>
    </div> */}
      {/* Router with Routes */}
      
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            {/* <Route path="/signin" element={<SignIn />} /> */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/predict" element={<Predict />} />
            <Route path="/hospitals" element={<HospitalSearch />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/drai" element={<DrAi />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;

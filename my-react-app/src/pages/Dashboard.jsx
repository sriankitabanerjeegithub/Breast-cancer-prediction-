import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate(); // ✅ Define navigate

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove user token
        window.location.href = "/signin"; // Redirect to Sign-In page
    };

    return (
        <div>
            <h1>Welcome to the Dashboard 🎉</h1>
            <p>This is a protected page that only logged-in users can access.</p>
            <button onClick={() => navigate("/predict")}>Go to Predict Page</button> {/* ✅ Fixed path */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;

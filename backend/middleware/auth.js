const jwt = require("jsonwebtoken");


const SECRET_KEY = process.env.JWT_SECRET 
module.exports = function (req, res, next) {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "❌ Access denied. No token provided." });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next(); // ✅ Continue if the token is valid
    } catch (err) {
        res.status(400).json({ message: "❌ Invalid token." });
    }
};

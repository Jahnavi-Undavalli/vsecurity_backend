const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "Not authorized, no token" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        if (!req.user) return res.status(401).json({ message: "Not authorized, user not found" });
        next();
    } catch (error) {
        res.status(401).json({ message: "Token verification failed", error: error.message });
    }
};
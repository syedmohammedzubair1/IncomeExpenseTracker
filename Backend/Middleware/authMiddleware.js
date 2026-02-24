const jwt = require("jsonwebtoken");
const User = require("../Models/User");

module.exports = async (req, res, next) => {
  try {
    // 1️⃣ header exist?
    if (!req.headers.authorization)
      return res.status(401).json({ message: "No token" });

    // 2️⃣ remove Bearer
    const token = req.headers.authorization.split(" ")[1];

    // 3️⃣ verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4️⃣ attach user
    const user = await User.findById(decoded.id).select("-password");
    if (!user)
      return res.status(401).json({ message: "User not found" });

    req.user = user;

    next();

  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

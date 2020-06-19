const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");

  // Check Token
  if (!token)
    return res.status(401).json({ msg: "No token, authorized denied" });

  try {
    // Verify Token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    // Add user fron payload
    req.user = decoded;
    next();
  } catch {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;

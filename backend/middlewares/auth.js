const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.body.jwt;

  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, process.env.jwtSecretKey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};

module.exports = auth;

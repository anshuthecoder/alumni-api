const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info (id, role) to req object
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

exports.adminOnly = (req, res, next) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ msg: "Access denied" });
  next();
};

exports.alumniOnly = (req, res, next) => {
  if (req.user.role !== "alumni")
    return res.status(403).json({ msg: "Access denied" });
  next();
};

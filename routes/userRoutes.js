const express = require("express");
const {
  protect,
  adminOnly,
  alumniOnly,
} = require("../middleware/authMiddleware");
const router = express.Router();

// Route accessible only by alumni
router.get("/alumni-dashboard", protect, alumniOnly, (req, res) => {
  res.json({ msg: "Welcome Alumni!" });
});

// Route accessible only by admins
router.get("/admin-dashboard", protect, adminOnly, (req, res) => {
  res.json({ msg: "Welcome Admin!" });
});

module.exports = router;

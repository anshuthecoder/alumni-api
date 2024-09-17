const express = require("express");
const { register, login } = require("../controllers/authController");
const { check } = require("express-validator");

const router = express.Router();

// Register route
router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  register
);

// Login route
router.post("/login", login);

module.exports = router;

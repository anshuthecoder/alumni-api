const express = require("express");
const router = express.Router();
const University = require("../models/University");

// Register a new university
router.post("/", async (req, res) => {
  try {
    const newUniversity = new University(req.body);
    await newUniversity.save();
    res.status(201).json(newUniversity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all universities
router.get("/", async (req, res) => {
  try {
    const universities = await University.find();
    res.status(200).json(universities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single university by ID
router.get("/:id", async (req, res) => {
  try {
    const university = await University.findById(req.params.id);
    if (!university) {
      return res.status(404).json({ error: "University not found" });
    }
    res.status(200).json(university);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

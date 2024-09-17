const express = require('express');
const router = express.Router();
const Alumni = require('../models/Alumni');

// Create a new alumni
router.post('/', async (req, res) => {
  try {
    const newAlumni = new Alumni(req.body);
    await newAlumni.save();
    res.status(201).json(newAlumni);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all alumni
router.get('/', async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.status(200).json(alumni);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single alumni by ID
router.get('/:id', async (req, res) => {
  try {
    const alumni = await Alumni.findById(req.params.id);
    if (!alumni) {
      return res.status(404).json({ error: 'Alumni not found' });
    }
    res.status(200).json(alumni);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an alumni by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedAlumni = await Alumni.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAlumni) {
      return res.status(404).json({ error: 'Alumni not found' });
    }
    res.status(200).json(updatedAlumni);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an alumni by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedAlumni = await Alumni.findByIdAndDelete(req.params.id);
    if (!deletedAlumni) {
      return res.status(404).json({ error: 'Alumni not found' });
    }
    res.status(200).json({ message: 'Alumni deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

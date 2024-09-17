const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  graduationYear: {
    type: Number,
    required: true,
  },
  degree: {
    type: String,
    trim: true,
  },
  major: {
    type: String,
    trim: true,
  },
  currentPosition: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  skills: [{
    type: String,
    trim: true,
  }],
  achievements: [{
    type: String,
    trim: true,
  }],
  linkedin: {
    type: String,
    trim: true,
  },
  website: {
    type: String,
    trim: true,
  },
  profilePicture: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

// Middleware to update `updatedAt` field before saving
alumniSchema.pre('save', function (next) {
  if (this.isModified()) {
    this.updatedAt = Date.now();
  }
  next();
});

module.exports = mongoose.model('Alumni', alumniSchema);

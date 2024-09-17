const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  courses: [{
    courseName: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    }
  }],
  website: {
    type: String,
    trim: true,
  },
  logo: {
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
universitySchema.pre('save', function (next) {
  if (this.isModified()) {
    this.updatedAt = Date.now();
  }
  next();
});

module.exports = mongoose.model('University', universitySchema);

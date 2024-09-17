const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    default: "alumni",
    enum: ["admin", "alumni", "university"],
  },
});

module.exports = mongoose.model("User", UserSchema);

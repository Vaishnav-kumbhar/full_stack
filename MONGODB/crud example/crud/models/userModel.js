const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    trim: true,
    maxLength: [30, "name must be less than 20 char"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema);

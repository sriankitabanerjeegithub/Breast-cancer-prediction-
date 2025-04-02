const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },   // ✅ Correct format
  email: { type: String, required: true, unique: true },  // ✅ Correct format
  password: { type: String, required: true }  // ✅ Correct format
});

module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  startDate: { type: Date, default: Date.now }
});

mongoose.model("users", userSchema);

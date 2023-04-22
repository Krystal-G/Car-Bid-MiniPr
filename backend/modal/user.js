const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  aadharNo: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNo: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  pickupLocation: {
    type: String,
  },
  pickupTime: {
    type: String,
  },
  rideAssigned: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "Ride"
  }
});

module.exports = mongoose.model("User", userSchema);

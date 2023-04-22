const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  licensePlate: {
    type: String,
    required: true,
  },
  rcNo: {
    type: String,
    required: true,
  },
  aadharNo : {
    type: String,
    required: true,
    unique: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  organizations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    },
  ],
  ridesAssigned: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ride",
    }
  ]
});

module.exports = mongoose.model("Driver", driverSchema);

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Driver = require('../modal/driver');
const User = require('../modal/user');

// Signup function for drivers
exports.driverSignup = async (req, res) => {
  const { name, email, password, phoneNo, licensePlate, aadharNo,rcNo, carModel } = req.body;

  // Check if user with the same email exists
  const existingDriver = await Driver.findOne({ email });
  const existingUser = await User.findOne({ email });
  if (existingDriver || existingUser) {
    return res.status(409).json({ error: 'Email already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new driver object
  const newDriver = new Driver({
    name,
    email,
    password: hashedPassword,
    phoneNo,
    licensePlate,
    rcNo,
    aadharNo,
    carModel
  });

  // Save the driver to the database
  try {
    const user = await newDriver.save();

    // Create JWT token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' });

    // Send response with user info and token
    res.status(201).json({
      user,
      role: 'driver',
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Signup function for passengers
exports.passengerSignup = async (req, res) => {
  const { name, email, password, aadharNo, phoneNo} = req.body;
    
  // Check if user with the same email exists
  const existingDriver = await User.findOne({ email });
  if (existingDriver) {
    return res.status(409).json({ error: 'Email already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new passenger object
  const newPassenger = new User({
    name,
    email,
    password: hashedPassword,
    aadharNo,
    phoneNo
  });

  // Save the passenger to the database
  try {
    const user = await newPassenger.save();


    // Create JWT token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' });

    // Send response with user info and token
    res.status(201).json({
      user,
      role: 'passenger',
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    // Check if user with the email exists in either the Driver or Passenger collection
    const driver = await Driver.findOne({ email });
    const passenger = await User.findOne({ email });
  
    // If user with the email doesn't exist, return error
    if (!driver && !passenger) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  
    // Check if the password matches the hashed password in the database
    let user;
    if (driver) {
      user = driver;
    } else {
      user = passenger;
    }
  
    const isPasswordMatch = await bcrypt.compare(password, user.password);
  
    if (!isPasswordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  
    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  
    // Send response with user info and token
    res.status(200).json({
      message: 'Login successful',
      user,
      role: driver ? 'driver' : 'passenger',
      token
    });
  };
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");


// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Parse request bodies as JSON
app.use(express.json());
app.use(cors());
// Error handling middleware function
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ error: 'Server error' });
// });

const DB_URL = process.env.DB_URL
// Connect to MongoDB
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
  });

app.use(require("./routes/routes"));
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



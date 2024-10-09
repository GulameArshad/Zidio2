// Admin/admin.js

const express = require('express');
const User = require('../models/User'); // Import the User model
const router = express.Router();

// Fetch all users (GET /admin/users)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the User collection
    res.json(users); // Return the fetched users as JSON
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle any errors
  }
});

// Insert a new user (POST /admin/users)
router.post('/users', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
  });

  try {
    const savedUser = await user.save(); // Save the new user to the database
    res.status(201).json(savedUser); // Return the saved user
  } catch (error) {
    res.status(400).json({ message: error.message }); // Handle errors
  }
});

module.exports = router; // Export the router

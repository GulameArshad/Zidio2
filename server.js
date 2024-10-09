const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRoutes = require('./Admin/admin'); 
const User = require('./models/User');

// Initialize Express
const app = express();

// MongoDB Connection Code
mongoose.connect('mongodb://localhost:27017/My_Zidio_Database',)
    .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));
app.use('/admin', adminRoutes);

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the User collection
    res.json(users); // Return the fetched users as JSON
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle any errors
  }
});



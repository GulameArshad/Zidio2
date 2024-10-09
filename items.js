// routes/items.js
const express = require('express');
const router = express.Router();

// Example Item Model (create a model in models/item.js)
const Item = require('../models/item');

// Get all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add other CRUD routes as needed

module.exports = router;

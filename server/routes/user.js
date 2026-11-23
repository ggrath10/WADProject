
const express = require('express');
const User = require('../models/user');
const router = express.Router();

// GET request to retrieve all users
router.get('/getAllUsers', async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.send(users);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;

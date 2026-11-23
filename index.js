
require('dotenv').config();

const express = require('express');
const path = require('path');
const userRoutes = require('./server/routes/user');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// User routes
app.use('/user', userRoutes);

// Display login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}!`);
});

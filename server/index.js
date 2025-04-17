const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 8000;
const app = express();
const uploadRoutes = require("./src/controllers/uploadRoutes"); // Import the routes

app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // Allows cookies to be sent
})); 
app.use(express.json());

let connectToDatabase = require("./dbConnect");

app.use('/api', uploadRoutes); // Use the routes

mongoose.set("strictQuery", false);
connectToDatabase();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

module.exports = app;

// Importing all the Dependencies and Modules.
import express from 'express';
import dbConnection from '../Config/dbConnection.js'
import User from '../App/Models/userAuth.js';


// Creating an Express App.
const app = express();

// Defining Port.
const port = 81;

// Conecting to Database.
dbConnection();

// Defining Routes.
app.get('/', (req, res) => {
    res.send('Welcome Users 🙏🏻');
});

// Defining Authentication Routes.
app.post('/api/register', (req, res) => {
    res.send('User Registration');
});
app.post('/api/login', (req, res) => {
    res.send('User Login');
});
app.post('/api/logout', (req, res) => {
    res.send('User Logout');
});

// Listening on Port.
app.listen(port, () => {
    console.log(`YummmZo listening on port ${port}...`);
});
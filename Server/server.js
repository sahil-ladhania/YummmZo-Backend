// Importing all the Dependencies and Modules.
import express from 'express';
import dbConnection from '../Config/dbConnection.js'
import User from '../App/Models/userAuth.js';
import Cuisine from '../App/Models/cuisineSchema.js';
import Restaurant from '../App/Models/restaurantSchema.js';
import MenuItem from '../App/Models/menuItemSchema.js';


// Creating an Express App.
const app = express();

// Defining Port.
const port = 81;

// Adding Middlewares.
app.use(express.json());

// Conecting to Database.
dbConnection();

// Defining Routes.
app.get('/', (req, res) => {
    res.send('Welcome Users 🙏🏻');
});

// Defining Authentication Routes.
// API for User Registration.
app.post('/api/register', (req, res) => {
    res.send('User Register');
});

// API for User Login.
app.post('/api/login', (req, res) => {
    res.send('User Login');
});

// API for User Logout.
app.post('/api/logout', (req, res) => {
    res.send('User Logout');
});

// Listening on Port.
app.listen(port, () => {
    console.log(`YummmZo listening on port ${port}...`);
});
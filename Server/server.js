// Importing all the Dependencies and Modules.
import express from 'express';
import cors from 'cors';
import dbConnection from '../Config/dbConnection.js'
import dotenv from 'dotenv';
import authRoutes from '../App/Routes/authRoutes.js';
import requireLogin from '../App/Middlewares/authMiddleware.js';

// Environment Variables.
dotenv.config();

// Creating an Express App.
const app = express();

// Defining Port.
const port = 81;

// Adding Middlewares.
app.use(express.json());
app.use(cors());

// Conecting to Database.
dbConnection();

// Defining Routes.
app.get('/', (req, res) => {
    res.send('Welcome Users 🙏🏻');
});

// Authentication Routes.
app.use(authRoutes);

// API for Test Route.
app.get('/test' , requireLogin , (req,res) => {
    res.send("Protected Routes"); 
})

// Listening on Port.
app.listen(port, () => {
    console.log(`YummmZo listening on port ${port}...`);
});
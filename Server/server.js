// Importing all the Dependencies and Modules.
import express from 'express';
import cors from 'cors';
import dbConnection from '../Config/dbConnection.js'
import dotenv from 'dotenv';
import authRoutes from '../App/Routes/authRoutes.js';
import restaurantRoutes from '../App/Routes/restaurantRoutes.js';
import menuItemRoutes from '../App/Routes/menuItemRoutes.js';
import cuisineRoutes from '../App/Routes/cuisineRoutes.js';
import cartRoutes from '../App/Routes/cartRoutes.js';
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

// Authentication Routes.
app.use(authRoutes);
// Restaurant Routes.
app.use(restaurantRoutes);
// MenuItem Routes.
app.use(menuItemRoutes);
// Cuisine Routes.
app.use(cuisineRoutes);
// Cart Routes.
app.use(cartRoutes);

// API for Test Route.
app.get('/test' , requireLogin , (req,res) => {
    res.send("Protected Routes"); 
})

// Listening on Port.
app.listen(port, () => {
    console.log(`YummmZo listening on port ${port}...`);
});
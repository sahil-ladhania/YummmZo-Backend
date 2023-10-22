// Importing all the Dependencies and Modules.
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dbConnection from '../Config/dbConnection.js'
import dotenv from 'dotenv';
import authRoutes from '../App/Routes/authRoutes.js';
import restaurantRoutes from '../App/Routes/restaurantRoutes.js';
import menuItemRoutes from '../App/Routes/menuItemRoutes.js';
import cuisineRoutes from '../App/Routes/cuisineRoutes.js';
import cartRoutes from '../App/Routes/cartRoutes.js';
import restaurantCuisineSearchRoutes from '../App/Routes/restaurantCuisineSearchRoutes.js'
import menuSearchRoutes from '../App/Routes/menuSearchRoutes.js'
import restaurantFilteringRoutes from '../App/Routes/restaurantFilteringRoutes.js';

// Environment Variables.
dotenv.config();

// Creating an Express App.
const app = express();

// Creating Express Session.
app.use(session({
    secret : "SAHILWILLBECOMEABILLIONAIRE",
    name : "session_id",
    resave : false,
    saveUninitialized : true,
    cookie : { 
        path: '/', 
        httpOnly: true, 
        secure: false, 
        maxAge: null
    }
}));

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
// Restaurant / Cuisine Search Routes.
app.use(restaurantCuisineSearchRoutes);
// MenuItem Search Routes.
app.use(menuSearchRoutes);
// Restaurant Filtering Routes.
app.use(restaurantFilteringRoutes);

// Listening on Port.
app.listen(port, () => {
    console.log(`YummmZo listening on port ${port}...`);
});
// Importing all the Dependencies and Modules.
import { getAllRestaurants , getRestaurantById , getRestaurantsByCuisine , createRestaurant , updateRestaurant , deleteRestaurant } from '../Controllers/restaurantController.js';
import express from "express";
const router = express.Router();

// Defining Restaurants Routes.
router.get('/restaurants' , getAllRestaurants);
router.get('/restaurants/:id' , getRestaurantById);
router.get('restaurants/cuisine/:cuisineId' , getRestaurantsByCuisine);
router.post('/restaurants' , createRestaurant);
router.put('/restaurants/:id' , updateRestaurant);
router.delete('/restaurants/:id' , deleteRestaurant);

// Exporting all the Dependencies and Modules.
export default router;

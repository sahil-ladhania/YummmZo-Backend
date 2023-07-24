// Importing all the Dependencies and Modules.
import { getAllRestaurants , getRestaurantById , getRestaurantsByCuisine , createRestaurant , updateRestaurant , deleteRestaurant , markRestaurantAsFavorite } from '../Controllers/restaurantController.js';
import Restaurant from '../Models/restaurantSchema.js';
import express from "express";
const router = express.Router();

// Defining Restaurants Routes.
router.route('/restaurants')
    .post(createRestaurant) // For Creating a New Restaurant.
    .get(getAllRestaurants); // For Getting All Restaurants.
router.route('/restaurants/:id')
    .put(updateRestaurant) // For Updating a Restaurant By ID.
    .delete(deleteRestaurant) // For Deleting a Restaurant By ID.
    .get(getRestaurantById); // For Getting a Restaurant By ID.
router.post('/restaurants/:id/favorite', markRestaurantAsFavorite); // For Marking a Restaurant As Favorite By ID.
router.get('/restaurants/cuisine/:cuisineId', getRestaurantsByCuisine); // For Getting Restaurants By Cuisine ID.

// Exporting all the Dependencies and Modules.
export default router;

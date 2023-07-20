// Importing all the Dependencies and Modules.
import { getAllMenuItemsForRestaurant , getMenuItemByIdForRestaurant , createMenuItemForRestaurant , updateMenuItemForRestaurant , deleteMenuItemForRestaurant } from '../Controllers/menuItemController.js';
import express from "express";
const router = express.Router();

// Defining Restaurants Routes.
router.route('/restaurants/:restaurantId/menu')
    .get(getAllMenuItemsForRestaurant) // For Getting All The Menu Items For a Restaurant.
    .post(createMenuItemForRestaurant) // For Creating a Menu Item for a Restaurant.
router.route('/restaurants/:restaurantId/menu/:ItemId')
    .get(getMenuItemByIdForRestaurant) // For Getting a Specific Menu Item By ID For a Restaurant.
    .put(updateMenuItemForRestaurant) // For Updating a Menu Item For a Restaurant.
    .delete(deleteMenuItemForRestaurant) // For Deleting a Menu Item By ID For a Restaurant.

// Exporting all the Dependencies and Modules.
export default router;
// Importing all the Dependencies and Modules.
import { getAllMenuItemsForRestaurant , getMenuItemByIdForRestaurant , createMenuItemForRestaurant , updateMenuItemForRestaurant , deleteMenuItemForRestaurant } from '../Controllers/menuItemController';
import express from "express";
const router = express.Router();

// Defining Restaurants Routes.
router.get('/restaurants/:restaurantId/menu' , getAllMenuItemsForRestaurant);
router.get('/restaurants/:restaurantId/menu/:id' , getMenuItemByIdForRestaurant);
router.post('/restaurants/:restaurantId/menu' , createMenuItemForRestaurant);
router.put('/restaurants/:restaurantId/menu/:id' , updateMenuItemForRestaurant);
router.delete('/restaurants/:restaurantId/menu/:id' , deleteMenuItemForRestaurant);

// Exporting all the Dependencies and Modules.
export default router;
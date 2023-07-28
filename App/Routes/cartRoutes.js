// Importing all the Dependencies and Modules.
import express from "express";
import {addItem , incrementQuantity , decrementQuantity , fetchCartItems } from '../Controllers/cartController.js';
const router = express.Router();

// Defining Authentication Routes.
router.post('/api/cart/addItem/:userId/:restaurantId/:menuItemId' , addItem);
router.post('/api/cart/incrementQuantity/:userId/:restaurantId/:menuItemId' , incrementQuantity);
router.post('/api/cart/decrementQuantity/:userId/:restaurantId/:menuItemId' , decrementQuantity);
router.get('/api/cart/:userId' , fetchCartItems);

// Exporting all the Dependencies and Modules.
export default router;
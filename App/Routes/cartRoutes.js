// Importing all the Dependencies and Modules.
import express from "express";
import {addItem , removeAllItem , incrementQuantity , decrementQuantity , fetchCartItems } from '../Controllers/cartController.js';
const router = express.Router();

// Defining Authentication Routes.
router.post('/api/cart/addItem/:userId/:restaurantId/:ItemId' , addItem);
router.post('/api/cart/incrementQuantity/:userId/:restaurantId/:ItemId' , incrementQuantity);
router.post('/api/cart/decrementQuantity/:userId/:restaurantId/:ItemId' , decrementQuantity);
router.post('/api/cart/removeAllItem' , removeAllItem);
router.get('/api/cart/:userId' , fetchCartItems);

// Exporting all the Dependencies and Modules.
export default router;
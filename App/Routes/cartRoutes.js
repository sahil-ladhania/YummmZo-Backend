// Importing all the Dependencies and Modules.
import express from "express";
import {addItem , removeAllItem , incrementQuantity , decrementQuantity , fetchCartItems } from '../Controllers/cartController.js';
const router = express.Router();

// Defining Authentication Routes.
router.post('/api/cart/addItem' , addItem);
router.post('/api/cart/removeItem' , removeAllItem);
router.post('/api/cart/incrementItem' , incrementQuantity);
router.post('/api/cart/deccrementItem' , decrementQuantity);
router.get('/api/cart/:userId' , fetchCartItems);

// Exporting all the Dependencies and Modules.
export default router;
// Importing all the Dependencies and Modules.
import express from "express";
import {addItem , removeAllItem , incrementQuantity , decrementQuantity , fetchCartItems } from '../Controllers/cartController.js';
const router = express.Router();

// Defining Authentication Routes.
router.post('/api/cart/addItem/:userId' , addItem);
router.post('/api/cart/removeAllItem' , removeAllItem);
router.post('/api/cart/incrementQuantity/:userId/:itemId' , incrementQuantity);
router.post('/api/cart/decrementQuantity/:userId/:itemId' , decrementQuantity);
router.get('/api/cart/:userId' , fetchCartItems);

// Exporting all the Dependencies and Modules.
export default router;
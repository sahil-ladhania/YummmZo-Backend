// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining Cart Item Schema.
const cartItemSchema = new mongoose.Schema({
    ItemId: {
        type: String,
        required: true
    },
    restaurantId: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    itemQuantity: {
        type: Number,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
});

// Defining Cart Schema.
const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    // Array Of Cart Item Schema Objects.
    cartItems: [cartItemSchema], 
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    itemQuantity: {
        type: Number,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
});
// Defining User Model.
const Cart = mongoose.model('Cart' , cartSchema);

// Exporting all the Dependencies and Modules.
export default Cart;
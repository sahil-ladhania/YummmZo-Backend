// Importing all the Dependencies and Modules.
import mongoose from "mongoose";
import MenuItem from "./menuItemSchema.js";
import Restaurant from "./restaurantSchema.js";
import User from "./userAuth.js";

// Defining Cart Item Schema.
const cartItemSchema = new mongoose.Schema({
    ItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : MenuItem,
        required: true
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : Restaurant,
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
        type: mongoose.Schema.Types.ObjectId,
        ref : User,
        required: true
    },
    // Array Of Cart Item Schema Objects.
    cartItems: [cartItemSchema], 
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    itemsTotal : {
        type: Number,
        default: 0
    }
});
// Defining User Model.
const Cart = mongoose.model('Cart' , cartSchema);

// Exporting all the Dependencies and Modules.
export default Cart;
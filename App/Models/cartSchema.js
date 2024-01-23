// Importing all the Dependencies and Modules.
import mongoose from "mongoose";
import MenuItem from "./menuItemSchema.js";
import Restaurant from "./restaurantSchema.js";
import User from "./userSchema.js";

// Defining Cart Item Schema.
const cartItemSchema = new mongoose.Schema({
    menuItemId: {
        type: mongoose.Schema.Types.ObjectId,        
        required: true
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Restaurant",
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
    cartItems : [
        {
        menuItemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: MenuItem,
            required: true,
        },
        restaurantId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Restaurant,
            required: true,
        },
        itemName: {
            type: String,
            required: true,
        },
        itemQuantity: {
            type: Number,
            required: true,
        },
        itemPrice: {
            type: Number,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        }
    ],
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
},{timestamps : true});
// Defining Cart Model.
const Cart = mongoose.model('Cart' , cartSchema);

// Exporting all the Dependencies and Modules.
export default Cart;
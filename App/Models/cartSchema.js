// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining User Schema.
const cartSchema = new mongoose.Schema({
    userId : {
        type : Number,
        required : true
    },
    restaurantId : {
        type : Number,
        required : true
    },
    itemId : {
        type : Number,
        required : true
    },
    itemName : {
        type : String,
        required : true
    },
    itemQuantity : {
        type : Number,
        required : true
    },
    itemPrice : {
        type : Number,
        required : true
    },
    totalPrice : {
        type : Number,
        required : true
    },
    createdAt : {
        type : Date,
        required : true
    },
    updatedAt : {
        type : Date,
        required : true
    }
})
// Defining User Model.
const Cart = mongoose.model('Cart' , cartSchema);

// Exporting all the Dependencies and Modules.
export default Cart;
// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining Order Schema.
const orderSchema = new mongoose.Schema({
    userId : {
        type: String,
        required: true
    },
    restaurantId : {
        type: String,
        required: true
    },
    // Here will be the Array of Ordered Items
    orderedItems : {
        type: String,
        required: true
    },
    totalAmount : {
        type: Number,
        required: true
    },
    orderStatus : {
        type: String,
        required: true
    }
},{timestamps : true})

// Defining Order Model.
const Order = mongoose.model('Order' , orderSchema);

// Exporting all the Dependencies and Modules.
export default Order;
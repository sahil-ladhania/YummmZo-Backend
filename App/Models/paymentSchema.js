// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining Payment Schema.
const paymentSchema = new mongoose.Schema({
    orderId : {
        type: String,
        required: true
    },
    // Here will be the Array of Payment Methods 
    paymentMethod : {
        type: String,
        required: true
    },
    transactionId : {
        type: String,
        required: true
    },
    amount : {
        type: Number,
        required: true
    }
},{timestamps : true})

// Defining Payment Model.
const Payment = mongoose.model('Payment' , paymentSchema);

// Exporting all the Dependencies and Modules.
export default Payment;
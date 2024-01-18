// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining User Address Schema.
const userAddressSchema = new mongoose.Schema({
    userId : {
        type: String,
        required: true
    },
    // Here will be the Array of User Addresses
    userAddress : {
        type: String,
        required: true
    }
},{timestamps : true})

// Defining User Address Model.
const UserAddress = mongoose.model('UserAddress' , userAddressSchema);

// Exporting all the Dependencies and Modules.
export default UserAddress;
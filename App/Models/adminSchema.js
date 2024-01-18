// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining Admin Schema.
const adminSchema = new mongoose.Schema({
    ownerName : {
        type : String,
        required : true,
        trim: true
    },
    ownerEmail : {
        type : String,
        required : true,
        trim: true
    },
    password : {
        type : String,
        required : true,
        minlength : 6,
        maxlength : 200,
        trim: true
    },
    // Here will be an Array of Restaurants ID
    restaurantsOwned : {
        type : String,
        required : true,
        trim: true
    },
    phoneNumber : {
        type : Number,
        required : true,
        trim: true
    }
},{timestamps : true});

// Defining Admin Model.
const Admin = mongoose.model('Admin' , adminSchema);

// Exporting all the Dependencies and Modules.
export default Admin;
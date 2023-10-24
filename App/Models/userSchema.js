// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining User Schema.
const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        trim: true
    },
    lastName : {
        type : String,
        required : true,
        trim: true
    },
    email : {
        type : String,
        required :true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6,
        maxlength : 200
    }
},{timestamps : true});

// Defining User Model.
const User = mongoose.model('User', userSchema);

// Exporting all the Dependencies and Modules.
export default User
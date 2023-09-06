// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining User Schema.
const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
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
    },
    tokens : {
        type : [String],
        maxlength : 500
    },
    googleAccessToken : {
        type : [String],
        maxlength : 500,
        unique : true
    },
    googleRefreshToken : {
        type : [String],
        maxlength : 500,
        unique : true
    }
});

// Defining User Model.
const User = mongoose.model('User', userSchema);

// Exporting all the Dependencies and Modules.
export default User
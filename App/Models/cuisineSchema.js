// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining User Schema.
const cuisineSchema = new mongoose.Schema({
    imageURL : {
        type: String,
        required: true
    },
    cuisineName : {
        type:String,
        required:true
    }
})

// Defining User Model.
const Cuisine = mongoose.model('Cuisine' , cuisineSchema);

// Exporting all the Dependencies and Modules.
export default Cuisine;
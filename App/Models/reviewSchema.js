// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining Review Schema.
const reviewSchema = new mongoose.Schema({
    userId : {
        type: String,
        required: true
    },
    restaurantId : {
        type: String,
        required: true
    },
    rating : {
        type: Number,
        required: true
    },
    review : {
        type: String,
        required: true
    }
},{timestamps : true});

// Defining Review Model.
const Review = mongoose.model('Review' , reviewSchema);

// Exporting all the Dependencies and Modules.
export default Review;
// Importing all the Dependencies and Modules.
import mongoose, { Schema } from "mongoose";
import Review from "./reviewSchema.js";

// Defining Comment Schema.
const commentSchema = new mongoose.Schema({
    userId : {
        type: String,
        required: true
    },
    reviewId : {
        type: Schema.Types.ObjectId,
        ref : "Review",
        required: true
    },
    comment : {
        type: String,
        required: true
    }
},{timestamps : true});

// Defining Comment Model.
const Comment = new mongoose.model('Comment' , commentSchema);

// Exporting all the Dependencies and Modules.
export default Comment;
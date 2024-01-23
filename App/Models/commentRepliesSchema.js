// Importing all the Dependencies and Modules.
import mongoose, { Schema } from "mongoose";
import Comment from "./commentSchema.js";

// Defining Comment Replies Schema.
const commentRepliesSchema = new mongoose.Schema({
    userId : {
        type: String,
        required: true
    },
    commentId : {
        type: Schema.Types.ObjectId,
        ref : "Comment",
        required: true
    },
    reply : {
        type: String,
        required: true
    }
},{timestamps : true});

// Defining Comment Replies Model.
const CommentReplies = new mongoose.model('CommentReplies' , commentRepliesSchema);

// Exporting all the Dependencies and Modules.
export default CommentReplies;
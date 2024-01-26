// Importing all the Dependencies and Modules.
import express from "express";
import { addReplyToComment , getAllRepliesForComment , updateReply , deleteReply } from "../Controllers/commentReplyController.js";
import { validateCommentReplies } from '../Middlewares/ReviewsAndComments/validateCommentRepliesMiddleware.js';
const router = express.Router();

// Defining Comment Replies Routes Middlewares.
router.post('/api/user/comment/comment-replies/:commentId/:parentReplyId?' , validateCommentReplies , addReplyToComment);
router.get('/api/user/comment-replies/:commentId' , getAllRepliesForComment);
router.put('/api/user/comment-replies/:replyId' , updateReply);
router.delete('/api/user/comment-replies/:replyId' , deleteReply);

// Exporting all the Dependencies and Modules.
export default router;
// Importing all the Dependencies and Modules.
import express from "express";
import { addCommentToReview , getAllCommentsForReview , updateComment , deleteComment } from "../Controllers/commentController.js";
import { validateComment } from '../Middlewares/ReviewsAndComments/validateCommentMiddleware.js';
const router = express.Router();

// Defining Comment Routes With Middlewares.
router.post('/api/user/review/comments' , validateComment , addCommentToReview);
router.get('/api/user/comments/:reviewId' , getAllCommentsForReview);
router.put('/api/user/comments/:commentId' , updateComment);
router.delete('/api/user/comments/:commentId' , deleteComment);

// Exporting all the Dependencies and Modules.
export default router;
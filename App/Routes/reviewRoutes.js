// Importing all the Dependencies and Modules.
import express from "express";
import { createReview , getRestaurantReviews , getUserReviews , getReviewDetails , updateReview , deleteReview } from "../Controllers/reviewController.js";
import { validateReview } from '../Middlewares/ReviewsAndComments/validateReviewsMiddleware.js';
const router = express.Router();

// Defining Review Routes With Middlewares.
router.post('/api/user/reviews' , validateReview , createReview);
router.get('/api/user/reviews/restaurant/:restaurantId' , getRestaurantReviews);
router.get('/api/user/reviews/user/:userId' , getUserReviews);
router.get('/api/user/reviews/:reviewId' , getReviewDetails);
router.put('/api/user/reviews/:reviewId' , updateReview);
router.delete('/api/user/reviews/:reviewId' , deleteReview);

// Exporting all the Dependencies and Modules.
export default router;
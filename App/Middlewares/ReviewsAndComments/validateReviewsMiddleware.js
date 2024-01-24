import z from 'zod';

// Defining Reviews Schema
const reviewSchema = z.object({
    userId : z.string().trim(),
    restaurantId : z.string().trim(),
    rating : z.number().trim(),
    review : z.string().trim()
});

// Defining Middleware for Validating Reviews
export const validateReview = (req , res , next) => {

}
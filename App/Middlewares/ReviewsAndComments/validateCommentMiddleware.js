import z from 'zod';

// Defining Comments Schema
const reviewCommentSchema = z.object({
    userId : z.string().trim(),
    reviewId : z.string().trim(),
    comment : z.string().trim()
});

// Defining Middleware for Validating Comments
export const validateComment = (req , res , next) => {

}
import z from 'zod';

// Defining Reviews Schema
const reviewSchema = z.object({
    userId : z.string().trim(),
    restaurantId : z.string().trim(),
    rating : z.number(),
    review : z.string().trim()
});

// Defining Middleware for Validating Reviews
export const validateReview = (req , res , next) => {
    reviewSchema.parseAsync(req.body)
        .then((validatedReview) => {
            req.reviewData = validatedReview;
            next();
        })
        .catch((error) => {
            res.status(500).json({
                "Error" : `Invalid Review : ${error}!!!`
            })
        })
}
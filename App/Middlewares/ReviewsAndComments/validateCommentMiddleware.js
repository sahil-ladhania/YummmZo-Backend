import z from 'zod';

// Defining Comments Schema
export const reviewCommentSchema = z.object({
    userId : z.string().trim(),
    reviewId : z.string().trim(),
    comment : z.string().trim()
});
// Defining Middleware for Validating Comments
export const validateComment = (req , res , next) => {
    reviewCommentSchema.parseAsync(req.body)
        .then((validatedComment) => {
            req.commentData = validatedComment;
            next();
        })
        .catch((error) => {
            res.status(500).json({
                "Error" : `Invalid Comment : ${error}!!!`
            })
        })
}
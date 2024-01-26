import z from 'zod';

// Defining Comment Replies Schema
const commentReplySchema = z.object({
    userId : z.string().trim(),
    commentId : z.string().trim(),
    parentReplyId : z.string().trim().optional(),
    reply : z.string().trim()
});

// Defining Middleware for Validating Comment Replies
export const validateCommentReplies = (req , res , next) => {
    commentReplySchema.parseAsync(req.body)
        .then((validatedCommentReply) => {
            console.log(validatedCommentReply);
            req.commentReplyData = validatedCommentReply;
            next();
        })
        .catch((error) => {
            res.status(500).json({
                "Error" : `Invalid Comment Reply : ${error}!!!`
            })
        })
}
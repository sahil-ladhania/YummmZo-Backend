import z from 'zod';

// Defining Comment Replies Schema
const commentReplySchema = z.object({
    userId : z.string().trim(),
    commentId : z.string().trim(),
    reply : z.string().trim()
});

// Defining Middleware for Validating Comment Replies
export const validateCommentReplies = (req , res , next) => {

}
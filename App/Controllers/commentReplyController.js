// Importing Necessary Dependencies and Files.
import CommentReplies from "../Models/commentRepliesSchema.js";
import Comment from "../Models/commentSchema.js";
import User from "../Models/userSchema.js";

// Controller Functions to handle a specific API Endpoint.
// -----For Adding a Reply to a Comment-----
export const addReplyToComment = (req , res) => {
    // Extract Data From Request Object.
    const userId = req.commentReplyData.userId;
    console.log(userId);
    const commentId = req.commentReplyData.commentId;
    console.log(commentId);
    const reply = req.commentReplyData.reply;
    console.log(reply);
    // Check If The User Exist In The Database.
    User.findById({_id : userId})
        .then((userDetails) => {
            if(!userDetails){
                res.status(404).json({
                    "Message" : "User Doesnt Exist !!!"
                })
            }
            else{
                // Check If The Comment Exist In The Database.
                Comment.findById({_id : commentId})
                    .then((comment) => {
                        if(!comment){
                            res.status(404).json({
                                "Message" : "Comment Doesnt Exist !!!"
                            })
                        }
                        else{
                            // Create A New Reply Document Using The CommentReply Model.
                            const commentReplyInstance = new CommentReplies({
                                userId : userId,
                                commentId : commentId,
                                reply : reply
                            })
                            console.log(commentReplyInstance);
                            // Save The New Reply Document To The Database.
                            commentReplyInstance.save()
                                .then((savedCommentReply) => {
                                    // Respond With The Newly Created Reply Details.
                                    res.status(201).json({
                                        "Message" : "Comment Reply Created ...",
                                        "CommentReply" : savedCommentReply
                                    })
                                })
                                .catch((error) => {
                                    res.status(500).json({
                                        "Error" : `Error In Saving Comment Reply : ${error} !!!`
                                    })
                                })
                        }
                    })
                    .catch((error) => {
                        res.status(500).json({
                            "Error" : `Error In Finding Comment : ${error} !!!`
                        })
                    })
            }
        })
        .catch((error) => {
            res.status(500).json({
                "Error" : `Error In Finding User : ${error} !!!`
            })
        })
}

// -----For Getting All Replies for a Specific Comment-----
export const getAllRepliesForComment = (req , res) => {
    // Extract commentId From The Request Parameters.
    const commentId = req.params.commentId;
    console.log(commentId);
    // Use The CommentReply Model To Find All Replies For The Specified Comment.
    CommentReplies.find({commentId : commentId})
        .then((commentReplies) => {
            // Respond With The List Of Replies.
            res.status(200).json({
                "Message" : "List Of Replies On A Comment ...",
                "CommentReplies" : commentReplies
            })
        })
        .catch((error) => {
            res.status(500).json({
                "Error" : `Error In Getting Comment Replies : ${error} !!!`
            })
        })
}

// -----For Updating a Specific Reply-----
export const updateReply = (req , res) => {
    // Extract replyId From The Request Parameters.
    const replyId = req.params.replyId;
    console.log(replyId);
    // Extract The Updated Data From Request Body.
    const userId = req.body.userId;
    console.log(userId);
    const commentId = req.body.commentId;
    console.log(commentId);
    const reply = req.body.reply;
    console.log(reply);
    // Check If User Has Entered All Feilds.
    if(!userId || !commentId || !reply){
        res.status(400).json({
            "Message" : "Please Fill All The Required Feilds !!!"
        })
    }
    else{
        // Use The CommentReply Model To Find And Update The Specified Reply.
        CommentReplies.findByIdAndUpdate({_id : replyId} , {
            userId : userId,
            commentId : commentId,
            reply : reply
        },{new : true})
            .then((updatedCommentReply) => {
                res.status(201).json({
                    "Message" : "Comment Reply Updated ...",
                    "UpdatedCommentReply" : updatedCommentReply
                })
            })
            .catch((error) => {
                res.status(500).json({
                    "Error" : `Error In Updating A Comment Reply : ${error} !!!`
                })
            })
    }
}

// -----For Deleting a Specific Reply-----
export const deleteReply = (req , res) => {
    // Extract replyId From The Request Parameters.
    const replyId = req.params.replyId;
    console.log(replyId);
    // Use The CommentReply Model To Find And Delete The Specified Reply.
    CommentReplies.findByIdAndDelete({_id : replyId})
        .then((deletedCommentReply) => {
            // Respond With A Success Message Or Appropriate Status.
            res.status(200).json({
                "Message" : "Comment Reply Deleted ...",
                "DeletedCommentReply" : deletedCommentReply
            })
        })
        .catch((error) => {
            res.status(500).json({
                "Error" : `Error In Deleting A Comment Reply : ${error} !!!`
            })
        })
}
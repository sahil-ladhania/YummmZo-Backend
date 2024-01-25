// Importing Necessary Dependencies and Files.
import Review from "../Models/reviewSchema.js";
import User from "../Models/userSchema.js";
import Comment from "../Models/commentSchema.js";


// Controller Functions to handle a specific API Endpoint.
// -----For Adding a Comment to a Review-----
export const addCommentToReview = (req , res) => {
    // Extract Data From The Request Object.
    const userId = req.commentData.userId;
    console.log(userId);
    const reviewId = req.commentData.reviewId;
    console.log(reviewId);
    const comment = req.commentData.comment;
    console.log(comment);
    // Check If The User Exist In The Database.
    User.findById({_id : userId})
        .then((userDetails) => {
            if(!userDetails){
                res.status(404).json({
                    "Message" : "User Doesnt Exist !!!"
                })
            }
            else{
                // Check If The Review Exist In The Database.
                Review.findById({_id : reviewId})
                    .then((reviewDetails) => {
                        if(!reviewDetails){
                            res.status(404).json({
                                "Message" : "Review Doesnt Exist !!!"
                            })
                        }
                        else{
                            // Create A New Comment Document Using The Comment Model.
                            const commentInstance = new Comment({
                                userId : userId,
                                reviewId : reviewId,
                                comment : comment
                            })
                            console.log(commentInstance);
                            // Save The New Comment Document To The Database.
                            commentInstance.save()
                                // Respond With The Newly Created Comment Details.
                                .then((savedComment) => {
                                    res.status(201).json({
                                        "Message" : "Comment Created ...",
                                        "CommentDetails" : savedComment
                                    })
                                })
                                .catch((error) => {
                                    res.status(500).json({
                                        "Error" : `Error In Saving Comment : ${error} !!!`
                                    })
                                })
                        }
                    })
                    .catch((error) => {
                        res.status(500).json({
                            "Error" : `Error In Finding Review : ${error} !!!`
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

// -----For Getting All Comments for a Specific Review-----
export const getAllCommentsForReview = (req , res) => {
    // Extract reviewId From The Request Parameters.
    const reviewId = req.params.reviewId;
    console.log(reviewId);
    // Use The Comment Model To Find All Comments For The Specified Review.
    Comment.find({reviewId : reviewId})
        .then((commentsList) => {
            // Respond With The List Of Comments.
            res.status(200).json({
                "Message" : "List Of Comments For This Review ...",
                "CommentList" : commentsList
            })
        })
        .catch((error) => {
            res.status(500).json({
                "Error" : `Error In Getting Comments : ${error} !!!`
            })
        })
}

// -----For Updating a Specific Comment-----
export const updateComment = (req , res) => {
    // Extract commentId From The Request Parameters.
    const commentId = req.params.commentId;
    console.log(commentId);
    // Extract The Updated Data From The Request Body.
    const userId = req.body.userId;
    console.log(userId);
    const reviewId = req.body.reviewId;
    console.log(reviewId);
    const comment = req.body.comment;
    console.log(comment);
    // Check If User Has Entered All Feilds.
    if(!userId || !reviewId || !comment){
        res.status(400).json({
            "Message" : "Please Fill All The Required Feilds !!!"
        })
    }
    else{
        // Use The Comment Model To Find And Update The Specified Comment.
        Comment.findByIdAndUpdate({_id : commentId} , {
            userId : userId,
            reviewId : reviewId,
            comment : comment
        },{new : true})
        .then((updatedComment) => {
            // Respond With The Updated Comment Details.
            res.status(201).json({
                "Message" : "Comment Updated ...",
                "UpdatedComment" : updatedComment
            })
        })
        .catch((error) => {
            res.status(500).json({
                "Error" : `Error In Updating A Comment : ${error} !!!`
            })
        })
    }
}

// -----For Deleting a Specific Comment-----
export const deleteComment = (req , res) => {
    // Extract commentId From The Request Parameters.
    const commentId = req.params.commentId;
    console.log(commentId);
    // Use The Comment Model To Find And Delete The Specified Comment.
    Comment.findByIdAndDelete({_id : commentId})
        .then((deletedComment) => {
            // Respond With A Success Message Or Appropriate Status.
            res.status(200).json({
                "Message" : "Comment Deleted ...",
                "DeletedComment" : deletedComment
            })
        })
        .catch((error) => {
            res.status(500).json({
                "Error" : `Error In Deleting A Comment : ${error} !!!`
            })
        })
}
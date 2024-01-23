// Importing Necessary Dependencies and Files.


// Controller Functions to handle a specific API Endpoint.
// -----For Adding a Comment to a Review-----
export const addCommentToReview = () => {
    // Extract data from the request body (userId, reviewId, comment).
    // Validate inputs: Ensure all required fields are present and have valid values.
    // Check if the user and review exist in the database.
    // Create a new comment document using the Comment model.
    // Save the new comment document to the database.
    // Respond with the newly created comment details.
}

// -----For Getting All Comments for a Specific Review-----
export const getAllCommentsForReview = () => {
    // Extract reviewId from the request parameters.
    // Use the Comment model to find all comments for the specified review.
    // Respond with the list of comments.
}

// -----For Updating a Specific Comment-----
export const updateComment = () => {
    // Extract commentId from the request parameters.
    // Extract the updated data from the request body.
    // Validate inputs: Ensure all required fields have valid values.
    // Use the Comment model to find and update the specified comment.
    // Respond with the updated comment details.
}

// -----For Deleting a Specific Comment-----
export const deleteComment = () => {
    // Extract commentId from the request parameters.
    // Use the Comment model to find and delete the specified comment.
    // Respond with a success message or appropriate status.
}
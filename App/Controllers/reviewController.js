// Importing Necessary Dependencies and Files.
import User from "../Models/userSchema.js";
import Restaurant from "../Models/restaurantSchema.js";
import Review from "../Models/reviewSchema.js";


// Controller Functions to handle a specific API Endpoint.
// -----For Creating a Review-----
export const createReview = (req , res) => {
    // Extract Data From Request Object.
    const userId = req.reviewData.userId;
    console.log(userId);
    const restaurantId = req.reviewData.restaurantId;
    console.log(restaurantId);
    const rating = req.reviewData.rating;
    console.log(rating);
    const review = req.reviewData.review;
    console.log(review);
    // Check If The User Exist In The Database.
    User.findById({_id : userId})
        .then((user) => {
            if(!user){
                res.status(404).json({
                    "Message" : "User Doesnt Exist !!!"
                })
            }
            else{
                // Check If The Restaurant Exist In The Database.
                Restaurant.findById({_id : restaurantId})
                    .then((restaurant) => {
                        if(!restaurant){
                            res.status(404).json({
                                "Message" : "Restaurant Doesnt Exist !!!"
                            })
                        }
                        else{
                            // Create New Review Instance Using Review Model.
                            const reviewInstance = new Review({
                                userId : userId,
                                restaurantId : restaurantId,
                                rating : rating,
                                review : review
                            })
                            console.log(reviewInstance);
                            // Save The New Review Document To The Database.
                            reviewInstance.save()
                                .then((savedReview) => {
                                    // Respond With The Newly Created Review Details.
                                    res.status(200).json({
                                        "Message" : "Review Created ...",
                                        "SavedReview" : savedReview
                                    })
                                })
                                .catch((error) => {
                                    res.status(500).json({
                                        "Error" : `Error In Saving User Review : ${error} !!!`
                                    })
                                })
                        }
                    })
                    .catch((error) => {
                        res.status(500).json({
                            "Error" : `Error In Finding Restaurant : ${error} !!!`
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

// -----For Getting Reviews for a Specific Restaurant-----
export const getRestaurantReviews = (req , res) => {
    // Extract restaurantId From Request Parameters.
    const restaurantId = req.params.restaurantId;
    console.log(restaurantId);
    // Use Review Model To Find All Reviews For The Specified Restaurant.
    Review.find({restaurantId : restaurantId})
        .then((restaurantReviews) => {
            if(!restaurantReviews){
                res.status(404).json({
                    "Message" : "No Reviews Exist !!!"
                })
            }
            else{
                // Respond With The List Of Reviews
                res.status(200).json({
                    "Message" : 'Reviews For This Restaurant ...',
                    "RestaurantReviews" : restaurantReviews 
                })
            }
        })
        .catch((error) => {
            res.status(500).json({
                "Error" : `Error In Finding Reviews For Restaurant : ${error} !!!`
            })
        })
}

// -----For Getting Reviews Submitted by a Specific User-----
export const getUserReviews = (req , res) => {
    // Extract userId From Request Parameters.
    const userId = req.params.userId;
    console.log(userId);
    // Use Review Model To Find All Reviews Submitted By The Specified User.
    Review.find({userId : userId})
        .then((userReviews) => {
            if(!userReviews){
                res.status(404).json({
                    "Message" : "No Reviews Exist !!!"
                })
            }
            else{
                // Respond wWith The List Of Reviews.
                res.status(200).json({
                    "Message" : "Reviews Submitted By This User ...",
                    "UserReviews" : userReviews
                })
            }
        })
        .catch((error) => {
            res.status(500).json({
                "Error" : `Error In Finding Reviews For User : ${error} !!!`
            })
        })
}

// -----For Getting Details of a Specific Review-----
export const getReviewDetails = (req , res) => {
    // Extract reviewId From Request Parameters.
    const reviewId = req.params.reviewId;
    console.log(reviewId);
    // Use The Review Model To Find The Details Of The Specified Review.
    Review.findById({_id : reviewId})
        .then((reviewDetails) => {
            if(!reviewDetails){
                res.status(404).json({
                    "Message" : "Review Doesnt Exist !!!"
                })
            }
            else{
                // Respond With The Review Details.
                res.status(200).json({
                    "Message" : "Your Requested Review ...",
                    "ReviewDetails" : reviewDetails
                })
            }
        })
        .catch((error) => {
            res.status(500).json({
                "Error" : `Error In Finding Review Details : ${error} !!!`
            })
        })
}

// -----For Updating a Specific Review-----
export const updateReview = (req , res) => {
    // Extract reviewId From Request Parameters.
    const reviewId = req.params.reviewId;
    console.log(reviewId);
    // Extract The Updated Data From Request Body.
    const userId = req.body.userId;
    console.log(userId);
    const restaurantId = req.body.restaurantId;
    console.log(restaurantId);
    const rating = req.body.rating;
    console.log(rating);
    const review = req.body.review;
    console.log(review);
    // Check If User Has Entered All Feilds.
    if(!userId || !restaurantId || !rating || !review){
        res.status(400).json({
            "Message" : "Please Fill All The Required Feilds !!!"
        })
    }
    else{
        // Use The Review Model To Find And Update The Specified Review.
        Review.findByIdAndUpdate({_id : reviewId} , {
            userId : userId,
            restaurantId : restaurantId,
            rating : rating,
            review : review
        },{new : true})
            .then((updatedReview) => {
                // Respond With The Updated Review Details.
                res.status(201).json({
                    "Message" : "Review Updated ...",
                    "UpdatedReview" : updatedReview
                })
            })
            .catch((error) => {
                res.status(500).json({
                    "Error" : `Error In Updating A Review : ${error} !!!`
                })
            })
    }
}

// -----For Deleting a Specific Review-----
export const deleteReview = (req , res) => {
    // Extract reviewId From Request Parameters.
    const reviewId = req.params.reviewId;
    console.log(reviewId);
    // Use The Review Model To Find And Delete The Specified Review.
    Review.findByIdAndDelete({_id : reviewId})
        .then((deletedReview) => {
            // Respond With A Success Message Or Appropriate Status.
            res.status(200).json({
                "Message" : "Review Deleted ...",
                "DeletedReview" : deletedReview
            })
        })
        .catch((error) => {
            res.status(500).json({
                "Error" : `Error In Deleting A Review : ${error} !!!`
            })
        })
}
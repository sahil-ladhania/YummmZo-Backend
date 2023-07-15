// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining User Schema.
const restaurantSchema = new mongoose.Schema({
    restaurantName : {
        type:String,
        required:true
    },
    cuisine : {
        type: String,
        required: true
    },
    deliveryTime : {
        type:Number,
        required : true
    },
    priceForTwo : {
        type:Number,
        required : true
    },
    imageURL : {
        type: String,
        required: true
    },
    restaurantCompleteAddress : {
        type:String,
        required : true
    },
    mobileNumberAtRestaurant : {
        type:Number,
        required : true
    },
    mobileNumberOfOwner : {
        type : Number,
        required : true
    },
    restaurantOwnerName : {
        type : String,
        required : true
    },
    restaurantOwnerEmailAddress : {
        type : String,
        required : true
    },
    rating : {
        type: Number,
        required : true
    }
})

// Defining User Model.
const Restaurant = mongoose.model('Restaurant' , restaurantSchema);

// Exporting all the Dependencies and Modules.
export default  Restaurant;
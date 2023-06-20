// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining User Schema.
const restaurantSchema = new mongoose.Schema({
    imageURL : {
        type: String,
        required: true
    },
    restaurantName : {
        type:String,
        required:true
    },
    cuisine : {
        type: String,
        required: true
    },
    rating : {
        type: Number,
        required : true
    },
    deliveryTime : {
        type:Number,
        required : true
    },
    priceForTwo : {
        type:Number,
        required : true
    }
})

// Defining User Model.
const Restaurant = mongoose.model('Restaurant' , restaurantSchema);

// Exporting all the Dependencies and Modules.
export default  Restaurant;
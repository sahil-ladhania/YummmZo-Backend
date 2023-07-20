// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining User Schema.
const menuItemSchema = new mongoose.Schema({
    imageURL : {
        type: String,
        required: true
    },
    vegOrNonveg : {
        type: Boolean,
        required : true
    },
    itemName : {
        type:String,
        required:true
    },
    itemPrice : {
        type:Number,
        required:true
    },
    itemDescription : {
        type:String,
        required : true
    },
    restaurant : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    }
})

// Defining User Model.
const MenuItem = mongoose.model('MenuItem' , menuItemSchema);

// Exporting all the Dependencies and Modules.
export default MenuItem;
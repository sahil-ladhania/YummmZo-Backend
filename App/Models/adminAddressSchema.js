// Importing all the Dependencies and Modules.
import mongoose from "mongoose";

// Defining Admin Address Schema.
const adminAddressSchema = new mongoose.Schema({
    adminId : {
        type: String,
        required: true
    },
    // Here will be the Array of Admin Addresses
    adminAddress : {
        type: String,
        required: true
    }
},{timestamps : true})

// Defining Admin Address Model.
const AdminAddress = mongoose.model('AdminAddress' , adminAddressSchema);

// Exporting all the Dependencies and Modules.
export default AdminAddress;
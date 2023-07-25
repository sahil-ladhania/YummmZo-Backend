// Importing Necessary Dependencies and Files.
import Cart from "../Models/cartSchema.js";
import User from "../Models/userAuth.js";

// Controller Functions to handle a specific API Endpoint.
// -----To Add An Item To The Cart.-----
export const addItem = (req , res) => {
    // Extracting User ID , Restaurant ID And Item ID From Request Parameters.
    // Extracting the Form Data From The Request.
    // Validating Input Feilds.
    // Checking If User Has Filled The Required Details.
    // Find The Specific User By Its ID.
    // Calculating Total Price.
    // Saving The Cart Items In The Database.
}
// -----To Increment Item In The Cart.-----
export const incrementQuantity = (req , res) => {
    // Extracting User ID , Restaurant ID And Item ID From Request Parameters.
    // Use The Cart Model To Find Cart Items With Given User And Item ID's.
    // Find The Specific Cart Item In The User's Cart By Item ID And Restaurant ID.
    // Increment The Quantity Of The Item In The Cart.
    // Recalculate The Total Price.
    // Save The Updated Cart To The Database.
}
// -----To Decrement Item In The Cart.-----
export const decrementQuantity = () => {
    // Receive Parameters.
    // Use the Cart Model To Find Cart Items With Given User And Item ID's.
    // Retrieve Cart Item.
    // Update Quantity.
    // Handle Errors.
    // Return Response.
}
// -----To Remove All Items From The Cart.-----
export const removeAllItem = () => {
    // Receiving Parameters.
    // Use the Cart Model To Find Cart Items.
    // Retrieve Cart Items.
    // Remove Cart Items.
    // Handle Errors.
    // Return Response.
}
// -----To Fetch All Cart Items.----
export const fetchCartItems = () => {
    // Receive Parameters.
    // Use the Cart Model To Find Cart Items.
    // Retrieve Cart Item.
    // Handle Errors.
    // Return Response.
}

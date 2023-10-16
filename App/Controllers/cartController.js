// Importing Necessary Dependencies and Files.
import Cart from "../Models/cartSchema.js";

// Controller Functions to handle a specific API Endpoint.
// -----To Add An Item To The Cart.-----
export const addItem = (req, res) => {
    // Extracting User ID, Restaurant ID, and Item ID from Request Parameters.
    // Extracting the Form Data From The Request.
    // Checking If User Has Filled The Required Details.
    // Find The Specific User By Its ID.
    // Find The User's Cart By The userId And Populate The menuItemId Field.
    // If The Cart Does Not Exist, Create A New Cart And Add The Item.
    // Check If The Item Already Exists In The Cart.
    // If The Item Exists, Update Its Quantity And Total Price.
    // If The Item Does Not Exist, Create A New Cart Item.
    // Add the new item to the user's cartItems array.
    // Calculate the itemsTotal in the cart by summing up the totalPrice of all items.
    // Save the updated cart to the database.
};

// -----To Increment Item In The Cart.-----
export const incrementQuantity = (req , res) => {
    // Extracting User ID , Restaurant ID And Item ID From Request Parameters.
    // Extracting the Form Data From The Request.
    // Checking If User Has Filled The Required Details.
    // Use The Cart Model To Find Cart Items With Given User And Item ID's.
    // Find The Specific Cart Item In The User's Cart By Item ID And Restaurant ID.
    // Increment The Quantity Of The Item In The Cart.
    // Recalculate The Total Price.
    // Save The Updated Cart To The Database.
}
// -----To Decrement Item In The Cart.-----
export const decrementQuantity = (req , res) => {
    // Receive Parameters.
    // Use the Cart Model To Find Cart Items With Given User And Item ID's.
    // Retrieve Cart Item.
    // Update Quantity.
    // Handle Errors.
    // Return Response.
}
// -----To Fetch All Cart Items.----
export const fetchCartItems = (req , res) => {
    // Receive Parameters.
    // Use the Cart Model To Find Cart Items.
}

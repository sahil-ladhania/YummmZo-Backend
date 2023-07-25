// Importing Necessary Dependencies and Files.
import Cart from "../Models/cartSchema.js";
import User from "../Models/userAuth.js";

// Controller Functions to handle a specific API Endpoint.
// -----To Add An Item To The Cart.-----
export const addItem = (req , res) => {
    // Extracting User ID From Request Parameters.
    const { userId , restaurantId , ItemId } = req.params;
    // Extracting the Form Data From The Request.
    const { itemName , itemQuantity , itemPrice } = req.body;
    // Validating Input Feilds.
    // Checking If User Has Filled The Required Details.
    if(!itemName || !itemQuantity || !itemPrice){
        return res.status(400).send({ Error : "Please Fill The Required Feilds !!!"});
    }
    else{
        // Find The Specific User By Its ID.
        User.findById(userId)
            .then((user) => {
                if(!user){
                    return res.status(404).send({ Error: "User Not Found!!!" });
                }
                else{
                    // Calculating Total Price.
                    const totalPrice = (itemQuantity * itemPrice);
                    console.log(totalPrice);
                    // Create a New Instance Of Cart.
                    const cartItems = new Cart({
                        userId,
                        restaurantId,
                        ItemId,
                        itemName,
                        itemQuantity,
                        itemPrice,
                        totalPrice,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    });
                    // Saving The Cart Items In The Database.
                    cartItems.save()
                        .then(() => {
                            return res.status(200).send({ Message: "Item's Successfully Added To Cart..." });
                        })
                        .catch((error) => {
                            return res.status(500).send({ Error: `Error Occurred While Saving The Cart Item: ${error}` });
                        })
                }
            })
            .catch((error) => {
                return res.status(500).send({ Error: `Error Occurred While Finding The User: ${error}` });
            })
    }
}
// -----To Increment Item In The Cart.-----
export const incrementQuantity = () => {
    // Receive Parameters.
    // Use the Cart Model To Find Cart Items With Given User And Item ID's.
    // Retrieve Cart Item.
    // Update Quantity.
    // Handle Errors.
    // Return Response.
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

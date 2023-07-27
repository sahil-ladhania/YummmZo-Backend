// Importing Necessary Dependencies and Files.
import Cart from "../Models/cartSchema.js";
import User from "../Models/userAuth.js";

// Controller Functions to handle a specific API Endpoint.
// -----To Add An Item To The Cart.-----
export const addItem = (req , res) => {
    // Extracting User ID , Restaurant ID And Item ID From Request Parameters.
    const {userId , restaurantId , ItemId} = req.params;
    // Extracting the Form Data From The Request.
    const {itemName , itemQuantity , itemPrice} = req.body;
    // Checking If User Has Filled The Required Details.
    if(!itemName || !itemQuantity | !itemPrice){
        return res.status(400).send({ Error : "Please Fill The Required Feilds !!!"});
    }
    else{
        // Find The Specific User By Its ID.
        User.findById(userId)
            .then((usersCart) => {
                if(!usersCart){
                    return res.status(404).send({ Error: "User's Cart Not Found!!!" });
                }
                else{
                    // Checking If The Item Already Exists In The User's Cart.
                    const existingCartItem = usersCart.cartItems.find(item => item.ItemId === ItemId && item.restaurantId === restaurantId);
                    if(existingCartItem){
                        // If the item exists, update its quantity and total price.
                        existingCartItem.itemQuantity += itemQuantity;
                        existingCartItem.totalPrice = (existingCartItem.itemQuantity * itemPrice);
                    }
                    else{
                        // If the item does not exist, create a new cart item.
                        const newCartItem = {
                            ItemId ,
                            restaurantId ,
                            itemName ,
                            itemQuantity , 
                            itemPrice ,
                            totalPrice : (itemQuantity * itemPrice)
                        }
                        // Add the new item to the user's cartItems array.
                        usersCart.cartItems.push(newCartItem);
                    }
                    // Calculate the itemsTotal in the cart by summing up the totalPrice of all items.
                    usersCart.itemsTotal = usersCart.cartItems.reduce((total , item) => total + item.totalPrice , 0);
                    // Save the updated cart to the database.
                    usersCart.save()
                        .then((savedCart) => {
                            return res.status(200).send(savedCart);
                        })
                        .catch((error) => {
                            return res.status(500).send({ Error: `Error Occurred While Saving The Cart: ${error}` });
                        })
                    // You can send the saved cart as a response or an appropriate success message
                }
            })
            .catch((error) => {
                return res.status(500).send({ Error: `Error Occurred While Finding The User's Cart: ${error}` });
            })
    }
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
    // Retrieve Cart Item.
    // Handle Errors.
    // Return Response.
}

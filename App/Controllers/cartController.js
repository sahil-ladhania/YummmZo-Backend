// Importing Necessary Dependencies and Files.
import Cart from "../Models/cartSchema.js";
import User from "../Models/userAuth.js";

// Controller Functions to handle a specific API Endpoint.
// -----To Add An Item To The Cart.-----
export const addItem = (req, res) => {
    // Extracting User ID, Restaurant ID, and Item ID from Request Parameters.
    const { userId, restaurantId, menuItemId } = req.params;
    // Extracting the Form Data From The Request.
    const { itemName, itemQuantity, itemPrice } = req.body;
    // Checking If User Has Filled The Required Details.
    if (!itemName || !itemQuantity || !itemPrice) {
        return res.status(400).send({ Error: "Please Fill The Required Fields!!!" });
    } else {
        // Find The Specific User By Its ID.
        User.findById(userId)
            .then((user) => {
                if (!user) {
                    return res.status(404).send({ Error: "User Not Found!!!" });
                } 
                else {
                    // Find The User's Cart By The userId And Populate The menuItemId Field.
                    Cart.findOne({ userId })
                        .populate("cartItems.menuItemId")
                        .then((usersCart) => {
                            if (!usersCart) {
                                // If The Cart Does Not Exist, Create A New Cart And Add The Item.
                                const newCartItem = {
                                    menuItemId,
                                    restaurantId,
                                    itemName,
                                    itemQuantity,
                                    itemPrice,
                                    totalPrice: itemQuantity * itemPrice,
                                };
                                const newCart = new Cart({
                                    userId,
                                    cartItems: [newCartItem],
                                    itemsTotal: newCartItem.totalPrice,
                                });
                                newCart
                                    .save()
                                    .then((savedCart) => {
                                        return res.status(200).send(savedCart);
                                    })
                                    .catch((error) => {
                                        return res.status(500).send({ Error: `Error Occurred While Saving The Cart: ${error}` });
                                    });
                            } else {
                                // Check If The Item Already Exists In The Cart.
                                const existingCartItem = usersCart.cartItems.find(
                                    (item) =>
                                        item.menuItemId._id.toString() === menuItemId &&
                                        item.restaurantId.toString() === restaurantId
                                );
                                if (existingCartItem) {
                                    // If The Item Exists, Update Its Quantity And Total Price.
                                    existingCartItem.itemQuantity += itemQuantity;
                                    existingCartItem.totalPrice = existingCartItem.itemQuantity * itemPrice;
                                } 
                                else {
                                    // If The Item Does Not Exist, Create A New Cart Item.
                                    const newCartItem = {
                                        menuItemId,
                                        restaurantId,
                                        itemName,
                                        itemQuantity,
                                        itemPrice,
                                        totalPrice: itemQuantity * itemPrice,
                                    };
                                    // Add the new item to the user's cartItems array.
                                    usersCart.cartItems.push(newCartItem);
                                }
                                // Calculate the itemsTotal in the cart by summing up the totalPrice of all items.
                                usersCart.itemsTotal = usersCart.cartItems.reduce(
                                    (total, item) => total + item.totalPrice,
                                    0
                                );
                                // Save the updated cart to the database.
                                usersCart
                                    .save()
                                    .then((savedCart) => {
                                        return res.status(200).send(savedCart);
                                    })
                                    .catch((error) => {
                                        return res.status(500).send({ Error: `Error Occurred While Saving The Cart: ${error}` });
                                    });
                            }
                        })
                        .catch((error) => {
                            return res.status(500).send({ Error: `Error Occurred While Finding The User's Cart: ${error}` });
                        });
                }
            })
            .catch((error) => {
                return res.status(500).send({ Error: `Error Occurred While Finding The User: ${error}` });
            });
    }
};

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
    const { userId } = req.params;
    // Use the Cart Model To Find Cart Items.
    Cart.findOne({userId})
        .then((user) => {
            if(!user){
                return res.status(404).send({ Error: 'User Not Found !!!' });
            }
            else{
                const cartItems = user.cartItems;
                return res.status(200).send({ Message: "Cart Items For User", cartItems });
            }
        })
        .catch((error) => {
            return res.status(404).send({ Error: `User Not Found !!! : ${error}` });
        })
}

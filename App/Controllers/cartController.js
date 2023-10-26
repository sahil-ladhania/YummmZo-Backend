// Importing Necessary Dependencies and Files.
import Cart from "../Models/cartSchema.js";
import User from "../Models/userSchema.js";
import Restaurant from "../Models/restaurantSchema.js";
import MenuItem from "../Models/menuItemSchema.js";

// Controller Functions to handle a specific API Endpoint.
// -----To Add An Item To The Cart.-----
export const addItem = (req, res) => {
    // Extracting User ID, Restaurant ID, and Item ID from Request Parameters.
    const {userId , restaurantId , menuItemId} = req.params;
    console.log(userId);
    console.log(restaurantId);
    console.log(menuItemId);
    // Extracting the Form Data From The Request.
    const {itemName , itemQuantity , itemPrice} = req.body;
    console.log(itemName);
    console.log(itemQuantity);
    console.log(itemPrice);
    // Checking If User Has Filled The Required Details.
    if(!itemName || !itemQuantity || !itemPrice){
        return res.status(401).send({Error : "Please Fill All The Required Fields !!!"});
    }
    else{
        // Find The Specific User By Its ID.
        User.findById(userId)
            .then((user) => {
                if(!user){
                    return res.status(401).send({Error : "User Not Found !!!"});
                }
                else{
                    // Find The User's Cart By The userId And Populate The menuItemId Field.
                    Cart.findOne({userId})
                        .populate({
                            path : 'cartItems.menuItemId',
                            model : 'MenuItem'
                        })
                        .then((usersCart) => {
                            // If The Cart Does Not Exist, Create A New Cart And Add The Item.
                            if(!usersCart){
                                const newCartItem = {
                                    menuItemId,
                                    restaurantId,
                                    itemName,
                                    itemQuantity,
                                    itemPrice,
                                    totalPrice: itemQuantity * itemPrice,
                                }
                                const newCart = new Cart({
                                    userId,
                                    cartItems : [newCartItem],
                                    itemsTotal : newCartItem.totalPrice
                                });
                                newCart.save()
                                    .then((savedCart) => {
                                        return res.status(200).send({Message : "Your Cart ..." , savedCart});
                                    })
                                    .catch((error) => {
                                        return res.status(500).send({ Error: `Error Occurred While Saving The Cart: ${error}` });
                                    });
                            }
                            else{
                                // Check If The Item Already Exists In The Cart.
                                const existingCartItem = usersCart.cartItems.find(
                                    (item) => 
                                        item.menuItemId._id.toString === menuItemId
                                        &&
                                        item.restaurantId.toString === restaurantId
                                );
                                // If The Item Exists, Update Its Quantity And Total Price.
                                if(existingCartItem){
                                    return res.status(200).send({Message : "Item Already In The Cart ..."});
                                }
                                // If The Item Does Not Exist, Create A New Cart Item.
                                else{
                                    // Add the new item to the user's cartItems array.
                                    const newCartItem = {
                                        menuItemId : menuItemId,
                                        restaurantId : restaurantId,
                                        itemName : itemName,
                                        itemQuantity : itemQuantity,
                                        itemPrice : itemPrice,
                                        totalPrice : itemPrice * itemQuantity
                                    }
                                    console.log(newCartItem)
                                    usersCart.cartItems.push(newCartItem);
                                    console.log(usersCart)
                                    // Calculate the itemsTotal in the cart by summing up the totalPrice of all items.
                                    const itemsTotal = usersCart.cartItems.reduce((total , cartItem) => total + cartItem.totalPrice , 0);
                                    const deliveryFee = 0;
                                    const platformFee = 2;
                                    const gstAndRestaurantCharges = itemsTotal * 0.18;
                                    const toPay = (itemsTotal + deliveryFee + platformFee + gstAndRestaurantCharges);
                                    const billDetails = {
                                        itemsTotal : itemsTotal,
                                        deliveryFee : deliveryFee,
                                        platformFee : platformFee,
                                        gstAndRestaurantCharges : gstAndRestaurantCharges,
                                        toPay : toPay
                                    }
                                    res.status(200).send({Message : "You Bill For The Cart ..." , billDetails});
                                    // Save the updated cart to the database.
                                    const finalCart = {
                                        usersCart : usersCart,
                                        billDetails : billDetails
                                    }
                                    finalCart.save()
                                        .then((savedCart) => {
                                            return res.status(200).send({Message : "Cart Saved Successfully ..." , savedCart , billDetails});
                                        })
                                        .catch((error) => {
                                            return res.status(500).send({Error : "Error Saving The Cart To The Database !!!" , error});
                                        })
                                }
                                return res.status(200).send({Message : "User Cart Found ..." , usersCart});
                            }
                        })
                        .catch((error) => {
                            return res.status(500).send({Error : "Error Finding User Cart !!!" , error});
                        })
                }
            })
            .catch((error) => {
                return res.status(401).send({Error : "Error Occured While Finding The User !!!" , error});
            })
    }
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

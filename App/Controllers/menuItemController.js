// Importing Necessary Dependencies and Files.
import mongoose from 'mongoose';
import MenuItem from '../Models/menuItemSchema.js';
import Restaurant from '../Models/restaurantSchema.js';

// Controller Functions to handle a specific API Endpoint.
// -----For Creating a New Menu Item for a Restaurant-----
export const createMenuItemForRestaurant = (req, res) => {
    // Extracting Restaurant ID From Request Parameters.
    const {restaurantId} = req.params;
    // Extracting the Form Data From The Request.
    const {imageURL , vegOrNonveg , itemName , itemPrice , itemDescription} = req.body;
    // Validating Input Feilds.
    // Checking If User Has Filled The Required Details.
    if (!imageURL || !vegOrNonveg || !itemName || !itemPrice || !itemDescription){
        return res.status(400).send({ Error : "Please Fill The Required Feilds !!!"});
    }
    else{
        // Find The Specific Restaurant By Its ID.
        Restaurant.findById(restaurantId)
            .then((restaurant) => {
                if(!restaurant){
                    return res.status(404).send({ Error: "Restaurant Not Found!!!" });
                }
                else{
                    // Create a New Instance Of MenuItem And Associate It With The Restaurant.
                    const newMenuItem = new MenuItem({
                        imageURL,
                        vegOrNonveg,
                        itemName,
                        itemPrice,
                        itemDescription,
                        restaurant: restaurant._id // Link The Menu Item To The Restaurant.
                    })
                    // Saving The Menu Item In The Database.
                    newMenuItem.save()
                        .then(() => {
                            // Add The New Menu Item To The Restaurant's MenuItems Array.
                            restaurant.menuItems.push(newMenuItem._id);
                            restaurant.save()
                                .then(() => {
                                    return res.status(200).send({ Message: "Item Successfully Added To The Menu..." });
                                })
                                .catch((error) => {
                                    return res.status(500).send({ Error: `Error Occurred While Saving The Restaurant: ${error}` });
                                });
                        })
                        .catch((error) => {
                            return res.status(500).send({ Error : `Error Occured While Saving The Item Data. ${error}`});
                        })
                    }
            })
            .catch((error) => {
                return res.status(500).send({ Error: `Error Occurred While Finding The Restaurant: ${error}` });
            })
    }
};
// -----For Updating an Existing Menu Item for a Restaurant-----
export const updateMenuItemForRestaurant = (req, res) => {
    // Extracting Restaurant ID and Menu Item ID From Request Parameters.
    const { restaurantId, menuItemId } = req.params;
    // Extracting the Form Data From The Request.
    const { imageURL, vegOrNonveg, itemName, itemPrice, itemDescription } = req.body;
    // Create an object with the updated data
    const updatedItem = {
        imageURL,
        vegOrNonveg,
        itemName,
        itemPrice,
        itemDescription,
    };
    MenuItem.findByIdAndUpdate(menuItemId, updatedItem, { new: true })
        .then((item) => {
            if (!item) {
                return res.status(404).send({ Error: "Item Not Found !!!" });
            } 
            else {
                return res.status(200).send({ Message: "Item Successfully Updated ..." });
            }
        })
        .catch((error) => {
            return res.status(500).send({ Error: `Error Occurred While Updating The Item : ${error}` });
        });
    };
// -----For Deleting a Menu Item by ID for a Restaurant-----
export const deleteMenuItemForRestaurant = (req, res) => {
    // Extracting Restaurant ID From Request Parameters.
    const {restaurantId , menuItemId} = req.params;
    MenuItem.findByIdAndDelete(menuItemId)
        .then((deletedItem) => {
            if (!deletedItem){
                return res.status(404).send({ Error : "Item Not Found !!!"});
            }
            else{
                // Remove The Deleted MenuItem's _id From The menuItems Array Of The Associated Restaurant.
                Restaurant.findByIdAndUpdate(restaurantId, { $pull: { menuItems: deletedItem._id } })
                    .then(() => {
                        return res.status(200).send({ Message: "Item Successfully Deleted ..." });
                    })
                    .catch((error) => {
                        return res.status(500).send({ Error: `Error Occurred While Updating the Restaurant: ${error}` });
                    });
            }
        })
        .catch((error) => {
            return res.status(500).send({ Error : `Error Occured While Deleting The Item : ${error}`});
        })
};
// -----For Fetching all Menu Items for a Specific Restaurant-----
export const getAllMenuItemsForRestaurant = (req, res) => {
    // Extracting Restaurant ID From Request Parameters.
    const {restaurantId} = req.params;
    // For Getting All The MenuItems For The Restaurant.
    Restaurant.findById(restaurantId)
        // Populate The menuItems Array With The Referenced Documents.
        .populate('menuItems') 
        .then((restaurant) => {
            if(!restaurant){
                return res.status(404).send({ Error: 'Restaurant Not Found !!!' });
            }
            else{
                // Now The menuItems Array Will Contain The Actual Menu Item Documents.
                const menuItems = restaurant.menuItems;
                return res.status(200).send(menuItems);
            }
        })
        .catch((error) => {
            return res.status(500).json({ Error: `Error Occurred While Retrieving Menu Items. ${error}` });
        })
};
// -----For Fetching a Specific Menu Item by ID for a Restaurant-----
export const getMenuItemByIdForRestaurant = (req, res) => {
    const {restaurantId , menuItemId} = req.params;
    // Use mongoose.Types.ObjectId Instead Of ObjectId Constructor.
    const objectIdMenuItemId = mongoose.Types.ObjectId.createFromHexString(menuItemId);
    MenuItem.findById(objectIdMenuItemId)
        .then((itemById) => {
            if (!itemById){
                return res.status(404).send({ Error: 'Item Not Found !!!' });
            }
            else{
                // Check If The Retrieved Menu Item Belongs To The Specified Restaurant.
                if (!itemById.restaurant || !itemById.restaurant.equals(restaurantId)) {
                    return res.status(400).send({ Error: 'Menu Item Does Not Belong To This Restaurant !!!' });
                }
                // If The Menu Item Belongs To The Restaurant, Send It As a Response.
                else{
                    return res.status(200).send(itemById);
                }
            }
        })
        .catch((error) => {
            console.log('Error:', error);
            return res.status(500).send({ Error : `Error Occured While Fetching Menu By ID : ${error}`});
        })
};
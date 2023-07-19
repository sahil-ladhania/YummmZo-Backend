// Importing Necessary Dependencies and Files.
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
                // Create a New Instance Of MenuItem And Associate It With The Restaurant.
                const newMenuItem = new MenuItem({
                    imageURL,
                    vegOrNonveg,
                    itemName,
                    itemPrice,
                    itemDescription,
                    restaurant: restaurant._id, // Link The Menu Item To The Restaurant.
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
            })
            .catch((error) => {
                return res.status(500).send({ Error: `Error Occurred While Finding The Restaurant: ${error}` });
            })
    }
};
// -----For Updating an Existing Menu Item for a Restaurant-----
export const updateMenuItemForRestaurant = (req, res) => {
    // Extracting Restaurant ID From Request Parameters.
    const {restaurantId} = req.params;
    const ItemId = req.params.id;
    // Extracting the Form Data From The Request.
    const {imageURL , vegOrNonveg , itemName , itemPrice , itemDescription} = req.body;
    const updatedItem = req.body;
    MenuItem.findById(ItemId)
        .then((item) => {
            if(!item){
                return res.status(404).send({ Error : "Item Not Found !!!"});
            }
            else{
                item.imageURL = updatedItem.imageURL;
                item.vegOrNonveg = updatedItem.vegOrNonveg;
                item.itemName = updatedItem.itemName;
                item.itemPrice = updatedItem.itemPrice;
                item.itemDescription = updatedItem.itemDescription;
                item.save()
                    .then(() => {
                        return res.status(200).send({ Message : "Item Successfully Updated ..."});
                    })
                    .catch(() => {
                        return res.status(500).send({ Error : `Error Occurred While Updating The Item : ${error}`});
                    })
            }
        })
        .catch((error) => {
            return res.status().send({ Error : `Error Occured While Finding The Item : ${error}`});
        })
};
// -----For Deleting a Menu Item by ID for a Restaurant-----
export const deleteMenuItemForRestaurant = (req, res) => {
    // Extracting Restaurant ID From Request Parameters.
    const {restaurantId} = req.params;
    const ItemId = req.params.id;
    MenuItem.findByIdAndDelete(ItemId)
        .then((deletedItem) => {
            if (!deletedItem){
                return res.status(404).send({ Error : "Item Not Found !!!"});
            }
            else{
                return res.status(200).send({ Message : "Item Successfully Deleted ..."});
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
    MenuItem.find({restaurant : restaurantId})
        .then((menuItems) => {
            return res.status(200).send(menuItems);
        })
        .catch((error) => {
            return res.status(500).json({ Error: `Error Occurred While Retrieving Menu Items. ${error}` });
        })
};
// -----For Fetching a Specific Menu Item by ID for a Restaurant-----
export const getMenuItemByIdForRestaurant = (req, res) => {
    const {ItemId} = req.params;
    MenuItem.findById(ItemId)
        .then((menuById) => {
            if (!menuById){
                return res.status(404).send({ Error: 'Item Not Found !!!' });
            }
        })
        .catch((error) => {
            return res.status(500).send({ Error : `Error Occured While Fetching Menu By ID : ${error}`});
        })
};
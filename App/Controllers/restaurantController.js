// Importing Necessary Dependencies and Files.
import Restaurant from '../Models/restaurantSchema.js';

// Controller Functions to handle a specific API Endpoint.
// -----For Creating a new Restaurant.-----
export const createRestaurant = (req, res) => {
    // Extracting the Form Data from The Request.
    const { restaurantName , cuisine , deliveryTime , priceForTwo , imageURL , restaurantCompleteAddress , mobileNumberAtRestaurant , mobileNumberOfOwner , restaurantOwnerName , restaurantOwnerEmailAddress , rating , menuItems } = req.body;
    // Validating Input Feilds.
    // Checking If User Has Filled The Required Details.
    if ( !restaurantName || !cuisine || !deliveryTime || !priceForTwo || !imageURL || !restaurantCompleteAddress || !mobileNumberAtRestaurant || !restaurantOwnerName || !restaurantOwnerEmailAddress || !rating || !menuItems ){
        return res.status(400).send({ Error : "Please Fill The Required Feilds !!!"});
    }
    else{
        // Checking For Existing Restaurants.
        Restaurant.findOne({ restaurantName : restaurantName })
            .then((existingRestaurant) => {
                if(existingRestaurant){
                    return res.status(400).send({ Error : "Restaurant Already Registered !!!"});
                }
                else{
                    // Creating New Instance To The Database.
                    const newRestaurant = new Restaurant({ restaurantName , cuisine , deliveryTime , priceForTwo , imageURL , restaurantCompleteAddress , mobileNumberAtRestaurant , mobileNumberOfOwner , restaurantOwnerName , restaurantOwnerEmailAddress , rating , menuItems });
                    newRestaurant.save()
                        .then(() => {
                            return res.status(200).send({ Message : "Restaurant Successfully Registered ..."});
                        })
                        .catch((error) => {
                            return res.status(500).send({ Error : `Error Occured While Saving The User Data. ${error}`});
                        })
                }
            })
            .catch((error) => {
                return res.status(500).send({ Error : `Error Occured While Saving The User Data : ${error}`});
            })
    }
};
// -----For Updating an Existing Restaurant by ID.-----
export const updateRestaurant = (req, res) => {
    const restaurantId = req.params.id;
    const { restaurantName , cuisine , deliveryTime , priceForTwo , imageURL , restaurantCompleteAddress , mobileNumberAtRestaurant , mobileNumberOfOwner , restaurantOwnerName , restaurantOwnerEmailAddress , rating , menuItems } = req.body;
    const updatedData = req.body;
    Restaurant.findById(restaurantId)
        .then((restaurant) => {
            if(!restaurant){
                return res.status(404).send({ Error : "Restaurant Not Found !!!"});
            }
            else{
                restaurant.restaurantName = updatedData.restaurantName;
                restaurant.cuisine = updatedData.cuisine;
                restaurant.deliveryTime = updatedData.deliveryTime;
                restaurant.priceForTwo = updatedData.priceForTwo;
                restaurant.imageURL = updatedData.imageURL;
                restaurant.restaurantCompleteAddress = updatedData.restaurantCompleteAddress;
                restaurant.mobileNumberAtRestaurant = updatedData.mobileNumberAtRestaurant;
                restaurant.mobileNumberOfOwner = updatedData.mobileNumberOfOwner;
                restaurant.restaurantOwnerName = updatedData.restaurantOwnerName;
                restaurant.restaurantOwnerEmailAddress = updatedData.restaurantOwnerEmailAddress;
                restaurant.rating = updatedData.rating;
                restaurant.menuItems = updatedData.menuItems;
                restaurant.save()
                    .then(() => {
                        return res.status(200).send({ Message : "Restaurant Successfully Updated ..."});
                    })
                    .catch((error) => {
                        return res.status(500).send({ Error : `Error Occurred While Updating The Restaurant : ${error}`});
                    })
            }
        })
        .catch((error) => {
            return res.status(404).send({ Error : `Error Occured While Finding The Restaurant : ${error}`});
        })
};
// -----For Deleting a Restaurant by ID.-----
export const deleteRestaurant = (req, res) => {
    const restaurantId = req.params.id;
    Restaurant.findByIdAndDelete(restaurantId)
        .then((deletedRestaurant) => {
            if (!deletedRestaurant){
                return res.status(404).send({ Error : "Restaurant Not Found !!!"});
            }
            else{
                return res.status(200).send({ Message : "Restaurant Successfully Deleted ..."});
            }
        })
        .catch((error) => {
            return res.status(500).send({ Error : `Error Occured While Deleting The Restaurant : ${error}`});
        })
};
// -----For Making a Restaurant as Favourite.-----
export const markRestaurantAsFavorite = (req, res) => {
    const restaurantId = req.params.id;
    Restaurant.findById(restaurantId)
        .then((restaurant) => {
            if(!restaurant){
                return res.status(404).send({ Error : "Restaurant Not Found !!!"});
            }
            else{
                restaurant.isFavourite = true;
                return restaurant.save()
                    .then(() => {
                        return res.status(200).send({ Message : "Restaurant Marked As Favourite ..."});
                    })
                    .catch((error) => {
                        return res.status(500).send({ Error : `Error Occured While Marking Restaurant As Favourite : ${error}`});
                    })
            }
        })
        .catch((error) => {
            return res.status(500).send({ Error : `Error Occured While Marking Restaurant As Favourite : ${error}`});
        })
};
// -----For Fetching all Restaurants from the Database.-----
export const getAllRestaurants = (req, res) => {
    Restaurant.find()
        .then((restaurants) => {
            return res.status(200).send(restaurants);
        })
        .catch((error) => {
            return res.status(500).send({ Error : `Error Occured While Fetching The List of Restaurants : ${error}`});
        })
};
// -----For Getting a Specific Restaurant by ID.-----
export const getRestaurantById = (req, res) => {
    const restaurantId = req.params.id;
    Restaurant.findById(restaurantId)
        .then((restaurantById) => {
            if (!restaurantById){
                return res.status(404).send({ Error: 'Restaurant Not Found !!!' });
            }
            else{
                return res.status(200).send(restaurantById);
            }
        })
        .catch((error) => {
            return res.status(500).send({ Error : `Error Occured While Fetching Restaurant By ID : ${error}`});
        })
};
// -----For Getting Restaurants by Cuisine ID.-----
export const getRestaurantsByCuisine = (req, res) => {
    
};

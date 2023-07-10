// Importing Necessary Dependencies and Files.
import Restaurant from '../Models/restaurantSchema.js';

// Controller Functions to handle a specific API Endpoint.
// -----For Creating a new Restaurant.-----
export const createRestaurant = (req, res) => {
    // Extracting the Form Data from The Request.
    const { imageURL , restaurantName , cuisine , rating , deliveryTime , priceForTwo , isFavourite } = req.body;
    // Validating Input Feilds.
    // Checking If User Has Filled The Required Details.
    if ( !imageURL || !restaurantName || !cuisine || !rating || !deliveryTime || !priceForTwo || !isFavourite ){
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
                    const newRestaurant = new Restaurant({ imageURL , restaurantName , cuisine , rating , deliveryTime , priceForTwo , isFavourite });
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
                return res.status(500).send({ Error : `Error Occured While Saving The User Data. ${error}`});
            })
    }
};
// -----For Updating an Existing Restaurant by ID.-----
export const updateRestaurant = (req, res) => {
    // Extract data from request, if needed
    // ...
    // Perform necessary operations (e.g., fetch data, update database, etc.)
    // ...
    return new Promise((resolve, reject) => {
        // Perform the necessary operations inside the Promise
        // ...
        // If the operations are successful, resolve with the result
        // ...
        // If there is an error, reject with the error
        // ...
    })
    .then((result) => {
        // Send the response back to the client with the result
        // ...
    })
    .catch((error) => {
        // Handle any errors that occur during processing
        // ...
    });
};
// -----For Deleting a Restaurant by ID.-----
export const deleteRestaurant = (req, res) => {
    // Extract data from request, if needed
    // ...
    // Perform necessary operations (e.g., fetch data, update database, etc.)
    // ...
    return new Promise((resolve, reject) => {
        // Perform the necessary operations inside the Promise
        // ...
        // If the operations are successful, resolve with the result
        // ...
        // If there is an error, reject with the error
        // ...
    })
    .then((result) => {
        // Send the response back to the client with the result
        // ...
    })
    .catch((error) => {
        // Handle any errors that occur during processing
        // ...
    });
};
// -----For Making a Restaurant as Favourite.-----
export const markRestaurantAsFavorite = (req, res) => {
    // Extract data from request, if needed
    // ...
    // Perform necessary operations (e.g., fetch data, update database, etc.)
    // ...
    return new Promise((resolve, reject) => {
        // Perform the necessary operations inside the Promise
        // ...
        // If the operations are successful, resolve with the result
        // ...
        // If there is an error, reject with the error
        // ...
    })
    .then((result) => {
        // Send the response back to the client with the result
        // ...
    })
    .catch((error) => {
        // Handle any errors that occur during processing
        // ...
    });
};
// -----For Fetching all Restaurants from the Database.-----
export const getAllRestaurants = (req, res) => {
    // Extract data from request, if needed
    // ...
    // Perform necessary operations (e.g., fetch data, update database, etc.)
    // ...
    return new Promise((resolve, reject) => {
        // Perform the necessary operations inside the Promise
        // ...
        // If the operations are successful, resolve with the result
        // ...
        // If there is an error, reject with the error
        // ...
    })
    .then((result) => {
        // Send the response back to the client with the result
        // ...
    })
    .catch((error) => {
        // Handle any errors that occur during processing
        // ...
    });
};
// -----For Getting a Specific Restaurant by ID.-----
export const getRestaurantById = (req, res) => {
    // Extract data from request, if needed
    // ...
    // Perform necessary operations (e.g., fetch data, update database, etc.)
    // ...
    return new Promise((resolve, reject) => {
        // Perform the necessary operations inside the Promise
        // ...
        // If the operations are successful, resolve with the result
        // ...
        // If there is an error, reject with the error
        // ...
    })
    .then((result) => {
        // Send the response back to the client with the result
        // ...
    })
    .catch((error) => {
        // Handle any errors that occur during processing
        // ...
    });
};
// -----For Getting Restaurants by Cuisine ID.-----
export const getRestaurantsByCuisine = (req, res) => {
    // Extract data from request, if needed
    // ...
    // Perform necessary operations (e.g., fetch data, update database, etc.)
    // ...
    return new Promise((resolve, reject) => {
        // Perform the necessary operations inside the Promise
        // ...
        // If the operations are successful, resolve with the result
        // ...
        // If there is an error, reject with the error
        // ...
    })
    .then((result) => {
        // Send the response back to the client with the result
        // ...
    })
    .catch((error) => {
        // Handle any errors that occur during processing
        // ...
    });
};

// Import necessary dependencies and files.
import Restaurant from "../Models/restaurantSchema.js";

// Controller function to handle sorting and filtering.
// -----Controller Function For Sorting Restaurants That Has Fastest Delivery.-----
export const sortByFastDelivery = (req , res) => {
    // Creating An Initial Database Query To Fetch Restaurants.
    const query = Restaurant.find();
    // Appling Filtering Criteria For Fast Delivery.
    query.where('deliveryTime').gte(20).lte(30);
    // Executing The Query To Retrieve Filtered Restaurants.
    query.exec()
        // Implementing Response Logic To Send The Filtered Data.
        .then((fastDeliveryRestaurants) => {
            res.status(200).json(fastDeliveryRestaurants);
        })
        // Implementing Error Handling Logic In Case Of Query Execution Failure.
        .catch((error) => {
            res.status(500).json({ Error : "Error Fetching Restaurants That Has Fast Delivery !!!" });
        });
};
// -----Controller Function For Sorting Restaurants That Has Rating above 4.0.-----
export const sortByRating = (req , res) => {
// Creating An Initial Database Query To Fetch Restaurants.
const query = Restaurant.find();
// Appling Filtering Criteria For High Rating Restaurant.
query.where('rating').gte(4.0).lte(5.0);
// Executing The Query To Retrieve Filtered Restaurants.
query.exec()
    // Implementing Response Logic To Send The Filtered Data.
    .then((highRatingRestaurants) => {
        res.status(200).json(highRatingRestaurants);
    })
    // Implementing Error Handling Logic In Case Of Query Execution Failure.
    .catch((error) => {
        console.error("Error Fetching Restaurants That Has High Rating !!!", error);
        res.status(500).json({ Error : "Error Fetching Restaurants That Has High Rating !!!" });
    });
};
// -----Controller Function For Sorting Restaurants From Low To High Price.-----
export const sortByCostLowToHigh = (req , res) => {
// Creating An Initial Database Query To Fetch Restaurants.
const query = Restaurant.find();
// Appling Filtering Criteria For Price Low To High Restaurant.
query.sort('priceForTwo');
// Executing The Query To Retrieve Filtered Restaurants.
query.exec()
    // Implementing Response Logic To Send The Filtered Data.   
    .then((costLTHRestaurants) => {
        res.status(200).json(costLTHRestaurants);
    })
    // Implementing Error Handling Logic In Case Of Query Execution Failure.
    .catch((error) => {
        res.status(500).json({ Error : "Error Fetching Restaurants That Has Cost Low To High !!!" });
    });
};
// -----Controller Function For Sorting Restaurants From High To Low Price.-----
export const sortByCostHighToLow = (req , res) => {
// Creating An Initial Database Query To Fetch Restaurants.
const query = Restaurant.find();
// Appling Filtering Criteria For Price High To Low Restaurant.
query.sort('-priceForTwo');
// Executing The Query To Retrieve Filtered Restaurants.
query.exec()
    // Implementing Response Logic To Send The Filtered Data.   
    .then((costHTLRestaurants) => {
        res.status(200).json(costHTLRestaurants);
    })
    // Implementing Error Handling Logic In Case Of Query Execution Failure.
    .catch((error) => {
        res.status(500).json({ Error : "Error Fetching Restaurants That Has Cost High To Low !!!" });
    });
};
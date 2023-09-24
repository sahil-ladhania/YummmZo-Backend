// Importing Necessary Dependencies and Files.
import mongoose from "mongoose";
import Cuisine from '../Models/cuisineSchema.js';
import Restaurant from '../Models/restaurantSchema.js';
import MenuItem from '../Models/menuItemSchema.js';

// Controller Functions to handle a specific API Endpoint.
// -----Controller Function For Searching Restaurants.-----
export const searchRestaurants = (req, res) => {
    // Parsing Search Queries.
    const userRestaurantQuery = req.params.query;
    console.log(userRestaurantQuery);
    // Implementing Search Logic for Restaurants.
    // --Developing Logic To Search For Relevant Restaurants In The Database.
    // --Using MongoDB's Text Search, Regex Matching, Or Other Techniques Based On Requirements.
    Restaurant.find({ restaurantName: { $regex: userRestaurantQuery, $options: 'i' } })
        .then((restaurantSearchResults) => {
            // Handeling Search Results for Restaurants.
            // --Processing And Formating The Restaurant Data Obtained From The Database.
            const formattedRestaurantResults = restaurantSearchResults.map((restaurant) => {
                return{
                    // Defining How I Want To Format Each Restaurant's Data.
                    restaurantName : restaurant.restaurantName,
                    cuisine : restaurant.cuisine,
                    deliveryTime : restaurant.deliveryTime,
                    priceForTwo : restaurant.priceForTwo,
                    imageURL : restaurant.imageURL,
                    restaurantCompleteAddress : restaurant.restaurantCompleteAddress,
                    rating : restaurant.rating
                }
            })
            // Returning JSON Response for Restaurants.
            // --Returning The Search Results As A JSON Response To The Frontend.
            return res.status(200).send({ results : formattedRestaurantResults });
        })
        .catch((error) => {
            // Handeling Any Errors That Occur During The Search.
            return res.status(500).send({ Error : 'An Error Occurred While Searching For Restaurants' , error });
        });
};

// -----Controller Function For Searching Cuisines.-----
export const searchCuisines = (req, res) => {
    // Parsing Search Queries.
    const userCuisineQuery = req.params.query;
    console.log(userCuisineQuery);
    // Implementing Search Logic for Cuisines.
    // --Developing Logic To Search For Relevant Cuisines In The Database.
    // --Using MongoDB's Text Search, Regex Matching, Or Other Techniques Based On Requirements.
    Cuisine.find({ cuisineName: { $regex: userCuisineQuery, $options: 'i' } })
        .then((cuisineSearchResults) => {
            // Handeling Search Results for Cuisines.
            // --Processing And Formating The Cuisine Data Obtained From The Database.
            const formattedCuisineResults = cuisineSearchResults.map((cuisine) => {
                return {
                    // Defining How I Want To Format Each Cuisine's Data.
                    imageURL : cuisine.imageURL,
                    cuisineName : cuisine.cuisineName
                };
            });
            // Returning JSON Response for Cuisines.
            // --Return The Search Results As A JSON Response To The Frontend.
            res.status(200).send({ results: formattedCuisineResults });
        })
        .catch((error) => {
            // Handeling Any Errors That Occur During The Search.
            res.status(500).json({ Error: 'An Error Occurred While Searching For Cuisines', error });
        });
};

// -----Controller Function For Searching MenuItems.-----
export const searchMenuItems = (req, res) => {
    // Parsing Search Queries.
    const userMenuItemQuery = req.params.query;
    console.log(userMenuItemQuery);
    // Implementing Search Logic for Menu Items.
    // --Developing Logic To Search For Relevant Menu Items In The Database.
    // --Using MongoDB's Text Search, Regex Matching, Or Other Techniques Based On Requirements
    MenuItem.find({ itemName: { $regex: userMenuItemQuery, $options: 'i' } })
        .then((menuItemSearchResults) => {
            // Handeling Search Results for Menu Items.
            // --Processing And Formating The Menu Item Data Obtained From The Database.
            const formattedMenuItems = menuItemSearchResults.map((menuItem) => {
                return {
                    // Defining How I Want To Format Each Menu Item's Data.
                    imageURL : menuItem.imageURL,
                    itemName : menuItem.itemName,
                    itemPrice : menuItem.itemPrice,
                    itemDescription : menuItem.itemDescription
                };
            });
            // Returning JSON Response for Menu Items.
            // --Returning The Search Results As A JSON Response To The Frontend.
            res.status(200).send({ results: formattedMenuItems });
        })
        .catch((error) => {
            // Handeling Any Errors That Occur During The Search.
            res.status(500).send({ Error: 'An Error Occurred While Searching For Menu Items', error });
        });
};
// Importing Necessary Dependencies and Files.
import mongoose from "mongoose";
import Cuisine from '../Models/cuisineSchema.js';
import Restaurant from '../Models/restaurantSchema.js';
import MenuItem from '../Models/menuItemSchema.js';

// Controller Functions to handle a specific API Endpoint.
// -----Controller Function For Searching Restaurants.-----
export const searchRestaurants = (req, res) => {
// Parsing Search Queries.
const searchQuery = req.searchQuery;
console.log(searchQuery);
// Implementing Search Logic for Restaurants.
// --Developing Logic To Search For Relevant Restaurants In The Database.
const restaurantResults = Restaurant.find({restaurantName : searchQuery});
restaurantResults
        .then((restaurantList) => {
                res.status(200).json({
                        "Message" : "Your Requested Restaurant List...",
                        "Restaurant List" : restaurantList
                });
        })
        .catch((error) => {
                res.status(500).json({
                        "Error" : `Error Finding Your Requested Restaurants : ${error}`
                })
        })
// --Using MongoDB's Text Search, Regex Matching, Or Other Techniques Based On Requirements.
// Handeling Search Results for Restaurants.
// --Processing And Formating The Restaurant Data Obtained From The Database.
// Defining How I Want To Format Each Restaurant's Data.
// Returning JSON Response for Restaurants.
// --Returning The Search Results As A JSON Response To The Frontend.
// Handeling Any Errors That Occur During The Search.
};

// -----Controller Function For Searching Cuisines.-----
export const searchCuisines = (req, res) => {
// Parsing Search Queries.
const searchQuery = req.searchQuery;
console.log(searchQuery);
// Implementing Search Logic for Cuisines.
// --Developing Logic To Search For Relevant Cuisines In The Database.
const cuisineResults = Cuisine.find({cuisineName : searchQuery});
cuisineResults
        .then((cuisineResults) => {
                res.status(200).json({
                        "Message" : "Your Requested Cuisine List...",
                        "Cuisine List" : cuisineResults
                });
        })
        .catch((error) => {
                res.status(500).json({
                        "Error" : `Error Finding Your Requested Cuisines : ${error}`
                })
        })
// --Using MongoDB's Text Search, Regex Matching, Or Other Techniques Based On Requirements.
// Handeling Search Results for Cuisines.
// --Processing And Formating The Cuisine Data Obtained From The Database.
// Defining How I Want To Format Each Cuisine's Data.
// Returning JSON Response for Cuisines.
// --Return The Search Results As A JSON Response To The Frontend.
// Handeling Any Errors That Occur During The Search.
}

// -----Controller Function For Searching MenuItems.-----
export const searchMenuItems = (req, res) => {
// Parsing Search Queries.
const searchQuery = req.searchQuery;
console.log(searchQuery);
const menuItemsResults = MenuItem.find({itemName : searchQuery})
menuItemsResults
        .then((menuItemsResults) => {
                res.status(200).json({
                        "Message" : "Your Requested MenuItems List...",
                        "MenuItems List" : menuItemsResults
                });
        })
        .catch((error) => {
                res.status(500).json({
                        "Error" : `Error Finding Your Requested MenuItems : ${error}`
                })
        })
// Implementing Search Logic for Menu Items.
        // --Developing Logic To Search For Relevant Menu Items In The Database.
        // --Using MongoDB's Text Search, Regex Matching, Or Other Techniques Based On Requirements
// Handeling Search Results for Menu Items.
        // --Processing And Formating The Menu Item Data Obtained From The Database.
// Defining How I Want To Format Each Menu Item's Data.
// Returning JSON Response for Menu Items.
        // --Returning The Search Results As A JSON Response To The Frontend.
// Handeling Any Errors That Occur During The Search.
};
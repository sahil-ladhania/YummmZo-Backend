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
// --Using MongoDB's Text Search, Regex Matching, Or Other Techniques Based On Requirements.
const restaurantResults = Restaurant.find({restaurantName : { $regex : searchQuery , $options : 'i'}});
restaurantResults
        // Handeling Search Results for Restaurants.
        .then((restaurantList) => {
                // --Processing And Formating The Restaurant Data Obtained From The Database.
                const formatedRestaurantResults = restaurantList.map((restaurant) => {
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
                res.status(200).json({
                        "Message" : "Your Requested Restaurant List...",
                        "Restaurant List" : formatedRestaurantResults
                });
        })
        // Handeling Any Errors That Occur During The Search.
        .catch((error) => {
                res.status(500).json({
                        "Error" : `Error Finding Your Requested Restaurants : ${error}`
                })
        })
};

// -----Controller Function For Searching Cuisines.-----
export const searchCuisines = (req, res) => {
// Parsing Search Queries.
const searchQuery = req.searchQuery;
console.log(searchQuery);
// Implementing Search Logic for Cuisines.
// --Developing Logic To Search For Relevant Cuisines In The Database.
// --Using MongoDB's Text Search, Regex Matching, Or Other Techniques Based On Requirements.
const cuisineResults = Cuisine.find({cuisineName : {$regex : searchQuery , $options : 'i' }});
cuisineResults
        // Handeling Search Results for Cuisines.
        .then((cuisineResults) => {
                // --Processing And Formating The Cuisine Data Obtained From The Database.
                const formattedCuisineResults = cuisineResults.map((cuisine) => {
                        // Defining How I Want To Format Each Cuisine's Data.
                        return{
                                imageURL : cuisine.imageURL,
                                cuisineName : cuisine.cuisineName
                        }
                })
                // Returning JSON Response for Cuisines.
                // --Return The Search Results As A JSON Response To The Frontend.
                res.status(200).json({
                        "Message" : "Your Requested Cuisine List...",
                        "Cuisine List" : cuisineResults
                });
        })
        // Handeling Any Errors That Occur During The Search.
        .catch((error) => {
                res.status(500).json({
                        "Error" : `Error Finding Your Requested Cuisines : ${error}`
                })
        })
}

// // -----Controller Function For Searching MenuItems.-----
export const searchMenuItems = (req, res) => {
// Parsing Search Queries.
const searchQuery = req.searchQuery;
console.log(searchQuery);
const restaurantId = req.params.restaurantId;
console.log(restaurantId);
// Finding Restaurant On The Basis Of restaurantId.
const restaurantToSearch = Restaurant.findById(restaurantId).populate('menuItems').exec();
console.log(restaurantToSearch);
restaurantToSearch
        .then((restaurantToSearch) => {
                if(!restaurantToSearch){
                        res.status(404).json({
                                "Message" : "Could Not Find the Restaurant!!!"
                        })
                }
                else{
                        // Implementing Search Logic for Menu Items.
                        // --Developing Logic To Search For Relevant Menu Items In The Database.
                        // --Using MongoDB's Text Search, Regex Matching, Or Other Techniques Based On Requirements
                        const menuItemsResults = restaurantToSearch.menuItems.filter((menuItem) => {
                                return menuItem.itemName.toLowerCase().includes(searchQuery.toLowerCase());
                        })
                        // --Processing And Formating The Menu Item Data Obtained From The Database.
                        const formattedMenuItems = menuItemsResults.map((menuItem) => {
                                return{
                                // Defining How I Want To Format Each Menu Item's Data.
                                imageURL : menuItem.imageURL,
                                itemName : menuItem.itemName,
                                itemPrice : menuItem.itemPrice,
                                itemDescription : menuItem.itemDescription
                        }
                        })
                        // Returning JSON Response for Menu Items.
                        // --Returning The Search Results As A JSON Response To The Frontend.
                        res.status(200).json({
                                "Message" : "Your Requested MenuItems List...",
                                "MenuItems List" : formattedMenuItems
                        });
                }
        })
        // Handeling Any Errors That Occur During The Finding Restaurant.
        .catch((error) => {
                res.status(500).json({
                        "Error" : `Error Finding Your Requested Restaurant : ${error}`
                })
        })
};

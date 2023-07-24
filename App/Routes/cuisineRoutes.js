// Importing all the Dependencies and Modules.
import { getAllCuisines , getCuisineById , createCuisine , updateCuisine , deleteCuisine } from '../Controllers/cuisineController.js'
import express from 'express';
const router = express.Router();

// Defining Cuisines Routes.
router.route('/cuisines')
    .post(createCuisine) // For Creating a New Cuisine.
    .get(getAllCuisines) // For Getting all Cuisines.
router.route('/cuisines/:id')
    .get(getCuisineById) // For Getting a Cuisine By ID.
    .put(updateCuisine) // For Updating a Cuisine By ID.
    .delete(deleteCuisine) // For Deleting a Cuisine By ID.

// Exporting all the Dependencies and Modules.
export default router;
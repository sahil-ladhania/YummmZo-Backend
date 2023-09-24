// Importing all the Dependencies and Modules.
import express from "express";
const router = express.Router();
import { searchRestaurants , searchCuisines } from "../Controllers/searchController.js";

// Defining Restaurant and Cuisine Search Routes.
router.get('/api/search/restaurants/:query' , searchRestaurants);
router.get('/api/search/cuisines/:query' , searchCuisines);

// Exporting all the Dependencies and Modules.
export default router;
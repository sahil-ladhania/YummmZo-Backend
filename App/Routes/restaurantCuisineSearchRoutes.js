// Importing all the Dependencies and Modules.
import express from "express";
const router = express.Router();
import { searchRestaurants , searchCuisines } from "../Controllers/searchController.js";
import { validateSearch } from "../Middlewares/Search/validateSearchMiddleware.js";

// Defining Restaurant and Cuisine Search Routes.
router.get('/api/search/restaurants/:query' , validateSearch , searchRestaurants);
router.get('/api/search/cuisines/:query' , validateSearch , searchCuisines);

// Exporting all the Dependencies and Modules.
export default router;
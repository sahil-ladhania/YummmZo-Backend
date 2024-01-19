// Importing all the Dependencies and Modules.
import express from "express";
const router = express.Router();
import { searchMenuItems } from "../Controllers/searchController.js";
import { validateSearch } from "../Middlewares/Search/validateSearchMiddleware.js";

// Defining Search In Menu Routes.
router.get('/api/restaurants/:restaurantId/menuitems/search/:query' , validateSearch , searchMenuItems);

// Exporting all the Dependencies and Modules.
export default router;
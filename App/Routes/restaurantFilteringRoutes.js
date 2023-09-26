// Importing all the Dependencies and Modules.
import express from "express";
const router = express.Router();
import { sortByFastDelivery , sortByRating , sortByCostLowToHigh , sortByCostHighToLow} from '../Controllers/filteringController.js';

// Defining Restaurants Routes.
router.get('/restaurants/filter/fastDelivery' , sortByFastDelivery);
router.get('/restaurants/sort/byRating' , sortByRating);
router.get('/restaurants/sort/byCostLowToHigh' , sortByCostLowToHigh);
router.get('/restaurants/sort/byCostHighToLow' , sortByCostHighToLow);

// Exporting all the Dependencies and Modules.
export default router;
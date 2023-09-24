// Importing all the Dependencies and Modules.
import express from "express";
const router = express.Router();
import { searchMenuItems } from "../Controllers/searchController.js";

// Defining Restaurant and Cuisine Search Routes.
router.get('/api/search/menuitems/:query' , searchMenuItems);

// Exporting all the Dependencies and Modules.
export default router;
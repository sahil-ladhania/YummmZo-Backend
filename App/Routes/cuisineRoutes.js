// Importing all the Dependencies and Modules.
import { getAllCuisines , getCuisineById , createCuisine , updateCuisine , deleteCuisine } from '../Controllers/cuisineController.js'
import express from 'express';
const router = express.Router();

// Defining Cuisines Routes.
router.get('/cuisines' , getAllCuisines);
router.get('/cuisines/:id' , getCuisineById);
router.post('/cuisines' , createCuisine);
router.put('/cuisines/:id' , updateCuisine);
router.delete('/cuisines/:id' , deleteCuisine);

// Exporting all the Dependencies and Modules.
export default router;
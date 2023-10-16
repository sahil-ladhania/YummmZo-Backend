// Importing all the Dependencies and Modules.
import express from 'express';
const router = express.Router();
import {registerUser , loginUser} from '../Controllers/authController.js';

// Defining Authentication Routes.
router.post('/api/users/register' , registerUser);
router.post('/api/users/login' , loginUser);

// Exporting all the Dependencies and Modules.
export default router;
// Importing all the Dependencies and Modules.
import express from 'express';
const router = express.Router();
import { userRegister , userLogin } from '../Controllers/authController.js';

// Defining Authentication Routes.
router.post('/api/users/register' , userRegister);
router.post('/api/users/login' , userLogin);

// Exporting all the Dependencies and Modules.
export default router;
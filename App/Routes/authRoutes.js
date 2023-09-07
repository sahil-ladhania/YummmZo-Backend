// Importing all the Dependencies and Modules.
import express from 'express';
const router = express.Router();
import { userRegister , userLogin, initiateGoogleOAuth , handleGoogleAuthCallback } from '../Controllers/authController.js';
import passport from 'passport';

// Defining Authentication Routes.
router.post('/api/users/register' , userRegister);
router.post('/api/users/login' , userLogin);
router.get('/auth/google', initiateGoogleOAuth);
router.get('/auth/google/callback', handleGoogleAuthCallback);

// Exporting all the Dependencies and Modules.
export default router;
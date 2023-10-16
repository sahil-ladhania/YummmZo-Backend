// Importing all the Dependencies and Modules.
import express from 'express';
const router = express.Router();

// Defining Authentication Routes.
router.post('/api/users/register');
router.post('/api/users/login');

// Exporting all the Dependencies and Modules.
export default router;
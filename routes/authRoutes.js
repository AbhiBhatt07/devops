import express from 'express';
import { signup, login, getMe } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
// new test
router.post('/signup', signup);
router.post('/login', login);
router.get('/me', protect, getMe);  // Protected route


export default router;
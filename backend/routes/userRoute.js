import express from 'express';
import { authUser, getUserProfile } from '../controllers/index.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile);

export default router;

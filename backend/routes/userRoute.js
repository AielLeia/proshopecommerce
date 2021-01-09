import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
  updatetUserProfile,
} from '../controllers/index.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updatetUserProfile);

export default router;

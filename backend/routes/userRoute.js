import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
  updatetUserProfile,
  getUsers,
  deleteUser,
} from '../controllers/index.js';
import { admin, protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.route('/login').post(authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updatetUserProfile);
router.route('/:id').delete(protect, admin, deleteUser);

export default router;

import express from 'express'
const router = express.Router();
import { authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile 
} from '../controllers/UserController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/auth/logout', logoutUser);

// router.get('/profile', getUserProfile);
// router.patch('/profile', updateUserProfile);
// The below does the same as the two lines above.
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;
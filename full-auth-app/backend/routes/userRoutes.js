import express from 'express'
const router = express.Router();
import { authUser } from '../controllers/UserController.js';

router.post('/auth', authUser);

export default router;
import express from 'express';
import {
  listUnverified, verifyUser,
  listDisputes, resolveDispute
} from '../controllers/adminController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();
router.use(protect, admin);
router.get('/unverified', listUnverified);
router.put('/verify/:id', verifyUser);
router.get('/disputes', listDisputes);
router.put('/resolve/:id', resolveDispute);
export default router;

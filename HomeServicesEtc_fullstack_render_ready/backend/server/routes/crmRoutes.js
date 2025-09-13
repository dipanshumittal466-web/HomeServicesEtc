import express from 'express';
import { getMetrics } from '../controllers/crmController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();
router.get('/metrics', protect, getMetrics);
export default router;

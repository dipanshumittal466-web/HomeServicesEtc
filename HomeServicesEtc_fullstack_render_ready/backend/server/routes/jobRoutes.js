import express from 'express';
import { postJob, getJobs } from '../controllers/jobController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();
router.get('/', getJobs);
router.post('/', protect, postJob);
export default router;

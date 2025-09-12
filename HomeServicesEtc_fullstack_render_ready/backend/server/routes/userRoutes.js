import express from 'express';
import { register, login, uploadDocs, acceptIndemnity } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.post('/upload', protect, upload.fields([
  { name: 'photoID' }, { name: 'insurance' }
]), uploadDocs);
router.post('/indemnity', protect, acceptIndemnity);
export default router;

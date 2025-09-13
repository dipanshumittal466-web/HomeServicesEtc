const express = require('express'); const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const ProviderProfile = require('../models/ProviderProfile');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Upload document (ID or insurance)
router.post('/:id/documents', upload.single('file'), async (req,res)=>{
  const {id} = req.params;
  const type = req.body.type || 'document';
  const url = '/uploads/' + req.file.filename;
  let prof = await ProviderProfile.findOne({userId:id});
  if(!prof){ prof = new ProviderProfile({userId:id, documents:[]}); }
  prof.documents.push({type, url, uploadedAt: new Date()});
  await prof.save();
  res.json({ok:true, url});
});

// Provider create/update profile (includes indemnityAccepted)
router.post('/:id/profile', async (req,res)=>{
  const {id} = req.params;
  const {businessName, services, indemnityAccepted} = req.body;
  let prof = await ProviderProfile.findOne({userId:id});
  if(!prof) prof = new ProviderProfile({userId:id});
  prof.businessName = businessName;
  prof.services = services || [];
  prof.indemnityAccepted = !!indemnityAccepted;
  await prof.save();
  res.json({ok:true, profile:prof});
});

// Admin: get verification queue
router.get('/admin/queue', async (req,res)=>{
  const q = await ProviderProfile.find({verificationStatus:'Pending'}).populate('userId','name email');
  res.json(q);
});

// Admin: approve/reject
const { sendMail } = require('../utils/mailer');

router.post('/admin/:id/verify', async (req,res)=>{
  const {id} = req.params;
  const {action, note} = req.body; // action: approve|reject
  const prof = await ProviderProfile.findById(id);
  if(!prof) return res.status(404).json({msg:'Not found'});
  prof.verificationStatus = action === 'approve' ? 'Approved' : 'Rejected';
  if(note) prof.documents = prof.documents.map(d=> ({...d, adminNote: note}));
  await prof.save();
  // send email to provider's user
  try{
    const User = require('../models/User');
    const user = await User.findById(prof.userId);
    if(user){ await sendMail(user.email, `Your verification status: ${prof.verificationStatus}`, `<p>Dear ${user.name || ''},<br/>Your provider verification status is now <strong>${prof.verificationStatus}</strong>.</p>`); }
  }catch(e){ console.error('failed sending verification email', e); }
  res.json({ok:true, status: prof.verificationStatus});
});

module.exports = router;

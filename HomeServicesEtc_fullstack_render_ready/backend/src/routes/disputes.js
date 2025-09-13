const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Dispute = require('../models/Dispute');
// create dispute
router.post('/', auth, async (req,res)=>{
  const {jobId, reason, details} = req.body;
  if(!jobId || !reason) return res.status(400).json({msg:'Missing fields'});
  const d = new Dispute({jobId, raisedBy:req.user.id, reason, details, status:'Open', createdAt:new Date()});
  await d.save();
  res.json({ok:true, dispute:d});
});
// list disputes (admin)
router.get('/', auth, async (req,res)=>{
  if(req.user.role !== 'admin') return res.status(403).json({msg:'Admin only'});
  const ds = await Dispute.find().sort({createdAt:-1}).limit(500);
  res.json(ds);
});
module.exports = router;

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const AuditLog = require('../models/AuditLog');
router.get('/', auth, async (req,res)=>{
  if(req.user.role !== 'admin') return res.status(403).json({msg:'Admin only'});
  const logs = await AuditLog.find().sort({timestamp:-1}).limit(500);
  res.json(logs);
});
router.post('/write', auth, async (req,res)=>{
  const {actionType, resourceId, notes} = req.body;
  const a = new AuditLog({actorUserId: req.user.id, actionType, resourceId, notes, timestamp: new Date()});
  await a.save();
  res.json({ok:true, a});
});
module.exports = router;

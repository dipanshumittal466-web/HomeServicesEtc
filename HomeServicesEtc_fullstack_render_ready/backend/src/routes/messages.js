const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const mongoose = require('mongoose');
const User = require('../models/User');
// Simple in-memory or DB-backed message model could be added; we'll use a collection in Mongo via a new model
const Message = require('../models/Message');

// send message
router.post('/send', auth, async (req,res)=>{
  const {toUserId, subject, body} = req.body;
  if(!toUserId || !body) return res.status(400).json({msg:'Missing fields'});
  const msg = new Message({from:req.user.id, to:toUserId, subject, body, createdAt:new Date()});
  await msg.save();
  res.json({ok:true, msg});
});

// inbox for current user
router.get('/inbox', auth, async (req,res)=>{
  const msgs = await Message.find({to:req.user.id}).sort({createdAt:-1}).limit(200);
  res.json(msgs);
});

module.exports = router;

const express = require('express'); const router = express.Router(); const User = require('../models/User'); const bcrypt = require('bcryptjs');
router.get('/', async (req,res)=>{ const u = await User.find().lean(); res.json(u)});
router.post('/', async (req,res)=>{ try{ const h = req.body.password? await bcrypt.hash(req.body.password,10): undefined; const user = new User({name:req.body.name,email:req.body.email,passwordHash:h,role:req.body.role}); await user.save(); res.status(201).json(user);}catch(err){res.status(500).json({error:String(err)})}});
module.exports = router

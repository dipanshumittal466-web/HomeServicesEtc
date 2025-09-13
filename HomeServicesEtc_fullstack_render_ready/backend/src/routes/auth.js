const express = require('express'); const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sendMail } = require('../utils/mailer');

router.post('/register', async (req,res)=>{
  const {name,email,password,role} = req.body;
  if(!email || !password) return res.status(400).json({msg:'Missing email/password'});
  let user = await User.findOne({email});
  if(user) return res.status(400).json({msg:'User exists'});
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  user = new User({name,email,passwordHash:hash, role: role || 'poster'});
  await user.save();
  try{ await sendMail(user.email, 'Welcome to HomeServicesEtc', `<p>Hello ${user.name || ''},<br/>Welcome to HomeServicesEtc. Your account was created successfully.</p>`); }catch(e){ console.error('welcome email failed', e); }
  const token = jwt.sign({id:user._id,role:user.role}, process.env.JWT_SECRET || 'change_this_secret', {expiresIn:'30d'});
  res.json({token, user:{id:user._id,name:user.name,email:user.email,role:user.role}});
});

router.post('/login', async (req,res)=>{
  const {email,password} = req.body;
  const user = await User.findOne({email});
  if(!user) return res.status(400).json({msg:'Invalid credentials'});
  const ok = bcrypt.compareSync(password, user.passwordHash);
  if(!ok) return res.status(400).json({msg:'Invalid credentials'});
  const token = jwt.sign({id:user._id,role:user.role}, process.env.JWT_SECRET || 'change_this_secret', {expiresIn:'30d'});
  res.json({token, user:{id:user._id,name:user.name,email:user.email,role:user.role}});
});

module.exports = router;

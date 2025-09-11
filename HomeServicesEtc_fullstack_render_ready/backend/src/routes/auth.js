const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret'
const JWT_EXPIRES = process.env.JWT_EXPIRES || '7d'

router.post('/register', async (req,res)=>{
  try{
    const {name,email,password,role} = req.body
    if(!email || !password) return res.status(400).json({error:'email and password required'})
    const exists = await User.findOne({email})
    if(exists) return res.status(400).json({error:'email exists'})
    const hash = await bcrypt.hash(password, 10)
    const user = new User({name,email,passwordHash:hash,role})
    await user.save()
    const token = jwt.sign({id:user._id}, JWT_SECRET, {expiresIn:JWT_EXPIRES})
    res.json({token, user:{_id:user._id,name:user.name,email:user.email,role:user.role}})
  }catch(err){ res.status(500).json({error:String(err)})}
})

router.post('/login', async (req,res)=>{
  try{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user) return res.status(400).json({error:'invalid credentials'})
    const ok = await bcrypt.compare(password, user.passwordHash || '')
    if(!ok) return res.status(400).json({error:'invalid credentials'})
    const token = jwt.sign({id:user._id}, JWT_SECRET, {expiresIn:JWT_EXPIRES})
    res.json({token, user:{_id:user._id,name:user.name,email:user.email,role:user.role}})
  }catch(err){ res.status(500).json({error:String(err)})}
})

module.exports = router

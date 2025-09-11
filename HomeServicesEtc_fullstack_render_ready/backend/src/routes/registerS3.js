const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Audit = require('../models/Audit')

router.post('/', async (req,res)=>{
  try{
    const {key, filename, expiresAt} = req.body
    const auth = req.headers.authorization
    if(!auth || !auth.startsWith('Bearer ')) return res.status(401).json({error:'unauth'})
    // simple token parse without secret verification here - in production, verify JWT properly
    // expecting client to call with token after login; middleware authPopulate would populate req.user but here it's simpler to accept userId param
    const userId = req.body.userId || null
    if(!userId) return res.status(400).json({error:'userId required'})
    const user = await User.findById(userId)
    if(!user) return res.status(404).json({error:'user not found'})
    user.insuranceDoc = {filename, path: key, verified:false, uploadedAt: new Date(), expiresAt: expiresAt ? new Date(expiresAt) : null}
    await user.save()
    await Audit.create({user:user._id, action:'upload_insurance_s3', meta:{key}})
    res.json({ok:true})
  }catch(err){ res.status(500).json({error:String(err)})}
})
module.exports = router

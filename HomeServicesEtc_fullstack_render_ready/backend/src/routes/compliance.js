const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const User = require('../models/User')
const Audit = require('../models/Audit')

const storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, 'uploads/compliance/') },
  filename: function (req, file, cb) { cb(null, Date.now() + '-' + file.originalname) }
})
const upload = multer({storage, limits:{fileSize: 10*1024*1024}}) // 10MB

// upload insurance
router.post('/upload-insurance/:userId', upload.single('file'), async (req,res)=>{
  try{
    const user = await User.findById(req.params.userId)
    if(!user) return res.status(404).json({error:'User not found'})
    user.insuranceDoc = {filename:req.file.originalname, path:req.file.path, verified:false, uploadedAt:new Date(), expiresAt: req.body.expiresAt ? new Date(req.body.expiresAt) : null}
    user.complianceAcknowledged = req.body.acknowledged === 'true' || user.complianceAcknowledged
    await user.save()
    await Audit.create({user:user._id, action:'upload_insurance', meta:{file:req.file.path}})
    res.json({ok:true, insuranceDoc:user.insuranceDoc})
  }catch(err){ res.status(500).json({error:String(err)})}
})

// upload id
router.post('/upload-id/:userId', upload.single('file'), async (req,res)=>{
  try{
    const user = await User.findById(req.params.userId)
    if(!user) return res.status(404).json({error:'User not found'})
    user.idDoc = {filename:req.file.originalname, path:req.file.path, verified:false, uploadedAt:new Date()}
    user.complianceAcknowledged = req.body.acknowledged === 'true' || user.complianceAcknowledged
    await user.save()
    await Audit.create({user:user._id, action:'upload_id', meta:{file:req.file.path}})
    res.json({ok:true, idDoc:user.idDoc})
  }catch(err){ res.status(500).json({error:String(err)})}
})

// admin: list pending
router.get('/pending', async (req,res) => {
  try{
    const pending = await User.find({ $or: [{'insuranceDoc.verified': false}, {'idDoc.verified': false}] }).select('name email insuranceDoc idDoc').lean()
    res.json(pending)
  }catch(err){ res.status(500).json({error:String(err)})}
})

// admin: verify docs
router.post('/verify/:userId', async (req,res)=>{
  try{
    const {which, approve, notes, adminId} = req.body // which: 'insurance'|'id'
    const user = await User.findById(req.params.userId)
    if(!user) return res.status(404).json({error:'User not found'})
    if(which === 'insurance' && user.insuranceDoc){
      user.insuranceDoc.verified = approve === true || approve === 'true'
      user.insuranceDoc.adminNotes = notes || user.insuranceDoc.adminNotes
      user.insuranceDoc.verifiedBy = adminId || user.insuranceDoc.verifiedBy
      user.insuranceDoc.verifiedAt = approve ? new Date() : null
    }
    if(which === 'id' && user.idDoc){
      user.idDoc.verified = approve === true || approve === 'true'
      user.idDoc.adminNotes = notes || user.idDoc.adminNotes
      user.idDoc.verifiedBy = adminId || user.idDoc.verifiedBy
      user.idDoc.verifiedAt = approve ? new Date() : null
    }
    await user.save()
    await Audit.create({user:adminId, action:'verify_doc', meta:{userId:user._id, which, approve}})
    res.json({ok:true, user})
  }catch(err){ res.status(500).json({error:String(err)})}
})

module.exports = router

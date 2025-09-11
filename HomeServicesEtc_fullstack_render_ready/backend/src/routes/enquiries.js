const express = require('express'); const router = express.Router(); const Enquiry = require('../models/Enquiry');
router.post('/', async (req,res)=>{ try{ const e = new Enquiry(req.body); await e.save(); res.status(201).json(e);}catch(err){res.status(500).json({error:String(err)})}});
module.exports = router

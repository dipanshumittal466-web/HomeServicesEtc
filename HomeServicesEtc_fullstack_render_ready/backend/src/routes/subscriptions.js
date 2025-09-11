const express = require('express'); const router = express.Router(); const Subscription = require('../models/Subscription');
router.get('/', async (req,res)=>{ res.json(await Subscription.find().lean())});
router.post('/', async (req,res)=>{ try{ const s = new Subscription(req.body); await s.save(); res.status(201).json(s);}catch(err){res.status(500).json({error:String(err)})}});
module.exports = router

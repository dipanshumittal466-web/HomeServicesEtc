const express = require('express'); const router = express.Router(); const Category = require('../models/Category');
router.get('/', async (req,res)=>{ const c = await Category.find().lean(); res.json(c)});
router.post('/', async (req,res)=>{ try{ const cat = new Category(req.body); await cat.save(); res.status(201).json(cat);}catch(err){res.status(500).json({error:String(err)})}});
module.exports = router

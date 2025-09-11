const express = require('express'); const router = express.Router(); const Job = require('../models/Job');
router.get('/', async (req,res)=>{ res.json(await Job.find().lean())});
router.post('/', async (req,res)=>{ try{ const j = new Job(req.body); await j.save(); res.status(201).json(j);}catch(err){res.status(500).json({error:String(err)})}});
router.post('/:id/apply', async (req,res)=>{ try{ const job = await Job.findById(req.params.id); job.applications.push({tradie:req.body.tradie,message:req.body.message}); await job.save(); res.json({ok:true});}catch(err){res.status(500).json({error:String(err)})}});
module.exports = router

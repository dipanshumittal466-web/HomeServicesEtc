const express = require('express'); const router = express.Router();
const Job = require('../models/Job');
const ProviderProfile = require('../models/ProviderProfile');
const Subscription = require('../models/Subscription');
const auth = require('../middleware/auth');
const User = require('../models/User');

router.post('/', auth, async (req,res)=>{
  // only posters can post jobs in this scaffold
  if(req.user.role !== 'poster') return res.status(403).json({msg:'Only posters can create jobs'});
  const {title, description, categoryId, subcategory, location, budget, desiredDate} = req.body;
  const job = new Job({posterId: req.user.id, title, description, categoryId, subcategory, location, budget, desiredDate});
  await job.save();
  res.json({ok:true, job});
});

router.get('/', async (req,res)=>{
  const jobs = await Job.find().sort({createdAt:-1}).limit(100);
  res.json(jobs);
});

// provider applies to job: enforce subscription quota
router.post('/:id/apply', auth, async (req,res)=>{
  if(req.user.role !== 'provider') return res.status(403).json({msg:'Only providers can apply'});
  const jobId = req.params.id;
  const sub = await Subscription.findOne({userId: req.user.id, status:'active'});
  if(!sub || sub.quota <= 0) return res.status(402).json({msg:'No quota. Please subscribe.'});
  // decrement quota and add application
  sub.quota = sub.quota - 1;
  await sub.save();
  const job = await Job.findById(jobId);
  if(!job) return res.status(404).json({msg:'Job not found'});
  job.applications = job.applications || [];
  job.applications.push({providerId: req.user.id, bidAmount: req.body.bidAmount || 0, message: req.body.message || ''});
  await job.save();
  res.json({ok:true, job, remainingQuota: sub.quota});
});

module.exports = router;

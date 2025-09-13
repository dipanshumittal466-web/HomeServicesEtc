const express = require('express'); const router = express.Router();
const Subscription = require('../models/Subscription');
const auth = require('../middleware/auth');

// Mock checkout: create subscription record and set quota based on plan
router.post('/checkout', auth, async (req,res)=>{
  const {plan} = req.body; // plan: basic10, basic20, pro35, unlimited
  const mapping = { basic10:10, basic20:20, pro35:35, unlimited:9999 };
  const quota = mapping[plan] || 10;
  // create or update subscription
  let sub = await Subscription.findOne({userId: req.user.id});
  if(!sub) sub = new Subscription({userId: req.user.id});
  sub.plan = plan;
  sub.quota = quota;
  sub.status = 'active';
  await sub.save();
  res.json({ok:true, sub});
});

router.get('/', auth, async (req,res)=>{
  const sub = await Subscription.findOne({userId: req.user.id});
  res.json(sub || {});
});

module.exports = router;

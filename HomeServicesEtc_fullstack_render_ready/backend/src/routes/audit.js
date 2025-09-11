const express = require('express'); const router = express.Router(); const Audit = require('../models/Audit');
router.get('/', async (req,res)=>{ res.json(await Audit.find().populate('user').sort({createdAt:-1}).limit(200).lean())});
module.exports = router

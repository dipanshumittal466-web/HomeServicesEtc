// CRM routes - placeholder
const express = require('express');
const router = express.Router();
router.get('/', (req,res)=>{ res.json({ crm: true }); });
module.exports = router;

const express = require('express'); const router = express.Router();
router.get('/verification-queue', (req,res)=> res.json({ok:true, queue:[]}));
module.exports = router;

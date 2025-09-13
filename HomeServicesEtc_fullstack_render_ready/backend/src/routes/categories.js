const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

router.get('/', async (req,res)=> {
  const cats = await Category.find().sort({order:1});
  res.json(cats);
});

module.exports = router;

// Categories API serving categories.json
const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

const dataPath = path.join(__dirname, '../../..', 'frontend', 'src', 'data', 'categories.json');

router.get('/', (req, res) => {
  try {
    const raw = fs.readFileSync(dataPath);
    const categories = JSON.parse(raw);
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Unable to load categories' });
  }
});

module.exports = router;

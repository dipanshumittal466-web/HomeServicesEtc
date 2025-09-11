const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Message saved successfully' });
  } catch (err) {
    console.error('Contact save error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;

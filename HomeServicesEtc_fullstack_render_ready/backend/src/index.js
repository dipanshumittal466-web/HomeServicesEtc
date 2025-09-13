const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Basic routes (mounts)
app.use('/api/categories', require('./routes/categories'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/providers', require('./routes/providers'));
app.use('/api/subscriptions', require('./routes/subscriptions'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/audit', require('./routes/audit'));
app.use('/api/disputes', require('./routes/disputes'));
app.use('/api/messages', require('./routes/messages'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));

const PORT = process.env.PORT || 5000;
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/homeservicesetc';

mongoose.connect(MONGO)
  .then(()=> {
    console.log('Mongo connected');
    app.listen(PORT, ()=> console.log('Server listening on', PORT));
  })
  .catch(err => {
    console.error('Mongo connection error', err);
  });

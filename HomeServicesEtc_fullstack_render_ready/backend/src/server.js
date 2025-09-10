const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { attachUser } = require('./middleware/auth');

app.use(cors());
app.use(express.json());
app.use(attachUser);

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/provider/documents', require('./routes/providerDocuments'));
app.use('/api/admin/documents', require('./routes/adminDocuments'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/crm', require('./routes/crm'));

// static for frontend (in render, frontend served separately)
app.get('/', (req,res)=> res.send('HomeServicesEtc Backend running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('Server running on', PORT));

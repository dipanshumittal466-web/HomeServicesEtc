const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { attachUser } = require('./middleware/auth');

// ✅ CORS config (Render ke liye important)
app.use(cors({
  origin: process.env.CORS_ORIGIN || "*",  // Render frontend URL yaha set hoga
  credentials: true,
}));

// Middleware
app.use(express.json());
app.use(attachUser);

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/provider/documents', require('./routes/providerDocuments'));
app.use('/api/admin/documents', require('./routes/adminDocuments'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/crm', require('./routes/crm'));

// Health check route
app.get('/', (req,res)=> res.send('HomeServicesEtc Backend running'));

// ✅ MongoDB Connect
const mongoUri = process.env.MONGO_URI;
if (mongoUri) {
  mongoose.connect(mongoUri)
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.error("❌ MongoDB connection error:", err));
} else {
  console.log("⚠️ No MONGO_URI provided, skipping MongoDB connection.");
}

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('🚀 Server running on', PORT));

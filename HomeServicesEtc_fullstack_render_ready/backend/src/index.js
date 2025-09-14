require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
app.use(cors())
app.use(bodyParser.json())

// ✅ Only use environment MONGO_URI, no fallback to localhost
const MONGO = process.env.MONGO_URI
if (!MONGO) {
  console.error("❌ No MONGO_URI found. Please set it in environment variables.");
  process.exit(1)
}

mongoose.connect(MONGO)
  .then(() => console.log('✅ Mongo connected'))
  .catch(e => {
    console.error('❌ Mongo error', e)
    process.exit(1)
  })

// Simple models
const CategorySchema = new mongoose.Schema({
  id: String, title: String, slug: String, description: String, image: String, services: Array
})
const Category = mongoose.model('Category', CategorySchema)

const BookingSchema = new mongoose.Schema({
  userId: String, serviceId: String, address: Object, scheduledAt: Date,
  status: String, price: Number, paymentStatus: String
})
const Booking = mongoose.model('Booking', BookingSchema)

// Root test route
app.get('/', (req, res) => {
  res.send('Backend API is running...')
})

// ✅ Debug route to check category count
app.get('/checkdb', async (req, res) => {
  try {
    const count = await Category.countDocuments()
    res.json({ status: "ok", categories: count })
  } catch (e) {
    res.status(500).json({ status: "error", message: e.message })
  }
})

// Routes
app.get('/api/collections', async (req,res) => {
  const cats = await Category.find().limit(100)
  res.json(cats)
})

app.post('/api/bookings', async (req,res) => {
  const b = new Booking(req.body)
  await b.save()
  res.json({ok:true, bookingId:b._id})
})

// static serve for frontend build if needed
app.use('/static-data', express.static(path.join(__dirname,'../../data')))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log('🚀 Backend running on port', PORT))

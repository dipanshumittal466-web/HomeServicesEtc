require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
app.use(cors())
app.use(bodyParser.json())

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/homeservicesetc'
mongoose.connect(MONGO).then(()=>console.log('Mongo connected')).catch(e=>console.error('Mongo error',e))

// Simple models
const CategorySchema = new mongoose.Schema({
  id: String, title: String, slug: String, description: String, image: String, services: Array
})
const Category = mongoose.model('Category', CategorySchema)

const BookingSchema = new mongoose.Schema({
  userId: String, serviceId: String, address: Object, scheduledAt: Date, status: String, price: Number, paymentStatus: String
})
const Booking = mongoose.model('Booking', BookingSchema)
// Root test route
app.get('/', (req, res) => {
  res.send('Backend API is running...');
});


// Routes
app.get('/api/collections', async (req,res)=>{
  const cats = await Category.find().limit(100)
  res.json(cats)
})

app.post('/api/bookings', async (req,res)=>{
  const b = new Booking(req.body)
  await b.save()
  res.json({ok:true, bookingId:b._id})
})

// static serve for frontend build if needed
app.use('/static-data', express.static(path.join(__dirname,'../../data')))

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>console.log('Backend running on',PORT))

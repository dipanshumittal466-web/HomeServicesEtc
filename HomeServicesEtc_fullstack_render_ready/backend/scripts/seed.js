/**
 * Seed categories into MongoDB
 * Usage: node scripts/seed.js
 */
const mongoose = require('mongoose')
const data = require('../../data/collections.json')
require('dotenv').config()
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/homeservicesetc'
const CategorySchema = new mongoose.Schema({ id:String,title:String,slug:String,description:String,image:String,services:Array })
const Category = mongoose.model('Category', CategorySchema)

mongoose.connect(MONGO).then(async ()=>{
  console.log('Connected')
  await Category.deleteMany({})
  await Category.insertMany(data)
  console.log('Seeded', data.length)
  process.exit(0)
}).catch(e=>{ console.error(e); process.exit(1) })

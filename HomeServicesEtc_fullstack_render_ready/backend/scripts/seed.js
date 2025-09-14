/**
 * Seed categories into MongoDB
 * Usage: node scripts/seed.js
 */
const mongoose = require('mongoose');
const data = require('../../data/collections.json');
require('dotenv').config();

const MONGO = process.env.MONGO_URI;
if (!MONGO) {
  console.error("❌ No MONGO_URI found. Please set it in environment variables.");
  process.exit(1);
}

const CategorySchema = new mongoose.Schema({
  id: String,
  title: String,
  slug: String,
  description: String,
  image: String,
  services: Array
});
const Category = mongoose.model('Category', CategorySchema);

mongoose.connect(MONGO)
  .then(async () => {
    console.log('✅ Connected to MongoDB');
    await Category.deleteMany({});
    await Category.insertMany(data);
    console.log(`✅ Seeded ${data.length} categories`);
    process.exit(0);
  })
  .catch(e => {
    console.error('❌ Error connecting to MongoDB:', e.message);
    process.exit(1);
  });

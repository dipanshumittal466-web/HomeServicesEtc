const path = require('path')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// ✅ Always resolve absolute path
const User = require(path.join(__dirname, '..', 'src', 'models', 'User'))

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/homeservicesetc'

async function run() {
  await mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  const email = 'admin@homeservicesetc.com'
  const pass = 'Admin@123'
  const exists = await User.findOne({ email })
  if (exists) {
    console.log('Admin already exists:', exists.email)
    return process.exit(0)
  }
  const hash = await bcrypt.hash(pass, 10)
  const u = new User({ name: 'Admin', email, passwordHash: hash, role: 'admin' })
  await u.save()
  console.log('✅ Admin created:', email, 'password=Admin@123')
  process.exit(0)
}
run()

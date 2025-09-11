const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const enquiries = require('./routes/enquiries')
const categories = require('./routes/categories')
const auth = require('./routes/auth')
const authPopulate = require('./middleware/authPopulate')
const users = require('./routes/users')
const subscriptions = require('./routes/subscriptions')
const jobs = require('./routes/jobs')
const docs = require('./routes/docs')
const audit = require('./routes/audit')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(authPopulate)
app.use('/uploads', express.static('uploads'))

app.use('/api/enquiries', enquiries)
app.use('/api/categories', categories)
app.use('/api/auth', auth)
app.use('/api/users', users)
app.use('/api/subscriptions', subscriptions)
app.use('/api/jobs', jobs)
app.use('/api/docs', docs)
const compliance = require('./routes/compliance')
app.use('/api/compliance', compliance)
const s3 = require('./routes/s3')
app.use('/api/s3', s3)
const registerS3 = require('./routes/registerS3')
app.use('/api/compliance/register-s3', registerS3)
app.use('/api/audit', audit)

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/homeservicesetc'
mongoose.connect(MONGO, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error', err))

const PORT = process.env.PORT || 5000
// Serve frontend static files in production
const DIST_PATH = path.join(__dirname, '..', '..', 'frontend', 'dist')
if (require('fs').existsSync(DIST_PATH)) {
  app.use(express.static(DIST_PATH))
  app.get('*', (req, res) => {
    res.sendFile(path.join(DIST_PATH, 'index.html'))
  })
}
app.listen(PORT, ()=> console.log('Server running on', PORT))

// start cron jobs
require('./cron/expiryNotifier')

const cron = require('node-cron')
const mongoose = require('mongoose')
const User = require('./src/models/User')
const { sendMail } = require('../src/utils/mailer')

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/homeservicesetc'

async function checkExpiry(){
  try{
    await mongoose.connect(MONGO, {useNewUrlParser:true, useUnifiedTopology:true})
    const now = new Date()
    const in30 = new Date(Date.now() + 30*24*3600*1000)
    const users = await User.find({'insuranceDoc.expiresAt': {$lte: in30, $gte: now}, 'insuranceDoc.verified': true}).lean()
    for(const u of users){
      const to = u.email
      await sendMail({from:process.env.NOTIFY_FROM || 'no-reply@homeservicesetc.com', to, subject:'Your insurance is expiring soon', text:`Dear ${u.name}, your insurance expires on ${u.insuranceDoc.expiresAt}. Please renew and upload a valid certificate.`})
    }
    mongoose.disconnect()
  }catch(e){ console.error('cron error', e) }
}

// schedule: every day at 08:00
cron.schedule('0 8 * * *', ()=>{ console.log('Running daily expiry check'); checkExpiry() })

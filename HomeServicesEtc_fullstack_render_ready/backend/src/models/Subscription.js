const mongoose = require('mongoose')
const SubscriptionSchema = new mongoose.Schema({tier:String,active:Boolean,startsAt:Date,expiresAt:Date,limits:Object,invoiceIds:[String],createdAt:{type:Date,default:Date.now}})
module.exports = mongoose.models.Subscription || mongoose.model('Subscription', SubscriptionSchema)

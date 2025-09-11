const mongoose = require('mongoose')
const AuditSchema = new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},action:String,meta:Object,createdAt:{type:Date,default:Date.now}})
module.exports = mongoose.models.Audit || mongoose.model('Audit', AuditSchema)

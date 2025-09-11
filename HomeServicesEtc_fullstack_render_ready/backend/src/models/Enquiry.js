const mongoose = require('mongoose')
const EnquirySchema = new mongoose.Schema({name:String,email:String,phone:String,message:String,createdAt:{type:Date,default:Date.now}})
module.exports = mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema)

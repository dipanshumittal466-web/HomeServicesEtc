const mongoose = require('mongoose')
const ApplicationSchema = new mongoose.Schema({tradie:{type:mongoose.Schema.Types.ObjectId,ref:'User'},message:String,status:{type:String,default:'applied'},createdAt:{type:Date,default:Date.now}})
const JobSchema = new mongoose.Schema({title:String,description:String,category:String,postedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},applications:[ApplicationSchema],status:{type:String,default:'open'},createdAt:{type:Date,default:Date.now}})
module.exports = mongoose.models.Job || mongoose.model('Job', JobSchema)

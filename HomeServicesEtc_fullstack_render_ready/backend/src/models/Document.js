const mongoose = require('mongoose')
const DocumentSchema = new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},type:String,filename:String,path:String,verified:{type:Boolean,default:false},notes:String,uploadedAt:{type:Date,default:Date.now},expiresAt:Date})
module.exports = mongoose.models.Document || mongoose.model('Document', DocumentSchema)

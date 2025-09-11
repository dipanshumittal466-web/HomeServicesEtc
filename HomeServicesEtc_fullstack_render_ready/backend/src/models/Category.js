const mongoose = require('mongoose')
const SubSchema = new mongoose.Schema({name:String})
const CategorySchema = new mongoose.Schema({name:{type:String,required:true,unique:true}, subs:[SubSchema], createdAt:{type:Date,default:Date.now}})
module.exports = mongoose.models.Category || mongoose.model('Category', CategorySchema)

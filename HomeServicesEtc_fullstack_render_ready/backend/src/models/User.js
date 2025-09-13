const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name:String, email:{type:String,index:true,unique:true}, passwordHash:String, role:{type:String,enum:['poster','provider','admin'],default:'poster'}, createdAt:{type:Date,default:Date.now}
});
module.exports = require('mongoose').model('User', UserSchema);

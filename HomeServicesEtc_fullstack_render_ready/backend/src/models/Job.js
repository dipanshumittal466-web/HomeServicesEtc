const mongoose = require('mongoose');
const JobSchema = new mongoose.Schema({
  posterId:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
  title:String, description:String, categoryId:{type: mongoose.Schema.Types.ObjectId, ref:'Category'}, subcategory:String,
  location:Object, budget:Number, desiredDate:Date, applications:Array, status:{type:String,default:'Open'}
});
module.exports = require('mongoose').model('Job', JobSchema);

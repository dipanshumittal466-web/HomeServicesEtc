const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
  name: {type:String, required:true},
  slug: {type:String, required:true, unique:true},
  iconPath: String,
  parent: {type: mongoose.Schema.Types.ObjectId, ref:'Category', default:null},
  order: Number
});
module.exports = mongoose.model('Category', CategorySchema);

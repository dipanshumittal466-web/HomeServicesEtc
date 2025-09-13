const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  from: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  to: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  subject: String,
  body: String,
  createdAt: {type:Date, default: Date.now},
  read: {type:Boolean, default:false}
});
module.exports = mongoose.model('Message', Schema);

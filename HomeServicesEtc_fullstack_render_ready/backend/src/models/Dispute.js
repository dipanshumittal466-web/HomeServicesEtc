const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  jobId: {type: mongoose.Schema.Types.ObjectId, ref:'Job'},
  raisedBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  reason: String,
  details: String,
  status: {type:String, default:'Open'},
  createdAt: {type:Date, default: Date.now}
});
module.exports = mongoose.model('Dispute', Schema);

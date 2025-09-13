const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  actorUserId: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  actionType: String,
  resourceId: String,
  notes: String,
  timestamp: {type:Date, default:Date.now}
});
module.exports = mongoose.model('AuditLog', Schema);

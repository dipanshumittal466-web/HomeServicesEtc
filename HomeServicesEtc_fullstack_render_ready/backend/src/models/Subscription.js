const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  plan: String,
  quota: Number,
  status: {type:String, default:'active'},
  stripeSubscriptionId: String,
  createdAt: {type:Date, default: Date.now}
});
module.exports = mongoose.model('Subscription', Schema);

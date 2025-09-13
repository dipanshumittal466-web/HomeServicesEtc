const mongoose = require('mongoose');
const ProviderSchema = new mongoose.Schema({
  userId:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
  businessName:String,
  services:[{type: mongoose.Schema.Types.ObjectId, ref:'Category'}],
  verificationStatus:{type:String, enum:['Pending','Approved','Rejected'], default:'Pending'},
  documents:[{type:String, url:String, uploadedAt:Date, expiresAt:Date, adminNote:String}],
  indemnityAccepted:{type:Boolean, default:false},
  subscriptionPlan:String
});
module.exports = require('mongoose').model('ProviderProfile', ProviderSchema);

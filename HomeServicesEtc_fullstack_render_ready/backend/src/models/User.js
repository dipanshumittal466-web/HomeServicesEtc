const mongoose = require('mongoose')
const DocSchema = new mongoose.Schema({
  filename: String,
  path: String,
  verified: {type:Boolean, default:false},
  uploadedAt: Date,
  expiresAt: Date,
  adminNotes: String,
  verifiedBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  verifiedAt: Date
})
const UserSchema = new mongoose.Schema({
  name: String,
  email: {type:String, required:true, unique:true},
  passwordHash: String,
  role: {type:String, enum:['admin','tradie','job_poster'], default:'job_poster'},
  verified: {type:Boolean, default:false},
  indemnityAccepted: {type:Boolean, default:false},
  documents: [{type:mongoose.Schema.Types.ObjectId, ref:'Document'}],
  subscription: {type:mongoose.Schema.Types.ObjectId, ref:'Subscription'},
  insuranceDoc: DocSchema,
  idDoc: DocSchema,
  complianceAcknowledged: {type:Boolean, default:false},
  createdAt: {type:Date, default:Date.now}
})
module.exports = mongoose.models.User || mongoose.model('User', UserSchema)

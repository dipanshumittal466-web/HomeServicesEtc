import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['poster','tradie','admin'], default: 'poster' },
  documents: {
    photoID: String,
    insurance: String
  },
  indemnityAccepted: { type: Boolean, default: false },
  subscriptionExpires: Date,
  verified: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('User', userSchema);

import mongoose from 'mongoose';

const disputeSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  raisedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reason: String,
  status: { type: String, enum: ['open','resolved'], default: 'open' }
}, { timestamps: true });

export default mongoose.model('Dispute', disputeSchema);

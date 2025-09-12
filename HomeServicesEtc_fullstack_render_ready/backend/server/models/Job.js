import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  subcategory: String,
  location: String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  applications: [
    {
      tradie: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      quote: Number,
      status: String
    }
  ]
}, { timestamps: true });

export default mongoose.model('Job', jobSchema);

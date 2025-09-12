import Job from '../models/Job.js';

export const getMetrics = async (req, res) => {
  const totalJobs = await Job.countDocuments();
  const byCategory = await Job.aggregate([
    { $group: { _id: '$category', count: { $sum: 1 } } }
  ]);
  res.json({ totalJobs, byCategory });
};

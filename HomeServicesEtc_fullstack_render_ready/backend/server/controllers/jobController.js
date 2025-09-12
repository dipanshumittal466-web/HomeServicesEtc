import Job from '../models/Job.js';

export const postJob = async (req, res) => {
  const job = await Job.create({ ...req.body, postedBy: req.user._id });
  res.status(201).json({ message: 'Job posted', id: job._id });
};

export const getJobs = async (req, res) => {
  const { category, subcategory } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (subcategory) filter.subcategory = subcategory;
  const jobs = await Job.find(filter);
  res.json(jobs);
};

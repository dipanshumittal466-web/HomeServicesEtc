import User from '../models/User.js';
import Dispute from '../models/Dispute.js';

export const listUnverified = async (req, res) => {
  const users = await User.find({ role: 'tradie', verified: false });
  res.json(users);
};

export const verifyUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  user.verified = true;
  await user.save();
  res.json({ message: 'User verified' });
};

export const listDisputes = async (req, res) => {
  const disputes = await Dispute.find().populate('job');
  res.json(disputes);
};

export const resolveDispute = async (req, res) => {
  const dispute = await Dispute.findById(req.params.id);
  dispute.status = 'resolved';
  await dispute.save();
  res.json({ message: 'Dispute resolved' });
};

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed, role });
  res.status(201).json({ message: 'User registered', id: user._id });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token, user: { name: user.name, role: user.role } });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

export const uploadDocs = async (req, res) => {
  const user = req.user;
  if (req.files.photoID) user.documents.photoID = req.files.photoID[0].path;
  if (req.files.insurance) user.documents.insurance = req.files.insurance[0].path;
  await user.save();
  res.json({ message: 'Documents uploaded' });
};

export const acceptIndemnity = async (req, res) => {
  req.user.indemnityAccepted = true;
  await req.user.save();
  res.json({ message: 'Indemnity accepted' });
};

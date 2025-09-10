const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../lib/db');

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';
const JWT_EXP = '7d';

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing fields' });
  const exists = await db.query('SELECT id FROM users WHERE email=$1', [email]).catch(()=>({ rows: [] }));
  if (exists.rows && exists.rows.length) return res.status(400).json({ error: 'Email already registered' });
  const hash = await bcrypt.hash(password, 10);
  const q = 'INSERT INTO users (email, password_hash, role, created_at) VALUES ($1,$2,$3,now()) RETURNING id, email, role';
  const r = await db.query(q, [email, hash, 'provider']).catch(err=>{ console.error(err); return null; });
  if (!r) return res.status(500).json({ error: 'DB error' });
  const user = r.rows[0];
  const token = jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXP });
  res.json({ token, user });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing fields' });
  const r = await db.query('SELECT id, email, password_hash, role FROM users WHERE email=$1 LIMIT 1', [email]).catch(()=>({ rows: [] }));
  if (!r.rows || !r.rows[0]) return res.status(400).json({ error: 'Invalid credentials' });
  const user = r.rows[0];
  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) return res.status(400).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXP });
  res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
});

module.exports = router;

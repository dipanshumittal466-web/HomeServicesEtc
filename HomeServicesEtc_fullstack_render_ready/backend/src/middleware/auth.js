const jwt = require('jsonwebtoken');
const db = require('../lib/db');

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

async function attachUser(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return next();
  const parts = auth.split(' ');
  if (parts.length !== 2) return next();
  const token = parts[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    // fetch user from DB
    const q = 'SELECT id, email, role, verification_status FROM users WHERE id=$1 LIMIT 1';
    const r = await db.query(q, [payload.sub]).catch(()=>({ rows: [] }));
    if (r.rows && r.rows[0]) req.user = r.rows[0];
    else req.user = null;
  } catch (err) {
    req.user = null;
  }
  next();
}

function ensureAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ error: 'Unauthorized' });
}

module.exports = { attachUser, ensureAuth };

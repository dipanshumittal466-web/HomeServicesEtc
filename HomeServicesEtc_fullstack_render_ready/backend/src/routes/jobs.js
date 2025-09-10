const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const { ensureAuth } = require('../middleware/auth');

// List jobs
router.get('/', async (req, res) => {
  const r = await db.query('SELECT id, title, description, budget, category, created_at FROM jobs ORDER BY created_at DESC LIMIT 200').catch(()=>({ rows: [] }));
  res.json(r.rows || []);
});

// Create job (requires auth)
router.post('/', ensureAuth, async (req, res) => {
  const { title, description, budget, category } = req.body;
  if (!title || !description) return res.status(400).json({ error: 'Missing fields' });
  const q = 'INSERT INTO jobs (provider_id, title, description, budget, category, created_at) VALUES ($1,$2,$3,$4,$5,now()) RETURNING id';
  const r = await db.query(q, [req.user.id, title, description, budget || null, category || null]).catch(err=>{ console.error(err); return null; });
  if (!r) return res.status(500).json({ error: 'DB error' });
  res.json({ id: r.rows[0].id });
});

module.exports = router;

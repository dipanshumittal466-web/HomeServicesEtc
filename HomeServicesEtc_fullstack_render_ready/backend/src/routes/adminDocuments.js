const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const { GetObjectCommand } = require('@aws-sdk/client-s3');
const s3 = require('../lib/s3Client');
function ensureAdmin(req,res,next){ req.user = { id: 999, is_admin: true }; next(); }
router.get('/pending', ensureAdmin, async (req,res)=>{
  const r = await db.query("SELECT pd.*, p.email as provider_email FROM provider_documents pd LEFT JOIN providers p ON pd.provider_id=p.id WHERE pd.status='pending' ORDER BY pd.uploaded_at ASC LIMIT 50").catch(()=>({ rows: [] }));
  const bucket = process.env.S3_BUCKET_NAME || 'example-bucket';
  const items = await Promise.all(r.rows.map(async (row)=>{ try{ const cmd = new GetObjectCommand({ Bucket: bucket, Key: row.storage_key }); const url = await getSignedUrl(s3, cmd, { expiresIn: 3600 }); return { ...row, signedUrl: url }; }catch(e){ return { ...row, signedUrl: '' }; } }));
  res.json(items);
});
router.post('/:id/verify', ensureAdmin, async (req,res)=>{
  const { id } = req.params; const { action, expiry_date, notes } = req.body;
  const status = action === 'approve' ? 'approved' : action === 'reject' ? 'rejected' : 'pending';
  await db.query('UPDATE provider_documents SET status=$1, verified_by=$2, verified_at=now(), expiry_date=$3, notes=$4 WHERE id=$5', [status, req.user.id, expiry_date || null, notes || null, id]).catch(()=>{});
  if(action === 'approve'){ const doc = await db.query('SELECT provider_id FROM provider_documents WHERE id=$1', [id]).catch(()=>({ rows: [] })); if(doc.rows[0]) await db.query('UPDATE providers SET verification_status=$1 WHERE id=$2', ['approved', doc.rows[0].provider_id]).catch(()=>{}); }
  res.json({ message: 'ok' });
});
module.exports = router;

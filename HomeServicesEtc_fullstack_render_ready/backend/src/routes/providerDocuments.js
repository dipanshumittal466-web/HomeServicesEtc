const express = require('express');
const multer = require('multer');
const { uploadBufferToS3 } = require('../lib/uploadToS3');
const db = require('../lib/db');
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 12*1024*1024 } });
const router = express.Router();
function ensureAuth(req,res,next){ req.user = { id: 1, email: 'demo@provider.test' }; next(); }
router.post('/', ensureAuth, upload.fields([{ name: 'currency_certificate', maxCount:1 },{ name:'photo_id', maxCount:1 }]), async (req,res)=>{
  try{
    if(!req.files) return res.status(400).send('No files');
    const bucket = process.env.S3_BUCKET_NAME || 'example-bucket';
    for(const field of ['currency_certificate','photo_id']){
      const f = req.files[field] && req.files[field][0];
      if(!f) continue;
      const key = await uploadBufferToS3(f.buffer, bucket, 'provider-docs', f.originalname);
      await db.query('INSERT INTO provider_documents(provider_id,doc_type,storage_key,mime_type,original_name,uploaded_by,status,uploaded_at) VALUES($1,$2,$3,$4,$5,$6,$7,now())', [req.user.id, field, key, f.mimetype, f.originalname, req.user.id, 'pending']);
    }
    await db.query("UPDATE providers SET verification_status=$1, last_document_upload_at=now() WHERE id=$2", ['pending', req.user.id]).catch(()=>{});
    res.json({ message: 'Uploaded' });
  }catch(err){ console.error(err); res.status(500).send('Error'); }
});
module.exports = router;

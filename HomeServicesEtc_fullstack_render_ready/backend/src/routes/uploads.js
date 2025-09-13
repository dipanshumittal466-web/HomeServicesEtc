const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
require('dotenv').config();
const auth = require('../middleware/auth');

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_KEY || '',
  secretAccessKey: process.env.S3_SECRET || '',
  region: process.env.S3_REGION || 'us-east-1',
  signatureVersion: 'v4'
});

// Generate a presigned PUT URL for client to upload directly
router.post('/signed-url', auth, async (req, res) => {
  const { filename, contentType } = req.body;
  if(!filename) return res.status(400).json({msg:'filename required'});
  const key = `uploads/${Date.now()}_${filename}`;
  const params = {
    Bucket: process.env.S3_BUCKET || '',
    Key: key,
    Expires: 60 * 5,
    ContentType: contentType || 'application/octet-stream',
    ACL: 'private'
  };
  try{
    const url = await s3.getSignedUrlPromise('putObject', params);
    const publicUrl = `https://${params.Bucket}.s3.amazonaws.com/${key}`;
    res.json({url, key, publicUrl});
  }catch(err){
    console.error('S3 signed url error', err);
    res.status(500).json({msg:'s3 error', error: String(err)});
  }
});

module.exports = router;

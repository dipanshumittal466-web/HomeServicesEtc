const express = require('express')
const router = express.Router()
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')
const crypto = require('crypto')

const REGION = process.env.AWS_REGION
const BUCKET = process.env.AWS_S3_BUCKET

router.post('/presign', async (req,res)=>{
  try{
    if(!REGION || !BUCKET) return res.status(500).json({error:'S3 not configured'})
    const {filename, contentType} = req.body
    const key = `compliance/${Date.now()}-${crypto.randomBytes(6).toString('hex')}-${filename}`
    const client = new S3Client({region: REGION, credentials: {accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY}})
    const cmd = new PutObjectCommand({Bucket:BUCKET, Key:key, ContentType: contentType})
    const url = await getSignedUrl(client, cmd, {expiresIn: 900})
    res.json({url, key})
  }catch(err){ res.status(500).json({error:String(err)})}
})

module.exports = router

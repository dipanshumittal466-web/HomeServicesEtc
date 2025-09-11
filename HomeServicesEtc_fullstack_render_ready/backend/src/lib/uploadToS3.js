const { PutObjectCommand } = require('@aws-sdk/client-s3');
const { v4: uuidv4 } = require('uuid');
const s3 = require('./s3Client');
async function uploadBufferToS3(buffer, bucket, folder='provider-docs', originalName='file') {
  const key = `${folder}/${Date.now()}_${uuidv4()}_${originalName.replace(/\s+/g,'_')}`;
  const cmd = new PutObjectCommand({ Bucket: bucket, Key: key, Body: buffer, ContentType: 'application/octet-stream', ACL:'private', ServerSideEncryption:'AES256' });
  await s3.send(cmd);
  return key;
}
module.exports = { uploadBufferToS3 };

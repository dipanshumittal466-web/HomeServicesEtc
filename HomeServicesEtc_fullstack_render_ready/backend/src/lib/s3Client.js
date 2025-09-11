let s3 = null;
try {
  const { S3Client } = require('@aws-sdk/client-s3');
  if (process.env.AWS_REGION) {
    s3 = new S3Client({
      region: process.env.AWS_REGION,
      // credentials will be picked up from environment variables if present
    });
  } else {
    console.warn('⚠️ AWS_REGION not set. S3 will not be available.');
  }
} catch (err) {
  console.warn('⚠️ Failed to create S3 client:', err && err.message);
}
module.exports = s3;

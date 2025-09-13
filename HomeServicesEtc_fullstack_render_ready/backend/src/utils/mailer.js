const nodemailer = require('nodemailer');
require('dotenv').config();
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.example.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  }
});

async function sendMail(to, subject, html){
  try{
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'no-reply@homeservicesetc.com',
      to, subject, html
    });
    console.log('Email sent', info.messageId);
    return info;
  }catch(err){
    console.error('Failed to send email', err);
    throw err;
  }
}

module.exports = { sendMail };

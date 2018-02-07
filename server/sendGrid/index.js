const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'afriedman1991@gmail.com',
  from: 'afriedman13@yahoo.com',
  subject: 'Sending with SendGrid yooo',
  text: 'and easy to do anywhere, even with Node.js!',
  html: '<strong>and easy to do anywhere, even with Node.js'
};

sgMail.send(msg);
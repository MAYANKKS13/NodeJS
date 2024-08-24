var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  host:"smtp.gmail.com",
  auth: {
    user: 'mayankksinha1@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'mayankksinha1@gmail.com',
  to: 'sudarshansingh9@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
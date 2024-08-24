const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 587,
    secure: true,
    auth: {
      user: "mayankksinha1@gmail.com", 
      pass: "MKSgoogle@1333", 
    },
    
  });

  var mailOptions = {
    from: 'mayankksinha1@gmail.com',
    to: 'sudarshansingh9@gmail.com',
    subject: 'Testing, testing, 123',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info) {
    if(error){
        console.log(error);
    }
    else{
        console.log(info.response);
    }
  });



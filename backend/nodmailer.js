require("dotenv").config()
const nodemailer = require('nodemailer')
const os = require('os');

var transport = nodemailer.createTransport({    
    host: "smtp-mail.outlook.com",  
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD 
    }
});

module.exports = transport
// var transport = nodemailer.createTransport({    
//     host: "smtpout.secureserver.net",  
//     secure: true,
//     secureConnection: false, 
    
//     port: 465,
    
//     auth: {
//         user: process.env.EMAIL_ADDRESS,
//         pass: process.env.EMAIL_PASSWORD 
//     }
// });
// module.exports = transport
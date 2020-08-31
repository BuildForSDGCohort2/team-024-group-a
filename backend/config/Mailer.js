var nodemailer = require("nodemailer");
var logger = require("./Logger");
var { promisify } = require("util");

class Mailer {

    constructor(){
        this.transport;
    }

    setTransport(){
        this.transport = nodemailer.createTransport({
            service: "smtp.mailtrap.io",
            port: 2525, 
            auth: {
                user: "youremail@gmail.com",
                pass: "yourpassword"
            }
        });
    }

    async composeMail(mailOptions = {from, to, subject, text}){
        var email = await promisify(this.transport.sendMail);
        process.nextTick(()=> { this.logMail()});
        return email(mailOptions);
    }

    logMail(){
        logger.log();
    }

}

module.exports = new Mailer();
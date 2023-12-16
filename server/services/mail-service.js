const nodemailer = require('nodemailer');

class MailService {

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        type: 'login',
        user: 'hnatkivpublic@gmail.com',
        pass: 'ntarlcgqizkborfm',
        // user: process.env.SMTP_USER,
        // pass: process.env.SMTP_PASSWORD,
      },
    })
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({ 
      from: process.env.SMTP_USER,
      to,
      subject: 'ACCOUNT ACTIVATE ' + process.env.API_URL,
      text: '',
      html: `
        <div>
          <h1>For activate your account go to the link</h1>
          <a href='${link}'>${link}</a>
        </div>
      `
    })
  }
}

module.exports = new MailService() 
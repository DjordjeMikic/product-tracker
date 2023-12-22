import nodemailer from 'nodemailer';

class Mail {
  private nodemailer;
  private transport;

  constructor() {
    this.nodemailer = nodemailer;
    this.transport = {
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASSWORD,
      },
    };
  }

  async sendMail(productKey) {
    const transporter = this.nodemailer.createTransport(this.transport);

    try {
      const info = await transporter.sendMail({
        from: 'Product Tracker',
        to: process.env.RECEIVER_MAIL,
        subject: 'No more Product',
        html: `
          <div>
            <h2>No more Product with key ${productKey}</h2>
          </div>
        `,
      });

      if (info) return true;
    } catch (e) {
      return false;
    }
  }

  async sendMailToUser(verifyToken, receiver) {
    const transporter = this.nodemailer.createTransport(this.transport);
    const anchor = `${process.env.HOST}/verify/${verifyToken}`;

    try {
      const info = await transporter.sendMail({
        from: 'Product Tracker',
        to: receiver,
        subject: 'Verify your account',
        html: `
          <div>
            <h2>Verify your account on <a href=${anchor}>Link</a></h2>
          </div>
        `,
      });

      if (info) return true;
    } catch (e) {
      return false;
    }
  }
}

export default Mail;

import Mail from './mail';

export const emptyStockMail = (key) => {
  try {
    const mail = new Mail();
    const mailSent = mail.sendMail(key);

    if (mailSent) console.log('Mail sent');
  } catch (e) {
    console.error(e);
  }
};

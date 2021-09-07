const nodemailer = require("nodemailer");

var transporterSMTP = {
  service: "gmail",
  auth: {
    user: "clubvallerealredes@gmail.com",
    pass: "gdl007129300?",
  },
};

async function sendEmail({ from, bcc, subject, html, attachments }) {
  const transporter = nodemailer.createTransport(transporterSMTP);
  return await transporter.sendMail({ from, bcc, subject, html, attachments });
}

module.exports = sendEmail;

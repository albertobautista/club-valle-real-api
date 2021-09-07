const { prepareMailsToSend, sendEmails, changeEmailStatus } =
  require("./auxiliaries")();

const sendEmail = async () => {
  return prepareMailsToSend()
    .then(sendEmails)
    .then(changeEmailStatus)
    .catch((err) => console.log("ERROR,", err));
};

module.exports = sendEmail;

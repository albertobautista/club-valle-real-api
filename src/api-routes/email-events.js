
const express = require('express');
const emailEvent = require('../application/emailEvents');

const router = express.Router();

router.get('/sendEmails', (req, res) => {
    emailEvent.sendEmail()
    .then(result=> res.send(result))
    .catch(err => res.send(err));
  });
  
module.exports = router;

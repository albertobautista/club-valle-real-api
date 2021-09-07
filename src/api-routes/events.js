
const express = require('express');
const event = require('../application/events');

const router = express.Router();

router.post('/uploadEvent', (req, res) => {
    event.uploadEvent(req)
    .then(result=> res.send(result))
    .catch(err => res.send(err));
  });
  router.get('/getEvents', (req, res) => {
    event.getEvents()
    .then(result=> res.send(result))
    .catch(err => res.send(err));
  });
  
module.exports = router;

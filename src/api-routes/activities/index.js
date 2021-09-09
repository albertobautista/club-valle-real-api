
const express = require('express');
const activities = require('../../application/activities');

const router = express.Router();

  router.get('/getAllActivities', (req, res) => {
    activities.getActivities()
    .then(result=> res.send(result))
    .catch(err => res.send(err));
  });
  
module.exports = router;

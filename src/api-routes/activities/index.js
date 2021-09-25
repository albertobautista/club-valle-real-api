
const express = require('express');
const activities = require('../../application/activities');

const router = express.Router();

  router.get('/getAllActivities', (req, res) => {
    activities.getActivities()
    .then(result=> res.send(result))
    .catch(err => res.send(err));
  });

  router.get('/getSportsActivities', (req, res) => {
    activities.getSActivities()
    .then(result=> res.send(result))
    .catch(err => res.send(err));
  });

  router.get('/getCulturalActivities', (req, res) => {
    activities.getCActivities()
    .then(result=> res.send(result))
    .catch(err => res.send(err));
  });
  
module.exports = router;

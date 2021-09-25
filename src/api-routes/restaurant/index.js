
const express = require('express');
const restaurant = require('../../application/restaurant');

const router = express.Router();

  router.get('/getSoupDishes', (req, res) => {
    restaurant.getSoupDishes()
    .then(result=> res.send(result))
    .catch(err => res.send(err));
  });

  router.get('/getEnsaladDishes', (req, res) => {
    restaurant.getEnsaladDishes()
    .then(result=> res.send(result))
    .catch(err => res.send(err));
  });

  router.get('/getMainDishes', (req, res) => {
    restaurant.getMainDishes()
    .then(result=> res.send(result))
    .catch(err => res.send(err));
  });

  router.get('/getDessertDishes', (req, res) => {
    restaurant.getDessertDishes()
    .then(result=> res.send(result))
    .catch(err => res.send(err));
  });
  
module.exports = router;

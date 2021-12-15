var express = require('express');
var router = express.Router();

const Order = require('../models').Order;
const Customer = require('../models').Customer;

router.get('/', function(req, res, next) {
  Order.findAll({
    include: [{ model: Customer }],
    attributes: { exclude: ["updatedAt"] }
  })
    .then(orders => {
      res.render('orders', { title: 'Orders', orders });
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;


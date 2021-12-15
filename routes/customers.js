var express = require('express');
var router = express.Router();

const Customer = require('../db/models').Customer;

router.get('/', function(req, res, next) {
  Customer.findAll({
    attributes: { exclude: ["updatedAt"] }
  })
    .then(customers => {
      res.render('customers', { title: 'Customers', customers });
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;


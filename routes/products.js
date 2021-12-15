var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Product = require('../models').Product;

router.get('/', function(req, res, next) {
  Product.findAll({
    attributes: { exclude: ["updatedAt"] }
  })
    .then(products => {
      res.render('products', { title: 'Products', products });
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;


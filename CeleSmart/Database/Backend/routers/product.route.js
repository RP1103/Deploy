const express = require('express');
const app = express();
const productRoute = express.Router();
let ProductModel = require('../model/Product');


productRoute.route('/').get((req, res) => {
  ProductModel.find((error, product) => {
    if (error) {
      return next(error)
    } else {
      res.json(product)
      console.log('Products retrieved!')
    }
  })
})


productRoute.route('/create-product').post((req, res, next) => {
  ProductModel.create(req.body, (err, product) => {
    if (err) {
      return next(err)
    } else {
      res.json(product)
      console.log('Product Added!')
    }
  })
});


productRoute.route('/fetch-product/:id').get((req, res) => {
  ProductModel.findById(req.params.id, (err, product) => {
    if (err) {
      return next(err)
    } else {
      res.json(product)
      console.log('Product retrieved!')
    }
  })
})


productRoute.route('/update-product/:id').put((req, res, next) => {
  ProductModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, product) => {
    if (err) {
      return next(err);
    } else {
      res.json(product)
      console.log('Product updated!')
    }
  })
})

productRoute.route('/delete-product/:id').delete((req, res, next) => {
  ProductModel.findByIdAndRemove(req.params.id, (error, product) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: product
      })
      console.log('Product deleted!')
    }
  })
})

module.exports = productRoute;
const express = require('express');
const app = express();
const checkoutRoute = express.Router();
let CheckoutModel = require('../model/Checkout');


checkoutRoute.route('/').get((req, res) => {
  CheckoutModel.find((error, l) => {
    if (error) {
      return next(error)
    } else {
      res.json(l)
      console.log('product retrieved!')
    }
  })
})


checkoutRoute.route('/create-checkout').post((req, res, next) => {
  CheckoutModel.create(req.body, (err, l) => {
    if (err) {
      return next(err)
    } else {
      res.json(l)
      console.log('product Added!')
    }
  })
});


checkoutRoute.route('/fetch-checkout/:id').get((req, res) => {
  CheckoutModel.findById(req.params.id, (err, l) => {
    if (err) {
      return next(err)
    } else {
      res.json(l)
      console.log('product retrieved!')
    }
  })
})


checkoutRoute.route('/update-checkout/:id').put((req, res, next) => {
  CheckoutModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, l) => {
    if (err) {
      return next(err);
    } else {
      res.json(l)
      console.log('product updated!')
    }
  })
})

checkoutRoute.route('/delete-checkout/:id').delete((req, res, next) => {
  CheckoutModel.findByIdAndRemove(req.params.id, (error, l) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: l
      })
      console.log('product deleted!')
    }
  })
})

module.exports = checkoutRoute;

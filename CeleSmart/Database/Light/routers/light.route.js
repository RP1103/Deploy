const express = require('express');
const app = express();
const lightRoute = express.Router();
let LightModel = require('../model/Light');


lightRoute.route('/').get((req, res) => {
  LightModel.find((error, light) => {
    if (error) {
      return next(error)
    } else {
      res.json(light)
      console.log('Products retrieved!')
    }
  })
})


lightRoute.route('/create-light').post((req, res, next) => {
  LightModel.create(req.body, (err, light) => {
    if (err) {
      return next(err)
    } else {
      res.json(light)
      console.log('Product Added!')
    }
  })
});


lightRoute.route('/fetch-light/:id').get((req, res) => {
  LightModel.findById(req.params.id, (err, light) => {
    if (err) {
      return next(err)
    } else {
      res.json(light)
      console.log('Product retrieved!')
    }
  })
})


lightRoute.route('/update-light/:id').put((req, res, next) => {
  LightModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, light) => {
    if (err) {
      return next(err);
    } else {
      res.json(light)
      console.log('Product updated!')
    }
  })
})

lightRoute.route('/delete-light/:id').delete((req, res, next) => {
  LightModel.findByIdAndRemove(req.params.id, (error, light) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: light
      })
      console.log('Product deleted!')
    }
  })
})

module.exports = lightRoute;

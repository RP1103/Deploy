const express = require('express');
const app = express();
const light2Route = express.Router();
let Light2Model = require('../model/Light2');


light2Route.route('/').get((req, res) => {
  Light2Model.find((error, light2) => {
    if (error) {
      return next(error)
    } else {
      res.json(light2)
      console.log('Products retrieved!')
    }
  })
})


light2Route.route('/create-light2').post((req, res, next) => {
  Light2Model.create(req.body, (err, light2) => {
    if (err) {
      return next(err)
    } else {
      res.json(light2)
      console.log('Product Added!')
    }
  })
});


light2Route.route('/fetch-light2/:id').get((req, res) => {
  Light2Model.findById(req.params.id, (err, light2) => {
    if (err) {
      return next(err)
    } else {
      res.json(light2)
      console.log('Product retrieved!')
    }
  })
})


light2Route.route('/update-light2/:id').put((req, res, next) => {
  Light2Model.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, light2) => {
    if (err) {
      return next(err);
    } else {
      res.json(light2)
      console.log('Product updated!')
    }
  })
})

light2Route.route('/delete-light2/:id').delete((req, res, next) => {
  Light2Model.findByIdAndRemove(req.params.id, (error, light2) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: light2
      })
      console.log('Product deleted!')
    }
  })
})

module.exports = light2Route;

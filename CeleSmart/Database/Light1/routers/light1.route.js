const express = require('express');
const app = express();
const light1Route = express.Router();
let Light1Model = require('../model/Light1');


light1Route.route('/').get((req, res) => {
  Light1Model.find((error, light1) => {
    if (error) {
      return next(error)
    } else {
      res.json(light1)
      console.log('Products retrieved!')
    }
  })
})


light1Route.route('/create-light1').post((req, res, next) => {
  Light1Model.create(req.body, (err, light1) => {
    if (err) {
      return next(err)
    } else {
      res.json(light1)
      console.log('Product Added!')
    }
  })
});


light1Route.route('/fetch-light1/:id').get((req, res) => {
  Light1Model.findById(req.params.id, (err, light1) => {
    if (err) {
      return next(err)
    } else {
      res.json(light1)
      console.log('Product retrieved!')
    }
  })
})


light1Route.route('/update-light1/:id').put((req, res, next) => {
  Light1Model.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, light1) => {
    if (err) {
      return next(err);
    } else {
      res.json(light1)
      console.log('Product updated!')
    }
  })
})

light1Route.route('/delete-light1/:id').delete((req, res, next) => {
  Light1Model.findByIdAndRemove(req.params.id, (error, light1) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: light1
      })
      console.log('Product deleted!')
    }
  })
})

module.exports = light1Route;

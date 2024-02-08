const express = require('express');
const app = express();
const otherRoute = express.Router();
let OtherModel = require('../model/Other');


otherRoute.route('/').get((req, res) => {
  OtherModel.find((error, other) => {
    if (error) {
      return next(error)
    } else {
      res.json(other)
      console.log('Other retrieved!')
    }
  })
})


otherRoute.route('/create-other').post((req, res, next) => {
  OtherModel.create(req.body, (err, other) => {
    if (err) {
      return next(err)
    } else {
      res.json(other)
      console.log('Other Added!')
    }
  })
});


otherRoute.route('/fetch-other/:id').get((req, res) => {
  OtherModel.findById(req.params.id, (err, other) => {
    if (err) {
      return next(err)
    } else {
      res.json(other)
      console.log('Other retrieved!')
    }
  })
})


otherRoute.route('/update-other/:id').put((req, res, next) => {
  OtherModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, other) => {
    if (err) {
      return next(err);
    } else {
      res.json(other)
      console.log('Other updated!')
    }
  })
})

otherRoute.route('/delete-other/:id').delete((req, res, next) => {
  OtherModel.findByIdAndRemove(req.params.id, (error, other) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: other
      })
      console.log('Other deleted!')
    }
  })
})

module.exports = otherRoute;
const express = require('express');
const app = express();
const lRoute = express.Router();
let LModel = require('../model/L');


lRoute.route('/').get((req, res) => {
  LModel.find((error, l) => {
    if (error) {
      return next(error)
    } else {
      res.json(l)
      console.log('lights retrieved!')
    }
  })
})


lRoute.route('/create-light').post((req, res, next) => {
  LModel.create(req.body, (err, l) => {
    if (err) {
      return next(err)
    } else {
      res.json(l)
      console.log('light Added!')
    }
  })
});


lRoute.route('/fetch-light/:id').get((req, res) => {
  LModel.findById(req.params.id, (err, l) => {
    if (err) {
      return next(err)
    } else {
      res.json(l)
      console.log('light retrieved!')
    }
  })
})


lRoute.route('/update-light/:id').put((req, res, next) => {
  LModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, l) => {
    if (err) {
      return next(err);
    } else {
      res.json(l)
      console.log('light updated!')
    }
  })
})

lRoute.route('/delete-light/:id').delete((req, res, next) => {
  LModel.findByIdAndRemove(req.params.id, (error, l) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: l
      })
      console.log('light deleted!')
    }
  })
})

module.exports = lRoute;

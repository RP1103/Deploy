const express = require('express');
const app = express();
const electRoute = express.Router();
let ElectModel = require('../model/Elect');


electRoute.route('/').get((req, res) => {
  ElectModel.find((error, elect) => {
    if (error) {
      return next(error)
    } else {
      res.json(elect)
      console.log('Elects retrieved!')
    }
  })
})


electRoute.route('/create-elect').post((req, res, next) => {
  ElectModel.create(req.body, (err, elect) => {
    if (err) {
      return next(err)
    } else {
      res.json(elect)
      console.log('Carving Added!')
    }
  })
});


electRoute.route('/fetch-elect/:id').get((req, res) => {
  ElectModel.findById(req.params.id, (err, elect) => {
    if (err) {
      return next(err)
    } else {
      res.json(elect)
      console.log('Elect retrieved!')
    }
  })
})


electRoute.route('/update-elect/:id').put((req, res, next) => {
  ElectModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, elect) => {
    if (err) {
      return next(err);
    } else {
      res.json(elect)
      console.log('Elect updated!')
    }
  })
})

electRoute.route('/delete-elect/:id').delete((req, res, next) => {
  ElectModel.findByIdAndRemove(req.params.id, (error, elect) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: elect
      })
      console.log('Elect deleted!')
    }
  })
})

module.exports = electRoute;

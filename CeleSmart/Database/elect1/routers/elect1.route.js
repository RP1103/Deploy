const express = require('express');
const app = express();
const elect1Route = express.Router();
let Elect1Model = require('../model/Elect1');


elect1Route.route('/').get((req, res) => {
  Elect1Model.find((error, elect1) => {
    if (error) {
      return next(error)
    } else {
      res.json(elect1)
      console.log('Elects1 retrieved!')
    }
  })
})


elect1Route.route('/create-elect1').post((req, res, next) => {
  Elect1Model.create(req.body, (err, elect1) => {
    if (err) {
      return next(err)
    } else {
      res.json(elect1)
      console.log('Elect1 Added!')
    }
  })
});


elect1Route.route('/fetch-elect1/:id').get((req, res) => {
  Elect1Model.findById(req.params.id, (err, elect1) => {
    if (err) {
      return next(err)
    } else {
      res.json(elect1)
      console.log('Elect1 retrieved!')
    }
  })
})


elect1Route.route('/update-elect1/:id').put((req, res, next) => {
  Elect1Model.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, elect1) => {
    if (err) {
      return next(err);
    } else {
      res.json(elect1)
      console.log('Elect1 updated!')
    }
  })
})

elect1Route.route('/delete-elect1/:id').delete((req, res, next) => {
  Elect1Model.findByIdAndRemove(req.params.id, (error, elect1) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: elect
      })
      console.log('Elect1 deleted!')
    }
  })
})

module.exports = elect1Route;

const express = require('express');
const app = express();
const carvingRoute = express.Router();
let CarvingModel = require('../model/Carving');


carvingRoute.route('/').get((req, res) =>
{
  CarvingModel.find((error, carving) => {
    if (error) {
      return next(error)
    } else {
      res.json(carving)
      console.log('Products retrieved!')
    }
  })
})


carvingRoute.route('/create-carving').post((req, res, next) => {
  CarvingModel.create(req.body, (err, carving) => {
    if (err) {
      return next(err)
    } else {
      res.json(carving)
      console.log('Product Added!')
    }
  })
});


carvingRoute.route('/fetch-carving/:id').get((req, res) => {
  CarvingModel.findById(req.params.id, (err, carving) => {
    if (err) {
      return next(err)
    } else {
      res.json(carving)
      console.log('Product retrieved!')
    }
  })
})


carvingRoute.route('/update-carving/:id').put((req, res, next) => {
  CarvingModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, carving) => {
    if (err) {
      return next(err);
    } else {
      res.json(carving)
      console.log('Product updated!')
    }
  })
})

carvingRoute.route('/delete-carving/:id').delete((req, res, next) => {
  CarvingModel.findByIdAndRemove(req.params.id, (error, carving) => {
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

module.exports = carvingRoute;

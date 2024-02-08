const express = require('express');
const app = express();
const entryformRoute = express.Router();
let EntryformModel = require('../model/Entryform');


entryformRoute.route('/').get((req, res) =>
{
  EntryformModel.find((error, entryform) => {
    if (error) {
      return next(error)
    } else {
      res.json(entryform)
      console.log('Products retrieved!')
    }
  })
})


entryformRoute.route('/create-entryform').post((req, res, next) => {
  EntryformModel.create(req.body, (err, entryform) => {
    if (err) {
      return next(err)
    } else {
      res.json(entryform)
      console.log('Product Added!')
    }
  })
});


entryformRoute.route('/fetch-entryform/:id').get((req, res) => {
  EntryformModel.findById(req.params.id, (err, entryform) => {
    if (err) {
      return next(err)
    } else {
      res.json(entryform)
      console.log('Product retrieved!')
    }
  })
})


entryformRoute.route('/update-entryform/:id').put((req, res, next) => {
  EntryformModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, entryform) => {
    if (err) {
      return next(err);
    } else {
      res.json(entryform)
      console.log('Product updated!')
    }
  })
})

entryformRoute.route('/delete-entryform/:id').delete((req, res, next) => {
  EntryformModel.findByIdAndRemove(req.params.id, (error, entryform) => {
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

module.exports = entryformRoute;

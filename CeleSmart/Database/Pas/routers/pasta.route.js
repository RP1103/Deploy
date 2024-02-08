const express = require('express');
const app = express();
const pastaRoute = express.Router();
let PastaModel = require('../model/Pasta');


pastaRoute.route('/').get((req, res) => {
  PastaModel.find((error, pasta) => {
    if (error) {
      return next(error)
    } else {
      res.json(pasta)
      console.log('Pastas retrieved!')
    }
  })
})


pastaRoute.route('/create-pasta').post((req, res, next) => {
  PastaModel.create(req.body, (err, pasta) => {
    if (err) {
      return next(err)
    } else {
      res.json(pasta)
      console.log('Pasta Added!')
    }
  })
});


pastaRoute.route('/fetch-pasta/:id').get((req, res) => {
  PastaModel.findById(req.params.id, (err, pasta) => {
    if (err) {
      return next(err)
    } else {
      res.json(pasta)
      console.log('Pasta retrieved!')
    }
  })
})


pastaRoute.route('/update-pasta/:id').put((req, res, next) => {
  PastaModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, pasta) => {
    if (err) {
      return next(err);
    } else {
      res.json(pasta)
      console.log('Pasta updated!')
    }
  })
})

pastaRoute.route('/delete-pasta/:id').delete((req, res, next) => {
  PastaModel.findByIdAndRemove(req.params.id, (error, pasta) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: pasta
      })
      console.log('Pasta deleted!')
    }
  })
})

module.exports = pastaRoute;
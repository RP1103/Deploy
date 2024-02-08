const express = require('express');
const app = express();
const feedRoute = express.Router();
let FeedModel = require('../model/Feed');


feedRoute.route('/').get((req, res) => {
  FeedModel.find((error, feed) => {
    if (error) {
      return next(error)
    } else {
      res.json(feed)
      console.log('Feeds retrieved!')
    }
  })
})


feedRoute.route('/create-feed').post((req, res, next) => {
  FeedModel.create(req.body, (err, feed) => {
    if (err) {
      return next(err)
    } else {
      res.json(feed)
      console.log('Feed Added!')
    }
  })
});


feedRoute.route('/fetch-feed/:id').get((req, res) => {
  FeedModel.findById(req.params.id, (err, feed) => {
    if (err) {
      return next(err)
    } else {
      res.json(feed)
      console.log('Feed retrieved!')
    }
  })
})


feedRoute.route('/update-feed/:id').put((req, res, next) => {
  FeedModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, feed) => {
    if (err) {
      return next(err);
    } else {
      res.json(feed)
      console.log('Feeds updated!')
    }
  })
})

feedRoute.route('/delete-feed/:id').delete((req, res, next) => {
  FeedModel.findByIdAndRemove(req.params.id, (error, feed) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: feed
      })
      console.log('Feed deleted!')
    }
  })
})

module.exports = feedRoute;

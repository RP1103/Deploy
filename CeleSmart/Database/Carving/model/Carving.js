const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Carving = new Schema({
  name: {
    type: String,
  },
  imgurl: {
    type: String,
  },
  size: {
    type: String,
  },
  qty: {
    type: Number,
  },
  price: {
    type: Number,
  },
  boardExpenses: {
    type: Number,
  },
  laborExpenses: {
    type: Number,
  },
  foodExpenses: {
    type: Number,
  },
  imageData: {
    data: Buffer,
    contentType: String,
  },
}, {
  collection: 'carving',
});

module.exports = mongoose.model('Carving', Carving);

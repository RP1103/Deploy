const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let L = new Schema({
  name: {
    type: String
  },
  imgurl: {
    type: String
  },
  qty: {
    type: Number
  },
  price: {
    type: Number
  },


}, {
  collection: 'l'
})

module.exports = mongoose.model('L', L)

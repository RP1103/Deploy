const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
  name: {
    type: String
  },
  imgurl: {
    type: String
  },

  kgs: {
    type: Number
  },

  price: {
    type: Number
  },

}, {

  collection: 'products'
})

module.exports = mongoose.model('Product', Product)

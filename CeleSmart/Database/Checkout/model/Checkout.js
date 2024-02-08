const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Checkout = new Schema({
  name: {
    type: String
  },
  city: {
    type: String
  },
  mno: {
    type: Number
  },


}, {
  collection: 'checkout'
})

module.exports = mongoose.model('Checkout', Checkout)

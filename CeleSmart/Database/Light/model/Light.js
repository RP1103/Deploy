const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Light = new Schema({
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
  collection: 'light'
})

module.exports = mongoose.model('Light', Light)

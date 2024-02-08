const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Light2 = new Schema({
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
  collection: 'lights2'
})

module.exports = mongoose.model('Light2', Light2)

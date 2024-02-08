const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Light1 = new Schema({
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
  collection: 'lights1'
})

module.exports = mongoose.model('Light1', Light1)

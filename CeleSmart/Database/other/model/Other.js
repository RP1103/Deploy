const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Other = new Schema({
  name: {
    type: String
  },
  kgs: {
    type: Number
  },
  qty: {
    type: Number
  },
  price: {
    type: Number
  },
  imgurl: {
    type: String
  }
 
}, {
  collection: 'other'
})

module.exports = mongoose.model('Other', Other)
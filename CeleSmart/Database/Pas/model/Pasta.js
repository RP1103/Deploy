const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Pasta = new Schema({
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
  collection: 'pasta'
})

module.exports = mongoose.model('Pasta', Pasta)
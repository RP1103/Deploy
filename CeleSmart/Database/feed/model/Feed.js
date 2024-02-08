const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Feed = new Schema({
  name: {
    type: String
  },
  imgurl: {
    type: String
  },
  kgs: {
   type: String
  },
  price: {
    type: Number
  },


}, {
  collection: 'feeds'
})

module.exports = mongoose.model('Feed', Feed)

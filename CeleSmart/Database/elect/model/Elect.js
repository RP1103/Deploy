const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Elect = new Schema({
  name: {
    type: String
  },
  imgurl: {
    type: String
  },
  workers:
  {
    type:Number
  },
  
  salary: {
    type: Number
  },


}, {
  collection: 'elect'
})

module.exports = mongoose.model('Elect', Elect)

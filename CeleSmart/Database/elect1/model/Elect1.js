const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Elect1 = new Schema({
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
  phno:
  {
    type:Number
  },
  time:
  {
    type:Time
  },



}, {
  collection: 'elect1'
})

module.exports = mongoose.model('Elect1', Elect1)

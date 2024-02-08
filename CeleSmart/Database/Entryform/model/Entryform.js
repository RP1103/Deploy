const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Entryform = new Schema({
  Date: {
    type: Date
  },
  rentalunitowner: {
    type: String
  },
  rentalunitaddress: {
    type: String
  },
  tenantname:{
    type: String
  },
  tenantaddress:{
    type: String
  },
  tenantphone:
  {
    type:Number
  },
  rent: {
    type: String
  },
  deposit: {
    type: String
  },
  contractstartdate: {
    type: Date
  },
  contractperiod: {
    type: String
  },
  electricity: {
    type: String
  },
  water: {
    type: String
  },
  internet: {
    type: String
  },
  other: {
    type: String
  },
  noticeperiod: {
    type: String
  },
  petspolicy: {
    type: String
  },
  checklist: {
    type: String
  },



}, {
  collection: 'Entryform'
})

module.exports = mongoose.model('Entryform', Entryform)

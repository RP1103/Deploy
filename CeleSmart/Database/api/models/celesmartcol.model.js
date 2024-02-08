const mongoose = require("mongoose");

var celesmartcolSchema = new mongoose.Schema({

  Name: {

    type: String,

    required: 'This field is required'

  },

  Price: {

    type: Number,

    required: 'This field is required'

  },

  Kgs: {

    type: Number,

    required: 'This field is required'

  },
 
  Qty: {

    type: Number,

    required: 'This field is required'

  }

});

mongoose.model("Celesmartcol", celesmartcolSchema);
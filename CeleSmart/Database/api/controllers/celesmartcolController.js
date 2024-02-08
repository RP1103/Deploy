const express = require("express");

var router = express.Router();

const mongoose = require("mongoose");

const Celesmartcol = mongoose.model("Celesmartcol");

router.get("/", (req, res) => {

  res.render("celesmartcol/addOrEdit", {

    viewTitle: "Insert Celesmartcol"

  });

});

router.post("/", (req, res) => {

  if (req.body._id == "") {

    insertRecord(req, res);

  } else {

    updateRecord(req, res);

  }

});



function insertRecord(req, res) {

  var celesmartcol = new Celesmartcol();

  celesmartcol.Name = req.body.Name;

  celesmartcol.Price = req.body.Price;

  celesmartcol.Kgs = req.body.Kgs;

  celesmartcol.Qty = req.body.Qty;

  celesmartcol.save((err, doc) => {

    if (!err) {

      res.redirect("celesmartcol/list");

    } else {

      console.log("Error during insert: " + err);

    }

  });

}

 

function updateRecord(req, res) {

  Celesmartcol.findOneAndUpdate(

    { _id: req.body._id },

    req.body,

    { new: true },

    (err, doc) => {

      if (!err) {

        res.redirect("celesmartcol/list");

      } else {

        console.log("Error during update: " + err);

      }

    }

  );

}

 

router.get("/list", (req, res) => {

  Celesmartcol.find((err, docs) => {

    if (!err) {

      res.render("celesmartcol/list", {

        list: docs

      });

    } else {

      console.log("Error in retrieval: " + err);

    }

  });

});

 

router.get("/:id", (req, res) => {

  Celesmartcol.findById(req.params.id, (err, doc) => {

    if (!err) {

      res.render("celesmartcol/addOrEdit", {

        viewTitle: "Update Product",

        celesmartcol: doc

      });

      console.log(doc);

    }

  });

});

 

router.get("/delete/:id", (req, res) => {

  Celesmartcol.findByIdAndRemove(req.params.id, (err, doc) => {

    if (!err) {

      res.redirect("/celesmartcol/list");

    } else {

      console.log("Error in deletion: " + err);

    }

  });

});

module.exports = router;
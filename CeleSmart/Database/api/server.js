
// Node.js MongoDB server

require("./models/db");

const express = require("express");

const path = require("path");

const handleBars = require("handlebars");

const exphbs = require("express-handlebars");

const {

  allowInsecurePrototypeAccess

} = require("@handlebars/allow-prototype-access");

const bodyparser = require("body-parser");

const celesmartcolController = require("./controllers/celesmartcolController");

var app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

app.get("/", (req, res) => {

  res.send(`

  <h2>Welcome to celesmartcols Database!!</h2>

  <h3>Click here to get access to the <b> <a href="/celesmartcol/list">Database</a> </b></h3>`);

});

app.set("views", path.join(__dirname, "/views/"));

app.engine(

  "hbs",

  exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(handleBars),

    extname: "hbs",

    defaultLayout: "mainLayout",

    layoutsDir: __dirname + "/views/layouts/"

  })

);

app.set("view engine", "hbs");

app.listen(3000, () => {

  console.log("Express server started at port: 3000");

});

app.use("/celesmartcol", celesmartcolController);
const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routing");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

mongoose
  .connect(
    "mongodb+srv://web4:minticweb@cluster0.eaqta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conexion exitosa DB");
    app.listen(5000, () => {
      console.log("Server Listening on port 5000");
    });
  })
  .catch((err) => console.log(err));

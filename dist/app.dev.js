"use strict";

var express = require("express");

var connectDB = require("./config/db");

var app = express();
var port = process.env.PORT || 5000;
var host = process.env.host; // CONNECT DB

connectDB();
app.use(express["static"]("public"));
app.use(express.json({
  extended: false
}));
app.use("/api/user", require('./routes/user'));
app.use("/api/auth", require('./routes/auth'));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
var server = app.listen(port, function () {
  console.log("Server listening at http://".concat(host, ":").concat(port));
});
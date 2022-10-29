var express = require("express");

var ejs = require("ejs");
var app = express();

app.set("views", "c:/NodeJs_VS/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

var router = require("../router/controller")(app);


var server = app.listen(2000, function(){

    console.log("server 가동");

});
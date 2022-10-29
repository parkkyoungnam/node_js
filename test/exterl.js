var  express = require("express");

var app = express();

app.get("/", function(req, res)
{
    res.send("ROOT");
})


// req 요청 // res 응답
app.get("/test", function(req, res)
{
    res.send("TEST");
});

var server = app.listen(2000, function(){

    console.log("server 가동");

});
var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){

    var q = url.parse(req.url, true);
    res.writeHead(200, {"content-type" : "text/html"});
    
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("<meta charset = 'utf-8' />");
    res.write("</head>");
    res.write("<body>");


    switch(q.pathname)
    {
        case "/" :
            res.write("<h1>root 입니다.</h1>");
            res.write("<a href = 'test1?data1=111'> test1 </a> <br/>");
            res.write("<a href = 'test2?data2=222'> test2 </a> <br/>");
            break;
        case "/test1" :
            res.write("<h1> test1 입니다. </h1>");
            res.write("<h1>data1 : " + q.query.data1 + "<br/");
            break;
        case "/test2" :
            res.write("<h1> test2 입니다.</h1>");
            res.write("<h1>data2 : " + q.query.data2 + "<br/");
            break;
    }
    res.write("<h1>Node.js 웹 어플리케이션 예제입니다.</h1>");
    res.write("</body>");
    res.write("</html>");



    res.end();

});
// 요청 req 응답 res

server.listen(1234);
console.log("서버 가동");
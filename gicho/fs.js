var fs = require("fs");

/*
fs.writeFile("data1.txt", "hello world js", function(error)
{
    console.log("비동기식 저장");
});

fs.writeFile("data2.txt", "hello node js", function(error)
{
    console.log("비동기식 저장2");
});
*/

fs.appendFile("data1.txt", "안녕하세요", function(error)
{
    console.log("비동기식 추가 1");
});

fs.appendFile("data2.txt", "반갑습니다.", function(error)
{
    console.log("비동기식 추가 2");
});

fs.readFile("data1.txt", function(error, data)
{
    console.log("data1 :", data.toString());
});

fs.readFile("data2.txt", function(error, data)
{
    console.log("data2 :", data.toString());
});

// ------------------------------------------------------

fs.writeFileSync("data3.txt", "hello word js");
console.log("동기식 저장 1");

fs.writeFileSync("data4.txt", "hello word");
console.log("동기식2 저장");

var data3 = fs.readFileSync("data3.txt");
console.log("data3 :", data3.toString());
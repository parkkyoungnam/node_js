console.log("__dirname", __dirname);
console.log("__filename", __filename);

console.log("node js 코드입니다.");

setImmediate(function()
{
    console.log("immediate 동작1");
}
);


console.log("node js 코드입니다.");

var a1 = setImmediate(function()
{
    console.log("이미디에이트 동작 2");
});

console.log("node js 코드입니다.");

var a1 = 0;
var a2 = setInterval(function()
{
    console.log("interval 동작");
    a1 ++;
    console.log("a1 : ", a1);
    if(a1 >= 5)
    {
        clearInterval(a2);
    }
},1000);

console.log("작업이 완료되었습니다.")
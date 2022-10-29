var buf1 = Buffer.alloc(10);
//공간 10짜리를 만듬
console.log(buf1);

var buf2 = Buffer.allocUnsafe(10);
//alloc 보다 속도가 빠르다. => 0값이 아니다. 근데 0이네...?
console.log(buf2);

var size1 = Buffer.byteLength(buf1);
console.log("size 1 : ", size1);
console.log("bytes : ", buf1.length);

var buf3 = Buffer.from('abcd');
var buf4 = Buffer.from('안녕하세요');

console.log(buf3);
console.log(buf4);
//한글 한글자 3바이트

var buf5 = Buffer.from('cccc');
var buf6 = Buffer.from('cccc');
var buf7 = Buffer.from('aaaa');
var buf8 = Buffer.from('dddd');

var v1 = Buffer.compare(buf5, buf6);
console.log("v1 : ", v1);

var v2 = Buffer.compare(buf5, buf7);
console.log("v2 :", v2);

var v3 = Buffer.compare(buf5, buf8);
console.log("v3 :", v3);

var array1 = [buf5, buf6, buf7];

var buf9 = Buffer.concat(array1);
console.log(buf9);

var buf10 = Buffer.from('123456789');
var buf11 = Buffer.alloc(10);

buf10.copy(buf11, 0, 2, 5);
console.log(buf11);

var array2 = buf5.entries();
for(var str of array2)
{
    console.log(str);
}

var v4 = buf6.equals(buf7);
console.log("v4 : ", v4);

var buf14 = Buffer.from('aaaaa');
buf14.fill('c');
console.log(buf14);
buf14.fill('abc');
console.log(buf14);

var buf15 = Buffer.from("Hello Node js");
var v6 = buf15.includes("Node");
console.log("v6 : ", v6);

var v8 = buf15.indexOf("Node");
console.log("v8 : ", v8);




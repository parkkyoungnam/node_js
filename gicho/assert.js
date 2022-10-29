// Assert 모듈은 개발자가 만든 코드가 동작하기 전에 데이터나 수식에 대한 검사를 할 수 있는 모듈
// Assert 모듈에서 제공하고 있는 함수들을 이용하여 검사할 때 위배가 될 경우 오류가 발생하고 프로그램 종지

/*

assert : 

*/

var assert = require("assert");

var v1 = 10;
var v2 = 10;
var v3 = 20;

var v4 = { a : 3, b : 4 };

assert(v1 < v3);
console.log("v1은 v3보다 작습니다");

assert(v1 == v3);
console.log("v1과 v3은 같다");
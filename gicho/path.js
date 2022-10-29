var path = require("path");

var basename1 = path.basename("c:\\abc\\abc.txt");

console.log("basename 1 : ", basename1);

var basename2 = path.basename("c:/abc/abc.txt");
console.log("basename 2 : ", basename2);

var basename3 = path.basename("abc.txt");
console.log("Basename 3 : ", basename3);

var dirname1 = path.dirname("c:/abc/abc.txt");
console.log("dirname1 : ", dirname1);

var extname1 = path.extname("c:/abc/abc.txt");
console.log("extname1 : ", extname1);

var isAbsolute1 = path.isAbsolute("c:/abc.abc.txt");
console.log("isabosolute1 : ", isAbsolute1);
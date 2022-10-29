var crypto = require("crypto");

var ciphers = crypto.getCiphers();

for (var x of ciphers)
{
    console.log(x);
}


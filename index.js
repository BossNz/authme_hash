const hashpassword = require("./auth").hashpassword
const verifyhash = require("./auth").verifyhash

var text = "BossNz"
var hash = hashpassword(text)

// HASH
console.log(hash)

// CHECK

console.log(verifyhash(text,hash))
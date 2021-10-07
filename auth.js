const sha256 = require('sha256')
function verifyhash(a,b){
    var c = b.split("$")
    var d = c[2]
    var f = c[3]
    var g = sha256(a)
    var h = sha256(g+d)
    return h === f
}
function hashpassword(d){
    var a = '';
    var b = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var c = b.length;
    for ( var i = 0; i < 16; i++ ) {
        a += b.charAt(Math.floor(Math.random() * c));
    }
    return `$SHA$${a}$${sha256(sha256(d)+a)}`
}
module.exports = {
    verifyhash,hashpassword
}
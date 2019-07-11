
var c = '';
function balikString(teks) {
    var b = teks.length;
    for(a=0;a<(teks.length); a++) {
        var b = b - 1;        
        c = c + teks[b];        
    } console.log(c);
}

balikString('hello world!');

function pasanganTerbesar(num) {
    function makeArray(num) {
        var convStr = String(num);
        var charLength = convStr.length;
        var array = [];
        for(var i = 0; i < charLength-1; i ++) {
            array.push(convStr[i]+convStr[i+1])
        } return array; 
    }

    var array = makeArray(num);
    var result = Number(array[0]);
    for(var i = 0; i < array.length-1; i ++) {
        var result2 = 0;
        result2 = result2 + Number(array[i+1]);
        if(result > result2) {
            result = result;
        } else {
            result = result2;
        } 
    } return result;
}

console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
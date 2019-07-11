function mengelompokkanAngka(arr) {
    var newArr = [[],[],[]]
    for( var i = 0; i < arr.length; i ++) {
        var a = '';
        a = a + arr[i];
        if (a%3 === 0) {
            newArr[2].push(a);
        
        } else if(a%2 == 0) {
            newArr[0].push(a);
            
        } else {
            newArr[1].push(a);
        }
    } return newArr;
}

// TEST CASE
console.log(mengelompokkanAngka([2,4,6]));
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(mengelompokkanAngka([100, 151, 122, 99, 111]));
console.log(mengelompokkanAngka([]));
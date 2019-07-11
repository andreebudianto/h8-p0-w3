function targetTerdekat(arr) {
    var target = Number(arr.indexOf('o'));
    var length = arr.length;
    var findX = 0;
    if(arr.indexOf('x') == -1) {
        return 0;
    } else if (Number(arr.indexOf('x')) > target) {
        findX = findX + Number(arr.indexOf('x'));
        return findX - target;
    } else {
        var indexX = Number(arr.indexOf('o')); 
        while ( arr[indexX] !== 'x') {
            indexX = indexX -1;
        } return target - indexX ;
    }
}
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

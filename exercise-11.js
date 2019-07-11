function tentukanDeretAritmatika(arr) {
    var result = 0;
    var result2 = 0;
    for (var i = 0; i < arr.length-2; i ++) {
        result = result + Number(arr[i+1]) - Number(arr[i]);
        result2 = result2 + Number(arr[i+2]) - Number(arr[i+1]);
        result3 = (result===result2);
    } return result3;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
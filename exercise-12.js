function tentukanDeretGeometri(arr) {
    
    for ( var i = 0; i < arr.length-2; i ++) {
        result = Number(arr[i+1])/Number(arr[i]);
        result2 = Number(arr[i+2])/Number(arr[i+1]);
        result3 = (result===result2);
    } return result3;
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
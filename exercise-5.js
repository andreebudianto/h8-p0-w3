
function palindrome(kata) {
    var reverse = '';
    for(i=(kata.length)-1; i>=0; i--) {
        reverse = reverse + kata[i];
    } 
    return reverse===kata;
  }

  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
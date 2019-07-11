function angkaPalindrome(num) {
    if(num <9) {
        return num+1;
    } else if (num == 9) {
        return num +2;    
    } else if (num > 9) {
        if (String(num).length%2 == 0) {
            nextPalindromeSameBaseEvenLengthNumber(num);
            
            if(Number(nextPalindromeSameBaseEvenLengthNumber(num)) > num) {
                return nextPalindromeSameBaseEvenLengthNumber(num);    
            } else {
                return nextPalindromeIncrementBaseEvenLengthNumber(num);
            }
        } else {
            nextPalindromeSameBaseOddLengthNumber(num);
            
            if(Number(nextPalindromeSameBaseOddLengthNumber(num)) > num) {
                return nextPalindromeSameBaseOddLengthNumber(num);    
            } else {
                return nextPalindromeIncrementBaseOddLengthNumber(num);
            }
        }
    }
}

function revNum(basenum) {
    var reversedNum = '';
    var step = String(basenum).length;
    for(var i=0; i<String(basenum).length; i++) {
        reversedNum = reversedNum + String(basenum)[step-1];
        step--;
    } 
    return reversedNum;
}

function nextPalindromeSameBaseEvenLengthNumber(num) {
    var convStr = String(num);
    var step = String(num).length;
    var nextP = '';
    var result = '';
    
    for(var i=0; i<(Math.floor(Number(step/2))); i++){
        nextP = nextP + convStr[i];
    } result = nextP + revNum(nextP);
    return result;
}

function nextPalindromeSameBaseOddLengthNumber(num) {
    var convStr = String(num);
    var step = String(num).length;
    var nextP = '';
    var result = '';
    
    for(var i=0; i<(Math.floor(Number(step/2))); i++){
        nextP = nextP + convStr[i];
    } result = nextP + convStr[(Math.floor(Number(step/2)))] +revNum(nextP);
    return result;
}

function nextPalindromeIncrementBaseEvenLengthNumber(num) {
    var convStr = String(num);
    var step = String(num).length;
    var nextP = '';
    var result = '';
    
    for(var i=0; i<(Math.floor(Number(step/2))); i++){
        nextP = nextP + convStr[i];
    } nextP = Number(nextP) +1;
    result = nextP + revNum(nextP);
    return result;
}

function nextPalindromeIncrementBaseOddLengthNumber(num) {
    var convStr = String(num);
    var step = String(num).length;
    var nextP = '';
    var result = '';
    
    for(var i=0; i<(Math.floor(Number(step/2))); i++){
        nextP = nextP + convStr[i];
    } 
    result = nextP + String(Number(convStr[(Math.floor(Number(step/2)))])+1) + revNum(nextP);
    return result;
}

function pickFirstHalf(num) {
    var result = '';
    var convStr = String(num);
    for(var i=0; i<(String(num).length)/2; i ++) {
        result = result + convStr[i]
    } return result;
}

function pickLastHalf(num) {
    var result = '';
    var convStr = String(num);
    var step = String(num).length/2;
    for(var i=0; i<(String(num).length)/2; i ++) {
        result = result + convStr[step];
        step++;
    } return result;
}
// TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
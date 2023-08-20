function palindrome(str) {
    const regex = /[\W_]/g;
    var bigStr = str.toUpperCase().replace(regex, ""); 
    console.log(bigStr)
      var wordReversed = bigStr.split("").reverse().join("");
     if (wordReversed === bigStr){
    return true;
     }else {
       return false;
       }
      
    }
    
    palindrome("race Car")
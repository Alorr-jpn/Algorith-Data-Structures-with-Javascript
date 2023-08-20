function convertToRoman(num) {
    const romanToNumber = {
      M :	1000,
      CM : 900,
      D :	500,
      CD:	400,
      C: 100,
      XC:	90,
      L: 50,
      XL:	40,
      X: 10,
      IX: 9,
      V: 5,
      IV:	4,
      I: 1
    };
  var romanVar = "";
  for (var nume in romanToNumber){
    // console.log("nume: ",nume );
    // console.log("value: ", romanToNumber[nume]);
    while (num >= romanToNumber[nume]){
      romanVar += nume;
      num -= romanToNumber[nume];
    }
  }
   return romanVar;
  }
  
  convertToRoman(36);
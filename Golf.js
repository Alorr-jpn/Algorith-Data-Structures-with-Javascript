const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes != 1){
    if(strokes != par)
    {
      if (strokes <= (par-2) ){
        return "Eagle";
      }
      else if (strokes === (par - 1)){
        return "Birdie";
      }
      else if (strokes === (par + 1)){
        return "Bogey";
      }
      else if (strokes === (par + 2)){
        return "Double Bogey"
      }
      else if (strokes >= (par + 3)) {
        return "Go Home!"
      }
    }
    else {
        return "Par";
    }
    
  }  
else {
  return "Hole-in-one!";}
  // Only change code above this line
}

console.log(golfScore(5, 9));
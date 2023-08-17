let count = 0;

function cc(card) {
  // Only change code below this line
  const deck =[[2, 3, 4, 5, 6],[7, 8, 9],[10,'J', 'Q', 'K', 'A']];
  let decision = "Hold"
  if(deck[0].includes(card)){
    count += 1;
  } 
  if (deck[1].includes(card)){
    count = count;
  }
  if (deck[2].includes(card)){
    count -=1;
  }  

 if(count > 0)
      decision = "Bet"

  return count + "  " + decision
  // Only change code above this line
}

cc(3); cc(2); cc('A'); cc(10); cc('K');
//Counting cards

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }

  //El if refactorizado
  //return count > 0 ? `${count} Bet` : `${count} Hold`;
  //return `${count} ${count > 0 ? "Bet" : "Hold"}`;
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

//Replacing if with switch

function chainToSwitch(val) {
  let answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}
chainToSwitch(7);

//Selecting with switch

function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
caseInSwitch(1);

//Default switch
function defaultSwitch(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "alpha";
      break;
    case "b":
      answer = "beta";
      break;
    case "c":
      answer = "gamma";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
defaultSwitch(1);

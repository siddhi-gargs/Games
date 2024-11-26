const PLAYER_1 = "X";
const PLAYER_2 = "O";

let inputUser1 = "";
let inputUser2 = "";

function allSubSets(a) {
  switch (a) {
    case 1: return "123";
    case 2: return "456";
    case 3: return "789";
    case 4: return "147";
    case 5: return "258";
    case 6: return "369";
    case 7: return "159";
    case 8: return "357";
  }
}

function issubSetIsPresentInSet(set, subSet) {
  for (let i = 0; i < subSet.length; i++) {
    const isPresent = isCharPresent(set, subSet[i]);
    if (!isPresent) {
      return false;
    }
  } 
  return true; 
}

function hasSomeOneWon(player) {

  const isSomeOneWon = player === "X" ? inputUser1 : inputUser2;
  return isCurrentPlayerWin(isSomeOneWon);
}

function isCurrentPlayerWin(userHasToCheck) {
  for (let i = 1; i <= 8; i++) {
    if (issubSetIsPresentInSet(userHasToCheck, allSubSets(i))) {
      return true;
    }
  }
  return false;
}

function currentuser(player, a) {
  
  if (player === PLAYER_1) {
    return inputUser1 += a;
  } 
  return inputUser2 += a;
}

function replace(text, match, replacement) {
  let changedText = "";

  for (let index = 0; index < text.length; index++) {
    const isCharMatch = text[index] === match;
    changedText += isCharMatch ? replacement : text[index];
  }

  return changedText;
}

function isCharPresent(string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return true;
    }
  }
  return false;
}

function inputPlayer1(number, player) {
  const a = prompt(""); 

  if (!isCharPresent(number, a)) {
    console.log("Enter Valid");
    return inputPlayer1(number, player);
  }
  currentuser(player, a);

  const updatedInput = replace(number, a, player);
  return updatedInput;
}

function formatToRow(firstIndex, secondIndex, thirdIndex) {
  return " " + firstIndex + " | " + secondIndex + " | " + thirdIndex + "\n";
}

function makeFrame(number) {
  const horizontalLine = "-----------\n";
  const row1 = formatToRow(number[0], number[1], number[2]);
  const row2 = formatToRow(number[3], number[4], number[5]);
  const row3 = formatToRow(number[6], number[7], number[8]);
  const frame = row1 + horizontalLine + row2 + horizontalLine + row3;
  return frame;
} 

function showFrame(number) {
  console.log(makeFrame(number));
}

function startGame() {

  let number = "123456789";
  showFrame(number);

  for (let turn = 9; turn >= 0; turn--) {
    
    const decidePlayer = turn % 2 === 1 ? PLAYER_1 : PLAYER_2;
    number = inputPlayer1(number, decidePlayer);
    showFrame(number);
    if (hasSomeOneWon(decidePlayer)) {
      console.log(decidePlayer, "is Won In very few MOVES ");
      console.log("Congrations 🎉 you Win");
      return confirmationForWantToPlay();
    }
  }
  console.log("Game Die : ");
  return confirmationForWantToPlay();
}

console.log("-------** Tic Tac Toe **------");

function confirmationForWantToPlay() {
  const wantToPlay = confirm("Do you Want to play this Game");
  return wantToPlay ? startGame() : "Thanks for Your time..";
}

console.log(confirmationForWantToPlay());

const PLAYER_1 = "X";
const PLAYER_2 = "O";

function hasSomeOneWon(number) {
  if (number[0] === number[1] && number[0] === number[2]) {
    return true;
  }
  if (number[3] === number[4] && number[3] === number[5]) {
    return true;
  } 
  if (number[6] === number[7] && number[6] === number[8]) {
    return true;
  } 
  if (number[0] === number[3] && number[0] === number[6]) {
    return true;
  }
  if (number[1] === number[4] && number[1] === number[7]) {
    return true;
  }
  if (number[2] === number[5] && number[2] === number[8]) {
    return true;
  }
  if (number[0] === number[4] && number[0] === number[8]) {
    return true;
  }
  if (number[2] === number[4] && number[2] === number[6]) {
    return true;
  }
  return false;
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
    return inputPlayer1(number,);
  }
  const updatedInput = replace(number, a, player);
  return updatedInput;
}

function makeFrame(number) {
  const horizontalLine = "-----------\n";
  const row1 = " " + number[0] + " | " + number[1] + " | " + number[2] + "\n";
  const row2 = " " + number[3] + " | " + number[4] + " | " + number[5] + "\n";
  const row3 = " " + number[6] + " | " + number[7] + " | " + number[8] + "\n";
  const frame = row1 + horizontalLine + row2 + horizontalLine + row3;
  return frame;
} 

function showFrame(number) {
  console.log(makeFrame(number));
}

function series() {

  let number = "123456789";
  console.log(makeFrame(number));

  for (let turn = 9; turn >= 0; turn--) {
    const decidePlayer = turn % 2 === 1 ? PLAYER_1 : PLAYER_2;
    number = inputPlayer1(number, decidePlayer);
    showFrame(number);
    if (hasSomeOneWon(number)) {
      console.log(decidePlayer, "is Won In very few MOVES");
      return "Congrations 🎉 you Win";

    }
  }

  return "Game Die:";
}

console.log(series());

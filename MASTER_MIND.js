function generateGivenNumberOfDigit(number) {
  let newNumber = "";
  for (let i = 0; i < number; i++) {
    
    newNumber += differentDigit(newNumber);  
  }
  return newNumber;
}

function oneLineSpace() {
  console.log();
}

function isCharPresent(string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return true;
    }
  }
  return false;
}

function differentDigit(newNumber) {
  let random = generateSingleDigit();
  while (isCharPresent(newNumber, "" + random)) {
    random = generateSingleDigit();
  }
  return random;
}

function generateSingleDigit() {
  return Math.floor(Math.random() * 10);
}

function totalNumberOfChancesMessages(chances) {
  console.log("YOU WILL GET ", chances, "changes");
}

function userInput() {
  const input = prompt("Guess the Pattern");
  return input;
}

function atCorrectPosition(generate, userInput) {
  let count = 0;
  for (let i = 0; i < generate.length; i++) {
    if (generate[i] === userInput[i]) {
      count++;
    }
  }
  return count;
}

function howManyCharPresent(string, subString) {
  let occurences = 0;
  for (let i = 0; i < subString.length; i++) {
    if (isCharPresent(string, subString[i])) {
      occurences++;
    }
  }
  return occurences;
}

function addMarkNoOfTimes(currentIndex, mark) {
  if (currentIndex === 0) {
    return "";
  }
  return mark + addMarkNoOfTimes(currentIndex - 1, mark);
}

function giveClue(random, guess) {
  const charPresent = howManyCharPresent(random, guess);
  const atRightPosition = atCorrectPosition(random, guess);
  const signForCharPresent = addMarkNoOfTimes(charPresent, "🟠");
  const signForCorrectPos = addMarkNoOfTimes(atRightPosition, "🟢");

  return signForCharPresent + signForCorrectPos;
}

function winningMsg() {
  console.log("Congratulations you guess Correct..🎉🥳");
  oneLineSpace();
  const a = confirm("Do you want to play this Game Again..?");
  return startGame(a);
}

function instructions() {
  console.log("If you Guess correct number It will show By this.. 🟠");
  console.log("If you Guess correct POSITION It will show By this.. 🟢");
  oneLineSpace();
}

function mainFunction(number) {
  let chances = 7;
  
  const randomNumber = generateGivenNumberOfDigit(number);
  instructions();
  while (chances > 0) {
    totalNumberOfChancesMessages(chances);
    oneLineSpace();
    const guess = userInput();
    if (guess === randomNumber) {
      return winningMsg(chances);
    }
    const clue = giveClue(randomNumber, guess);
    console.log(addMarkNoOfTimes(17, " "),clue);
    chances--;
  }
  console.log("You Lost all your chances..😬")
  console.log("THE PATTERN WAS : ", randomNumber); 
  oneLineSpace();
  const a = confirm("Do you want to play this Game Again..?");
  return startGame(a);
}

function startGame (a) {
  if (a) {
    const number = prompt("Enter How many Number Of digit you want to guess :");
    return mainFunction(number);
  }

  console.log("your Choice..✌️");
  return "THANKS FOR YOUR PRECIOUS TIME..🫡👍";
}

console.log("----------🧠 Welcome to THIS MASTER MIND GAME 🧠------------");
oneLineSpace();
const a = confirm("Are you ready to play this Game..🏃‍♀️‍➡️");
oneLineSpace();
console.log(startGame(a));

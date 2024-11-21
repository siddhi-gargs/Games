// Assume rangeStart and rangeEnd are always greater than 0.
// rangeStart is always less than rangeEnd.

function noOfDigit(number) {
  if (number < 10) {
    return 1;
  }

  return 1 + noOfDigit(number / 10);
}

function oneLineSpace() {
  console.log();
}

function generateNumber(a) {
  const b = Math.ceil(Math.random() * (10 ** a));
  return b;
}

function winningMsg() {
  return "you guess the correct number 😎👍👏";
}

function msgForEndTheGame(randomNumber) {
  console.log("Number was : " + randomNumber);
  return "your all attempts are finished";
}

function areEqual(random, input) {
  return random === input;
}

function messageForNavigatingRemindingAttempt(attempt) {
  return "you have remaining " + attempt + " no of attempts";
}

function isInRange(start, end, number) {
  return number > start && end > number;
}

function clue(input, random) {

  if (input > random) {
    return "Guess lesser number🙄";
  }
  return "Guess greater number👀";
}

function welComeMessage(rangeStart, rangeEnd) {
  oneLineSpace();
  console.log("------- This is GUESS THE RIGHT NUMBER GAME -----------");
  oneLineSpace();
  console.log("Your Range start with " + rangeStart + " and End with " + rangeEnd);
  oneLineSpace();
}

function isUserInputValid(start, end, totalAttempts) {
  oneLineSpace();
  const userInput = prompt("guess the number :");
  const isUserInputInRange = isInRange(start, end, +userInput);
  if (!isUserInputInRange) {
    oneLineSpace();
    console.log("Invalid input");
    oneLineSpace();
    console.log(messageForNavigatingRemindingAttempt(totalAttempts));
    return isUserInputValid(start, end, totalAttempts);
  } 
  return +userInput;
}

function evaluateRemainAttempts(start, end, totalAttempts, randomNumber) {
  if (totalAttempts === 0) {
    return console.log(msgForEndTheGame(randomNumber));
  }

  console.log(messageForNavigatingRemindingAttempt(totalAttempts));

  const userInput = isUserInputValid(start, end, totalAttempts);
  oneLineSpace();
  const isEnteredNumCorrect = areEqual(randomNumber, userInput);
  
  if (isEnteredNumCorrect) {
    return console.log(winningMsg());
  }
  console.log(clue(userInput, randomNumber));
  oneLineSpace();
  return evaluateRemainAttempts(start, end, totalAttempts - 1, randomNumber);
}

function startGame(rangeStart, rangeEnd, maxAttempts) {
  const noOfDigitInStartRange = noOfDigit(rangeEnd - 1);
  const randomNumber = generateNumber(noOfDigitInStartRange);
  
  if (isInRange(rangeStart, rangeEnd, randomNumber)) {
    welComeMessage(rangeStart, rangeEnd);
    return evaluateRemainAttempts(rangeStart, rangeEnd, maxAttempts, randomNumber);
  } 
  return startGame(rangeStart, rangeEnd, maxAttempts);
}

startGame(10, 100, 6);

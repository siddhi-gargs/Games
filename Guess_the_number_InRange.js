// Assume rangeStart and rangeEnd are always greater than 0.
// rangeStart is always less than rangeEnd.

function oneLineSpace() {
  console.log();
}

function generateNumber(from, to) {
  return from + Math.floor(Math.random() * (to - from));
}

function winningMsg() {
  console.log("you guess the correct number 😎👍👏");
}

function msgForEndTheGame(randomNumber) {
  oneLineSpace();
  console.log("Number was : ", randomNumber);
  console.log("You lost your all Attempts");
}

function isUserGuessCorrect(random, input) {
  return random === input;
}

function remainingAttempts(attempt) {
  console.log("you have remaining " + attempt + " no of attempts");
}

function isInRange(start, end, userInput) {
  return userInput >= start && end > userInput ;
}

function clue(input, random) {
  oneLineSpace();
  if (input > random) {
    return "Guess lesser number🙄";
  }
  return "Guess greater number👀";
}

function getUserInput(start, end) {
  oneLineSpace();
  const userInput = prompt("guess the number :");
  
  if (!isInRange(start, end, +userInput)) {
    oneLineSpace();
    console.log("Invalid input");
    oneLineSpace();
    return getUserInput(start, end);
  } 
  return +userInput;
}

function displayInstruction(rangeStart, rangeEnd, attempts) {
  oneLineSpace();
  console.log("You have to Guess number between ", rangeStart, "and", rangeEnd);
  oneLineSpace();
  console.log("You will got Total", attempts, "attempts");
}

function mainFunc(rangeStart, rangeEnd, maxAttempts) {
  let attempts = maxAttempts;
  const randomNumber = generateNumber(rangeStart, rangeEnd);  
  displayInstruction(rangeStart, rangeEnd, attempts);

  while (attempts > 0) {
    const userInput = getUserInput(rangeStart, rangeEnd);
    if (isUserGuessCorrect(userInput, randomNumber)) {
      winningMsg();
      return askAgainForPlaying();
    }
    attempts--;
    if (attempts > 0) {
      console.log(clue(userInput, randomNumber));
      oneLineSpace();
      remainingAttempts(attempts);
    }
  }
  
  msgForEndTheGame(randomNumber);
  return askAgainForPlaying();
}

function askAgainForPlaying() {
  const getInput = confirm("Do you want to play this Game Again..?");
  return getInput ? mainFunc(50, 200, 7) : "Thanks for Your Time";
}

function startGame(rangeStart, rangeEnd, attempt) {
  oneLineSpace();
  console.log("------- This is GUESS THE RIGHT NUMBER GAME -----------");
  oneLineSpace();
  const wantToPlay = confirm("Do you want to play This GAME...?");
  return wantToPlay ? mainFunc(rangeStart, rangeEnd, attempt) : "Your choice";  
}

console.log(startGame(10, 100, 3));

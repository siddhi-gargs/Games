function oneLineSpace() {
  console.log();
}

function slice(string, startIndex, endIndex) {
  if (startIndex === endIndex) {
    return string[startIndex];
  }
  
  return string[startIndex] + slice(string, startIndex + 1, endIndex);
}

function addUnderline(currentIndex, mark) {
  if (currentIndex === 1) {
    return mark;
  }

  return mark + addUnderline(currentIndex - 1, mark);
}

function winningMessage() {
  oneLineSpace();
  console.log("Congratulations..🎉");
  console.log("you guess correct Word in very less time..😎👏");
  oneLineSpace();
  console.log("Thanks for your Precious time..🙏");
  return mainFunction();
}

function isUserInputMatchWithString(string) {
  const userInput = prompt("Guess the word :");
  oneLineSpace();
  return userInput === string;
}

function remainingAttemptMessage(chances) {
  oneLineSpace();
  console.log("You have Remaining " + chances + " chances..🫡");
  oneLineSpace();
  console.log("Be careful before Entering Anything😬");
  oneLineSpace();

}

function lossingMessage() {
  console.log("You loose your all Attempts👀");
  console.log();
  return "Try Next time...";
}

function print(string, endIndex, mark, decreaseUnderline, chances) {

  if (endIndex > string.length - 1) {
    return console.log(lossingMessage());
  }

  const newWord = slice(string, 0, endIndex) + addUnderline(decreaseUnderline, mark);
  console.log(newWord);
  const attempts = isUserInputMatchWithString(string);
  if (attempts) {
    return winningMessage();
  } 
  const remainingAttempts = chances - 1;
  console.log("Incorrect ❌ :");
  remainingAttemptMessage(remainingAttempts);
  return print(string, endIndex + 1, mark, decreaseUnderline - 1, remainingAttempts);
}

function word(randomNumber){
  switch (randomNumber) {
  case 1:
    return "literals";
  case 2:
    return "underground"
  case 3:
    return "anticipate";
  case 4:
    return "vouched";
  case 5:
    return "satisfaction";
  case 6:
    return "shrugged";
  case 7:
    return "torturous";
  case 8:
    return "adamant";
  case 9:
    return "jolted";
  case 10:
    return "intense";

  }
  return "nevertheless";
}

function generateRandomNumber() {
  prompt("Press Enter to Generate a random word.. ⎆");
  const number = Math.ceil(Math.random() * 10);
  return word(number);
}

function mainFunction() {

  
  const areYouReady = confirm("Do you want To Play This Game");
  if (areYouReady) {
    oneLineSpace();
    const currentWord = generateRandomNumber();
    const length = currentWord.length - 1;
    oneLineSpace();
    console.log("You Have Total " +  (length - 1) + " chances");
    oneLineSpace();
    return print(currentWord, 0, "_", length, length - 1);
  } 
  oneLineSpace();
  console.log("Fine it's Your Choice...");
  return console.log("Thanks for Visiting..");
}

oneLineSpace()
console.log("****---------- This is a Random word Guess game --------****");
oneLineSpace();

mainFunction();

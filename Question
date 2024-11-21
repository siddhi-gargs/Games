function instruction() {
  oneLineSpace();
  console.log("You have to select only option no. ");
  oneLineSpace();
  console.log("You will get only two (2) option.");
}

function oneLineSpace() {
  console.log();
}

function isCorrectAns(userInput, correctOption, score) {

  const isEqual = userInput === correctOption;
  if (isEqual) {
    console.log("Correct Answer : 👍👏")
  } else {
    console.log("InCorrect Answer :❌");
  }
  
  return isEqual ? score + 1 : score + 0;
}

function message(ques, op1, op2, num, correctOption, score) {
  console.log(num + ques + "?..");
  oneLineSpace();
  console.log("1. " + op1);
  console.log("2. " + op2);
  oneLineSpace()
  const userInput = prompt("Enter option :");
  return isCorrectAns(userInput, correctOption, score);
}

function question1(score) {
  const ques = "What is the capital of France";
  const option1 = "paris";
  const option2 = "London";
  const correctOption = "1";
  return message(ques, option1, option2,"1. ", correctOption, score);
}

function question2(score) {
  const ques = "Which element has the chemical symbol 'O'?";
  const option1 = "Oxygen";
  const option2 = "Gold";
  const correctOption = "1";
  return message(ques, option1, option2, "2. " , correctOption, score);
}

function information() {
  const playerName = prompt("Enter your name :");
  let score = 0
  instruction();
  oneLineSpace();
  score = question1(score);
  oneLineSpace();
  console.log("current score is: " + score);
  score = question2(score);
  oneLineSpace();
  console.log("current score is: " + score);
  console.log("-------- end game ------");
  oneLineSpace();
  return console.log( playerName + " total score is " + score);
}

function confirmation(a) {
  if (a) {
    return information();
  }
  console.log("It's ok your choice");
}

console.log("---------- It's Small Quiz game --------");
oneLineSpace();
const a = confirm("Are you ready");
oneLineSpace();
confirmation(a);

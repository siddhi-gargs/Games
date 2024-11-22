function generateGivenNumberOfDigit(number) {
  let newNumber = "";
  for (let i = 0; i < number; i++) {
    
    newNumber += differentDigit(newNumber);  
  }
  return newNumber;
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

console.log(generateGivenNumberOfDigit(10));

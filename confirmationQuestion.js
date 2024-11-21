function question4Male(a) {
  if (a) {
    console.log("you are a good lier..");
    return "Thanks for Responding";
  }
  console.log("thanks for truth :");
  return "Thanks for Responding";
}

function roam(a) {
  if (a) {
    console.log(" you have nice choice");
    console.log();
    return "thanks for your precius time";
  }
  console.log("you should try...👀");
  console.log();
  return "thanks for your precius time";
}

function isreallyNeed(a) {
  if (a) {
    prompt("why?...");
    const b = confirm("Do you also like to roam at night alone?..🫣");
    console.log();
    return roam(b);
  }

  console.log("good choice");
  const b = confirm("Do you also like to roam at night alone?..🫣");
  console.log();
  return roam(b);
}

function question3Male(a) {
  
  if (a) {
    const b = confirm("Did you take your shower today?");
    console.log();
    return question4Male(b);
  }

  console.log("you should..😎");
  const b = confirm("did you took your shower today?");
  console.log();
  return question4Male(b);
}

function female(a) {
  if (a) {
    prompt("which thing you like most in your life ?");
    const b = confirm("Do you want to marry?..");
    console.log();
    return isreallyNeed(b)
  }
  return "so you are saying you are not male and not female...🧐";
}

function male(c) {

  if (c) {
    prompt("which type ?..😜");
    const d = confirm("Are you afraid of me?..");
    console.log();
    return question3Male(d);
  }
  console.log("then you should do some..");
  const d = confirm("Are you afraid of me?..");
  console.log();
  return question3Male(d);
}

function message(b) {
  
  if (b) {
    console.log("sorry if i asked wrong question");
    const c = confirm("Have you done any scams in your life");
    console.log();
    return male(c);
  }
  console.log("so you are brave person");
  const c = confirm("Have you done any scams in your life");
  console.log();
  return male(c);
}

function maleOrFemale(a) {
  if (a) {
    const b = confirm("Have you ever fail in your life ?...");
    console.log();
    return message(b);
  } 
  const c = confirm("So you are female");
  console.log();
  return female(c);
}

function startGame(a) {
  if (a) {
    const b = confirm("Are you male ?...");
    console.log();
    return maleOrFemale(b);
  }

  return "your choice";
}

const a = confirm("Do you want to play this game");
console.log();


console.log(startGame(a));

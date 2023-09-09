//nested if else
//else ke andar if else  fhir se likh dena nested ifelse kehlata hai

let winningNumber = 5;
let userGuess = +prompt("hey guess your number");
// console.log(userGuess,typeof userGuess);

if (userGuess === winningNumber) {
  console.log("you guessed a right number");
} else {
  if (userGuess < 5) {
    console.log("you guess is low");
  } else {
    console.log("your guess  is high");
  }
}

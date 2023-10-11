//--------------------------functions------------------------
//functions are like servants in programing

//call invoke ,run ,teeno ka ek he matlab hota hai

//functions

//------------------------function declaration------------------
// function singHappyBirthday(){
//     console.log("Happy birthDay hulk");
// }
// singHappyBirthday()

//ex:-

// function SumOfTwoNumbers(a,b){    //a and b are parameters(functions vsriables)
//     console.log(a+b);
// }
// SumOfTwoNumbers(16,9) //arguments

//dry:- don't repeat yourself

//isEven
// function isEven(num){
//     return num % 2 === 0
// }
// let returnedValue = isEven(4)
// console.log(returnedValue);

//ex:-
// function firstchar(character){
//     return character[0]
// }
// console.log(firstchar("king"));

//ex:-
let myArray = [5, 6, 4, 7, 9, 10, 2];

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1
}
let searchedtarget = findTarget(myArray,10);
console.log(searchedtarget);
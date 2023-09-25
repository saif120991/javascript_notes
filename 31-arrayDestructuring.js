let fruits = ["apple","banana","kela","angoor"];

//normal way
// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// console.log(`value of fruit1 is ${fruit1}`);
// console.log(`value of fruit2 is ${fruit2}`);

//shortcut or destructuring way

let [myvar1,myvar2,...myvar] = fruits; //if  i  want rest will come to myvar
// let [myvar1,,myvar2] = fruits; //if want to skip value of fruits
console.log(myvar1);
console.log(myvar2);
console.log(myvar);


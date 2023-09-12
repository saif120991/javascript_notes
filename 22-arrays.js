//---------------array------------------

//array is reference data types 
//array is ordered collection of items or elements
//ordered collection ka matlab, iska index hota hai
//array, hum [] square brackets laga ke banate hai
//array ke andar hum  koi bhi data type store kar sakte hai
//ex:-
// let mixed = ["king",12,true,undefined,null,3.5];
// console.log(mixed);

// let fruits = ["apple","mango","grapes"];
// console.log(fruits);

//------------agar mujhe sirf  apple chahiye to  hum indexing karke la sakte hai usko------------

// ex:-
// console.log(fruits[0]);



//--------if i want to change any array item from array the i have to change like this-------------

// let fruits = ["apple","mango","grapes"];
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits); //console result ["apple","banana","grapes"];

//jitne reference type hote hai unhe hum object bolte hai 
//array ko hum object bol sakte hai javascript me

//-----------to check type  of array-------------
// console.log(typeof fruits); //object
//array bhi ek object hai so  object aayega result console pe

//Array.isArray() function se hum pata laga sakte hai ye array hai ki nahi, nhi to har reference type object he aata hai isliye array ko check karne ke lie hum array.isarray() method ka use karte hai jiska result agar true aayega iska matlab ye array hai

// console.log(Array.isArray(fruits));
//if  result comes true then it is a array else if result is false the it is not an array

// let obj ={}; //ye object literal hai 
// console.log(obj);
// console.log(typeof obj); //object
// console.log(Array.isArray(obj)); //console result false



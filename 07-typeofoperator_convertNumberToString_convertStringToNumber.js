//--------------primitive data types-----------------

//1)string
//2)number
//3)boolean
//4)undefined
//5)null
//6)BigInt
//7)Symbol


//----------------------typeof operator------------

//typeof operator is used to check type of data

//string
// let mystr = "detective";

// console.log(typeof mystr);
// console.log(typeof "hello");

//number
// let num1 = 98;
// console.log(typeof num1);
// console.log(typeof 45);

//boolean
// let lionExistsInTheWorld = true;
// console.log(typeof lionExistsInTheWorld);
// console.log(typeof true);

//undefined
// let something; //variable declared only and value not assigned 
// console.log(typeof something);

//null
// let khalidabba = null; //type is showing object
// console.log(typeof khalidabba);


//-------------------convert number to string---------------

// const num1 = 56;
// console.log(typeof num1);

// other = num1 + "";
//number ko string me convert karne ke lie kuch nhi sirf ek empty string add kardo to woh number ka type string ho jayega

// 56 ----> "56" aisa convert hoga
// console.log(typeof other);
// console.log(other);

//------------------convert string to number-------------------

//string ke pehle + laga dijiye  to  string se number me convert ho jayega

// let num5 = "22";
// console.log(typeof num5);
// num5 = +"22";
// console.log(typeof num5);


//--------short way to convert-----------

// let num7 = 45;
// num7 = String(num7); //S capital he rakhna hai
// console.log(num7);
// console.log(typeof num7);

// let str7 = "52";
// str7 = Number(str7); //N capital he rakhna hai
// console.log(str7);
// console.log(typeof str7);


//to convert  into String
// String()

//to convert  into Number
// Number()
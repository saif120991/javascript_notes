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

//----------------string----------------
// let mystr = "detective";

// console.log(typeof mystr);
// console.log(typeof "hello");

//--------------number------------
// let num1 = 98;
// console.log(typeof num1);
// console.log(typeof 45);

//------------boolean-------------
// let lionExistsInTheWorld = true;
// console.log(typeof lionExistsInTheWorld);
// console.log(typeof true);

//---------------undefined---------------
// let something; //variable banaya sirf usko koi value assign nhi ki usse undefeined kehte hai
// console.log(typeof something,something);

//--------------null-------------
//null ka matlab kuch nhi 
// let khalidabba = null; //type is showing object jo ki ek bug/error hai
// console.log(typeof khalidabba);

//------------------BigInt------------
//in js number ki ek limit hoti hai usse bada number store nhi kar sakte hum number data type me 

//kitna bada number hum store kar sakte hai usse pata karne ke lie 

//console.log(Number.MAX_SAFE_INTEGER);
//9007199254740991 //itna bada

//isse bada bhi number agar hame store karana ho tab BigInt use karte hai, chote numbers ke lie bhi hum BigInt use kar sakte hai , jo bhi operations hum BigInt ke sath use karte hai wo sirf BigInt ke sath he use hota hai other data type ke sath nhi hoga 

//BigInt 2 tarike se hum likh sakte hai
//1) let num = 235n;
//number likh ke last me n laga do
//BigInt like le round braces ke andar number dedo

//2) let num2 = BigInt(50);
    // let num3 = 70n;
    // let result = num2 +  num3
    // console.log(result);
     


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
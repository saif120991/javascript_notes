//primitive data types

//primitive data type me jo variable store hota hai wo stack memory me hota hai aur usme us variable ka pointer ban jata hai ki yanha pe hai variable is jagah hai

//ex:- let num1 = 6;
// let num2 = num1:
// console.log(num1); //console result is 6
// console.log(num2); //console result is 6

// num1 ka stack me ke alag pointer hota  hai
// num2 ka stack me ke alag pointer hota  hai

//agar hum num1 ki value hum increment karte hai to sirf num1 ki value increment hogi num2 ki nahi hogi

//after increment value of num1
// console.log(num1); //console result is 7
// console.log(num2); //console result is 6

//let num1 = 6;
// let num2 = num1:
// so conclusion is primitive data type me memory location variables num1 and num2  ka alag alag hota hai agar num1 ko increment karenge  to num2 nhi hoga 

//reference data types
// let array1 = ["item1","item2"]
// let array2 = array1;

// console.log(array1);
// console.log(array2);

// array1.push("item3");
// console.log(array1);
// console.log(array2);

//reference data type me variable heap memory me store hota hai uska pointer sirf stack me hota hai us pointer ke pass heap memory ka address hota hai janha varible store hai

//for ex:- array1 , array2 dono ka pointer alag alag hoga ,  array1 ke pointer ke pass heap memory ki  location ka address hoga janha wo store hai ,array2 ke pointer ke pass bhi heap memory me janha array1 store hai usi ki  location ka address hai so ,means address same hota dono ke pass 


//notes :-
//primitive:- different address
//reference :- same address
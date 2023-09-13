//------------cloning array--------------

// let array1 = ["item1","item2"];
// console.log(array1);

//1)-------------slice method-----------------

// let array2 = array1.slice(0);
// console.log(array2);

//2)--------------concat method-----------

// let array2 = [].concat(array1);
// console.log(array2);

//3) -------------spread operator-------------
//-----new way to clone----------
// let array2 = [...array1];
// console.log(array2);

// adding more elements through slice method
// let array2 = array1.slice(0).concat(["item3","item4"]);
// console.log(array2);

// adding more elements through concat method

// let array2 = [].concat(array1,["item3","item4"]);
// console.log(array2);


// adding more elements through spread operator
// let array2 = [...array1,"item3","item4"];
// console.log(array2);

//adding a whole array through spread operator
// let array3 = ["item5","item6"];
// let array2 = [...array1,...array3];
// console.log(array2);

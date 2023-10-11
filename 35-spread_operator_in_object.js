let rcb = {
    kohli:"all rounder",
    faf:"big hitter",
    siraj:"bowler"
};
let mi = {
    rohit:"all rounder",
    pollard:"big hitter",
    hardik:"batsman"
};

console.log(rcb);
console.log(mi);
let newTeam = {...rcb,...mi};
console.log(newTeam);

let myArray = [..."123456789"];
let clonedArray = [...myArray];
console.log(clonedArray);

//object me ek key ek baar se jyada nhi ho sakti hai  
//for ex:- key1:"mango","key1":"grapes" means dono nhi aa sakti
//hamesha latest wali aayegi yani is case me key1:"grapes" value lega
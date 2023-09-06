//--------------String indexing------------

let firstName ="brocklesnar";
console.log(firstName);

//string ke har ek character ka index(position)
//hoti hai 
 
//b r o c k l e s n a r
//0 1 2 3 4 5 6 7 8 9 10

//to  find particular character by using (position) index

let position = firstName[5];
console.log(position);


//------------length of string------------
let lengthOfString = firstName.length;
console.log(lengthOfString);

//agar hum  string me spaces denge to length  me spaces bhi include hote hai

//index 0 se start hota hai
//aur length 1 se start hoti hai




//--------------how to find last index of  any string---------------

let myScore = "iiuyutydrsezdyuftiydrutdxutfydfjxglcncnclsndclsdscjshbcsdvcsdvcsjcbsjcvhsddvcsdcbsjcs";

//last index :length - 1
let lengthOFMyScore = myScore[myScore.length-1];
console.log(lengthOFMyScore);

//second last index : lenght - 1
let secondLastIndex = myScore[myScore.length-2];
console.log(secondLastIndex);
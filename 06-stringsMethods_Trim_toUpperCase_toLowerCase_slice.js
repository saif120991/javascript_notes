//--------------string Methods--------------

               //------------trim()----------------

// let teamName = "     coldDrinks    ";
// console.log(teamName);
// console.log(teamName.length);

//spaces remove karne ke lie hum trim method use karte hai

//ye original string ko change nhi karega ye new string dega jise hum dekhne ke lie ussi variable me  wapas se store kara sakte hai ya fhir new variable me store kara sakte hai.

//1st way (different variable storage)
// let trimmedteam = teamName.trim()

// console.log(trimmedteam);
// console.log(trimmedteam.length);

//2nd way (same variable storage)
// teamName = teamName.trim();
// console.log(teamName);
// console.log(teamName.length);


         //------------toUpperCase()---------------


         //toUpperCase() is used to capitalize characters of string

        //  let chocolates = "lionKing";

        //new variable method

        //  let newDish =  chocolates.toUpperCase();
        //  console.log(newDish);

         //ye original string ko change nhi karega ye new string dega jise hum dekhne ke lie ussi variable me  wapas se store kara sakte hai ya fhir new variable me store kara sakte hai.


         //same variable method
         
        //  chocolates = chocolates.toUpperCase();
        //  console.log(chocolates);
         

        //------------toLowerCase()---------------


         //toLowerCase() is used to print characters in small letters of string

        //  let chocolates = "MONKEY";

        //new variable method

        //  let newDish =  chocolates.toLowerCase();
        //  console.log(newDish);

         //ye original string ko change nhi karega ye new string dega jise hum dekhne ke lie ussi variable me  wapas se store kara sakte hai ya fhir new variable me store kara sakte hai.


         //same variable method
         
        //  chocolates = chocolates.toLowerCase();
        //  console.log(chocolates);
         


 //------------slice()---------------

 //agar hame string ke character me se kuch characters he chahiye to hum slice method use karte hai 

 //for ex:- agar hame is  string se sirf apple he chahiye

 //start index dena padta hai
 //end index jo hum dete hai usse slice include nhi  karta hai 



//  let str5 = "AnAppleADayKeepsTheDoctorAway";
//  str5 = str5.slice(2,7);

// agar hum sirf starting index denge ending index nhi denge to wo end tak jitne characters honge sabko  print kar dega
//  str5 = str5.slice(0);

//  console.log(str5);

//-------------------------------------------
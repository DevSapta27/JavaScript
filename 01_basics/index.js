console.log("Saptarshi Paul");
/*variables in js : let , const , var //
let and const are both local scope variables whereas var has Global scope */

/*let variable can be changed even if once assigned */
let firstName = "Saptarshi";
console.log(firstName)
firstName = 25 ;
console.log(firstName)
/*const variable cannot be reassigned */
const age = 21 ;
console.log(age);
const age2 = 20 ;
console.log(age2);
/*var variable can be changed even if once assigned  and can be used outside a scope*/
{
  var nameMine = "Saptarshi";
}
var num = 10 ;
console.log(num);
console.log(nameMine);
/*operators in js are : +, - , * , / 
Data Types in javascript are : number , boolean  , null , undefined , strings , objects */
/*number*/
let num1 = 10 ;
let num2 = 2 ;
console.log(num1+ num2);
console.log(num1 * num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num);
/*boolean :true is taken as 1 , false is taken as 0*/
let isLoggedIn = true ;
let isLoggedOut = false ;
console.log(isLoggedIn);
console.log(isLoggedOut);
/* null : it is a Primitive Data Type and it is used to denote the absensce of a data */
let data = null ;
let data2 = undefined ;
console.log(data);
console.log(data2);
/*strings : it is a collection of characters */
let FirstName = "Saptarshi";
let LastName = "Paul";
console.log(FirstName + " " + LastName);
/*objects : it is a collection of key value pairs */
let person = {
  firstName : "Saptarshi" ,
  lastName : "Paul" ,
  email : "saptarshi2027paul@gmail.com" ,
  phone : " 7980599896" ,
}
console.log(person);
/*conditional statements*/
let myAge = 21 ;
if ( myAge >= 18) {
  console.log("You are an adult");
}
else if (myAge >= 12 && myAge < 18) {
  console.log(" You are a teenager ")
}
else {
  console.log("You are a kid");
}
/*ternary operator */
let myAge2 = 30 ;
let result = myAge2 >= 25 ? console.log("Get Married") : console.log("Focus on carrer");
console.log(result);
/*operators*/
console.log( "1" + "1");
console.log( typeof("1" + "1"));
console.log("Saptarshi" + "27");
console.log( typeof("Saptarshi" + 27) );
console.log(1+ true) //true = 1 is js //
console.log(1+false) //false = 0 in js //
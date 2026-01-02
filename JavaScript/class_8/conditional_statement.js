




// let age = 25;
// if (condition){
//     //body
// }

//if else

let age = 17;
if (age >= 18) {
  console.log("you can apply for license");

} else {
  console.log("you are to young to apply for license");

}


//else if statement
let score = 60;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}


let marks = 20;
if (marks >= 25) {
  console.log("Pass");
} else {
  console.log("fail");

}

let age2 = 20;
if (age2 >= 18) {
  console.log("You are eligible to vote");
}


//logical operators

let number = 8;
if (number > 0 && number % 2 === 0) {
  console.log("The number is positive and even ");
} else if (number > 0 && number % 2 !== 0) {
  console.log("The Number is positive and add");

} else {
  console.log("The number is not postive.");

}


let isloggedin = false;
console.log(isloggedin ? "welcome" : "please Log in in");

//normal
// let age5 = 20;
// if (age5 >= 18) {
//   result = "Adult";
// } else {
//   result = "Minor";
// }
// console.log(result);

//ternary
let result = age >= 18 ? "adult" : "Minor";
console.log(result);
//switch statement

let day = 19;
let dayname;

switch (day) {
  case 1:
    dayname = "Monday";
    break;

  case 2:
    dayname = "Tuesday";
    break;

  case 3:
    dayname = "Wednasday";
    break;

  case 4:
    dayname = "Thursday";
    break;

  case 5:
    dayname = "Friday";
    break;

  case 6:
    dayname = "Saturday";
    break;

  case 7:
    dayname = "Sunday";
    break;

  default:
    dayname = "Kuch be";

}

console.log(dayname);

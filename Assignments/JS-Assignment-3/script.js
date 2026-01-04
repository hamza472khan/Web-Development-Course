const a = 91, b = 27;

let addition = a + b;
console.log(`Addition of ${a} and ${b} is: ` + addition);

let subtraction = a - b;
console.log(`Subraction of ${a} and ${b} is: ` + subtraction);

let multiplication = a * b;
console.log(`Multiplication of ${a} and ${b} is: ` + multiplication);

let division = a / b;
console.log(`Division of ${a} and ${b} is: ` + division);

let modulus = a % b;
console.log(`Reminder of ${a} and ${b} is: ` + modulus);

//==> Step 2 Assignment Operators
// simple assignment operator =
let number = 70;
console.log(number);
number = 90; // simple assginment operator =
console.log(number);

// += operator

number += 20; // means 90 + 20
console.log(number);

// -= operator

number -= 30; // means 110 - 30;
console.log(number);

// *= operator
number *= 2; // means 80 multiplied by 2
console.log(number);

// "/=" operator
number /= 4;// means 160 divided by 4
console.log(number);

//Comperison Operators

let val1 = 45, val2 = "71";

// Equal comperison ==
let equal = val1 == val2;// at checks only value
console.log(equal);//false becouse values is not equal

// Strick Compersion === 

let strick_equal = val1 === val2; // at checks the datatype also
console.log(strick_equal);//false becouse datatype and values both not match

// Not Equal Comperison !=
let not_equal = val1 != val2; // true 45 is not equal to 71
console.log(not_equal);

// Greater Than >
let greater_than = val1 > val2;
console.log(greater_than); // false 

// Less Than <

let less_than = val1 < val2; // true
console.log(less_than);

// Greater than or equal to >=
let geto = val1 <= val2; // true
console.log(geto);

// less than or equal to <= 
let leto = val1 <= val2; // true
console.log(leto);

//Expressions
let price = 799, quantity = 10;

let total_price = price * quantity;
console.log(`Total Price: ` + total_price);

// expression for student marks

let marks1 = 72, marks2 = 66, marks3 = 55;
let final_score = marks1 + marks2 + marks3;
console.log(`Total marks is: ` + final_score);

//Compering Number vs strigs

const num = 10;
const str = "10";
console.log(`  typeof: ${num} is: `, typeof num);
console.log(`  typeof: ${str} is: `, typeof str);

let comp = num == str;
console.log(`comperison of 10 == "10" is `, comp);//true becouse it cheks only values not the datatype

let strick_comp = num === str;
console.log(`strick comperison of 10 === "10" is `, strick_comp); //false becouse it checks both the values and the datatype

//The End of Js-Assignment-No.3
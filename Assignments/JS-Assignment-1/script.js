// this is the first task when the html file runs in the browser that will display Hellow world!

alert("Hellow World!");


//when you open the browser console that message will be shown in the console Hellow World 
console.log("Hellow World!");


// 3--> 

//variable store data - variable can be defined as var keyword

var studentName;
studentName = "Hamza Khan";
console.log(studentName); // that will console the studentNAme 'Hamza Khan' in   the   browser console

// let cannot initilize again with same name and varible can be initilize again 
//let can be defined as let keyword

let course = "islamyat";
console.log(course); // that will console the course in the browser 'islamyat'


// --> const

// difference between let and const is that const cannot be initilize seperately eg const course; instead it can be defined or initilize as 

const BatchNumber = "234";
console.log(BatchNumber); // that will console 234

const InstituteName = "Horizon Institute of Higher Studies FaqirAbad Peshawar";
console.log(InstituteName); // that will console the name of institute 'Horizon Institute of Higher Studies FaqirAbad Peshawar'



//changing the value of let variable
//let course = "JavaScript"; // that can cause error becouse we cannot use let keyword again instead we use only variable name and reassign the value
course = "JavaScript";
console.log(course);

//const cannot be reAssigned or Redeclaired becouse constant cannot allows us instead we use var or let
 BatchNumber = "786"; // cannot change
console.log(BatchNumber);// that will log console as type error








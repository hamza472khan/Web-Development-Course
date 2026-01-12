// check if a number is positive or negative

let number = -7;
if (number > 0){
    console.log("The Number is Positive! ");
    
}else if ( number < 0){
    console.log(" The Number is Negative! ");
    
}else {
    console.log(" The number is 0"); 
    
}


// task 2 even or odd

let evenOrOdd = 8;
if (evenOrOdd %2 === 0){
    console.log("The Number is Even!");
    
}else {
    console.log("The Number is ODD!");
    
}

//task 3
let under18 = 17;
if (under18 >= 18){
    console.log("You Are Adult!");
    
}else {
    console.log("You are Under 18");
    
}

//task 4:  write a funtion that adds to number

function add(num1,num2){
    return num1 + num2
}
console.log("Addition:" , add(12, 54));


// task 5: write a function that returns your name

function yourName (string){
    return string

}
console.log("Your Name is:", yourName("Hamza Khan")); // Your Name is: Hamza Khan

//task 6 : Convert Minutes into seconds 

function minutesToSeconds (Minutes){
    let seconds = Minutes * 60;
    return seconds
}
console.log("Seconds:", minutesToSeconds(40)); //  seconds: 2400 


// task 7: create an array of 5 numbers and print them using loop

let arrayOfNumbers = [5,34,6,22,45]

for(let i=0; i<arrayOfNumbers.length; i++){
    console.log(arrayOfNumbers[i]); // 5 34 6 22 45
    
}

//task 8: find the lengh of an array

let LenOfArray = ["Hamza", "Mohaib","aamir"];

console.log(`Length Of Array: ` , LenOfArray.length); //Length of array: 3

//task 9 : Print the first and last element if an array

let color = ["red", "green", "Yellow"]

    console.log("First: ", color[0]);// red
    console.log("last: ", color[color.length -1]);// yellow
    
//or by at()

console.log("first by at(): ", color.at(0));
console.log("last by at(): ", color.at(-1));

//task : objects  

let objStudent = {
    name: "hamza Khan",
    age: 21
}
console.log("student name: ", objStudent.name);// student name: HAmza Khan
console.log("Student Age: ", objStudent.age);// Student Age: 21

objStudent.age = 19; //The age will be updated

console.log(objStudent.age); // 19

function passOrFAil (marks){
    if(marks>= 40){
        console.log("pass!");
        
    }else{
        console.log("fail!");
        
    }
}
passOrFAil(54);


//task : 

function findGreater(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "Both are equal";
    }
}

console.log(findGreater(10, 25)); // Output: 25

//task : Isdivisible by 5
function isDivisibleByFive(number) {
    if (number % 5 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisibleByFive(20)); // Output: true
console.log(isDivisibleByFive(13)); // Output: false

//task 16: Find the largest number in an array

// Variable Scope Example

function isAccessible (){
    var element = 23;
    const pi = 3.14;
    let isActive = false;
    return true;
}
// console.log(isAccessible());
// console.log(typeof element); // ReferenceError
// console.log(typeof pi); // ReferenceError
// console.log(typeof isActive); // ReferenceError

// clusore concept 
function outer(){
    let message = "Hellow from outer function!";
    function inner(){
        console.log(message);
    }
    inner();        

}
outer();

//template Literals
let name = "John";
let age = 30;   
let greeting = `My name is ${name} and I am ${age} years old.`;
console.log(greeting);
// Output: My name is John and I am 30 years old.
let multiLine = `This is line one.
This is line two.
This is line three.`;   
console.log(multiLine);
// Output:
// This is line one.
// This is line two.
// This is line three.
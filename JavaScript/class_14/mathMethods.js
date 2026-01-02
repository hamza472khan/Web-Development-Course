//Math Methods

//max()  : maximum
//min()  : minimum
//pow()  : Power
//sqrt() : Square Root

let numbers1 = Math.max(2, 6, 9, 33, 644, 0);
let numbers2 = Math.min(2, 6, 9, 90, 34, 234);
console.log(numbers1);
console.log(numbers2);

console.log(Math.pow(5, 2)); //first baswe and second is power 5*5= 25

console.log(Math.sqrt(64));

// round

let a = 5.1;
let b = 5.6;
console.log(Math.round(a));// op 5
console.log(Math.round(b));// op 6

//random

// console.log(Math.random(a));
// console.log(Math.random(b));
// console.log(Math.random()*10);
// console.log(Math.random() * 10) + 1;

// function getRandomInteger(max, min) {
//     return Math.floor.random() * (max - min) + min;

// }
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
console.log(getRandomInteger(10, 20));





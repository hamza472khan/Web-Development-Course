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
let b = 5.8;
console.log(Math.round(a));// op 5 checking if the value is greater than .5 then shows greater value otherwise lower value
console.log(Math.round(b));// op 6

//random

// console.log(Math.random(a)); // giving random values
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

console.log(Math.floor(a));//roundup finishes the point and show exact valve 
console.log(Math.floor(b));


//trunc() : finishes the point and giving origional value
console.log(Math.trunc(a));

//abs() : negative value ko khatam karta hain
let g = -8.3;
console.log(Math.abs(g)); // 9.3

//num.toFixed()

console.log(numbers1.toFixed(1));// shows 1 value after point



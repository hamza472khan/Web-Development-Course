//js-assignment- 9  -- functions in js

//Task 1: Add Two Numbers
//Create a function that adds two numbers and returns the result.

let a = 3;
let b = 5;
function addition() {
    console.log(a + b);
}
// function call
addition(); // output: 8

//Or simple function

function add() {
    console.log(3 + 5);
}
// function call
add();//output: 8


//Task 2: Check Even or Odd
//Create a function that checks whether a number is Even or Odd.

function evenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("The Number is Even!");

    } else {
        console.log("The Number is ODD!");

    }
}
evenOrOdd(4);//even
evenOrOdd(3);//odd
evenOrOdd(27);//odd
evenOrOdd(674);//even
evenOrOdd(0); // even


// Task 3: Celsius to Fahrenheit
// Convert Celsius temperature into Fahrenheit.
// Formula:
// F = C * 1.8 + 32
// Example:
// Input: 0
// Output: 32

function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(27)); // 80.6
console.log(celsiusToFahrenheit(50)); // 122
console.log(celsiusToFahrenheit(-10)); // 14
console.log(celsiusToFahrenheit(34)); //93.2


// Task 4: Return Full Name
// Create a function that joins first name and last name.
// Example:

// Input: ("Ali", "Khan")
// Output: "Ali Khan"


function FullName(firstName, SecondName) {
    return firstName + " " + SecondName
}

console.log(FullName("ALi", "Khan")); // at must be in string format

//OR
// using templat literal back ticks ``
function getFullName(first, second) {
    return `${first} ${second}` // modern way
}
console.log(getFullName("Hamza", "Khan"));

// Task 5: Square a Number
// Return the square of a number.
// Example:
// Input: 4
// Output: 16

function square(num) {
    return num * num  // square is multiply the number by itself
}
console.log(square(2)); // 4
console.log(square(3)); // 9
console.log(square(23)); // 529
console.log(square(10)); // 100


// Task 6: Count Vowels
// Count how many vowels (a e i o u) are in a string.
// Example:
// Input: "Hello"
// Output: 2

function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return "Vowels " + count
}

console.log(countVowels("Hamza")); // output: vowels 2   // a a
console.log(countVowels("Hellow World"));// 3 //e o
console.log(countVowels("JAvaSCripT"));// 3   //A a i


// Task 7: Find Maximum of Three Numbers
// Find the largest number without using Math.max().
// Example:
// Input: (3, 9, 5)
// Output: 9


function max(num1, val2, num3) {
    if (num1 >= val2 && num1 >= num3) {
        return "MaXiuM Number is: " + num1

    } else if (val2 >= num1 && val2 >= num3) {
        return "MAximum Number is: " + val2

    } else {
        "MAximum Number is: " + num3
    }
}

console.log(max(3, 9, 5)); // 9
console.log(max(45, 90, 53)); // 90
console.log(max(32, 59, 51)); // 59 
console.log(max(30, 20, 42)); // undefined

function findMax(a, b, c) {
    let max = a;

    if (b > max) {
        max = b;
    }

    if (c > max) {
        max = c;
    }

    return max;
}

// Example usage:
console.log(findMax(3, 9, 5)); // Output: 9
console.log(findMax(45, 90, 53)); // 90
console.log(findMax(32, 59, 51)); // 59 
console.log(findMax(30, 20, 42)); // 42


// Task 8: Reverse a String
// Reverse any given string.
// Example:
// Input: "abc"
// Output: "cba"


function reverseString(str) {
    return str.split("").reverse().join("") // split("") method turns it into an array like ["H","a","m","z","a"]
    // reverse() flip the order like azmaH
    // join() puts it back into a string
}
console.log(reverseString("Hamza")); // azmaH
console.log(reverseString("Jalal")); // lalaJ
console.log(reverseString("jaleebi")); // ibeelaj


// Task 9: Palindrome Check
// Check whether a word is a palindrome.

// Example:
// Input: "Madam"
// Output: true

function isPalindrome(str) {
    // convert to lower case to handle Madam vs madam
    let cleanString = str.toLowerCase();

    // reverse the string
    let reverseSting = cleanString.split("").reverse().join("");

    // check if they match
    return cleanString === reverseSting
}
console.log(`palindrom: `, isPalindrome("Madam")); // palindrom:  true
console.log(`palindrom: `, isPalindrome("madam")); // palindrom:  true
console.log(`palindrom: `, isPalindrome("Sana")); // palindrom:  false
console.log(`palindrom: `, isPalindrome("mom")); // palindrom:  true
console.log(`palindrom: `, isPalindrome("suns")); // palindrom:  false


// Task 10: Factorial
// Calculate factorial of a number.
// Example:
// Input: 5
// Output: 120

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; // mutiply evey value starting from 1 to given munber n
    }
    return result;
}
console.log(factorial(5)); // Output: 120 ( 5*4*3*2*1 )
console.log(factorial(3)); // Output: 60  ( 3*2*1 )
console.log(factorial(6)); // Output: 720 ( 6*5*4*3*2*1)

// Task 11: Largest Number in Array
// Return the largest number from an array.

function findMax(arr) {
    return Math.max(arr);
}
console.log(findMax([3, 9, 5, 23, 12])); // Output: 23

// Task 12: Return Even Numbers Only
// Return only even numbers from an array.
// Example:
// Input: [1,2,3,4]
// Output: [2,4]

function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 4])); // Output: [2, 4]

//Task 13: Sum of Array Numbers
// Add all numbers in an array.
// Example:
// Input: [1,2,3]
// Output: 6

// using reduce() method
function sumArray(arr) {
    return arr.reduce((accumulator, current) => accumulator + current, 0);
  }

  console.log(sumArray([1, 2, 3])); // Output: 6  

//   Task 13: Calculate Discount Price
// What you have to do:
// Create a function that calculates the final price after discount.

function CalDiscountPrice(origionalPrice, discountPercentage){
    let discountPrice = origionalPrice* discountPercentage / 100 ;

    let finalPrice = origionalPrice - discountPrice;

    return finalPrice;
}

console.log(`Discounted Price is: `,  CalDiscountPrice(100, 20));//80
console.log(`Discounted Price is: `,  CalDiscountPrice(780, 23));//600.6
console.log(`Discounted Price is: `,  CalDiscountPrice(699, 13));//608.13
console.log(`Discounted Price is: `,  CalDiscountPrice(455, 22));//354.9
console.log(`Discounted Price is: `,  CalDiscountPrice(1223, 23));//941.71





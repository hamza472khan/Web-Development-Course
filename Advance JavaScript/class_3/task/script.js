console.log("==> Task-1 : Array Methods");
//Level 1: Warm-up Tasks 
// 1
// ️ map 
// You have an array of numbers: 
// [1, 2, 3, 4, 5] 
// Task: 
// Create a new array where each number is multiplied by 3. 

let numbers = [1, 2, 3, 4, 5];
let multipliedByThree = numbers.map((num) => num * 3);
console.log(multipliedByThree); // Output: [3, 6, 9, 12, 15]


//2
console.log("==>Task-2: Filter");
// ️ filter 
// You have an array: 
// [12, 5, 8, 130, 44] 
// Task: 
// Return only the numbers greater than 10.

let numArray = [12, 5, 8, 130, 44];
let filteredNumbers = numArray.filter((num) => num > 10);
console.log(filteredNumbers); // Output: [12, 130, 44]

// 3
console.log("==>Task-3: forEach");
// ️ forEach 
// You have: 
// ["apple", "banana", "mango"] 
// Task: 
// Print each fruit in this format: 
// Fruit: apple

let fruits = ["apple", "banana", "mango"];
fruits.forEach((fruit) => {
  console.log(`Fruit: ${fruit}`);
});

// Output:
// Fruit: apple
// Fruit: banana
// Fruit: mango

// 4
console.log("==>Task-4: map()");
// Level 2: Real-World Style Tasks 
// ️ map 
// You have an array of users: 
// const users = [ 
// { name: "Ali", age: 22 }, 
// { name: "Sara", age: 18 }, 
// { name: "Ahmed", age: 25 }
// ];
// Task: 
// Create a new array that contains only the names. 
const users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 18 },
  { name: "Ahmed", age: 25 }
];
let userNames = users.map((user) => user.name);
console.log(userNames); // Output: ["Ali", "Sara", "Ahmed"]

// 5
console.log("==>Task-5: filter()");
// ️ filter 
// Using the same users array above 
// Task: 
// Return only users who are 18 or older.

let adults = users.filter((user) => user.age >= 18);
console.log(adults);
// Output:
// [ { name: "Ali", age: 22 }, { name: "Sara", age: 18 }, { name: "Ahmed", age: 25 } ]  


// 6
console.log("==>Task-6: find()");
// ️ find 
// You have: 
// const products = [ 
// { id: 1, name: "Laptop" }, 
// { id: 2, name: "Phone" }, 
// { id: 3, name: "Tablet" } 
// ]; 
// Task: 
// Find the product with id === 2.
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" }
];
let phone = products.find((product) => product.id === 2);
console.log(phone); // Output: { id: 2, name: "Phone" }

// 7
console.log("==>Task-7: reduce()");
// Level 3: Logic-Thinking Tasks 
// 7
// ️ every 
// You have: 
// const scores = [70, 85, 90, 60]; 
// Task: 
// Check if all scores are above 50. 
const scores = [70, 85, 90, 60];
let allAboveFifty = scores.every((score) => score > 50);
console.log(allAboveFifty); // Output: true

// 8
console.log("==>Task-8: some()");
// ️ some 
// You have: 
// const emails = ["test@gmail.com", "hello@yahoo.com", "admin@gmail.com"]; 
// Task: 
// Check if at least one email is a Gmail account. 
const emails = ["test@gmail.com", "hello@yahoo.com", "admin@gmail.com"];
let hasGmail = emails.some((email) => email.endsWith("@gmail.com"));
console.log(hasGmail); // Output: true
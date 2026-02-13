let username: string = "John";
let age: number = 25;
let isAdmin: boolean = false;
let salary: number = 5000;

//task_2

function calculateTotal(price: number, tax: number): number {
  return price + tax;
}

//task_3

function greetUser(name: string): string {
  return `Hello, ${name}!`;
}

//task_ 4

let city = "London"; // here the typescript decide autometically the type of city is here "string"
let year = 2024; // here the typescript decide autometically the type of city is here "string"
let isOnline = true; //here the type is boolean typescript detect autometically

//task_5
// let score = 10;
// score = "high";  //When you wrote let score = 10;, TypeScript immediately locked the type of score to number. It assumes that since you initialized it with a number, you intend for it to stay a number.

let score = 10; // here it auto detct the type
score = 98; // the correct way is to write this in the number ts cannot allows us to to do this

//task_6
let userId: number | string;
userId = 101;
userId = "A101";

//task_7
// Function with Union Type: string | number
function printId(id: string | number) {
  // Bonus: Type checking/narrowing
  if (typeof id === "string") {
    // If it's a string, print in uppercase
    console.log(id.toUpperCase());
  } else {
    // If it's a number, print as is
    console.log(id);
  }
}

// Examples
printId("abc");  // Output: "ABC"
printId(123);    // Output: 123

//Task_7
// Define the user object with type annotations
const user: {
  name: string;
  age: number;
  isActive: boolean;
} = {
  name: "John Doe",
  age: 25,
  isActive: true
};

//task_8
// Define the reusable Product type
type Product = {
  id: number;
  name: string;
  price: number;
};

// Create the first product object
const product1: Product = {
  id: 101,
  name: "Wireless Mouse",
  price: 25.99
};

// Create the second product object
const product2: Product = {
  id: 102,
  name: "Mechanical Keyboard",
  price: 89.50
};

//task_9
// Updated Product type with an optional description
type Product = {
  id: number;
  name: string;
  price: number;
  description?: string; // The '?' makes this optional
};

// Product with a description
const product12: Product = {
  id: 201,
  name: "Noise Cancelling Headphones",
  price: 299.00,
 // description: "High-quality headphones with active noise cancellation."
};

// Product without a description
const product22: Product = {
  id: 202,
  name: "USB-C Cable",
  price: 15.00
};

//task 11
const scores: number[] = [85, 92, 78];
const cities: string[] = ["London", "New York", "Tokyo"];
const statusFlags: boolean[] = [true, false, true];

//task 12
const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25, },
  { id: 3, name: "Monitor", price: 300 },
];

//task 13
function getTotalPrice(prices: number[]): number {
  return prices.reduce((sum, current) => sum + current, 0);
}

// task 14
type User = {
  id: number | string;
  name: string;
  age: number;
  email?: string;
};

const users: User[] = [
  { id: "u1", name: "Alice", age: 28, email: "alice@example.com" },
  { id: 102, name: "Bob", age: 35 },
];

function printUserInfo(user: User): void {
  console.log(`User: ${user.name} (Age: ${user.age})`);
  if (user.email) {
    console.log(`Email: ${user.email}`);
  }
}
// task 15
type CartItem = {
  productName: string;
  quantity: number;
  price: number;
};

const cart: CartItem[] = [
  { productName: "Apple", quantity: 5, price: 0.5 },
  { productName: "Bread", quantity: 1, price: 2.0 },
];

function calculateCartValue(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

// task 16
function processValue(value: string | number): number {
    if (typeof value === "string") {
      // TypeScript knows value is a string here
      return value.length;
    } else {
      // TypeScript knows value is a number here
      return value * value;
    }
  }
  
  // Testing the function
  console.log(processValue("Hello")); // Output: 5
  console.log(processValue(10));      // Output: 100
  

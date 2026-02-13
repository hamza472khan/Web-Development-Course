// type innotation : hum khud define karty hain ke es ke data type kia hoogi
// let a: string = "10";

// a = "test";
// // a = 10; //through error in compile time
// console.log(a);
// let b;
// b = "test";
// let check: boolean = true;
// console.log(check);

// //type Inferences: typescript khud define karta hain sab se pehle value define honi se
// let isTrue = true;
// // isTrue = "";
// console.log(isTrue);

// // Explicitly defining an array of strings
// let superpowers: string[] = ["Invisibility", "Flight", "Telepathy"];

// // Using the Generic syntax
// let powerLevels: Array<number> = [9001, 8500, 42];

// // This would cause a TypeScript error:
// // superpowers.push(100);

// // An array of arrays (a 2D grid of numbers)
// const matrix: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // This array can hold BOTH strings and numbers
// let scores: (string | number)[] = [95, "A+", 82, "B"];

// scores.push(100); // Works
// scores.push("Fail"); // Works
// // scores.push(true); // Error: Boolean is not allowed

// // Useful for things like [latitude, longitude] or [id, name]
// let user: [number, string];

// user = [1, "Alex"]; // Correct
// // user = ['Alex', 1]; // Error: The order matters!

// const constants: readonly number[] = [3.14, 1.61, 2.71];

// // constants.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'

// interface Pizza {
//   flavor: string;
//   slices: number;
//   isVegetarian: boolean;
// }

// const order: Pizza[] = [
//   { flavor: "Pepperoni", slices: 8, isVegetarian: false },
//   { flavor: "Mushroom", slices: 6, isVegetarian: true },
// ];

// export {};
let a:string = "10";

a= "test";

let check:boolean = true;
console.log(check);

//type inferences
let isTrue = 123;
// isTrue ="";
console.log(isTrue);

console.log(a); 

let b:any = "343";
b= 123;
console.log(b);

let userNames: (string | number| boolean ) [] = [];
userNames.push("HAmza Khan");``
userNames.push(93049);
userNames.push(true);
console.log(userNames);


let userDetails {
  fistName: "Hamza",
  lastName: "Khan",
  eligiblity: boolean ,
  age: 12

}= {
  fistName: "Hamza",
  lastName: "khan",
  eligiblity: true,
  age: 23,


}
// userDetails.check = false;
// userDetails.firstName = "hamzqkjfk";
// // console.log(userDetails.firstName);

// let userDetails: {
//   firstName: string;
//   lastName: string;
//   eligiable: boolean;
// } = {
//   firstName: "werw",
//   lastName: "asdf",
//   eligiable: true,
//   age: 12,
// };

// export {};

// spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combinedArr = [...arr1, ...arr2];
// console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

const student1 = {
    name: "Alice",
    age: 20,
};
const student2 = {
    grade: "A",
    major: "Computer Science",
};

const allStudent = {
    ...student1,
    ...student2
}
// console.log(allStudent); // { name: 'Alice', age: 20, grade: 'A', major: 'Computer Science' }\



// array destructuring with spread operator
let numbers = [10, 20, 30, 40, 50];
let [first, second, ...rest] = numbers;
// console.log(first); // 10
// console.log(second); // 20
// console.log(rest); // [30, 40, 50]




//array random numbers

let randomNumbers = [3, 1, 4, 2, 5, 6, 7, 8, 9, 9, 9, 11, 10, 21, 15,15];
//pick second largest number
function secondLargest(arr) {
    let uniqueNumbers = [...new Set(arr)];
    uniqueNumbers.sort((a, b) => b - a);
    return uniqueNumbers[1];
}
console.log(secondLargest(randomNumbers)); 


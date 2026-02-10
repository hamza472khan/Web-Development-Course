//Array Methods 
//Ternary Operator


//1. Filter Method : for filtering out the array
const studentsAge = [18, 22, 25, 30, 17, 19, 21];
let ageCondtion = 18;
let filterArray = studentsAge.filter((item) => {
    return item >= ageCondtion;
});
// console.log(filterArray)


// traditional way
let maximumAge = [];
for (let i= 0; i<studentsAge.length; i++){

if(studentsAge[i] >= ageCondtion){
    maximumAge.push(studentsAge[i]);

}
}

// console.log(maximumAge);// same output like fileter array




//map method
const user = [    
    {
      id : 1 ,
      name: "Alice Johnson",
      age: 28,
      score: 834,
      isActive : true
    },
    {
      id : 2 ,
      name: "Alice Johnson",
      age: 37,
      score: 8438,
      isActive : false
    },
    {
      id : 3 ,
      name: "Alice Johnson",
      age: 34,
      score: 2348,
      isActive : true
    },
    {
      id : 4 ,
      name: "Alice Johnson",
      age: 24,
      score: 548,
      isActive : false
    },
    {
      id : 5 ,
      name: "Alice Johnson",
      age: 28,
      score: 238,
      isActive : true
    },
    {
      id : 6 ,
      name: "Alice Johnson",
      age: 23,
      score: 838,
      isActive : false
    }
  ]
  
  



// let Ages = user.map((item)=>{
//     return item.age;
// });
// console.log(Ages);
// let AgesID = user.map((item)=>{
//     return item.id;
// });
// console.log(AgesID);

// let agesScore = user.map((item)=>{
//     return item.score;
// });
// console.log(agesScore);


// let ages= users.filter((item)=>{
//     return item.age <= 27;
// });
// console.log(ages);




//  Sort Methods

//Accending order

// let sortedArray = studentsAge.sort((a , b)=> a - b);
// console.log(sortedArray);

//Decending Order

// let sortedArray2 = studentsAge.sort((i , j)=> j - i);
// console.log(sortedArray2);



// include() method ; try your self

//concat()  ; try our self


//every() methods

let output = user.every((item)=> item.isActive == true);
console.log(output);

// some
let output2 = user.some((item)=> item.isActive == true);
console.log(output2);


// Using traditional for loop

// Equivalent to every()
let output3 = true;
for (let i = 0; i < user.length; i++) {
  if (user.isActive !== true) {
    output = false;
    break; // Short-circuit: stop as soon as one fails
  }
}
console.log(output3);

// Equivalent to some()
let output4 = false;
for (let i = 0; i < user.length; i++) {
  if (user.isActive === true) {
    output2 = true;
    break; // Short-circuit: stop as soon as one passes
  }
}
console.log(output4);

//find() method
let findUser = user.find((item)=> item.id == 3);
console.log(findUser);

// findIndex() method
let findUserIndex = user.findIndex((item)=> item.id == 4);
console.log(findUserIndex);

//reduce() method
let totalScore = user.reduce((accumulator , currentValue)=>{
    return accumulator + currentValue.score;
} , 0);
console.log(totalScore);    

//includes() method
let numbers = [1, 2, 3, 4, 5];
let hasThree = numbers.includes(3);
console.log(hasThree); // true  
let hasTen = numbers.includes(10);
console.log(hasTen); // false   

//concat() method
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
// Ternary Operator
let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // "Yes, you can vote."
let access = (age < 13) ? "Child Access" : (age >= 13 && age < 20) ? "Teen Access" : "Adult Access";
console.log(access); // "Teen Access"   



//call back function
//higher order function
//local storage
//

// loops in js
// for of : used for array
// for in : used for object


// for (student of students){
//     console.log(student.name);
//     console.log(student.age);
// }

// const groceries = ["Milk", "Eggs", "Bread", "Butter", "Apples", "Chicken"];
// const users = [
//     { id: 1, name: "Alice", status: "active", loginCount: 15 },
//     { id: 2, name: "Bob", status: "inactive", loginCount: 2 },
//     { id: 3, name: "Charlie", status: "active", loginCount: 42 },
//     { id: 4, name: "Diana", status: "active", loginCount: 7 }
//   ];
//   const laptop = {
//     brand: "Dell",
//     model: "XPS 13",
//     ram: "16GB",
//     storage: "512GB SSD",
//     screen: "4K Touch"
//   };


//  let items = "bread";
// for (items of groceries){
//     // console.log(item);
// }
// for(items of groceries){
//     if(items === groceries)
//         // console.log(items);
        
// }

let studentMarks= [23, 45, 7, 23, 56];
for ( score of studentMarks){
    // console.log(score);
}

//for objects  
let object1 = {a:1, b:2, c:3};
for (key in object1){
    // console.log(key);
    // console.log(object1[key]);
    // console.log("key: "+ key + "value:  " + object1[key]);
}

//break statement
for (let i = 1; i<8; i++){
  if (i===5){
    break;
  }
  // console.log(i);
  
}

//continue statement //means igore or skip
for (let i = 1; i<8; i++){
  if (i===4){
    continue; // skip the value eg 4
  }
  console.log(i);
  
}




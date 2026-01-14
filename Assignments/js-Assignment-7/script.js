// JavaScript Assignment 7 - Loops


// loop - simple counting

for (i = 1; i <= 5; i++) {
    console.log(`Roll No. ` + i);
}


//While Loop - Simple condition
let j = 0;
while (j < 3) {
    j++;
    console.log(`item: ` + j);
}

//do-While loop (Runs At-least one time)

// const correctPin = "4534";
// let UserEntry;
// do {
//     // UserPin = prompt("Please Enter Your 4 Digit Pin: ");
  
//         break; 
    
// } while (UserEntry !== correctPin);


//     // alert("Access granted! Your PIN is correct.");


    let userWish;
    let count = prompt("How many times do you want to print Hello?");
    
  
    for (userWish =1; userWish<=count; userWish++){
        console.log("Hellow Hamza  " + userWish);
        
    }
// we are discussing loops

//for loops

// for (exp1; exp2; increment){
//body}

// for (initilization; condition; increment/decrement){
// code block to be executed}

for (let i = 0; i < 5; i++) {
    console.log("Increment Loop: " + i);

}

for (let i = 5; i > 0; i--) {
    console.log("---Decrement --- Loop: " + i);
    console.log("-----Hamza-----");


}

for (let j = 1; j < 9; j++) {
    if (j % 2 == 0){
    console.log("Even: " + j);
} else {
    console.log("Odd: "+j);

}}

for(let k =1; k<10; k++){
    console.log(k, k%2===0,"even: "+k);
    console.log(k, k%2===1,"Odd: "+k);
    
}


//do while loop

let m = 1;

do {
    console.log(m);
    m++;
    
}while (m <= 5)

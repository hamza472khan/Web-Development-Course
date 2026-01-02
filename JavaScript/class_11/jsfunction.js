// function in js
//syntex

//function fnname(){
    //function body
//}

//function call
//fname()

function add(){
    console.log(1+3);
}

// add();
// add();
// add();

function logMessage() {
    console.log('Welcome to function');
  }
   
//   logMessage();


  function Display(){
    console.log("welcome Hamza!");
    
  }
//   Display();

  // using loop

  for(let i=0; i<10; i++){
    // Display();
  }

  //function with return 

  function func(){
      return 10;
      console.log("I will not be logged.");
  }
  const result = func();
//   console.log(result);
//   func();



let firstvalue;
let secoundvalue;
let a;

// firstvalue = prompt("Enter your first value");
// secoundvalue = prompt

function addition(firstvalue,secoundvalue){
    
    let result = firstvalue + secoundvalue;

    alert("your Addition result is: " + result)

}
function mul(firstvalue,secoundvalue){
    let result = firstvalue * secoundvalue;

    alert("your Addition result is: " + result)


}
function sub(firstvalue,secoundvalue){
    let result = firstvalue - secoundvalue;

    alert("your Addition result is: " + result)

    

}
let num1=Number(prompt("Enter 1st number"));
let num2=Number(prompt("Enter 1st number"));

let operator = prompt("Enter Your Your operator");
if (operator== "+"){
    addition(num1, num2);
}else if (operator == "-"){
    sub(num1, num2);
}
    else if (num1, num2){
      mul(num1, num2);
    }
    else{
      console.log("operator is incorrect");
      
    }


    





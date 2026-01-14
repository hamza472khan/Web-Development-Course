// Logical Operators
//==> 1. Logical AND (&&) Operator

//for this purpose we use if statement for better result
let age = 20;
let feePaid = false;

// Use && to check both conditions

if (age >= 18 && feePaid === true) {
    console.log("Status: Your Are Eligible to Enter To Exam!");
} else {
    console.log("Status: Your are not Allowed to Enter to the Exam!");
}

//==> Logical OR (||) Operator

let emailCorrect = false;
let phoneCorrect = false;

if (emailCorrect || phoneCorrect) {
  if (emailCorrect) {
    console.log("Login successful using email");
  } else {
    console.log("Login successful using phone number");
  }
} else {
  console.log("Login failed. Invalid email and phone number");
}

//==> Logical Not Operator

let isBlocked = false;

let access = !isBlocked;

if (access){
    console.log("You are allowed to access This Site!");
    
}else {
    console.log("You ARe not allowed To Access This Site!");
    
}

//==> Logical AND and logical OR Both at same time
let isLoggedIn = true; // isLoggedIn = true - required condition satisfied
let isPremium = false;  //- isPremium = false → not premium
let hasCoupon = false;

// Condition for special discount
// User must be logged in
// AND (user is premium OR user has a coupon)
let getsDiscount = isLoggedIn && (isPremium || hasCoupon); // if true discount allowed 

console.log("Special discount:", getsDiscount);

// or by if statement

if (isLoggedIn && (isPremium || hasCoupon)) {
    console.log("Special discout for you!");
    
}else {
    console.log("Welcome! not premium and no coupon"); // this will print only if both condition is false
    
}

// if isLoggedIn is true and the remining isPremium and hasCoupon the two of one can be true the result will be true becouse in this situation we use OR (||) operator and in OR, one condition must be true for gaining the result true
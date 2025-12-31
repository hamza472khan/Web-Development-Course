//datatypes in js
//Premitive Datatype
//1==> String
//2==> Number
//3==> Boolean
//4==> Undefined
//5==> Null
//6==> BigInt
//7==> Symbol

//===> String
let name1 = "Hamza Khan"; // when i use name vs code call me name is depricated
console.log(name1);

console.log("type of ", name1, "is: ", typeof name1);//op: type of Hamza Khan is: string

let city = "Peshawar"; // this is a veriable with datatype string

console.log(city);
console.log("type of ", city, "is: ", typeof city);


//===> Number
const age = 26;
console.log(age);
console.log("type:  ", typeof age);

const price = 9855;
console.log(price);
console.log("type:  ", typeof price);

//===> Boolean

let EarthIsRound = true;
console.log(EarthIsRound);
console.log(typeof EarthIsRound);


var BatsAreBlind = false;
console.log(BatsAreBlind);
console.log(typeof BatsAreBlind);


//===> Undefined

var kuchBiNahi;
console.log(kuchBiNahi); // that will console undefined


//===> Null

let khaali = null; // null pass as intentionally
console.log(typeof khaali);


//===> type Conversion

//===> String to Number

let a = "Hamza";
console.log(typeof a);

a = "03109882";
console.log(typeof Number(a));
console.log(a);
console.log(typeof a);

let PrPrice = "98.56 usd";
console.log(PrPrice);
console.log(typeof PrPrice); //string
console.log(typeof Number(PrPrice));// number
//or
console.log(typeof +"98.56"); // number becouse of unairy +


//===> Number To String


let month = 12;// number
console.log(month);//number
console.log(typeof month);// number
let m = String(month);// string
console.log(typeof m); 
//or
console.log(typeof String(month));// string


//====> String to Boolean
let string1 = "WorldWAr";
let boolean1 = Boolean(string1);
console.log(boolean1); // it will log true

let str2 = "";//string
let boolean2 = Boolean(str2);
console.log(boolean2);//op: false becouse of empty

//or
//using double negation (!!)

let string3 = "hello";// in the double cotes its string
let bool3 = !!string3;
console.log(bool3); // output : true


let string4 = "";// in the double cotes its string
let bool4 = !!string4;
console.log(bool4); // output : false

//or
let t = "true";
let bo = Boolean(t);
console.log(bo);//true

let t2 = "";
let bo2 = Boolean(t2);
console.log(bo2); // false

//====> Non Numeric String into number

let non = "abc";
console.log(typeof non);

let n = Number(non);
console.log(n);//sir giving output NaN means not a number 

//====> Converting 0 and 1 into boolean

let p = 0;
let q = Boolean(p);
console.log(q); // giving false in the console

let j = 1;
let k = Boolean(j);
console.log(k);// sir giving true in the console


// The End..........

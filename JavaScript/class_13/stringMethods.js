//paddStart()
//padEnd()
//repeat()

let phoneNumber = "123545454";
let addPakCode = phoneNumber.padStart(13, "+92 ")
console.log(addPakCode);

function addPrefix(phone, len){
    return phone.padStart(len, "+92 ");
}
console.log(addPrefix("3109880470",14));
// console.log(addPrefix("3109880470",13));
// console.log(addPrefix("3109880470",15));
// console.log(addPrefix("3109880470",16));
// console.log(addPrefix("3109880470",10));
// console.log(addPrefix("3109880470",14));
// console.log(addPrefix("3109880470",14));


//====> repeat()

let text = "Hamza Khan ";
console.log(text.repeat(20));

//===> replace()

let greet = "How are you? How are you?";
console.log( greet.replace("are", "r"));//word with first letter only
// console.log(text.replaceAll("Khan", "Ahmad"));
console.log(greet.replaceAll("are", "r"));


let message = "how are you";

let cta = message.split(" ");
let cta2 = message.split("");
let cta3 = message.split();
let cta4 = message.split("r")
// console.log(cta);
// console.log(cta2);
// console.log(cta3);
// console.log(cta4);

//===> join() :  it convert array into string

let cta6 = message.split(" ");
console.log(cta6);
let cts = cta.join(" ")
let cts2 = cta.join("-")
let cts3 = cta.join("|")


//===> reverse()

let rs = cta.reverse();
console.log(cta);
let ms = cta.join("|")
console.log(ms);
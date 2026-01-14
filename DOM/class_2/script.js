// // select element by class

// let container = document.getElementsByClassName("container");
// console.log(container);// if we use getElementByClass() it will return array for this purpose we use indexes like container[0] eg.

// console.log(container[0].innerHTML);// this will return all the array tag name and inside the whatever you wrote like insite p tag we write something this and tag name all return 
// console.log(container[0].innerText);// this will return html element tex like p tag inside taxt

// let output = document.getElementsByClassName("output");
// // output[0].innerHTML = container[0].innerHTML;
// output[0].innerHTML = "This is the new Tag created by js dom";

// console.log(output);


// let killl = document.getElementById("kill");
// console.log(killl); // return only element


// let para = document.getElementsByClassName("para");
// // para[0].style.color = "red
// for (let i = 0; i <= para.length; i++) {
//     if (i % 2 == 0) {
//         para[i].style.color = "blue";
//     } else if (i % 2 == 1) {
//         para[i].style.color = "red";
//     } else {
//         para[i].style.color = "green";
//     }
// }



let headings = document.getElementsByTagName("h2");

console.log(headings);

let para2 = document.querySelector("#paraid");
console.log(para2);
let para3 = document.querySelectorAll(".para");
console.log(para3);


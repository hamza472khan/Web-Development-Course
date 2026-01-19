// let container = document.getElementById("container");
// let output = document.getElementById("output");

// console.log(container.innerText);
// console.log(container.innerHTML);
// console.log(container.textContent);
// output.innerHTML = container.innerHTML;




//Attrivute mainpulation
// console.log(container.getAttribute("id"));
// console.log(output.getAttribute("class"));
// console.log(container.getAttribute("class"));


// let nameLabel = document.getElementsByTagName("label");
// console.log(container.getAttribute("label")[1]);


// let change = ("img");
// change[0].setAttribute("img");
// console.log(change[0]);

// function changeImg(){
//     document.getElementsByTagName("img")[0];
//     changeImg.setAttribute("src" , "../../images/illustration.jpg");
//     changeImg.setAttribute("width", "400px");
//     changeImg.setAttribute("height", "400px");
//     img.removeAttribute("src");}

function changeImage() {
    let img = document.getElementsByTagName("img")[0];
      img.setAttribute("src", "../../images/illustration.jpg");
      img.setAttribute("width", "400px");
      img.setAttribute("height", "400px");
    // img.removeAttribute("src");
  }


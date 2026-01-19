document.title =" Dom MAnipulation";
console.log(document.title);
console.log(document.body);
document.body.style.backgroundColor = "black";


// let ViewPhotoBtn = document.getElementById = "ViewPhotoBtn";
function ViewPhoto(){
    let photo = document.getElementById("hk");
    photo.classList.add("hamza");
    let body = document.body;
    let hks = document.body.contains("photo");
    
    if(hks == true) {
        visualViewport.innerText = "Hide Photo";
        body.classList.remove("photo")
    }
}
// function ViewPhoto(){
//     let photo = document.getElementById("hk");
//     photo.classList.add("hamza");
// }


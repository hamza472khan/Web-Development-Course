let parentEle = document.getElementById("parentEle");
console.log(parentEle);

// parentEle.style.backgroundColor = "lightblue";
// parentEle.style.width = "200px";
// parentEle.style.height = "200px";


function addClass(){
    parentEle.classList.add("box");
}


function removeClass(){
    // parentEle.classList.remove("box");
    setTimeout(()=> {
        parentEle.classList.remove("box")
    })
}

let changeModeBtn = document.getElementById("changeModeBtn");

function changeMode(){
    let body = document.body;
    let isLight = body.classList.contains("light-mode");
    if (isLight == true){
        changeModeBtn.innerText = "Light Mode";
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");

    }else {
        changeModeBtn.innerText = "Dark Mode";
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
    }
}
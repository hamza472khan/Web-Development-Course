
function createNewPara() {
    let createEle = document.createElement("p");
    createEle.innerText = "this is para created using dom ";
    createEle.setAttribute("class", "para");
    document.body.appendChild(createEle);
    console.log(createEle);
}

function createNewH1() {   
    let createEle = document.createElement("h1");
    createEle.innerText = "This is h1 tag create using dom";
    createEle.setAttribute("class", "heading");
    document.body.appendChild(createEle);

}



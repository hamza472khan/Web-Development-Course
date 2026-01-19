// console.log("Hamza Khan");

function changeText() {
    document.getElementById("text").innerText = "Text Changed!";
}

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function showBox() {
    document.getElementById("box").style.display = "block";

}

function hideBox() {
    document.getElementById("box").style.display = "none";

}

function toggleClass() {
    document.getElementById("box1").classList.toggle("active");
}

function showValue() {
    document.getElementById("result").innerText = document.getElementById("input").value;
}

let count = 1;
function addItmes() {
    let li = document.createElement("li");
    li.innerText = "Item" + count++;
    document.getElementById("list").appendChild(li);
}


function deleteItem(btn) {
    btn.parentElement.remove();
}

let count1 = 0;
function increase() {
    count1++;
    document.getElementById("count1").innerText = count1;

}
function decrease() {
    count1--;
    document.getElementById("count1").innerText = count1;

}

function changeImage() {
    document.getElementById("img").src =
        "../../../images/sari.jpg";
}
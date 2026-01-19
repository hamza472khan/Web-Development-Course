// Selecting buttons using DOM
const redBtn = document.getElementById("redBtn");
const greenBtn = document.getElementById("greenBtn");
const blueBtn = document.getElementById("blueBtn");
const yellowBtn = document.getElementById("yellowBtn");
const whiteBtn = document.getElementById("whiteBtn");

// Adding click events
redBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
});

greenBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
});

blueBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
});

yellowBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "yellow";
});

whiteBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "white";
});

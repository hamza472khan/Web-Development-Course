// Changing Text using javaScript

// selecting HTML Element heading h3
let heading = document.getElementById("h3");

// changing text using js

heading.innerText = "Welcome To JavaScript DOM";

console.log(heading);

// Change Paragraph Text on Button

function changeText() {
    let changeText = document.getElementById("p");
    changeText.innerText = "This Paragraph Text is changed using Dom by Hamza Khan!";
}

// Change Backgound Color Using DOM
let btnMode = document.getElementById("btnMode");
function changeBgColor() {
    let body = document.body;
    let islight = body.classList.contains("light-mode");
    if (islight) {
        btnMode.innerText = "Light-Mode";
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");

    } else {
        btnMode.innerText = "Dark-Mode";
        body.classList.add("light-mode");
        body.classList.remove("dark-mode")
    }
}

// Show Alert on Button Click

function showAlert() {
    alert(" DOM is Working! This Alert is shown using DOM by Hamza Khan!");
}


    // update Text using input Field
    function changeTextPara() {
        let inputText = document.getElementById("inputField").value;
        document.getElementById("result").innerText = inputText;    
    }


    //The End
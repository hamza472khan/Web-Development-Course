let todoList = document.getElementById('todoList');
let inputField = document.getElementById("inputField");

function addItem() {
    let listItem = document.createElement('li');
    listItem.innerHTML = inputField.value;
    inputField.value="";

    todoList.appendChild(listItem);

}
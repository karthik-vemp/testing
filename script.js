// script.js

function getUserInput() {
    // Get the user input from the input field
    var userName = document.getElementById("userName").value;

    // Pass the user input to another function or perform any desired action
    displayUserInput(userName);
}

function displayUserInput(name) {
    // You can do something with the user input, such as displaying it
    alert("Hello, " + name + "! You submitted your name.");
    // You can also store it or perform any other actions as needed
}

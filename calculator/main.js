let divideBtn = document.getElementById("divide");
let multiplyBtn = document.getElementById("multiply");
let subtractBtn = document.getElementById("subtract");
let addBtn = document.getElementById("add");
let equalBtn = document.getElementById("equal");

addBtn.addEventListener("click", add);

function add(a, b) {
    console.log(8)
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
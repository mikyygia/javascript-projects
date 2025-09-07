let divideBtn = document.getElementById("divide");
let multiplyBtn = document.getElementById("multiply");
let subtractBtn = document.getElementById("subtract");
let addBtn = document.getElementById("add");
let equalBtn = document.getElementById("equal");
let clearBtn = document.getElementById("clear");
let outputDisplay = document.getElementById("output");

let digitList = document.querySelectorAll(".digit");
let operatorList = document.querySelectorAll(".operator");

let num1 = 0;
let num2 = 0;
let operator = "";

clearBtn.addEventListener("click", clearOutput);

digitList.forEach((item) => {
    item.addEventListener("click", () => setOutput(item.textContent));
});

operatorList.forEach((item) => {
    item.addEventListener("click", () => {
        let itemContent = item.textContent;
        setOperator(itemContent);
    })
});

function clearOutput() {
    outputDisplay.textContent = 0;
}

function add(a, b) {
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

function operate(operator, num1, num2) {

}

function setOutput(str) {
    num1 = Number(str);

    if (outputDisplay.textContent == "0") {
        outputDisplay.textContent = num1;
    } else {
        outputDisplay.textContent += num1;
    }
}

function setOperator(input) {
    operator = input;
    outputDisplay.textContent += operator;
}
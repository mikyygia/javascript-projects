let divideBtn = document.getElementById("divide");
let multiplyBtn = document.getElementById("multiply");
let subtractBtn = document.getElementById("subtract");
let addBtn = document.getElementById("add");
let equalBtn = document.getElementById("equal");
let clearBtn = document.getElementById("clear");
let outputDisplay = document.getElementById("output");

let btnList = document.querySelectorAll("button");
let digitList = document.querySelectorAll(".digit");
let operatorList = document.querySelectorAll(".operator");

let num1;
let num2;
let operator = [];

clearBtn.addEventListener("click", clearOutput);
digitList.forEach((item) => { item.addEventListener("click", () => setOutput(item.textContent)); });

operatorList.forEach((item) => {
    item.addEventListener("click", () => {
        let content = item.textContent;

        if (content != "=") {
            if (!operator[0]) {
                setOutput(content);
                operator[0] = content;
            }
            else {
                operator[1] = content;
                evaluteOutput();
                setOutput(content);
            }
        } else {
            evaluteOutput();
        }
    })
});

function clearOutput() {
    outputDisplay.textContent = "0";
    num1 = undefined;
    num2 = undefined;
    operator = [];
}

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

function setOutput(str) {
    if (outputDisplay.textContent === "0") {
        outputDisplay.textContent = str;
    } else {
        outputDisplay.textContent += str;
    }
}

function evaluteOutput() {
    if (outputDisplay.textContent === "Error ✖𐃷✖") { return; }

    let arr = outputDisplay.textContent.split(operator[0]);
    num1 = Number(arr[0]);
    num2 = Number(arr[1]);

    outputDisplay.textContent = "0";

    if (num2 == NaN) { return; }

    if (num2 == 0) {
        setOutput("Error ✖𐃷✖");
        num2 = NaN;
        operator.shift();
        return;
    }

    if (operator[0] == "+") {
        num1 = add(num1, num2);
        setOutput(num1);
    } else if (operator[0] == "-") {
        num1 = subtract(num1, num2);
        setOutput(num1);
    } else if (operator[0] == "x") {
        num1 = multiply(num1, num2);
        setOutput(num1);
    } else if (operator[0] == "/") {
        num1 = divide(num1, num2);
        setOutput(num1);
    }

    num2 = NaN;
    operator.shift();
}
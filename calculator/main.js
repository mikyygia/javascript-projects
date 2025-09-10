let clearBtn = document.getElementById("clear");
let delBtn = document.getElementById("del");
let outputDisplay = document.getElementById("output");

let digitList = document.querySelectorAll(".digit");
let operatorList = document.querySelectorAll(".operator");

let num1;
let num2;
let operator = [];


clearBtn.addEventListener("click", clearOutput);

delBtn.addEventListener("click", () => {
    if (outputDisplay.textContent != "0") {
        outputDisplay.textContent = outputDisplay.textContent.slice(0, -1);

        if (outputDisplay.textContent == "") {
            outputDisplay.textContent = "0";
        }
    }
})

digitList.forEach((item) => { item.addEventListener("click", () => setOutput(item.textContent)); });

operatorList.forEach((item) => {
    item.addEventListener("click", () => {
        let content = item.textContent;

        if (content != "=") {
            if (!operator[0]) {
                setOutput(content);
                operator[0] = content;
            } else {
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


function setOutput(str) {
    if (outputDisplay.textContent === "0") {
        outputDisplay.textContent = str;
    } else {
        outputDisplay.textContent += str;
    }
}

function evaluteOutput() {
    if (outputDisplay.textContent == "Error") { return; }

    let arr = outputDisplay.textContent.split(operator[0]);
    num1 = Number(arr[0]);
    num2 = Number(arr[1]);

    outputDisplay.textContent = "0";

    if (num2 == NaN) { return; }

    if (num2 == 0 && operator[0] == "x") {
        setOutput("Error");
        num2 = NaN;
        operator.shift();
        return;
    }

    if (operator[0] == "+") {
        num1 = num1 + num2;
        setOutput(num1);
    } else if (operator[0] == "-") {
        num1 = num1 - num2;
        setOutput(num1);
    } else if (operator[0] == "x") {
        num1 = num1 * num2;
        setOutput(num1);
    } else if (operator[0] == "/") {
        num1 = (num1 / num2).toFixed(8);
        setOutput(num1);
    } else if (operator[0] == " mod ") {
        num1 = num1 % num2;
        setOutput(num1);
    }

    num2 = NaN;
    operator.shift();
}
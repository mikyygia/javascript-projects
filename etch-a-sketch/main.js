const container = document.querySelector(".container");
const sizeBtn = document.getElementById("setSize");
let size = 16; // default size
let isHoverable = false;

function createGrid(dimension) {
    let px = 600 / dimension;

    console.log(px);

    for (let i = 0; i < dimension; i++) {

        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let j = 0; j < dimension; j++) {
            let col = document.createElement("div");
            col.classList.add("box");
            col.style.width = `${px}px`;
            col.style.height = `${px}px`;
            row.appendChild(col);
        }
        container.appendChild(row);
    }

    let allBox = document.querySelectorAll(".box");


    allBox.forEach((box) => {
        box.addEventListener("mousedown", () => {
            isHoverable = !isHoverable;
            box.style.backgroundColor = "black";
        });

        box.addEventListener("mouseenter", () => {
            if (isHoverable) box.style.backgroundColor = "black";
        });
    })
}

function clearGrid() {
    container.innerHTML = "";
}

createGrid(size);

sizeBtn.addEventListener("click", () => {
    let newSize = prompt("Enter the number of squares per side (max 100): ", size);

    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
            clearGrid(); ``
            createGrid(newSize);
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    }
})


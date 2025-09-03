const container = document.querySelector(".container");
let size = 16; // default

function createGrid(dimension) {
    let px = 960 / dimension;

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
}

createGrid(size);

let allBox = document.querySelectorAll(".box");
let isHoverable = false;

allBox.forEach((box) => {
    box.addEventListener("mousedown", () => {
        isHoverable = !isHoverable;
        box.style.backgroundColor = "white";
    });

    box.addEventListener("mouseenter", () => {
        if (isHoverable) box.style.backgroundColor = "white";
    });
})
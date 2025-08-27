const btn = document.querySelector("div button");
let list = document.querySelector("ul");
let newItem = document.getElementById("item");


btn.addEventListener("click", () => {
    // create our new list
    let item = document.createElement("li");

    // create our span and place our item in
    let span = document.createElement("span");
    span.textContent = newItem.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener("click", () => item.remove());

    // place our item and delete button into the li
    item.appendChild(span);
    item.appendChild(deleteBtn);

    // apppend our li into our list
    list.appendChild(item);

    newItem.value = ""; // clear the input bar
});

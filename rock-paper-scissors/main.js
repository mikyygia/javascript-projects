const choiceButton = Array.from(document.querySelectorAll("button"));
let humanScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");

humanScore.textContent = 0;
computerScore.textContent = 0;


let display = document.querySelector(".outcome");

function getComputerChoice() {
    let x = parseInt(Math.random() * 3);

    return x == 0 ? "rock" :
        x == 1 ? "paper" :
            "scissors";
}

function getHumanChoice() {
    let choice = prompt("your choice: ");
    return choice;
}

function settleScore(h) {
    if (h == 5) {
        document.querySelector("#results").textContent = "Niee! You won the game!"
    } else {
        document.querySelector("#results").textContent = "Computer wins this game!"
    }
}

function updateScore(who) {
    let human = Number(humanScore.textContent);
    human++;

    let comp = Number(computerScore.textContent);
    comp++;

    if (who === "human") humanScore.textContent = human;
    else computerScore.textContent = comp;

    if (human == 5 || comp == 5) {
        settleScore(human);
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        display.textContent = `tie! both played ${humanChoice}`;
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            display.textContent = `your ${humanChoice} beats ${computerChoice}`;
            updateScore("human");
        } else {
            display.textContent = `your ${humanChoice} loses against ${computerChoice}`;
            updateScore("computer");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            display.textContent = `your ${humanChoice} loses against ${computerChoice}`;
            updateScore("computer");
        } else {
            display.textContent = `your ${humanChoice} beats ${computerChoice}`;
            updateScore("human");
        }
    } else {
        if (computerChoice === "rock") {
            display.textContent = `your ${humanChoice} loses against ${computerChoice}`;
            updateScore("computer");
        } else {
            display.textContent = `your ${humanChoice} beats ${computerChoice}`;
            updateScore("human");
        }
    }
}


choiceButton.forEach(btn => {
    btn.addEventListener("click", () => {
        playRound(btn.textContent, getComputerChoice());
    })
})
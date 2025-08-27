let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    let x = humanChoice.toLowerCase();
    x == "rock" ? x = 0 :
        x == "paper" ? x = 1 :
            x = 2;

    if (x == computerChoice) {
        console.log("Both tied with " + humanChoice);
        return;
    } else if (x == 0) {
        if (computerChoice == 1) {
            // user rock & computer paper
            console.log("You lose! Paper beats Rock");
            computerScore++;
            return;
        } else {
            // user rock & computer scissors
            console.log("You won! Rock beats Scissors");
            humanScore++;
        }

    } else if (x == 1) {
        if (computerChoice == 0) {
            // user paper & computer rock
            console.log("You win! Paper beats Rock");
            humanScore++;
            return;
        } else {
            // user paper & computer scissors
            console.log("You lose! Scissors beat paper");
            computerScore++;
        }
    } else if (x == 2) {
        if (computerChoice == 0) {
            // user scissors & computer rock
            console.log("You lose! Rock beats scissors");
            computerScore++;
            return;
        } else {
            // user scissors & computer paper
            console.log("You win! Scissors beat paper");
            humanScore++;
        }
    }
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
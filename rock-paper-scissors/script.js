function getComputerChoice() {
    const randomChoice = Math.random();

    if (randomChoice < 1 / 3)
        return "rock";
    else if (randomChoice < 2 / 3)
        return "paper";
    else
        return "scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection)
        return "Tie";

    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper")
                return "You lose";
            else
                return "You win";
            break;

        case "paper":
            if (computerSelection === "scissors")
                return "You lose";
            else
                return "You win";
            break;

        case "scissors":
            if (computerSelection === "rock")
                return "You lose";
            else
                return "You win";
            break;

        default:
            return "Wrong input";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper or scissors?");
        const computerSelection = getComputerChoice();
        alert("Computer's choice: " + computerSelection);
        alert(playRound(playerSelection, computerSelection));
    }
}


game();
function getComputerChoice() {
    const randomChoice = Math.random();

    if (randomChoice < 1 / 3)
        return "alien";
    else if (randomChoice < 2 / 3)
        return "spaceship";
    else
        return "astronaut";
}

/* Alien beats Spaceship.
Spaceship beats Astronaut.
Astronaut beats Alien. */

function playRound(playerSelection, computerSelection) {
    // winning choices
    const selections = {
        "alien": "spaceship",
        "spaceship": "astronaut",
        "astronaut": "alien"
    };

    playerSelection = playerSelection.toLowerCase();

    if (!(playerSelection in selections))
        return "Wrong input";

    if (playerSelection === computerSelection)
        return "Tie";
    else if (selections[playerSelection] === computerSelection)
        return "You win";             // if the corresponding value is computer's selection, the player wins
    else
        return "You lose";
}

function handleClick(event) {
    const button = event.target;
    let playerSelection;

    switch (button.id) {
        case "alienButton":
            playerSelection = "alien";
            break;
        case "spaceshipButton":
            playerSelection = "spaceship";
            break;
        case "astronautButton":
            playerSelection = "astronaut";
            break;
        default:
            playerSelection = "unknown";
    }

    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.textContent = result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper or scissors?");
        const computerSelection = getComputerChoice();
        alert("Computer's choice: " + computerSelection);
        alert(playRound(playerSelection, computerSelection));
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})
//game();
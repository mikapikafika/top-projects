/**
 * Randomizes computer's choice.
 * @returns {string} computer's choice
 */
function getComputerChoice() {
    const randomChoice = Math.random();

    if (randomChoice < 1 / 3)
        return "alien";
    else if (randomChoice < 2 / 3)
        return "spaceship";
    else
        return "astronaut";
}


/**
 * Play's a round of rock paper scissors.
 * @param playerSelection player's choice (input by clicking a button)
 * @param computerSelection computer's choice (input by randomly generating)
 * @returns {string} message with the result
 */
function playRound(playerSelection, computerSelection) {
    /* Alien beats Spaceship.
    Spaceship beats Astronaut.
    Astronaut beats Alien. */
    const selections = {
        "alien": "spaceship",
        "spaceship": "astronaut",
        "astronaut": "alien"
    };

    playerSelection = playerSelection.toLowerCase();

    if (!(playerSelection in selections))
        return "Wrong input";

    if (playerSelection === computerSelection)
        return "It's a tie! The cosmic forces are perfectly balanced, as all things should be.";
    else if (selections[playerSelection] === computerSelection)
        return "Congratulations! You emerged victorious in the Galactic Showdown!";  // if the corresponding value is computer's selection, the player wins
    else
        return "Oh no! Better luck next time in your cosmic battles.";
}


let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

/**
 * Handles what happens upon clicking, main function
 * @param event a click
 */
function handleClick(event) {
    const button = event.target.closest("button");
    if (!button) return;
    let value;
    let message;

    switch (button.id) {
        case "alienButton":
            value = "alien";
            message = getRandomMessage(value);
            break;
        case "spaceshipButton":
            value = "spaceship";
            message = getRandomMessage(value);
            break;
        case "astronautButton":
            value = "astronaut";
            message = getRandomMessage(value);
            break;
    }

    const computerChoice = getComputerChoice();
    const result = playRound(value, computerChoice);
    const resultContainer = document.getElementById("resultContainer");

    // updating scores
    if (result.includes("Congratulations!")) {
        playerScore++;
    } else if (result.includes("Oh no!")) {
        computerScore++;
    }
    roundsPlayed++;

    resultContainer.innerHTML = `You chose: <span class="choice-text text-uppercase">${value}</span><br>
                                  <span class="message-text">${message}</span><br><br>`;

    // adding a delay of 2 seconds before showing the full result
    setTimeout(() => {
        resultContainer.innerHTML += `Your opponent chose: <span class="choice-text text-uppercase">${computerChoice}</span><br>
                                       <span class="message-text">${result}</span><br><br>
                                       SCORES: Player <span class="choice-text">${playerScore} - ${computerScore}</span> Computer<br>
                                       <span class="message-text">Round #${roundsPlayed}</span>`;
        if (roundsPlayed === 5) {
            // checking the winner after 5 rounds
            let winner;
            if (playerScore > computerScore) {
                winner = "Player";
            } else if (playerScore < computerScore) {
                winner = "Opponent";
            } else {
                winner = "It's a tie!";
            }
            resultContainer.innerHTML += `<br>Game Over! The winner is: ${winner}`;
            // resetting scores and roundsPlayed for a new game
            roundsPlayed = 0;
            playerScore = 0;
            computerScore = 0;
        }
    }, 2000);
}


/**
 * An object containing messages when a certain type is chosen
 * @type {{spaceship: string[], astronaut: string[], alien: string[]}}
 */
const messages = {
    alien: [
        "You have chosen the Alien! Prepare to astound your opponents with extraterrestrial technology.",
        "The Alien stands ready to defend your honor! Let its advanced tech lead you to triumph.",
        "May the Alien's advanced technology guide your path to victory in this galactic duel.",
        "The Alien awaits your command! Show your foes the might of extraterrestrial forces."
    ],
    spaceship: [
        "You've selected the Spaceship! Embark on an epic cosmic journey across the galaxies.",
        "As you choose the Spaceship, get ready to soar through the cosmos and unleash its interstellar power.",
        "With the Spaceship as your ally, traverse the vastness of space and outmaneuver your opponents.",
        "You've chosen the Spaceship, the epitome of cosmic exploration. Let the stars be your guide!"
    ],
    astronaut: [
        "You've become the Astronaut! Prepare for a daring space odyssey and reach for the stars.",
        "With the Astronaut as your avatar, embark on a cosmic adventure and defy the unknown.",
        "You're the fearless space traveler! Show the universe your resourcefulness in the Galactic Showdown.",
        "As the Astronaut, your fate is among the stars. Soar high and conquer the cosmos in style."
    ]
};


/**
 * Randomly chooses the messages from the object above
 * @param type alien, spaceship or astronaut
 * @returns {*|string} message to display
 */
function getRandomMessage(type) {
    const messageList = messages[type.toLowerCase()];
    if (!messageList) {
        return "Invalid choice";
    }
    return messageList[Math.floor(Math.random() * messageList.length)];
}


const buttonsContainer = document.querySelector(".buttons");
buttonsContainer.addEventListener("click", handleClick);



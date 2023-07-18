
let playerLives = 5;
let computerLives = 5;
let round = 0

function getComputerChoice() {
    const weapons = ['Rock', 'Paper', 'Scissors']
    const computerSelection = weapons[Math.floor(Math.random() * weapons.length)]

    return computerSelection
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            console.log(`Thats a draw!, a pair of ${computerSelection}s means a draw`);
            break;
        case (playerSelection === 'Rock' && computerSelection === 'Scissors'):
        case (playerSelection === 'Paper' && computerSelection === 'Rock'):
        case (playerSelection === 'Scissors' && computerSelection === 'Paper'):
            console.log(`You beat that computer!, ${playerSelection} beats ${computerSelection}`);
            computerLives -= 1;
            break;
        case (playerSelection === 'Rock' && computerSelection === 'Paper'):
        case (playerSelection === 'Paper' && computerSelection === 'Scissors'):
        case (playerSelection === 'Scissors' && computerSelection === 'Rock'):
            console.log(`You lost!, ${playerSelection} beats ${computerSelection}`);
            playerLives -= 1;
            break;
    }
    console.log(playerLives);
    console.log(computerLives);
    return [playerLives, computerLives];
}

function countRounds() {
    round += 1;
    console.log(round);
    return round;
}

function resetGame() {
    playerLives = 5;
    computerLives = 5;
    round = 0;
}

function endGame(playerLives, computerLives) {
    if (playerLives === 0 || computerLives === 0) {
        console.log("Game has ended")
        resetGame();
    }
}

function playGame() {
    let playerSelection = prompt('Select your weapon (Rock, Paper, Scissors)');
    playRound(playerSelection, getComputerChoice());
    countRounds();
    endGame(playerLives, computerLives);
}

const weaponButtons = document.querySelectorAll('.weapon-button');
const rounds = document.querySelector('.rounds .number');
const cpuWins = document.querySelector('.computer-wins .number');
const playWins = document.querySelector('.player-wins .number');
const gameInfo = document.querySelector('.round-info');
const playAgainButton = document.getElementById('play-again-button');
const computerImg = document.querySelectorAll('.computer-weapon')

let playerWins = 0;
let computerWins = 0;
let round = 0

function getComputerChoice() {
    const weapons = ['Rock', 'Paper', 'Scissors']
    const computerSelection = weapons[Math.floor(Math.random() * weapons.length)]

    
    return computerSelection
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            gameInfo.innerText = `Thats a draw!, a pair of ${computerSelection}s means a draw`;
            break;
        case (playerSelection === 'Rock' && computerSelection === 'Scissors'):
        case (playerSelection === 'Paper' && computerSelection === 'Rock'):
        case (playerSelection === 'Scissors' && computerSelection === 'Paper'):
            gameInfo.innerText = `You beat that computer!, ${playerSelection} beats ${computerSelection}`;
            playerWins += 1;
            break;
        case (playerSelection === 'Rock' && computerSelection === 'Paper'):
        case (playerSelection === 'Paper' && computerSelection === 'Scissors'):
        case (playerSelection === 'Scissors' && computerSelection === 'Rock'):
            gameInfo.innerText = `You lost!, ${playerSelection} beats ${computerSelection}`;
            computerWins += 1;
            break;
    }

    cpuWins.innerText = `${computerWins}`;
    playWins.innerText = `${playerWins}`;

    return [playerWins, computerWins];
}

function countRounds() {
    round += 1;
    rounds.innerText = `${round}`;
    return round;
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    round = 0;
    cpuWins.innerText = `${computerWins}`;
    playWins.innerText = `${playerWins}`;
    rounds.innerText = `${round}`;
}

function endGame(playerWins, computerWins) {
    if (playerWins === 2) {
        gameInfo.innerText = 'Game has ended, congratulations you win!';
        playAgainButton.style.display = "inline-block";
    } else if (computerWins === 2) {
        gameInfo.innerText = 'Game has ended, better luck next time!';
        playAgainButton.style.display = "inline-block";
    }
}

function playGame() {
    let playerSelection = prompt();

    playRound(playerSelection, getComputerChoice());
    countRounds();
    endGame(playerWins, computerWins);
}

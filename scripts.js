const weaponButtons = document.querySelectorAll('.player-button');
const playerImg = document.querySelectorAll('.player-button img');
const computerImg = document.querySelectorAll('.computer-weapon');
const rounds = document.querySelector('.rounds .number');
const cpuWins = document.querySelector('.computer-wins .number');
const playWins = document.querySelector('.player-wins .number');
const gameInfo = document.querySelector('.round-info');
const playAgainButton = document.getElementById('play-again-button');

let playerWins = 0;
let computerWins = 0;
let round = 0

function getComputerChoice() {
    const weapons = ['Rock', 'Paper', 'Scissors']
    const computerSelection = weapons[Math.floor(Math.random() * weapons.length)]

    switch (computerSelection){
        case 'Rock':
            computerImg[0].style.filter = 'none';
            computerImg[0].style.transform = 'scale(1.1)';
            computerImg[1].style.filter = 'grayscale(100%)';
            computerImg[1].style.transform = 'scale(1)';
            computerImg[2].style.filter = 'grayscale(100%)';
            computerImg[2].style.transform = 'scale(1)';
            break;
        case 'Paper':
            computerImg[0].style.filter = 'grayscale(100%)';
            computerImg[0].style.transform = 'scale(1)';
            computerImg[1].style.filter = 'none';
            computerImg[1].style.transform = 'scale(1.1)';
            computerImg[2].style.filter = 'grayscale(100%)';
            computerImg[2].style.transform = 'scale(1)';
            break;
        case 'Scissors':
            computerImg[0].style.filter = 'grayscale(100%)';
            computerImg[0].style.transform = 'scale(1)';
            computerImg[1].style.filter = 'grayscale(100%)';
            computerImg[1].style.transform = 'scale(1)';
            computerImg[2].style.filter = 'none';
            computerImg[2].style.transform = 'scale(1.1)';
            break;
    }
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
            gameInfo.innerText = `You lost!, ${computerSelection} beats ${playerSelection}`;
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
    computerImg[0].style.filter = 'grayscale(100%)';
    computerImg[0].style.transform = 'scale(1)';
    computerImg[1].style.filter = 'grayscale(100%)';
    computerImg[1].style.transform = 'scale(1)';
    computerImg[2].style.filter = 'grayscale(100%)';
    computerImg[2].style.transform = 'scale(1)';

    playerImg[0].style.filter = 'grayscale(100%)';
    playerImg[0].style.transform = 'scale(1)';
    playerImg[1].style.filter = 'grayscale(100%)';
    playerImg[1].style.transform = 'scale(1)';
    playerImg[2].style.filter = 'grayscale(100%)';
    playerImg[2].style.transform = 'scale(1)';

    gameInfo.innerText = 'Select your weapon to play';
    playAgainButton.style.display = 'none';

    weaponButtons.forEach((button) => {
        button.disabled = false;
    });
}

function endGame(playerWins, computerWins) {
    if (playerWins === 5) {
        gameInfo.innerText = 'Game has ended, congratulations you win!';
        playAgainButton.style.display = "inline-block";
        weaponButtons.forEach((button) => {
            button.disabled = true;
        });
    } else if (computerWins === 5) {
        gameInfo.innerText = 'Game has ended, better luck next time!';
        playAgainButton.style.display = "inline-block";
        weaponButtons.forEach((button) => {
            button.disabled = true;
        });
    }
}

function playGame() {
    let playerSelection = '';

    weaponButtons.forEach((weapon) => {
        weapon.addEventListener('click', () => {
            if(weapon.classList.contains('rock')){
                playerImg[0].style.filter = 'none';
                playerImg[0].style.transform = 'scale(1.1)';
                playerImg[1].style.filter = 'grayscale(100%)';
                playerImg[1].style.transform = 'scale(1)';
                playerImg[2].style.filter = 'grayscale(100%)';
                playerImg[2].style.transform = 'scale(1)';
                playerSelection = 'Rock';
                // console.log(playerSelection)
            }else if(weapon.classList.contains('paper')){
                playerImg[0].style.filter = 'grayscale(100%)';
                playerImg[0].style.transform = 'scale(1)';
                playerImg[1].style.filter = 'none';
                playerImg[1].style.transform = 'scale(1.1)';
                playerImg[2].style.filter = 'grayscale(100%)';
                playerImg[2].style.transform = 'scale(1)';
                playerSelection = 'Paper';
                // console.log(playerSelection)
            }else if(weapon.classList.contains('scissors')){
                playerImg[0].style.filter = 'grayscale(100%)';
                playerImg[0].style.transform = 'scale(1)';
                playerImg[1].style.filter = 'grayscale(100%)';
                playerImg[1].style.transform = 'scale(1)';
                playerImg[2].style.filter = 'none';
                playerImg[2].style.transform = 'scale(1.1)';
                playerSelection = 'Scissors';
                // console.log(playerSelection)
            }
            countRounds();
            playRound(playerSelection, getComputerChoice());
            endGame(playerWins, computerWins);
        });
    });
    
    playAgainButton.addEventListener('click', () => {
        resetGame();
    });

    
}

playGame();

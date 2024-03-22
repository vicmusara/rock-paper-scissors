let playerScore = 0;
let computerScore = 0;
let ties = 0;

const hands = document.querySelectorAll('.hand');
const resultText = document.querySelector('.result');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const tiesSpan = document.getElementById('ties');
const resetButton = document.getElementById('reset');

hands.forEach(hand => {
  hand.addEventListener('click', function() {
    const playerSelection = this.id;
    const computerSelection = getComputerChoice();
    const winner = determineWinner(playerSelection, computerSelection);
    updateScore(winner);
    displayResult(winner, playerSelection, computerSelection);
  });
});

resetButton.addEventListener('click', function() {
  playerScore = 0;
  computerScore = 0;
  ties = 0;
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  tiesSpan.textContent = ties;
  resultText.textContent = "Choose your move!";
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  switch (player + computer) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      return 'player';
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      return 'computer';
    default:
      return 'tie';
  }
}

function updateScore(winner) {
  if (winner === 'player') {
    playerScore++;
  } else if (winner === 'computer') {
    computerScore++;
  } else {
    ties++;
  }
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
  tiesSpan.textContent = ties;
}

function displayResult(winner, playerSelection, computerSelection) {
  if (winner === 'player') {
    resultText.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else if (winner === 'computer') {
    resultText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
  } else {
    resultText.textContent = "It's a tie!";
  }
}

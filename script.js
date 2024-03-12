const options = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
};

const checkWinner = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) return "Tie";
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
};

const playRound = (playerSelection, computerSelection) => {
  const result = checkWinner(playerSelection, computerSelection);
  if (result === "Tie") {
    return "It's a tie!";
  } else if (result === "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};

const getPlayerChoice = () => {
  let validInput = false;
  while (!validInput) {
    const choice = prompt("Rock, Paper, Scissors").toLowerCase();
    if (choice === null) {
      continue;
    }
    if (options.includes(choice)) {
      validInput = true;
      return choice;
    }
  }
};

const playGame = () => {
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("Let's play!");
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    const winner = checkWinner(playerSelection, computerSelection);
    if (winner === "Player") {
      scorePlayer++;
    } else if (winner === "Computer") {
      scoreComputer++;
    }
  }
  console.log("Game Over");
  if (scorePlayer > scoreComputer) {
    console.log("Player wins");
  } else if (scorePlayer < scoreComputer) {
    console.log("Computer wins");
  } else {
    console.log("It's a tie!");
  }
};

playGame();

const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length); // Generates a random index
    return choices[randomIndex];
};

const computerChoice = getComputerChoice();
console.log("Computer's choice:", computerChoice);
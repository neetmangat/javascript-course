let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    const userDifference = Math.abs(secretTarget - userGuess);
    const computerDifference = Math.abs(secretTarget - computerGuess);

    if (userDifference === computerDifference) {
        return true;
    }

    if (userDifference > computerDifference) {
        return false;
    }

    if (userDifference < computerDifference) {
        return true;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

const advanceRound = () => {
    currentRoundNumber += 1
}
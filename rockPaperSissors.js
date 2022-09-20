/*
in this practice, we created a simple game of rock, paper, scissors.
 A winner it determined and if there is a tie it is consoled
*/

// step 1: user should be able to choose 'rock', 'paper', or 'scissors' when game starts
// step 2: check to make sure user inputs valid choice
const getUserChoice = (userInput) => {
	userInput = userInput.toLowerCase();
	if (
		userInput === "rock" ||
		userInput === "paper" ||
		userInput === "scissors"
	) {
		return userInput;
	} else {
		console.log("Error, please type in rock, paper, or scissors");
	}
};

// step 3: computer makes choice
const getComputerChoice = () => {
	let randomNumber = Math.floor(Math.random() * 3);
	switch (randomNumber) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
	}
};

// step 4: determines a winner
const determineWinner = (userChoice, computerChoice) => {
	// if its a tie
	if (userChoice === computerChoice) return "Game is a tie!";
	if (userChoice === "rock") {
		if (computerChoice === "paper") return "The computer won!";
	} else {
		return "You won!";
	}
	if (userChoice === "paper") {
		if (computerChoice === "scissors") return "The computer won!";
	} else {
		return "You won!";
	}
	if (userChoice === "scissors") {
		if (computerChoice === "rock") return "The computer won!";
	} else {
		return "You won!";
	}
};

// step 5: function to play game
const playGame = () => {
	let userChoice = getUserChoice("rock");
	let computerChoice = getComputerChoice("paper");
	console.log(`You threw ${userChoice}`);
	console.log(`You threw ${computerChoice}`);
	console.log(determineWinner(userChoice, computerChoice));
};

playGame();

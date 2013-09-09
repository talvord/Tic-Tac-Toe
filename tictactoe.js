var currentPlayer;
var isGameOver;
var grid;

function startGame() {
	currentPlayer = 'X';
	isGameOver = false;
	grid = [
		['-', '-', '-'],
		['-', '-', '-'],
		['-', '-', '-']
	];
}

function showGameStatus() {
	console.log('Current Player: ' + currentPlayer);

	for (var row = 0; row < grid.length; row++) {
		console.log(grid[row]);
	}
}

function takeTurn(row, col) {
	if (isGameOver) {
		return;
	}

	// check if it's a valid pick
	if (isPickValid(row, col) == false) {
		console.log("Invalid pick, try again.");
		return;
	}

	// show player's pick
	showPlayersPick(row, col);

	// check for a winner
	checkForWinner();

	// switch player
	switchPlayer();

	showGameStatus();
}

function getPlayersPick() {

}

function isPickValid(row, col) {
	// check that the row and column are valid (between 0 and 2)
	if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) {
		return false;
	}

	if (grid[row][col] == '-') {
		return true;
	} else {
		return false;
	}
}

function showPlayersPick(row, col) {
	grid[row][col] = currentPlayer;
}

function getWinner() {
	// check columns
	// check first column
	if (grid[0][0] == grid[1][0] && grid[0][0] == grid[2][0]) {
		return grid[0][0];
	} else if (grid[0][1] == grid[1][1] && grid[0][1] == grid[2][1]) {
		return grid[0][1];
	} else if (grid[0][2] == grid[1][2] && grid[0][2] == grid[2][2]) {
		return grid[0][2];
	}
	// check rows
	if (grid[0][0] == grid[0][1] && grid[0][0] == grid[0][2]) {
		return grid[0][0];
	} else if (grid[1][0] == grid[1][1] && grid[1][0] == grid[1][2]) {
		return grid[1][0];
	} else if (grid[2][0] == grid[2][1] && grid[2][0] == grid[2][2]) {
		return grid[2][0];
	}

	// check diagonals
      if (grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2]) {
		return grid[0][0];
	} else if (grid[0][2] == grid[1][1] && grid[0][2] == grid [2][0]) {
		return grid [0][2];
	}
	// check for free moves (tie)


	return false;
}

function checkForWinner() {
	var winner = getWinner();

	if (winner == 'X' ){
		alert('Player X Won!');
		isGameOver = true;
	} else if (winner == 'Y') {
		alert('Player Y Win!');
		isGameOver = true;
	} else if (winner == 'T') {
		alert('Tie game!');
		isGameOver = true;
	}
}

function switchPlayer() {
	if (currentPlayer == 'X') {
		currentPlayer = 'O';
	} else if (currentPlayer == 'O') {
		currentPlayer ='X';
	}
}

startGame();
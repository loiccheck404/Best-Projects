let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function makeMove(index) {
  if (!isGameActive || board[index] !== "") {
    return;
  }

  board[index] = currentPlayer;
  document.getElementById(`cell-${index}`).textContent = currentPlayer;

  checkForWinner();
}

function checkForWinner() {
  let roundWon = false;

  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] === "" || board[b] === "" || board[c] === "") {
      continue;
    }

    if (board[a] === board[b] && board[b] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    document.getElementById(
      "status"
    ).textContent = `Player ${currentPlayer} Wins!`;
    isGameActive = false;
    return;
  }

  if (!board.includes("")) {
    document.getElementById("status").textContent = "It's a Draw!";
    isGameActive = false;
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "x";
  document.getElementById(
    "status"
  ).textContent = `Player ${currentPlayer}'s Turn`;
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  (currentPlayer = "X"), (isGameActive = true);
  document.getElementById("status").textContent = "Player X's Turn";
  document.querySelectorAll(".cell").forEach((cell) => (cell.textContent = ""));
}

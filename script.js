const cells = document.querySelectorAll(".grid-item");
let board = Array(9).fill(null);
let currentPlayer = "X";
let gameOver = false;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameOver) return;

    const index = Number(cell.dataset.index);
    if (board[index]) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner()) {
      document.getElementById("ending").innerText = `${currentPlayer} won`;
      gameOver = true;
      return;
    }

    if (board.every((cell) => cell !== null)) {
      document.getElementById("ending").innerText = "TIE";
      gameOver = true;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

function checkWinner() {
  for (let pattern of winningPatterns) {
    const a = pattern[0];
    const b = pattern[1];
    const c = pattern[2];
    if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function reset() {
  board.fill(null);
  currentPlayer = "X";
  gameOver = false;
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  document.getElementById("ending").innerText = "";
}

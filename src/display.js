const statusAlert = document.getElementById("statusAlert");

const initializeBoard = () => {
  const gBoard = document.getElementsByClassName("gameboard")[0];

  for (let i = 1; i <= 9; i++) {
    const el = document.createElement("a");
    el.classList.add("gameboardslot");
    el.setAttribute("id", `${i}`);
    el.setAttribute("onclick", "gameCycleController.gameLoop(this.id)");

    gBoard.appendChild(el);
  }
};

const win = (currentPlayer) => {
  statusAlert.innerText = `${currentPlayer.name} won this game`;
};

const draw = () => {
  statusAlert.innerText = "Not bad it is a draw";
};

const renderGameArray = (gameBoard) => {
  const gameBoardd = [...document.querySelectorAll(".gameboard a")];
  gameBoardd.forEach((cell, i) => {
    cell.innerText = gameBoard.getGameBoardArray()[i] || "";
  });
};

const resetdisplay = () => {
  statusAlert.innerText = "";
  const gameBoardd = [...document.querySelectorAll(".gameboard a")];
  gameBoardd.forEach(cell => {
    cell.innerHTML = "";
    cell.setAttribute("onclick", "gameCycleController.gameLoop(this.id)");
  });
};

export {
  initializeBoard,
  win,
  draw,
  renderGameArray,
  resetdisplay,
};
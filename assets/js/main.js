const player = (name, sym) => {
  return { name, sym };
};

const gameCycleController = (() => {
  let gameBoardArray = [];
  const statusAlert = document.getElementById("statusAlert");
  let player1;
  let player2;
  let currentPlayer;
  let count = 1;

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
  const win = () => {
    statusAlert.innerText = `${currentPlayer.name} won this game`;
  };
  const draw = () => {
    statusAlert.innerText = "Not bad it is a draw";
  };

  const checkwinning = (a,b,c) => {
    return gameBoardArray[a] === currentPlayer.sym &&
    (gameBoardArray[a] === gameBoardArray[b] &&
    gameBoardArray[b] === gameBoardArray[c] &&
    gameBoardArray[a] === gameBoardArray[c])
  };

  const gameStatus = () => {
    switch (true) {
      case (count === 9):
        draw()
        break;
      case checkwinning(0,1,2):
        win();
        break;
      case checkwinning(3,4,5):
        win();
        break;
      case checkwinning(6,7,8):
        win();
        break;
      case checkwinning(0,3,6):
        win();
        break;
      case checkwinning(1,4,7):
        win();
        break;
      case checkwinning(2,5,8):
        win();
        break;
      case checkwinning(0,4,8):
        win();
        break;
      case checkwinning(2,4,6):
        win();
    }
  };

  const switchPlayer = curPlayer => {
    switch (curPlayer) {
      case 0:
        currentPlayer = player2;
        break;
      case 1:
        currentPlayer = player1;
        break;
      default:
        currentPlayer = player1;
    }
  };

  const move = (pos, symbol) => {
    gameBoardArray[pos] = symbol;
  };

  const renderGameArray = () => {
    const gameBoard = [...document.querySelectorAll(".gameboard a")];
    gameBoard.forEach((cell, i) => {
      cell.innerText = gameBoardArray[i] || "";
    });
  };

  function gameLoop(boxId) {
    const box = document.getElementById(boxId);
    box.removeAttribute("onclick");
    const detectPlayer = count % 2;

    switchPlayer(detectPlayer);
    const symbol = currentPlayer.sym;
    move(Number(boxId) - 1, symbol);
    renderGameArray();
    gameStatus();
    count += 1;
  }

  const reset = () => {
    gameBoardArray = [];
    currentPlayer = player1;
    count = 1;
    statusAlert.innerText = "";
    const gameBoard = [...document.querySelectorAll(".gameboard a")];
    gameBoard.forEach(cell => {
      cell.innerHTML = "";
      cell.setAttribute("onclick", "gameCycleController.gameLoop(this.id)");
    });
  };

  const gameStart = () => {
    const firstname = document.getElementById("player1");
    const secondname = document.getElementById("player2");

    player1 = player(firstname.value, "X");
    player2 = player(secondname.value, "O");
    initializeBoard();
    document.querySelector(".player1Box h4").innerText += player1.name;
    document.querySelector(".player2Box h4").innerText += player2.name;
    document.getElementById("form").setAttribute("class", "board-hide");
    document.getElementById("container").setAttribute("class", "board-flex");
  };
  return {
    gameStart,
    gameLoop,
    reset
  };
})();

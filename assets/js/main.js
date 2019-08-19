const player = (name, sym) => {
  let playerMoves = [];
  const move = (index) => {
    playerMoves.push(index);
    return index;
  };

  const getPlayerMoves = () => playerMoves;
  return { name, sym, move, getPlayerMoves };
};

const gameBoard = (() => {
  let gameBoardArray = new Array(9);
  const winningCombo = [[1,2,3],[4,5,6],[7,8,9],[1,4,6],[2,5,7],[3,6,9],[1,5,9],[3,5,7]];

  const updategameBoardArray = (pos, sym) => {
    gameBoardArray[pos - 1] = sym;
  };

  const isgameBoardArrayFull = () => {
    let isFilled;
    for (let i = 1; i < gameBoardArray.length; i++) {
      gameBoardArray[i] === undefined? isFilled = false : isFilled = true
    }
    return isFilled;
  };

  const checkwinning = (moves) => {
    let t = '';
    for (let i = 0; i < winningCombo.length; i++) {
      t = winningCombo[i].every(val => moves.includes(val));
      if (t)
        break;
    };
    console.log(t);
    return t;
  }

  const getGameBoardArray = () => gameBoardArray;

  return {
    updategameBoardArray,
    isgameBoardArrayFull,
    checkwinning,
    getGameBoardArray
  }
})();

const gameCycleController = (() => {
  
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

  const renderGameArray = () => {
    const gameBoardd = [...document.querySelectorAll(".gameboard a")];
    console.log(gameBoard.getGameBoardArray());
    gameBoardd.forEach((cell, i) => {
      cell.innerText = gameBoard.getGameBoardArray()[i] || "";
    });
  };

  function gameLoop(boxId) {
    const box = document.getElementById(boxId);
    box.removeAttribute("onclick");
    const detectPlayer = count % 2;

    switchPlayer(detectPlayer);
    const symbol = currentPlayer.sym;
    const pos = currentPlayer.move(Number(box.id));
    console.log(pos+"posss");
    gameBoard.updategameBoardArray(pos, symbol);
    //gameBoard.isgameBoardArrayFull();
    renderGameArray();

    gameBoard.checkwinning(currentPlayer.getPlayerMoves());
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

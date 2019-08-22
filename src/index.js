import player from './player';
import gameBoard from './gameboard';
import { initializeBoard, win, draw, renderGameArray, resetdisplay, endPlay } from './display';


const gameCycleController = (() => {
  let player1;
  let player2;
  let currentPlayer;
  let count = 1;

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

  function gameLoop(boxId) {
    const box = document.getElementById(boxId);
    box.removeAttribute("onclick");
    const detectPlayer = count % 2;

    switchPlayer(detectPlayer);
    const symbol = currentPlayer.sym;
    const pos = currentPlayer.move(Number(box.id));
    gameBoard.updategameBoardArray(pos, symbol);
    renderGameArray(gameBoard);
    
    if (gameBoard.checkwinning(currentPlayer.getPlayerMoves())){
      win(currentPlayer);
      endPlay();
    }
    else if (!gameBoard.isgameBoardArrayFull()){
      draw();
    }
    count += 1;
  }

  const reset = () => {
    gameBoard.resetGameBoard();
    player1.resetPlayer();
    player2.resetPlayer();
    currentPlayer = player1;
    count = 1;
    resetdisplay();
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
window.gameCycleController = gameCycleController;
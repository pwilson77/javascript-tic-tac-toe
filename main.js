const player = (name, sym) => {
  const getName = () => name;
  const getSymbol = () => sym;

  return { getSymbol, getName };
};

const gameCycleController = (() => { // eslint-disable-line no-unused-vars
  let gameBoardArray = [];
  const statusAlert = document.getElementById('statusAlert');
  let player1;
  let player2;
  let currentPlayer;
  let count = 1;
  const win = () => {
    statusAlert.innerText = `${currentPlayer.getName()} won this game`;
  };
  const draw = () => {
    statusAlert.innerText = 'Not bad it is a draw';
  };
  const gameStatus = () => {
    /* eslint-disable */
    switch (true) {
      case gameBoardArray[0] === currentPlayer.getSymbol() && 
      (gameBoardArray[0] === gameBoardArray[1] && 
      gameBoardArray[1] === gameBoardArray[2] && 
      gameBoardArray[0] === gameBoardArray[2]):
        win();
        break;
      case gameBoardArray[3] === currentPlayer.getSymbol() && 
      (gameBoardArray[3] === gameBoardArray[4] && 
      gameBoardArray[4] === gameBoardArray[5] && 
      gameBoardArray[3] === gameBoardArray[5]):
        win();
        break;
      case gameBoardArray[6] === currentPlayer.getSymbol() &&
      (gameBoardArray[6] === gameBoardArray[7] && 
      gameBoardArray[7] === gameBoardArray[8] && 
      gameBoardArray[6] === gameBoardArray[8]):
        win();
        break;
      case gameBoardArray[0] === currentPlayer.getSymbol() && 
      (gameBoardArray[0] === gameBoardArray[3] && 
      gameBoardArray[0] === gameBoardArray[6] && 
      gameBoardArray[3] === gameBoardArray[6]):
        win();
        break;
      case gameBoardArray[1] === currentPlayer.getSymbol() && 
      (gameBoardArray[1] === gameBoardArray[4] && 
      gameBoardArray[4] === gameBoardArray[7] && 
      gameBoardArray[7] === gameBoardArray[1]):
        win();
        break;
      case gameBoardArray[2] === currentPlayer.getSymbol() && 
      (gameBoardArray[2] === gameBoardArray[5] && 
      gameBoardArray[5] === gameBoardArray[8] && 
      gameBoardArray[2] === gameBoardArray[8]):
        win();
        break;
      case gameBoardArray[0] === currentPlayer.getSymbol() && 
      (gameBoardArray[0] === gameBoardArray[4] && 
      gameBoardArray[4] === gameBoardArray[8] && 
      gameBoardArray[0] === gameBoardArray[8]):
        win();
        break;
      case gameBoardArray[2] === currentPlayer.getSymbol() && 
      (gameBoardArray[2] === gameBoardArray[4] && 
      gameBoardArray[4] === gameBoardArray[6] && 
      gameBoardArray[2] === gameBoardArray[6]):
        win();
        break;
      default:
        if (count >= 9) {
          draw();
        }
    }
  };

  const switchPlayer = (curPlayer) => {
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
  }

  const renderGameArray = () => {
    const gameBoard = [...document.querySelectorAll('.gameboard a')];
    gameBoard.forEach((cell, i) => {
      cell.innerText = gameBoardArray[i] || '';
    });
  }

  function gameLoop(boxId) {
    const box = document.getElementById(boxId);
    box.removeAttribute('onclick');
    const detectPlayer = count % 2;

    switchPlayer(detectPlayer);
    const symbol = currentPlayer.getSymbol();
    move(Number(boxId) - 1, symbol);
    renderGameArray();
    gameStatus();
    count += 1;
  }

  const reset = () => {
    gameBoardArray = [];
    currentPlayer = player1;
    count = 1;
    statusAlert.innerText = '';
    const gameBoard = [...document.querySelectorAll('.gameboard a')];
    gameBoard.forEach((cell) => {
      cell.innerHTML = '';
      cell.setAttribute('onclick', 'gameCycleController.gameLoop(this.id)');
    });

  }

  const gameStart = () => {
    const firstname = document.getElementById('player1');
    const secondname = document.getElementById('player2');
    
    player1 = player(firstname.value, 'X');
    player2 = player(secondname.value, 'O');
    document.querySelector('.player1Box h4').innerText += player1.getName();
    document.querySelector('.player2Box h4').innerText += player2.getName();
    document.getElementById('form').setAttribute('class', 'board-hide');
    document.getElementById('container').setAttribute('class', 'board-flex');
  }
  return {
    gameStart,
    gameLoop,
    reset,
  };
})();

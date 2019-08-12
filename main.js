const gameboard = (() => {
  const gameBoardArray = [];
})();

const displayController = (() => { })();

const player = (name, sym) => {
  const getName = () => name;
  const getSymbol = () => sym;
  const playerArray = [];

  const addPosition = (pos) => {
    playerArray.push(pos);
  };
  return { addPosition, getSymbol };
};

const gameCycleController = (() => {
  let player1;
  let player2;
  let currentPlayer;
  let count = 1;
  const gameOver = () => {
    return false
  };

  const switchPlayer = (curPlayer) => {
    console.log(`${curPlayer} that is the current player`);
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
    console.log(boxId+" the this id");
    const box = document.getElementById(boxId);
    box.removeAttribute()
    console.log(`${box.innerText} beforee againnn`);
    const detectPlayer = count % 2;

    switchPlayer(detectPlayer);
    const symbol = currentPlayer.getSymbol();
    box.innerHTML = symbol;
    console.log(`${box.innerText} ${symbol} and againnn`);
    count++;
  }

  const gameStart = () => {
    console.log('start now');
    const firstname = document.getElementById('player1');
    const secondname = document.getElementById('player2');
    player1 = player(firstname, 'X');
    player2 = player(secondname, 'O');
    const form = document.getElementById('form');
    form.style.display = 'none';
    const board = document.getElementById('container');
    board.style.display = 'flex';
  };
  return {
    gameStart,
    gameLoop,
  };
})();

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
  return { addPosition };
};

const gameCycleController = (() => {
  let player1;
  let player2;
  let currentPlayer;
  const gameOver = () => {

  };

  const switchPlayer = (curPlayer) => {
    switch (curPlayer) {
      case player1:
        currentPlayer = player2;
        break;
      case player2:
        currentPlayer = player1;
        break;
      default:
        currentPlayer = player1;
    }
  };

  const gameStart = () => {
    const firstname = document.getElementById('player1');
    const secondname = document.getElementById('player2');
    player1 = player(firstname, 'X');
    player2 = player(secondname, 'O');
    const form = document.getElementById('form');
    form.style.display = 'none';
    const board = document.getElementById('container');
    board.style.display = 'flex';
    while (!gameOver) {
      switchPlayer(currentPlayer);
    }
  };
  return {
    gameStart,
  };
})();

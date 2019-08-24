const gameBoard = (() => {
  let gameBoardArray = new Array(9);
  const winningCombo = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

  const updategameBoardArray = (pos, sym) => {
    gameBoardArray[pos - 1] = sym;
  };

  const isgameBoardArrayFull = () => {
    let isFilled = false;
    for (let i = 0; i < gameBoardArray.length; i++) {
      isFilled = (gameBoardArray[i] === undefined);
      if (isFilled)
        break;
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
    return t;
  }

  const getGameBoardArray = () => gameBoardArray;
  const resetGameBoard = () => { gameBoardArray = new Array(9); }

  return {
    updategameBoardArray,
    isgameBoardArrayFull,
    checkwinning,
    getGameBoardArray,
    resetGameBoard,
  }
})();

export default gameBoard;
const Gameboard = (() => {
  const gameBoardArray = [];
})();

const displayController = (() => { })();

const gameCycleController = (() => { })();

const Player = (name) => {
  const getName = () => name;
  let playerArray = [];

  const addPosition = (pos) => {
    playerArray.push(pos);
  };

  return { addPosition };
};

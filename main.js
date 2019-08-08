"use strict";

const Gameboard = (() => {
  const gameBoardArray = [];
})();

const displayController = (() => {})();

const Player = name => {
  const getName = () => name;
  let playerArray = [];

  const newPosition = pos => {
    playerArray.push(pos);
  };

  return { newPosition };
};

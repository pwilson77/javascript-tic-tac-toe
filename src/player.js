const player = (name, sym) => {
    let playerMoves = [];
    const move = (index) => {
      playerMoves.push(index);
      return index;
    };
  
    const resetPlayer = () => { playerMoves = []; }
    const getPlayerMoves = () => playerMoves;
    return { name, sym, move, getPlayerMoves, resetPlayer };
};

export default player;
  
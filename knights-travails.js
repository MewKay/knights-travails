const Cell = function createCell(coordinates) {
  const marqued = false;

  return {
    get coordinates() {
      return coordinates;
    },
    marqued,
  };
};

const Gameboard = (function createGameBoard() {
  let board = [];

  const initializeBoard = (() => {
    for (let row = 0; row < 8; row += 1) {
      let subArray = [];
      board.push(subArray);
      for (let column = 0; column < 8; column += 1) {
        const coordinates = [row, column];
        subArray.push(Cell(coordinates));
      }
    }
  })();

  return {
    get board() {
      return board;
    },
  };
})();

console.log(Gameboard.board);

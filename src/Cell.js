const Cell = function createCell(coordinates) {
  return {
    get coordinates() {
      return coordinates;
    },
  };
};

export default Cell;

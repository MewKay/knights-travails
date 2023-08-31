/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

const Graph = function creatGraph() {
  const adjacencyList = {};

  const addVertex = function addVertexToGraph(vertex) {
    adjacencyList[vertex] = adjacencyList[vertex] || [];
  };

  const addEdge = function addEdgeToGraph(startingVertex, endingVertex) {
    if (!adjacencyList[startingVertex] || !adjacencyList[endingVertex]) {
      return;
    }

    adjacencyList[startingVertex].push(endingVertex);
    adjacencyList[endingVertex].push(startingVertex);
  };

  const print = () => {
    console.log(adjacencyList);
  };

  return {
    addVertex,
    addEdge,
    print,
  };
};

const KnightsGraph = (function creatKnightsPossibleMovesGraph() {
  const graph = Graph();

  Gameboard.board.forEach((subArray) => {
    subArray.forEach((cell) => {
      const currentCellRow = cell.coordinates[0];
      const currentCellColumn = cell.coordinates[1];

      graph.addVertex([currentCellRow, currentCellColumn]);

      graph.addEdge(
        [currentCellRow, currentCellColumn],
        [currentCellRow - 1, currentCellColumn - 2]
      );
      graph.addEdge(
        [currentCellRow, currentCellColumn],
        [currentCellRow - 1, currentCellColumn + 2]
      );
      graph.addEdge(
        [currentCellRow, currentCellColumn],
        [currentCellRow - 2, currentCellColumn + 1]
      );
      graph.addEdge(
        [currentCellRow, currentCellColumn],
        [currentCellRow - 2, currentCellColumn - 1]
      );
    });
  });

  return graph;
})();

KnightsGraph.print();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENlbGwgPSBmdW5jdGlvbiBjcmVhdGVDZWxsKGNvb3JkaW5hdGVzKSB7XG4gIGNvbnN0IG1hcnF1ZWQgPSBmYWxzZTtcblxuICByZXR1cm4ge1xuICAgIGdldCBjb29yZGluYXRlcygpIHtcbiAgICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgICB9LFxuICAgIG1hcnF1ZWQsXG4gIH07XG59O1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoZnVuY3Rpb24gY3JlYXRlR2FtZUJvYXJkKCkge1xuICBsZXQgYm9hcmQgPSBbXTtcblxuICBjb25zdCBpbml0aWFsaXplQm9hcmQgPSAoKCkgPT4ge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDg7IHJvdyArPSAxKSB7XG4gICAgICBsZXQgc3ViQXJyYXkgPSBbXTtcbiAgICAgIGJvYXJkLnB1c2goc3ViQXJyYXkpO1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgODsgY29sdW1uICs9IDEpIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbcm93LCBjb2x1bW5dO1xuICAgICAgICBzdWJBcnJheS5wdXNoKENlbGwoY29vcmRpbmF0ZXMpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IEdyYXBoID0gZnVuY3Rpb24gY3JlYXRHcmFwaCgpIHtcbiAgY29uc3QgYWRqYWNlbmN5TGlzdCA9IHt9O1xuXG4gIGNvbnN0IGFkZFZlcnRleCA9IGZ1bmN0aW9uIGFkZFZlcnRleFRvR3JhcGgodmVydGV4KSB7XG4gICAgYWRqYWNlbmN5TGlzdFt2ZXJ0ZXhdID0gYWRqYWNlbmN5TGlzdFt2ZXJ0ZXhdIHx8IFtdO1xuICB9O1xuXG4gIGNvbnN0IGFkZEVkZ2UgPSBmdW5jdGlvbiBhZGRFZGdlVG9HcmFwaChzdGFydGluZ1ZlcnRleCwgZW5kaW5nVmVydGV4KSB7XG4gICAgaWYgKCFhZGphY2VuY3lMaXN0W3N0YXJ0aW5nVmVydGV4XSB8fCAhYWRqYWNlbmN5TGlzdFtlbmRpbmdWZXJ0ZXhdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWRqYWNlbmN5TGlzdFtzdGFydGluZ1ZlcnRleF0ucHVzaChlbmRpbmdWZXJ0ZXgpO1xuICAgIGFkamFjZW5jeUxpc3RbZW5kaW5nVmVydGV4XS5wdXNoKHN0YXJ0aW5nVmVydGV4KTtcbiAgfTtcblxuICBjb25zdCBwcmludCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhZGphY2VuY3lMaXN0KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFZlcnRleCxcbiAgICBhZGRFZGdlLFxuICAgIHByaW50LFxuICB9O1xufTtcblxuY29uc3QgS25pZ2h0c0dyYXBoID0gKGZ1bmN0aW9uIGNyZWF0S25pZ2h0c1Bvc3NpYmxlTW92ZXNHcmFwaCgpIHtcbiAgY29uc3QgZ3JhcGggPSBHcmFwaCgpO1xuXG4gIEdhbWVib2FyZC5ib2FyZC5mb3JFYWNoKChzdWJBcnJheSkgPT4ge1xuICAgIHN1YkFycmF5LmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDZWxsUm93ID0gY2VsbC5jb29yZGluYXRlc1swXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRDZWxsQ29sdW1uID0gY2VsbC5jb29yZGluYXRlc1sxXTtcblxuICAgICAgZ3JhcGguYWRkVmVydGV4KFtjdXJyZW50Q2VsbFJvdywgY3VycmVudENlbGxDb2x1bW5dKTtcblxuICAgICAgZ3JhcGguYWRkRWRnZShcbiAgICAgICAgW2N1cnJlbnRDZWxsUm93LCBjdXJyZW50Q2VsbENvbHVtbl0sXG4gICAgICAgIFtjdXJyZW50Q2VsbFJvdyAtIDEsIGN1cnJlbnRDZWxsQ29sdW1uIC0gMl1cbiAgICAgICk7XG4gICAgICBncmFwaC5hZGRFZGdlKFxuICAgICAgICBbY3VycmVudENlbGxSb3csIGN1cnJlbnRDZWxsQ29sdW1uXSxcbiAgICAgICAgW2N1cnJlbnRDZWxsUm93IC0gMSwgY3VycmVudENlbGxDb2x1bW4gKyAyXVxuICAgICAgKTtcbiAgICAgIGdyYXBoLmFkZEVkZ2UoXG4gICAgICAgIFtjdXJyZW50Q2VsbFJvdywgY3VycmVudENlbGxDb2x1bW5dLFxuICAgICAgICBbY3VycmVudENlbGxSb3cgLSAyLCBjdXJyZW50Q2VsbENvbHVtbiArIDFdXG4gICAgICApO1xuICAgICAgZ3JhcGguYWRkRWRnZShcbiAgICAgICAgW2N1cnJlbnRDZWxsUm93LCBjdXJyZW50Q2VsbENvbHVtbl0sXG4gICAgICAgIFtjdXJyZW50Q2VsbFJvdyAtIDIsIGN1cnJlbnRDZWxsQ29sdW1uIC0gMV1cbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBncmFwaDtcbn0pKCk7XG5cbktuaWdodHNHcmFwaC5wcmludCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
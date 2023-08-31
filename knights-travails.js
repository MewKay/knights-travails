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

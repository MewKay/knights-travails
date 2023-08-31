import Graph from "./Graph";
import Gameboard from "./Gameboard";
import { getDefaultCompilerOptions } from "typescript";

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

export default KnightsGraph;

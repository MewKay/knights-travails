import KnightsGraph from "./KnightsGraph";

const knightMoves = function displayEachMoveKnightHasToPlay(
  startingCoordinates,
  destinationCoordinates
) {
  let knightsPath = KnightsGraph.shortPathbfs(
    startingCoordinates,
    destinationCoordinates
  );

  console.log(
    `=> You made it in ${knightsPath.length - 1} moves! Here's your path:`
  );
  knightsPath.forEach((move) => console.log(move));
};

knightMoves([3, 3], [4, 3]);

import KnightsGraph from "./KnightsGraph";

const knightMoves = function displayEachMoveKnightHasToPlay(
  startingCoordinates,
  destinationCoordinates
) {
  if (
    startingCoordinates[0] === destinationCoordinates[0] &&
    startingCoordinates[1] === destinationCoordinates[1]
  ) {
    console.log(`=> You made it in ...well, 0 moves! No path for you!`);
    return;
  }

  try {
    let knightsPath = KnightsGraph.shortPathbfs(
      startingCoordinates,
      destinationCoordinates
    );

    console.log(
      `=> You made it in ${knightsPath.length - 1} moves! Here's your path:`
    );
    knightsPath.forEach((move) => console.log(move));
  } catch (error) {
    console.log(`=> ${error.message}`);
  }
};

knightMoves([3, 3], [4, 3]);
knightMoves([3, 1], [3, 1]);
knightMoves([5, 55], [3, 7]);

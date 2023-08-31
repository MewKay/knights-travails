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

  const shortPathbfs = function traverseTreeBreadthFirstToFindshortestPath(
    startingVertex,
    lastVertex
  ) {
    let queue = [startingVertex];
    const parent = { startingVertex: null };
    const marqued = {};

    while (queue.length > 0) {
      let currentVertex = queue.shift();

      if (currentVertex === lastVertex) {
        break;
      }

      adjacencyList[currentVertex].forEach((adjacentVertex) => {
        if (!marqued[adjacentVertex]) {
          queue.push(adjacentVertex);
          parent[adjacentVertex] = currentVertex;
        }
      });

      marqued[currentVertex] = true;
    }

    let shortestPath = [];
    let currentVertexInPath = lastVertex;

    while (currentVertexInPath !== startingVertex) {
      shortestPath.unshift(currentVertexInPath);
      currentVertexInPath = parent[currentVertexInPath];
    }

    shortestPath.unshift(startingVertex);
    return shortestPath;
  };

  const print = () => {
    console.log(adjacencyList);
  };

  return {
    addVertex,
    addEdge,
    shortPathbfs,
    print,
  };
};

export default Graph;

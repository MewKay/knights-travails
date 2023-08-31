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

export default Graph;

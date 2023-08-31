/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Cell.js":
/*!*********************!*\
  !*** ./src/Cell.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Cell = function createCell(coordinates) {
  return {
    get coordinates() {
      return coordinates;
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);


/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell */ "./src/Cell.js");


const Gameboard = (function createGameBoard() {
  let board = [];

  const initializeBoard = (() => {
    for (let row = 0; row < 8; row += 1) {
      let subArray = [];
      board.push(subArray);
      for (let column = 0; column < 8; column += 1) {
        const coordinates = [row, column];
        subArray.push((0,_Cell__WEBPACK_IMPORTED_MODULE_0__["default"])(coordinates));
      }
    }
  })();

  return {
    get board() {
      return board;
    },
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/Graph.js":
/*!**********************!*\
  !*** ./src/Graph.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    if (!isVertexInside(startingVertex) || !isVertexInside(lastVertex)) {
      throw new Error(
        `[${
          !isVertexInside(startingVertex) ? startingVertex : lastVertex
        }] is invalid.`
      );
    }

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

  const isVertexInside = function checkIfVertexExistsInsideTheGraph(vertex) {
    return adjacencyList[vertex] !== undefined;
  };

  const print = () => {
    console.log(adjacencyList);
  };

  return {
    addVertex,
    addEdge,
    shortPathbfs,
    isVertexInside,
    print,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);


/***/ }),

/***/ "./src/KnightsGraph.js":
/*!*****************************!*\
  !*** ./src/KnightsGraph.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graph */ "./src/Graph.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");



const KnightsGraph = (function createKnightsPossibleMovesGraph() {
  const graph = (0,_Graph__WEBPACK_IMPORTED_MODULE_0__["default"])();

  _Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].board.forEach((subArray) => {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KnightsGraph);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KnightsGraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KnightsGraph */ "./src/KnightsGraph.js");


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
    let knightsPath = _KnightsGraph__WEBPACK_IMPORTED_MODULE_0__["default"].shortPathbfs(
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUk07O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQSxzQkFBc0IsaURBQUk7QUFDMUI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVPO0FBQ1E7O0FBRXBDO0FBQ0EsZ0JBQWdCLGtEQUFLOztBQUVyQixFQUFFLGtEQUFTO0FBQ1g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDbEM1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHFEQUFZO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQix3QkFBd0I7QUFDbkQ7QUFDQTtBQUNBLElBQUk7QUFDSixzQkFBc0IsY0FBYztBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvQ2VsbC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL0dyYXBoLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvS25pZ2h0c0dyYXBoLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENlbGwgPSBmdW5jdGlvbiBjcmVhdGVDZWxsKGNvb3JkaW5hdGVzKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0IGNvb3JkaW5hdGVzKCkge1xuICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDZWxsO1xuIiwiaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoZnVuY3Rpb24gY3JlYXRlR2FtZUJvYXJkKCkge1xuICBsZXQgYm9hcmQgPSBbXTtcblxuICBjb25zdCBpbml0aWFsaXplQm9hcmQgPSAoKCkgPT4ge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDg7IHJvdyArPSAxKSB7XG4gICAgICBsZXQgc3ViQXJyYXkgPSBbXTtcbiAgICAgIGJvYXJkLnB1c2goc3ViQXJyYXkpO1xuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgODsgY29sdW1uICs9IDEpIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbcm93LCBjb2x1bW5dO1xuICAgICAgICBzdWJBcnJheS5wdXNoKENlbGwoY29vcmRpbmF0ZXMpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNvbnN0IEdyYXBoID0gZnVuY3Rpb24gY3JlYXRHcmFwaCgpIHtcbiAgY29uc3QgYWRqYWNlbmN5TGlzdCA9IHt9O1xuXG4gIGNvbnN0IGFkZFZlcnRleCA9IGZ1bmN0aW9uIGFkZFZlcnRleFRvR3JhcGgodmVydGV4KSB7XG4gICAgYWRqYWNlbmN5TGlzdFt2ZXJ0ZXhdID0gYWRqYWNlbmN5TGlzdFt2ZXJ0ZXhdIHx8IFtdO1xuICB9O1xuXG4gIGNvbnN0IGFkZEVkZ2UgPSBmdW5jdGlvbiBhZGRFZGdlVG9HcmFwaChzdGFydGluZ1ZlcnRleCwgZW5kaW5nVmVydGV4KSB7XG4gICAgaWYgKCFhZGphY2VuY3lMaXN0W3N0YXJ0aW5nVmVydGV4XSB8fCAhYWRqYWNlbmN5TGlzdFtlbmRpbmdWZXJ0ZXhdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWRqYWNlbmN5TGlzdFtzdGFydGluZ1ZlcnRleF0ucHVzaChlbmRpbmdWZXJ0ZXgpO1xuICAgIGFkamFjZW5jeUxpc3RbZW5kaW5nVmVydGV4XS5wdXNoKHN0YXJ0aW5nVmVydGV4KTtcbiAgfTtcblxuICBjb25zdCBzaG9ydFBhdGhiZnMgPSBmdW5jdGlvbiB0cmF2ZXJzZVRyZWVCcmVhZHRoRmlyc3RUb0ZpbmRzaG9ydGVzdFBhdGgoXG4gICAgc3RhcnRpbmdWZXJ0ZXgsXG4gICAgbGFzdFZlcnRleFxuICApIHtcbiAgICBpZiAoIWlzVmVydGV4SW5zaWRlKHN0YXJ0aW5nVmVydGV4KSB8fCAhaXNWZXJ0ZXhJbnNpZGUobGFzdFZlcnRleCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFske1xuICAgICAgICAgICFpc1ZlcnRleEluc2lkZShzdGFydGluZ1ZlcnRleCkgPyBzdGFydGluZ1ZlcnRleCA6IGxhc3RWZXJ0ZXhcbiAgICAgICAgfV0gaXMgaW52YWxpZC5gXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBxdWV1ZSA9IFtzdGFydGluZ1ZlcnRleF07XG4gICAgY29uc3QgcGFyZW50ID0geyBzdGFydGluZ1ZlcnRleDogbnVsbCB9O1xuICAgIGNvbnN0IG1hcnF1ZWQgPSB7fTtcblxuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgY3VycmVudFZlcnRleCA9IHF1ZXVlLnNoaWZ0KCk7XG5cbiAgICAgIGlmIChjdXJyZW50VmVydGV4ID09PSBsYXN0VmVydGV4KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBhZGphY2VuY3lMaXN0W2N1cnJlbnRWZXJ0ZXhdLmZvckVhY2goKGFkamFjZW50VmVydGV4KSA9PiB7XG4gICAgICAgIGlmICghbWFycXVlZFthZGphY2VudFZlcnRleF0pIHtcbiAgICAgICAgICBxdWV1ZS5wdXNoKGFkamFjZW50VmVydGV4KTtcbiAgICAgICAgICBwYXJlbnRbYWRqYWNlbnRWZXJ0ZXhdID0gY3VycmVudFZlcnRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG1hcnF1ZWRbY3VycmVudFZlcnRleF0gPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCBzaG9ydGVzdFBhdGggPSBbXTtcbiAgICBsZXQgY3VycmVudFZlcnRleEluUGF0aCA9IGxhc3RWZXJ0ZXg7XG5cbiAgICB3aGlsZSAoY3VycmVudFZlcnRleEluUGF0aCAhPT0gc3RhcnRpbmdWZXJ0ZXgpIHtcbiAgICAgIHNob3J0ZXN0UGF0aC51bnNoaWZ0KGN1cnJlbnRWZXJ0ZXhJblBhdGgpO1xuICAgICAgY3VycmVudFZlcnRleEluUGF0aCA9IHBhcmVudFtjdXJyZW50VmVydGV4SW5QYXRoXTtcbiAgICB9XG5cbiAgICBzaG9ydGVzdFBhdGgudW5zaGlmdChzdGFydGluZ1ZlcnRleCk7XG4gICAgcmV0dXJuIHNob3J0ZXN0UGF0aDtcbiAgfTtcblxuICBjb25zdCBpc1ZlcnRleEluc2lkZSA9IGZ1bmN0aW9uIGNoZWNrSWZWZXJ0ZXhFeGlzdHNJbnNpZGVUaGVHcmFwaCh2ZXJ0ZXgpIHtcbiAgICByZXR1cm4gYWRqYWNlbmN5TGlzdFt2ZXJ0ZXhdICE9PSB1bmRlZmluZWQ7XG4gIH07XG5cbiAgY29uc3QgcHJpbnQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYWRqYWNlbmN5TGlzdCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRWZXJ0ZXgsXG4gICAgYWRkRWRnZSxcbiAgICBzaG9ydFBhdGhiZnMsXG4gICAgaXNWZXJ0ZXhJbnNpZGUsXG4gICAgcHJpbnQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcbiIsImltcG9ydCBHcmFwaCBmcm9tIFwiLi9HcmFwaFwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxuY29uc3QgS25pZ2h0c0dyYXBoID0gKGZ1bmN0aW9uIGNyZWF0ZUtuaWdodHNQb3NzaWJsZU1vdmVzR3JhcGgoKSB7XG4gIGNvbnN0IGdyYXBoID0gR3JhcGgoKTtcblxuICBHYW1lYm9hcmQuYm9hcmQuZm9yRWFjaCgoc3ViQXJyYXkpID0+IHtcbiAgICBzdWJBcnJheS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50Q2VsbFJvdyA9IGNlbGwuY29vcmRpbmF0ZXNbMF07XG4gICAgICBjb25zdCBjdXJyZW50Q2VsbENvbHVtbiA9IGNlbGwuY29vcmRpbmF0ZXNbMV07XG5cbiAgICAgIGdyYXBoLmFkZFZlcnRleChbY3VycmVudENlbGxSb3csIGN1cnJlbnRDZWxsQ29sdW1uXSk7XG5cbiAgICAgIGdyYXBoLmFkZEVkZ2UoXG4gICAgICAgIFtjdXJyZW50Q2VsbFJvdywgY3VycmVudENlbGxDb2x1bW5dLFxuICAgICAgICBbY3VycmVudENlbGxSb3cgLSAxLCBjdXJyZW50Q2VsbENvbHVtbiAtIDJdXG4gICAgICApO1xuICAgICAgZ3JhcGguYWRkRWRnZShcbiAgICAgICAgW2N1cnJlbnRDZWxsUm93LCBjdXJyZW50Q2VsbENvbHVtbl0sXG4gICAgICAgIFtjdXJyZW50Q2VsbFJvdyAtIDEsIGN1cnJlbnRDZWxsQ29sdW1uICsgMl1cbiAgICAgICk7XG4gICAgICBncmFwaC5hZGRFZGdlKFxuICAgICAgICBbY3VycmVudENlbGxSb3csIGN1cnJlbnRDZWxsQ29sdW1uXSxcbiAgICAgICAgW2N1cnJlbnRDZWxsUm93IC0gMiwgY3VycmVudENlbGxDb2x1bW4gKyAxXVxuICAgICAgKTtcbiAgICAgIGdyYXBoLmFkZEVkZ2UoXG4gICAgICAgIFtjdXJyZW50Q2VsbFJvdywgY3VycmVudENlbGxDb2x1bW5dLFxuICAgICAgICBbY3VycmVudENlbGxSb3cgLSAyLCBjdXJyZW50Q2VsbENvbHVtbiAtIDFdXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGdyYXBoO1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgS25pZ2h0c0dyYXBoO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgS25pZ2h0c0dyYXBoIGZyb20gXCIuL0tuaWdodHNHcmFwaFwiO1xuXG5jb25zdCBrbmlnaHRNb3ZlcyA9IGZ1bmN0aW9uIGRpc3BsYXlFYWNoTW92ZUtuaWdodEhhc1RvUGxheShcbiAgc3RhcnRpbmdDb29yZGluYXRlcyxcbiAgZGVzdGluYXRpb25Db29yZGluYXRlc1xuKSB7XG4gIGlmIChcbiAgICBzdGFydGluZ0Nvb3JkaW5hdGVzWzBdID09PSBkZXN0aW5hdGlvbkNvb3JkaW5hdGVzWzBdICYmXG4gICAgc3RhcnRpbmdDb29yZGluYXRlc1sxXSA9PT0gZGVzdGluYXRpb25Db29yZGluYXRlc1sxXVxuICApIHtcbiAgICBjb25zb2xlLmxvZyhgPT4gWW91IG1hZGUgaXQgaW4gLi4ud2VsbCwgMCBtb3ZlcyEgTm8gcGF0aCBmb3IgeW91IWApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbGV0IGtuaWdodHNQYXRoID0gS25pZ2h0c0dyYXBoLnNob3J0UGF0aGJmcyhcbiAgICAgIHN0YXJ0aW5nQ29vcmRpbmF0ZXMsXG4gICAgICBkZXN0aW5hdGlvbkNvb3JkaW5hdGVzXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYD0+IFlvdSBtYWRlIGl0IGluICR7a25pZ2h0c1BhdGgubGVuZ3RoIC0gMX0gbW92ZXMhIEhlcmUncyB5b3VyIHBhdGg6YFxuICAgICk7XG4gICAga25pZ2h0c1BhdGguZm9yRWFjaCgobW92ZSkgPT4gY29uc29sZS5sb2cobW92ZSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGA9PiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gIH1cbn07XG5cbmtuaWdodE1vdmVzKFszLCAzXSwgWzQsIDNdKTtcbmtuaWdodE1vdmVzKFszLCAxXSwgWzMsIDFdKTtcbmtuaWdodE1vdmVzKFs1LCA1NV0sIFszLCA3XSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
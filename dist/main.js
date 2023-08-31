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
  let knightsPath = _KnightsGraph__WEBPACK_IMPORTED_MODULE_0__["default"].shortPathbfs(
    startingCoordinates,
    destinationCoordinates
  );

  console.log(
    `=> You made it in ${knightsPath.length - 1} moves! Here's your path:`
  );
  knightsPath.forEach((move) => console.log(move));
};

knightMoves([3, 3], [4, 3]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUk07O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQSxzQkFBc0IsaURBQUk7QUFDMUI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFTztBQUNROztBQUVwQztBQUNBLGdCQUFnQixrREFBSzs7QUFFckIsRUFBRSxrREFBUztBQUNYO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVELGlFQUFlLFlBQVksRUFBQzs7Ozs7OztVQ2xDNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQVk7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL0NlbGwuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9HcmFwaC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL0tuaWdodHNHcmFwaC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDZWxsID0gZnVuY3Rpb24gY3JlYXRlQ2VsbChjb29yZGluYXRlcykge1xuICByZXR1cm4ge1xuICAgIGdldCBjb29yZGluYXRlcygpIHtcbiAgICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VsbDtcbiIsImltcG9ydCBDZWxsIGZyb20gXCIuL0NlbGxcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gKGZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZCgpIHtcbiAgbGV0IGJvYXJkID0gW107XG5cbiAgY29uc3QgaW5pdGlhbGl6ZUJvYXJkID0gKCgpID0+IHtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA4OyByb3cgKz0gMSkge1xuICAgICAgbGV0IHN1YkFycmF5ID0gW107XG4gICAgICBib2FyZC5wdXNoKHN1YkFycmF5KTtcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IDg7IGNvbHVtbiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW3JvdywgY29sdW1uXTtcbiAgICAgICAgc3ViQXJyYXkucHVzaChDZWxsKGNvb3JkaW5hdGVzKSk7XG4gICAgICB9XG4gICAgfVxuICB9KSgpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGJvYXJkKCkge1xuICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH0sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBHcmFwaCA9IGZ1bmN0aW9uIGNyZWF0R3JhcGgoKSB7XG4gIGNvbnN0IGFkamFjZW5jeUxpc3QgPSB7fTtcblxuICBjb25zdCBhZGRWZXJ0ZXggPSBmdW5jdGlvbiBhZGRWZXJ0ZXhUb0dyYXBoKHZlcnRleCkge1xuICAgIGFkamFjZW5jeUxpc3RbdmVydGV4XSA9IGFkamFjZW5jeUxpc3RbdmVydGV4XSB8fCBbXTtcbiAgfTtcblxuICBjb25zdCBhZGRFZGdlID0gZnVuY3Rpb24gYWRkRWRnZVRvR3JhcGgoc3RhcnRpbmdWZXJ0ZXgsIGVuZGluZ1ZlcnRleCkge1xuICAgIGlmICghYWRqYWNlbmN5TGlzdFtzdGFydGluZ1ZlcnRleF0gfHwgIWFkamFjZW5jeUxpc3RbZW5kaW5nVmVydGV4XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFkamFjZW5jeUxpc3Rbc3RhcnRpbmdWZXJ0ZXhdLnB1c2goZW5kaW5nVmVydGV4KTtcbiAgICBhZGphY2VuY3lMaXN0W2VuZGluZ1ZlcnRleF0ucHVzaChzdGFydGluZ1ZlcnRleCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvcnRQYXRoYmZzID0gZnVuY3Rpb24gdHJhdmVyc2VUcmVlQnJlYWR0aEZpcnN0VG9GaW5kc2hvcnRlc3RQYXRoKFxuICAgIHN0YXJ0aW5nVmVydGV4LFxuICAgIGxhc3RWZXJ0ZXhcbiAgKSB7XG4gICAgbGV0IHF1ZXVlID0gW3N0YXJ0aW5nVmVydGV4XTtcbiAgICBjb25zdCBwYXJlbnQgPSB7IHN0YXJ0aW5nVmVydGV4OiBudWxsIH07XG4gICAgY29uc3QgbWFycXVlZCA9IHt9O1xuXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBjdXJyZW50VmVydGV4ID0gcXVldWUuc2hpZnQoKTtcblxuICAgICAgaWYgKGN1cnJlbnRWZXJ0ZXggPT09IGxhc3RWZXJ0ZXgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGFkamFjZW5jeUxpc3RbY3VycmVudFZlcnRleF0uZm9yRWFjaCgoYWRqYWNlbnRWZXJ0ZXgpID0+IHtcbiAgICAgICAgaWYgKCFtYXJxdWVkW2FkamFjZW50VmVydGV4XSkge1xuICAgICAgICAgIHF1ZXVlLnB1c2goYWRqYWNlbnRWZXJ0ZXgpO1xuICAgICAgICAgIHBhcmVudFthZGphY2VudFZlcnRleF0gPSBjdXJyZW50VmVydGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbWFycXVlZFtjdXJyZW50VmVydGV4XSA9IHRydWU7XG4gICAgfVxuXG4gICAgbGV0IHNob3J0ZXN0UGF0aCA9IFtdO1xuICAgIGxldCBjdXJyZW50VmVydGV4SW5QYXRoID0gbGFzdFZlcnRleDtcblxuICAgIHdoaWxlIChjdXJyZW50VmVydGV4SW5QYXRoICE9PSBzdGFydGluZ1ZlcnRleCkge1xuICAgICAgc2hvcnRlc3RQYXRoLnVuc2hpZnQoY3VycmVudFZlcnRleEluUGF0aCk7XG4gICAgICBjdXJyZW50VmVydGV4SW5QYXRoID0gcGFyZW50W2N1cnJlbnRWZXJ0ZXhJblBhdGhdO1xuICAgIH1cblxuICAgIHNob3J0ZXN0UGF0aC51bnNoaWZ0KHN0YXJ0aW5nVmVydGV4KTtcbiAgICByZXR1cm4gc2hvcnRlc3RQYXRoO1xuICB9O1xuXG4gIGNvbnN0IHByaW50ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFkamFjZW5jeUxpc3QpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkVmVydGV4LFxuICAgIGFkZEVkZ2UsXG4gICAgc2hvcnRQYXRoYmZzLFxuICAgIHByaW50LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG4iLCJpbXBvcnQgR3JhcGggZnJvbSBcIi4vR3JhcGhcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5cbmNvbnN0IEtuaWdodHNHcmFwaCA9IChmdW5jdGlvbiBjcmVhdGVLbmlnaHRzUG9zc2libGVNb3Zlc0dyYXBoKCkge1xuICBjb25zdCBncmFwaCA9IEdyYXBoKCk7XG5cbiAgR2FtZWJvYXJkLmJvYXJkLmZvckVhY2goKHN1YkFycmF5KSA9PiB7XG4gICAgc3ViQXJyYXkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudENlbGxSb3cgPSBjZWxsLmNvb3JkaW5hdGVzWzBdO1xuICAgICAgY29uc3QgY3VycmVudENlbGxDb2x1bW4gPSBjZWxsLmNvb3JkaW5hdGVzWzFdO1xuXG4gICAgICBncmFwaC5hZGRWZXJ0ZXgoW2N1cnJlbnRDZWxsUm93LCBjdXJyZW50Q2VsbENvbHVtbl0pO1xuXG4gICAgICBncmFwaC5hZGRFZGdlKFxuICAgICAgICBbY3VycmVudENlbGxSb3csIGN1cnJlbnRDZWxsQ29sdW1uXSxcbiAgICAgICAgW2N1cnJlbnRDZWxsUm93IC0gMSwgY3VycmVudENlbGxDb2x1bW4gLSAyXVxuICAgICAgKTtcbiAgICAgIGdyYXBoLmFkZEVkZ2UoXG4gICAgICAgIFtjdXJyZW50Q2VsbFJvdywgY3VycmVudENlbGxDb2x1bW5dLFxuICAgICAgICBbY3VycmVudENlbGxSb3cgLSAxLCBjdXJyZW50Q2VsbENvbHVtbiArIDJdXG4gICAgICApO1xuICAgICAgZ3JhcGguYWRkRWRnZShcbiAgICAgICAgW2N1cnJlbnRDZWxsUm93LCBjdXJyZW50Q2VsbENvbHVtbl0sXG4gICAgICAgIFtjdXJyZW50Q2VsbFJvdyAtIDIsIGN1cnJlbnRDZWxsQ29sdW1uICsgMV1cbiAgICAgICk7XG4gICAgICBncmFwaC5hZGRFZGdlKFxuICAgICAgICBbY3VycmVudENlbGxSb3csIGN1cnJlbnRDZWxsQ29sdW1uXSxcbiAgICAgICAgW2N1cnJlbnRDZWxsUm93IC0gMiwgY3VycmVudENlbGxDb2x1bW4gLSAxXVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBncmFwaDtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEtuaWdodHNHcmFwaDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEtuaWdodHNHcmFwaCBmcm9tIFwiLi9LbmlnaHRzR3JhcGhcIjtcblxuY29uc3Qga25pZ2h0TW92ZXMgPSBmdW5jdGlvbiBkaXNwbGF5RWFjaE1vdmVLbmlnaHRIYXNUb1BsYXkoXG4gIHN0YXJ0aW5nQ29vcmRpbmF0ZXMsXG4gIGRlc3RpbmF0aW9uQ29vcmRpbmF0ZXNcbikge1xuICBsZXQga25pZ2h0c1BhdGggPSBLbmlnaHRzR3JhcGguc2hvcnRQYXRoYmZzKFxuICAgIHN0YXJ0aW5nQ29vcmRpbmF0ZXMsXG4gICAgZGVzdGluYXRpb25Db29yZGluYXRlc1xuICApO1xuXG4gIGNvbnNvbGUubG9nKFxuICAgIGA9PiBZb3UgbWFkZSBpdCBpbiAke2tuaWdodHNQYXRoLmxlbmd0aCAtIDF9IG1vdmVzISBIZXJlJ3MgeW91ciBwYXRoOmBcbiAgKTtcbiAga25pZ2h0c1BhdGguZm9yRWFjaCgobW92ZSkgPT4gY29uc29sZS5sb2cobW92ZSkpO1xufTtcblxua25pZ2h0TW92ZXMoWzMsIDNdLCBbNCwgM10pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
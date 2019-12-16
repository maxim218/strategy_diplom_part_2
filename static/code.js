/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getMapArr;


const MAP = [];

function getMapArr() {
    return MAP;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = drawLine;


function drawLine(holst, x1, y1, x2, y2, color, width) {
    holst.strokeStyle = "#0000FF";
    if(color) {
        holst.strokeStyle = color;
    }

    holst.lineWidth = 2;
    if(width) {
        holst.lineWidth = width;
    }

    holst.beginPath();
    holst.moveTo(x1, y1);
    holst.lineTo(x2, y2);
    holst.closePath();
    holst.stroke();
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPointsArr;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getMapArr__ = __webpack_require__(0);




function getPointsArr() {
    const pointsArr = [];

    Object(__WEBPACK_IMPORTED_MODULE_0__getMapArr__["a" /* default */])().forEach((element) => {
        pointsArr.push({
            x: element.x1,
            y: element.y1,
        });
        pointsArr.push({
            x: element.x2,
            y: element.y2,
        });
    });

    const s = JSON.stringify(pointsArr);
    return JSON.parse(s);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distance;


function distance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const xxxx = dx * dx;
    const yyyy = dy * dy;
    const sqrt = Math.sqrt(xxxx + yyyy);
    const integer = parseInt(sqrt);
    return integer;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventsControl__ = __webpack_require__(5);




window.onload = function() {
    console.log("Window load OK");
    const can = document.getElementById("can");
    const holst = can.getContext("2d");
    Object(__WEBPACK_IMPORTED_MODULE_0__eventsControl__["a" /* default */])(holst);
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = eventsControl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas_drawBackground__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_mapInitialize__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canvas_drawMap__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canvas_drawRectangle__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lines_getUarr__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__canvas_renderU__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graph_getWayUsingPos__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_getPointsArr__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__canvas_drawLine__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_createObjX__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__map_createObjU__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__move_moveToPoint__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graph_distance__ = __webpack_require__(3);
















function eventsControl(holst) {
    console.log("Call function eventsControl");
    Object(__WEBPACK_IMPORTED_MODULE_0__canvas_drawBackground__["a" /* default */])(holst);
    Object(__WEBPACK_IMPORTED_MODULE_1__map_mapInitialize__["a" /* default */])();
    Object(__WEBPACK_IMPORTED_MODULE_2__canvas_drawMap__["a" /* default */])(holst);

    const heroX = 750;
    const heroY = 200;
    const goalX = 50;
    const goalY = 570;

    const Uarr = Object(__WEBPACK_IMPORTED_MODULE_4__lines_getUarr__["a" /* default */])(heroX, heroY, goalX, goalY);
    Object(__WEBPACK_IMPORTED_MODULE_5__canvas_renderU__["a" /* default */])(holst, Uarr);
    
    Object(__WEBPACK_IMPORTED_MODULE_2__canvas_drawMap__["a" /* default */])(holst);
    Object(__WEBPACK_IMPORTED_MODULE_3__canvas_drawRectangle__["a" /* default */])(holst, heroX, heroY, "#FFFFFF");
    Object(__WEBPACK_IMPORTED_MODULE_3__canvas_drawRectangle__["a" /* default */])(holst, goalX, goalY, "#FF0000");

    const pointsArr = Object(__WEBPACK_IMPORTED_MODULE_7__map_getPointsArr__["a" /* default */])();
    pointsArr.push({x: heroX, y: heroY});
    pointsArr.push({x: goalX, y: goalY});

    const objX = Object(__WEBPACK_IMPORTED_MODULE_9__map_createObjX__["a" /* default */])(pointsArr);
    const objU = Object(__WEBPACK_IMPORTED_MODULE_10__map_createObjU__["a" /* default */])(Uarr);

    const heroName = heroX + "^" + heroY;
    const goalName = goalX + "^" + goalY;

    const way = Object(__WEBPACK_IMPORTED_MODULE_6__graph_getWayUsingPos__["a" /* default */])(objX, objU, heroName, goalName);

    for(let i = 0; i < way.length; i++) {
        if(i + 1 < way.length) {
            const x1 = parseInt(way[i].split("^")[0]);
            const y1 = parseInt(way[i].split("^")[1]);
            const x2 = parseInt(way[i + 1].split("^")[0]);
            const y2 = parseInt(way[i + 1].split("^")[1]);
            Object(__WEBPACK_IMPORTED_MODULE_8__canvas_drawLine__["a" /* default */])(holst, x1, y1, x2, y2, "#000000", 2);
        }
    }

    const heroPosObj = {
        x: heroX,
        y: heroY,
    };

    let wayIndex = 1;

    const currentGoalPosObj = {
        x: parseInt(way[wayIndex].split("^")[0]),
        y: parseInt(way[wayIndex].split("^")[1]),
    };

    setInterval(function() {
        Object(__WEBPACK_IMPORTED_MODULE_11__move_moveToPoint__["a" /* default */])(heroPosObj, currentGoalPosObj, 2);
        Object(__WEBPACK_IMPORTED_MODULE_3__canvas_drawRectangle__["a" /* default */])(holst, heroPosObj.x, heroPosObj.y, "#000000");
        if(Object(__WEBPACK_IMPORTED_MODULE_12__graph_distance__["a" /* default */])(heroPosObj.x, heroPosObj.y, currentGoalPosObj.x, currentGoalPosObj.y) < 5) {
            if(wayIndex + 1 < way.length) {
                wayIndex++;
                currentGoalPosObj.x = parseInt(way[wayIndex].split("^")[0]);
                currentGoalPosObj.y = parseInt(way[wayIndex].split("^")[1]);
            }
        }
    }, 100);
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = drawBackground;


function drawBackground(holst) {
    holst.clearRect(0, 0, 800, 600);
    holst.fillStyle = "#CCCCCC";
    holst.fillRect(0, 0, 800, 600);
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapInitialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createWallCube__ = __webpack_require__(8);




function mapInitialize() {
    console.log("Call function mapInitialize");

    Object(__WEBPACK_IMPORTED_MODULE_0__createWallCube__["a" /* default */])(3, 3, 797, 597);
    Object(__WEBPACK_IMPORTED_MODULE_0__createWallCube__["a" /* default */])(370, 50, 50, 350);
    Object(__WEBPACK_IMPORTED_MODULE_0__createWallCube__["a" /* default */])(450, 50, 50, 350);
    Object(__WEBPACK_IMPORTED_MODULE_0__createWallCube__["a" /* default */])(530, 50, 50, 350);
    Object(__WEBPACK_IMPORTED_MODULE_0__createWallCube__["a" /* default */])(370, 450, 210, 70);
    
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 5; j++)
            if(j % 2 === 0)
                Object(__WEBPACK_IMPORTED_MODULE_0__createWallCube__["a" /* default */])(i * 100 + 50 - 20, j * 100 + 50, 70, 70);
            else
                Object(__WEBPACK_IMPORTED_MODULE_0__createWallCube__["a" /* default */])(i * 100 + 50 + 20, j * 100 + 50, 70, 70);
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createWallCube;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createLineObj__ = __webpack_require__(9);




function createWallCube(x, y, w, h) {
    let DELTA = 5;
    const x1 = x;
    const x2 = x + w;
    Object(__WEBPACK_IMPORTED_MODULE_0__createLineObj__["a" /* default */])(x1, y + DELTA, x2, y + DELTA);
    Object(__WEBPACK_IMPORTED_MODULE_0__createLineObj__["a" /* default */])(x1, y + h - DELTA, x2, y + h - DELTA);
    Object(__WEBPACK_IMPORTED_MODULE_0__createLineObj__["a" /* default */])(x1 + DELTA, y, x1 + DELTA, y + h);
    Object(__WEBPACK_IMPORTED_MODULE_0__createLineObj__["a" /* default */])(x2 - DELTA, y, x2 - DELTA, y + h);
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createLineObj;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getMapArr__ = __webpack_require__(0);




function createLineObj(x1, y1, x2, y2) {
    const lineObject = {
        x1: parseInt(x1),
        y1: parseInt(y1),
        x2: parseInt(x2),
        y2: parseInt(y2),
    };
    Object(__WEBPACK_IMPORTED_MODULE_0__getMapArr__["a" /* default */])().push(lineObject);
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = drawMap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_getMapArr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawLine__ = __webpack_require__(1);





function drawMap(holst) {
    Object(__WEBPACK_IMPORTED_MODULE_0__map_getMapArr__["a" /* default */])().forEach((element) => {
        Object(__WEBPACK_IMPORTED_MODULE_1__drawLine__["a" /* default */])(holst, element.x1, element.y1, element.x2, element.y2);
    });
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = drawRectangle;


function drawRectangle(holst, xx, yy, color) {
    const size = 10;
    const middle = size / 2;
    holst.fillStyle = color;
    holst.fillRect(xx - middle, yy - middle, size, size);
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUarr;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_getPointsArr__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_getMapArr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hitOtrs__ = __webpack_require__(13);






function getUarr(heroX, heroY, goalX, goalY) {
    const pointsArr = Object(__WEBPACK_IMPORTED_MODULE_0__map_getPointsArr__["a" /* default */])();

    pointsArr.push({
        x: heroX, 
        y: heroY
    });

    pointsArr.push({
        x: goalX, 
        y: goalY
    });

    const U = [];

    pointsArr.forEach((pA) => {
        pointsArr.forEach((pB) => {
            let foundHit = false;

            Object(__WEBPACK_IMPORTED_MODULE_1__map_getMapArr__["a" /* default */])().forEach((otr) => {
                const Ax1 = pA.x;
                const Ay1 = pA.y; 
                const Ax2 = pB.x;
                const Ay2 = pB.y;
                const Bx1 = otr.x1;
                const By1 = otr.y1;
                const Bx2 = otr.x2;
                const By2 = otr.y2;
                if(Object(__WEBPACK_IMPORTED_MODULE_2__hitOtrs__["a" /* default */])(Ax1, Ay1, Ax2, Ay2, Bx1, By1, Bx2, By2) === true) {
                    foundHit = true;
                };
            });

            if(pA !== pB) {
                if(foundHit === false) {
                    U.push({
                        x1: pA.x, 
                        y1: pA.y, 
                        x2: pB.x, 
                        y2: pB.y,
                    });
                }
            }
        });
    });

    const s = JSON.stringify(U);
    return JSON.parse(s);
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hitOtrs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lineEqutation__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middle__ = __webpack_require__(15);





function hitOtrs(Ax1, Ay1, Ax2, Ay2, Bx1, By1, Bx2, By2) {
    const FIRST = Object(__WEBPACK_IMPORTED_MODULE_0__lineEqutation__["a" /* default */])(Ax1, Ay1, Ax2, Ay2);
    const SECOND = Object(__WEBPACK_IMPORTED_MODULE_0__lineEqutation__["a" /* default */])(Bx1, By1, Bx2, By2);

    let x = undefined;
    
    if(FIRST.k - SECOND.k !== 0) {
        x = (SECOND.b - FIRST.b) / (FIRST.k - SECOND.k);
    } else {
        x = (SECOND.b - FIRST.b) / (FIRST.k - SECOND.k + 0.12345);
    }

    const y = FIRST.k * x + FIRST.b;

    const a = Object(__WEBPACK_IMPORTED_MODULE_1__middle__["a" /* default */])(Ax1, x, Ax2);
    const b = Object(__WEBPACK_IMPORTED_MODULE_1__middle__["a" /* default */])(Bx1, x, Bx2);
    const c = Object(__WEBPACK_IMPORTED_MODULE_1__middle__["a" /* default */])(Ay1, y, Ay2);
    const d = Object(__WEBPACK_IMPORTED_MODULE_1__middle__["a" /* default */])(By1, y, By2);

    const flag = a && b && c && d;

    return (!!flag);
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lineEqutation;


function lineEqutation(x1, y1, x2, y2) {
    if(x1 === x2) {
        x2 += 0.12345;
    }

    if(y1 === y2) {
        y2 += 0.12345;
    }

    const dy = y1 - y2;
    const dx = x1 - x2;

    const k = dy / dx;
    const b = y1 - k * x1;
    
    return {b, k};
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = middle;


function middle(a, value, b) {
    if(a === b) {
        b++;
    }

    if(a < value && value < b) return true;
    if(b < value && value < a) return true;

    return false;
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderU;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawLine__ = __webpack_require__(1);




function renderU(holst, Uarr) {
    Uarr.forEach((element) => {
        Object(__WEBPACK_IMPORTED_MODULE_0__drawLine__["a" /* default */])(holst, element.x1, element.y1, element.x2, element.y2, "#00FF00", 1);
    });
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWayUsingPos;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__distance__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getWay__ = __webpack_require__(18);





function getWayUsingPos(objX_par, objU_par, startXname_par, finishXname_par) {
    const objX = JSON.parse(JSON.stringify(objX_par));
    const objU = JSON.parse(JSON.stringify(objU_par));
    const startXname = startXname_par.toString();
    const finishXname = finishXname_par.toString();

    const X = {};

    for(let key in objX) {
        X[key] = 99999999999999;
    }    

    const U = {};

    for(let key in objU) {
        const a = key.toString().split("_")[0].toString();
        const b = key.toString().split("_")[1].toString();
        const distanceValue = Object(__WEBPACK_IMPORTED_MODULE_0__distance__["a" /* default */])(objX[a].xx, objX[a].yy, objX[b].xx, objX[b].yy);
        U[a + "_" + b] = distanceValue;
        U[b + "_" + a] = distanceValue;
    }

    const nameStart = startXname;
    const nameFinish = finishXname;

    const arr = Object(__WEBPACK_IMPORTED_MODULE_1__getWay__["a" /* default */])(X, U, nameStart, nameFinish);

    return arr;
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isInTree__ = __webpack_require__(19);




function getWay(paramX, paramU, paramNameStart, paramNameFinish) {
    const X = JSON.parse(JSON.stringify(paramX));
    const U = JSON.parse(JSON.stringify(paramU));
    const nameStart = paramNameStart.toString();
    const nameFinish = paramNameFinish.toString();

    const root = {
        name: nameStart,
        parent: null,
        way: 0,
    };

    X[nameStart] = 0;

    let minWay = 9999999999999;
    let endElement = root;

    function addChildren(element) {
        element.arr = [];

        for(let keyU in U) {
            const from = keyU.split("_")[0].toString();
            const to = keyU.split("_")[1].toString();
            if(element.name === from) {
                if(Object(__WEBPACK_IMPORTED_MODULE_0__isInTree__["a" /* default */])(to, element) === false) {
                    if(X[to] > element.way + U[keyU]) {
                        element.arr.push({
                            name: to.toString(),
                            parent: element,
                            way: element.way + U[keyU],
                        });
                        X[to] = element.way + U[keyU];
                    }
                }
            }
        }

        if(element.name.toString() === nameFinish.toString()) {
            if(minWay > element.way) {
                minWay = element.way;
                endElement = element;
            }
            return;
        }

        if(parseInt(minWay) <= parseInt(element.way)) return;

        element.arr.forEach((child) => {
            addChildren(child);
        });
    }

    addChildren(root);

    const resultArray = [];

    while(endElement) {
        resultArray.push(endElement.name);
        endElement = endElement.parent;
    }

    resultArray.reverse();

    return resultArray;
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isInTree;


function isInTree(name, bottomElement) {
    let now = bottomElement;
    while(now) {
        if(now.name.toString() === name.toString()) return true;
        now = now.parent;
    }
    return false;
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createObjX;


function createObjX(pointsArr) {
    const objX = {};
    pointsArr.forEach((point) => {
        objX[point.x + "^" + point.y] = {
            xx: point.x,
            yy: point.y,
        }
    });
    return objX;
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createObjU;


function createObjU(Uarr) {
    const objU = {};
    Uarr.forEach((Uelement) => {
        const a = Uelement.x1 + "^" + Uelement.y1;
        const b = Uelement.x2 + "^" + Uelement.y2;
        objU[a + "_" + b] = true;
    });
    return objU;
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = moveToPoint;


function moveToPoint(heroPosObj, goalPosObj, speed) {
    const goalX = parseInt(goalPosObj.x);
    const goalY = parseInt(goalPosObj.y);

    const heroX = parseInt(heroPosObj.x);
    const heroY = parseInt(heroPosObj.y);

    const dx = goalX - heroX;
    const dy = goalY - heroY;

    const g = Math.sqrt(dx * dx + dy * dy);

    let cos = Math.abs(dx / g);
    let sin = Math.abs(dy / g);

    if(goalX < heroX) cos *= (-1);
    if(goalY < heroY) sin *= (-1);

    heroPosObj.x += (speed * cos);
    heroPosObj.y += (speed * sin);
}


/***/ })
/******/ ]);
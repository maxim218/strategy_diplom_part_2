"use strict";

import createLineObj from "./createLineObj";

export default function createWallCube(x, y, w, h) {
    let DELTA = 5;
    const x1 = x;
    const x2 = x + w;
    createLineObj(x1, y + DELTA, x2, y + DELTA);
    createLineObj(x1, y + h - DELTA, x2, y + h - DELTA);
    createLineObj(x1 + DELTA, y, x1 + DELTA, y + h);
    createLineObj(x2 - DELTA, y, x2 - DELTA, y + h);
}
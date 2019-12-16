"use strict";

import getMapArr from "./getMapArr";

export default function createLineObj(x1, y1, x2, y2) {
    const lineObject = {
        x1: parseInt(x1),
        y1: parseInt(y1),
        x2: parseInt(x2),
        y2: parseInt(y2),
    };
    getMapArr().push(lineObject);
};

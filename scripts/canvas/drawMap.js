"use strict";

import getMapArr from "./../map/getMapArr";
import drawLine from "./drawLine";

export default function drawMap(holst) {
    getMapArr().forEach((element) => {
        drawLine(holst, element.x1, element.y1, element.x2, element.y2);
    });
}

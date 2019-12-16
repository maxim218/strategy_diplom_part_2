"use strict";

import drawLine from "./drawLine";

export default function renderU(holst, Uarr) {
    Uarr.forEach((element) => {
        drawLine(holst, element.x1, element.y1, element.x2, element.y2, "#00FF00", 1);
    });
}

"use strict";

import getMapArr from "./getMapArr";

export default function getPointsArr() {
    const pointsArr = [];

    getMapArr().forEach((element) => {
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
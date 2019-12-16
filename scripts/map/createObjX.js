"use strict";

export default function createObjX(pointsArr) {
    const objX = {};
    pointsArr.forEach((point) => {
        objX[point.x + "^" + point.y] = {
            xx: point.x,
            yy: point.y,
        }
    });
    return objX;
}

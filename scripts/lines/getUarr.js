"use strict";

import getPointsArr from "./../map/getPointsArr";
import getMapArr from "./../map/getMapArr";
import hitOtrs from "./hitOtrs";

export default function getUarr(heroX, heroY, goalX, goalY) {
    const pointsArr = getPointsArr();

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

            getMapArr().forEach((otr) => {
                const Ax1 = pA.x;
                const Ay1 = pA.y; 
                const Ax2 = pB.x;
                const Ay2 = pB.y;
                const Bx1 = otr.x1;
                const By1 = otr.y1;
                const Bx2 = otr.x2;
                const By2 = otr.y2;
                if(hitOtrs(Ax1, Ay1, Ax2, Ay2, Bx1, By1, Bx2, By2) === true) {
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

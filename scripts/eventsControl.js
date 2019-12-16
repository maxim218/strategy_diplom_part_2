"use strict";

import drawBackground from "./canvas/drawBackground";
import mapInitialize from "./map/mapInitialize";
import drawMap from "./canvas/drawMap";
import drawRectangle from "./canvas/drawRectangle";
import getUarr from "./lines/getUarr";
import renderU from "./canvas/renderU";
import getWayUsingPos from "./graph/getWayUsingPos";
import getPointsArr from "./map/getPointsArr";
import drawLine from "./canvas/drawLine";
import createObjX from "./map/createObjX";
import createObjU from "./map/createObjU";
import moveToPoint from "./move/moveToPoint";
import distance from "./graph/distance";

export default function eventsControl(holst) {
    console.log("Call function eventsControl");
    drawBackground(holst);
    mapInitialize();
    drawMap(holst);

    const heroX = 750;
    const heroY = 200;
    const goalX = 50;
    const goalY = 570;

    const Uarr = getUarr(heroX, heroY, goalX, goalY);
    renderU(holst, Uarr);
    
    drawMap(holst);
    drawRectangle(holst, heroX, heroY, "#FFFFFF");
    drawRectangle(holst, goalX, goalY, "#FF0000");

    const pointsArr = getPointsArr();
    pointsArr.push({x: heroX, y: heroY});
    pointsArr.push({x: goalX, y: goalY});

    const objX = createObjX(pointsArr);
    const objU = createObjU(Uarr);

    const heroName = heroX + "^" + heroY;
    const goalName = goalX + "^" + goalY;

    const way = getWayUsingPos(objX, objU, heroName, goalName);

    for(let i = 0; i < way.length; i++) {
        if(i + 1 < way.length) {
            const x1 = parseInt(way[i].split("^")[0]);
            const y1 = parseInt(way[i].split("^")[1]);
            const x2 = parseInt(way[i + 1].split("^")[0]);
            const y2 = parseInt(way[i + 1].split("^")[1]);
            drawLine(holst, x1, y1, x2, y2, "#000000", 2);
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
        moveToPoint(heroPosObj, currentGoalPosObj, 2);
        drawRectangle(holst, heroPosObj.x, heroPosObj.y, "#000000");
        if(distance(heroPosObj.x, heroPosObj.y, currentGoalPosObj.x, currentGoalPosObj.y) < 5) {
            if(wayIndex + 1 < way.length) {
                wayIndex++;
                currentGoalPosObj.x = parseInt(way[wayIndex].split("^")[0]);
                currentGoalPosObj.y = parseInt(way[wayIndex].split("^")[1]);
            }
        }
    }, 100);
}
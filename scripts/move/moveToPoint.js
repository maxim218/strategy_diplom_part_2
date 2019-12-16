"use strict";

export default function moveToPoint(heroPosObj, goalPosObj, speed) {
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

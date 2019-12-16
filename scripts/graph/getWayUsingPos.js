"use strict";

import distance from "./distance";
import getWay from "./getWay";

export default function getWayUsingPos(objX_par, objU_par, startXname_par, finishXname_par) {
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
        const distanceValue = distance(objX[a].xx, objX[a].yy, objX[b].xx, objX[b].yy);
        U[a + "_" + b] = distanceValue;
        U[b + "_" + a] = distanceValue;
    }

    const nameStart = startXname;
    const nameFinish = finishXname;

    const arr = getWay(X, U, nameStart, nameFinish);

    return arr;
}

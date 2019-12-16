"use strict";

export default function createObjU(Uarr) {
    const objU = {};
    Uarr.forEach((Uelement) => {
        const a = Uelement.x1 + "^" + Uelement.y1;
        const b = Uelement.x2 + "^" + Uelement.y2;
        objU[a + "_" + b] = true;
    });
    return objU;
}

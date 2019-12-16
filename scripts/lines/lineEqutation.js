"use strict";

export default function lineEqutation(x1, y1, x2, y2) {
    if(x1 === x2) {
        x2 += 0.12345;
    }

    if(y1 === y2) {
        y2 += 0.12345;
    }

    const dy = y1 - y2;
    const dx = x1 - x2;

    const k = dy / dx;
    const b = y1 - k * x1;
    
    return {b, k};
}
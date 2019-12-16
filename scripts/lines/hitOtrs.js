"use strict";

import lineEqutation from "./lineEqutation";
import middle from "./middle";

export default function hitOtrs(Ax1, Ay1, Ax2, Ay2, Bx1, By1, Bx2, By2) {
    const FIRST = lineEqutation(Ax1, Ay1, Ax2, Ay2);
    const SECOND = lineEqutation(Bx1, By1, Bx2, By2);

    let x = undefined;
    
    if(FIRST.k - SECOND.k !== 0) {
        x = (SECOND.b - FIRST.b) / (FIRST.k - SECOND.k);
    } else {
        x = (SECOND.b - FIRST.b) / (FIRST.k - SECOND.k + 0.12345);
    }

    const y = FIRST.k * x + FIRST.b;

    const a = middle(Ax1, x, Ax2);
    const b = middle(Bx1, x, Bx2);
    const c = middle(Ay1, y, Ay2);
    const d = middle(By1, y, By2);

    const flag = a && b && c && d;

    return (!!flag);
}

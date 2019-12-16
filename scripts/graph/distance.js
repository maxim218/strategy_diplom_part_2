"use strict";

export default function distance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const xxxx = dx * dx;
    const yyyy = dy * dy;
    const sqrt = Math.sqrt(xxxx + yyyy);
    const integer = parseInt(sqrt);
    return integer;
}
"use strict";

export default function drawRectangle(holst, xx, yy, color) {
    const size = 10;
    const middle = size / 2;
    holst.fillStyle = color;
    holst.fillRect(xx - middle, yy - middle, size, size);
}

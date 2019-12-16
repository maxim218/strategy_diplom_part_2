"use strict";

export default function drawLine(holst, x1, y1, x2, y2, color, width) {
    holst.strokeStyle = "#0000FF";
    if(color) {
        holst.strokeStyle = color;
    }

    holst.lineWidth = 2;
    if(width) {
        holst.lineWidth = width;
    }

    holst.beginPath();
    holst.moveTo(x1, y1);
    holst.lineTo(x2, y2);
    holst.closePath();
    holst.stroke();
}
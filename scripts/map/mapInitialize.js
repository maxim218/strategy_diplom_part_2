"use strict";

import createWallCube from "./createWallCube";

export default function mapInitialize() {
    console.log("Call function mapInitialize");

    createWallCube(3, 3, 797, 597);
    createWallCube(370, 50, 50, 350);
    createWallCube(450, 50, 50, 350);
    createWallCube(530, 50, 50, 350);
    createWallCube(370, 450, 210, 70);
    
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 5; j++)
            if(j % 2 === 0)
                createWallCube(i * 100 + 50 - 20, j * 100 + 50, 70, 70);
            else
                createWallCube(i * 100 + 50 + 20, j * 100 + 50, 70, 70);
}

"use strict";

import eventsControl from "./eventsControl";

window.onload = function() {
    console.log("Window load OK");
    const can = document.getElementById("can");
    const holst = can.getContext("2d");
    eventsControl(holst);
}

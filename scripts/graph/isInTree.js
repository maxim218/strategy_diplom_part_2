"use strict";

export default function isInTree(name, bottomElement) {
    let now = bottomElement;
    while(now) {
        if(now.name.toString() === name.toString()) return true;
        now = now.parent;
    }
    return false;
}

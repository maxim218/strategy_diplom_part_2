"use strict";

export default function middle(a, value, b) {
    if(a === b) {
        b++;
    }

    if(a < value && value < b) return true;
    if(b < value && value < a) return true;

    return false;
}

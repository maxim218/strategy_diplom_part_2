"use strict";

import isInTree from "./isInTree";

export default function getWay(paramX, paramU, paramNameStart, paramNameFinish) {
    const X = JSON.parse(JSON.stringify(paramX));
    const U = JSON.parse(JSON.stringify(paramU));
    const nameStart = paramNameStart.toString();
    const nameFinish = paramNameFinish.toString();

    const root = {
        name: nameStart,
        parent: null,
        way: 0,
    };

    X[nameStart] = 0;

    let minWay = 9999999999999;
    let endElement = root;

    function addChildren(element) {
        element.arr = [];

        for(let keyU in U) {
            const from = keyU.split("_")[0].toString();
            const to = keyU.split("_")[1].toString();
            if(element.name === from) {
                if(isInTree(to, element) === false) {
                    if(X[to] > element.way + U[keyU]) {
                        element.arr.push({
                            name: to.toString(),
                            parent: element,
                            way: element.way + U[keyU],
                        });
                        X[to] = element.way + U[keyU];
                    }
                }
            }
        }

        if(element.name.toString() === nameFinish.toString()) {
            if(minWay > element.way) {
                minWay = element.way;
                endElement = element;
            }
            return;
        }

        if(parseInt(minWay) <= parseInt(element.way)) return;

        element.arr.forEach((child) => {
            addChildren(child);
        });
    }

    addChildren(root);

    const resultArray = [];

    while(endElement) {
        resultArray.push(endElement.name);
        endElement = endElement.parent;
    }

    resultArray.reverse();

    return resultArray;
}

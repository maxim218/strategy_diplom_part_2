"use strict";

import assert from 'assert';

import equalFloat from "./../scripts/graph/equalFloat";
import distance from "./../scripts/graph/distance";
import isInTree from "./../scripts/graph/isInTree";
import getWay from "./../scripts/graph/getWay";
import getWayUsingPos from "./../scripts/graph/getWayUsingPos";
import lineEqutation from "./../scripts/lines/lineEqutation";
import hitOtrs from "./../scripts/lines/hitOtrs";
import middle from "./../scripts/lines/middle";

describe("Центр между числами", () => {
    it("Центр между числами", () => {
        assert.deepStrictEqual(middle(100, 150, 200), true);
        assert.deepStrictEqual(middle(200, 150, 100), true);

        assert.deepStrictEqual(middle(-30, -20, -10), true);
        assert.deepStrictEqual(middle(-10, -20, -30), true);

        assert.deepStrictEqual(middle(5, 23, 9), false);
        assert.deepStrictEqual(middle(9, 23, 5), false);
    });
});

describe("Проверка пересечения отрезков", () => {
    it("Отрезки пересекаются Тест первый", () => {
        assert.deepStrictEqual(hitOtrs(20, 10, 20, 40, 10, 30, 50, 20), true);
        assert.deepStrictEqual(hitOtrs(10, 30, 50, 20, 20, 10, 20, 40), true);
        assert.deepStrictEqual(hitOtrs(50, 20, 10, 30, 20, 10, 20, 40), true);
        assert.deepStrictEqual(hitOtrs(50, 20, 10, 30, 20, 40, 20, 10), true);
    });

    it("Отрезки пересекаются Тест второй", () => {
        assert.deepStrictEqual(hitOtrs(20, 10, 40, 20, 10, 30, 50, 10), true);
        assert.deepStrictEqual(hitOtrs(10, 30, 50, 10, 20, 10, 40, 20), true);
        assert.deepStrictEqual(hitOtrs(50, 10, 10, 30, 20, 10, 40, 20), true);
        assert.deepStrictEqual(hitOtrs(50, 10, 10, 30, 40, 20, 20, 10), true);
    });

    it("Отрезки НЕ пересекаются Тест третий", () => {
        assert.deepStrictEqual(hitOtrs(20, 10, 40, 20, 10, 30, 55, 100), false);
        assert.deepStrictEqual(hitOtrs(10, 30, 55, 100, 20, 10, 40, 20), false);
        assert.deepStrictEqual(hitOtrs(40, 20, 20, 10, 10, 30, 55, 100), false);
        assert.deepStrictEqual(hitOtrs(40, 20, 20, 10, 55, 100, 10, 30), false);
    });

    it("Отрезки НЕ пересекаются Тест четвертый", () => {
        assert.deepStrictEqual(hitOtrs(10, 10, 40, 10, 10, 20, 40, 20), false);
        assert.deepStrictEqual(hitOtrs(10, 20, 40, 20, 10, 10, 40, 10), false);
    });
});

describe("Получение уравнения прямой", () => {
    it("Первый тест", () => {
        const x1 = 2;
        const y1 = 15;
        const x2 = 5;
        const y2 = 27;
        const point = lineEqutation(x1, y1, x2, y2);
        assert.deepStrictEqual(equalFloat(point.k, 4), true);
        assert.deepStrictEqual(equalFloat(point.b, 7), true);
    });

    it("Второй тест", () => {
        const x1 = 5;
        const y1 = 0;
        const x2 = 10;
        const y2 = 50;
        const point = lineEqutation(x1, y1, x2, y2);
        assert.deepStrictEqual(equalFloat(point.k, 10), true);
        assert.deepStrictEqual(equalFloat(point.b, -50), true);
    });

    it("Третий тест", () => {
        const x1 = 50;
        const y1 = 100;
        const x2 = 50;
        const y2 = 200;
        const point = lineEqutation(x1, y1, x2, y2);
        assert.deepStrictEqual(!!point.k, true);
        assert.deepStrictEqual(!!point.b, true);
    });
});

describe("Получение кратчайшего пути с использованием координат", () => {
    it("Второй вариант", () => {
        const objX = {
            x1: {xx: 20, yy: 50},
            x2: {xx: 10, yy: 30},
            x3: {xx: 20, yy: 10},
            x4: {xx: 60, yy: 25},
            x5: {xx: 80, yy: 25},
        };

        const objU = {
            "x2_x1": true,
            "x3_x1": true,
            "x4_x1": true,
            "x4_x3": true,
            "x5_x4": true,
        };

        const startXname = "x1";
        const finishXname = "x5";

        assert.deepStrictEqual(getWayUsingPos(objX, objU, startXname, finishXname), [
            "x1", "x4", "x5",
        ]);
    });

    it("Первый вариант", () => {
        const objX = {
            x1: {xx: 20, yy: 50},
            x2: {xx: 10, yy: 30},
            x3: {xx: 20, yy: 10},
            x4: {xx: 60, yy: 25},
            x5: {xx: 80, yy: 25},
        };

        const objU = {
            "x1_x2": true,
            "x1_x3": true,
            "x1_x4": true,
            "x3_x4": true,
            "x4_x5": true,
        };

        const startXname = "x1";
        const finishXname = "x5";

        assert.deepStrictEqual(getWayUsingPos(objX, objU, startXname, finishXname), [
            "x1", "x4", "x5",
        ]);
    });
});

describe("Получение кратчайшего пути", () => {
    it("Вариант D", () => {
        const X = {
            "x1": 99999999999999,
            "x2": 99999999999999,
            "x3": 99999999999999,
            "x4": 99999999999999,
        };

        const U = {
            "x1_x2": 200,
            "x1_x3": 30,
            "x3_x2": 40,
            "x2_x4": 100,
            "x4_x1": 7,
        };

        const nameStart = "x1";
        const nameFinish = "x4";

        assert.deepStrictEqual(getWay(X, U, nameStart, nameFinish), [
            "x1", "x3", "x2", "x4",
        ]);
    });

    it("Вариант C", () => {
        const X = {
            "x1": 99999999999999,
            "x2": 99999999999999,
            "x3": 99999999999999,
            "x4": 99999999999999,
        };

        const U = {
            "x1_x2": 100,
            "x2_x1": 10,
            "x1_x3": 200,
            "x3_x1": 20,
            "x4_x1": 5,
            "x2_x4": 800,
        };

        const nameStart = "x1";
        const nameFinish = "x4";

        assert.deepStrictEqual(getWay(X, U, nameStart, nameFinish), [
            "x1", "x2", "x4",
        ]);
    });    

    it("Вариант B", () => {
        const X = {
            "x1": 99999999999999,
            "x2": 99999999999999,
            "x3": 99999999999999,
            "x4": 99999999999999,
        };

        const U = {
            "x1_x2": 12,
            "x1_x3": 35,
            "x1_x4": 230,
            "x2_x4": 100,
            "x3_x4": 40,
        };

        const nameStart = "x1";
        const nameFinish = "x4";

        assert.deepStrictEqual(getWay(X, U, nameStart, nameFinish), [
            "x1", "x3", "x4",
        ]);
    });

    it("Вариант А", () => {
        const X = {
            "x1": 99999999999999,
            "x2": 99999999999999,
            "x3": 99999999999999,
        };

        const U = {
            "x1_x2": 5,
            "x2_x3": 7,
        };

        const nameStart = "x1";
        const nameFinish = "x3";

        assert.deepStrictEqual(getWay(X, U, nameStart, nameFinish), [
            "x1", "x2", "x3"
        ]);
    });
});

describe("Проверка наличия элемента в дереве", () => {
    it("Проверка наличия элемента в дереве", () => {
        const bootomElement = {
            name: "x7",
            parent: {
                name: "x4",
                parent: {
                    name: "x2",
                    parent: null,
                }
            }
        };

        assert.deepStrictEqual(isInTree("x2", bootomElement), true);
        assert.deepStrictEqual(isInTree("x7", bootomElement), true);
        assert.deepStrictEqual(isInTree("x4", bootomElement), true);

        assert.deepStrictEqual(isInTree("x11", bootomElement), false);
        assert.deepStrictEqual(isInTree("x22", bootomElement), false);
        assert.deepStrictEqual(isInTree("x33", bootomElement), false);
    });
});

describe("Тестирование функции получения дистанции", () => {
    it("Тестирование функции получения дистанции", () => {
        let d = undefined;

        d = distance(5, 1000, 5, 8000);
        assert.deepStrictEqual(equalFloat(d, 7000), true);

        d = distance(300, 5, 800, 5);
        assert.deepStrictEqual(equalFloat(d, 500), true);

        d = distance(0, 0, 3, 4);
        assert.deepStrictEqual(equalFloat(d, 5), true);
    });
})

describe("Тестирование функции сравнения вещественных чисел", () => {
    it("Тестирование функции сравнения вещественных чисел", () => {
        assert.deepStrictEqual(equalFloat(50, 60), false);
        assert.deepStrictEqual(equalFloat(null, 30), false);
        assert.deepStrictEqual(equalFloat(40, undefined), false);
        assert.deepStrictEqual(equalFloat(15.4, 15.45), true);
        assert.deepStrictEqual(equalFloat(0.0, -0.05), true);
    });
});


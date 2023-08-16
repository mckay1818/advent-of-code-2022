"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const readTextInput_1 = require("../readTextInput");
const getCalorieCounts_1 = require("./getCalorieCounts");
const main = async () => {
    const inputText = await (0, readTextInput_1.readTextInput)("src/day1/day1_input.txt");
    const calorieCounts = (0, getCalorieCounts_1.getCalorieCounts)(inputText);
    return calorieCounts
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((acc, cur) => acc + cur);
};
exports.main = main;
const result = (0, exports.main)();
setTimeout(() => {
    console.log(result);
}, 2000);

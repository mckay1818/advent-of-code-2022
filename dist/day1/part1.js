"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const readTextInput_1 = require("../readTextInput");
const getCalorieCounts_1 = require("./getCalorieCounts");
const main = async () => {
    const inputText = await (0, readTextInput_1.readTextInput)("src/day1/day1_input.txt");
    const calorieCounts = (0, getCalorieCounts_1.getCalorieCounts)(inputText);
    return Math.max(...calorieCounts);
};
exports.main = main;

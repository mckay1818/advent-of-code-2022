"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCalorieCounts = void 0;
const getCalorieCounts = (inputText) => {
    const calorieCounts = inputText
        .split("\n\n")
        .map((count) => count.split("\n").reduce((acc, cur) => acc + parseInt(cur), 0));
    return calorieCounts;
};
exports.getCalorieCounts = getCalorieCounts;

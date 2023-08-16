"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const readTextInput_1 = require("../readTextInput");
const main = async () => {
    try {
        const result = await (0, readTextInput_1.readTextInput)("src/day1/day1_input.txt");
        console.log(result);
    }
    catch (e) {
        console.log(e);
    }
};
exports.main = main;
(0, exports.main)();

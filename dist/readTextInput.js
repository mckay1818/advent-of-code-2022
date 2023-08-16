"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTextInput = void 0;
const fs_1 = require("fs");
const readTextInput = async (path) => {
    return new Promise((resolve, reject) => {
        (0, fs_1.readFile)(path, "utf-8", (err, data) => {
            console.log(path);
            err ? reject(err) : resolve(data);
        });
    });
};
exports.readTextInput = readTextInput;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTextInput = void 0;
const fs_1 = require("fs");
const readTextInput = async (path) => {
    //interesting exercise in handling async file reading - since
    //fn does not return a val, needed to construct a promise
    // resolve + reject used for constructing Promises
    return new Promise((resolve, reject) => {
        (0, fs_1.readFile)(path, "utf-8", (err, data) => {
            console.log(path);
            err ? reject(err) : resolve(data);
        });
    });
};
exports.readTextInput = readTextInput;

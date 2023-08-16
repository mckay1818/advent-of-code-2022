import {readFile} from "fs";

export const readTextInput = async (path: string): Promise<string> => {
  //interesting exercise in handling async file reading - since
  //fn does not return a val, needed to construct a promise
  // resolve + reject used for constructing Promises
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      console.log(path);
      err ? reject(err) : resolve(data);
    });
  });
};

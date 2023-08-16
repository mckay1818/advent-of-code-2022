import {readFile} from "fs";

export const readTextInput = async (path: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      console.log(path);
      err ? reject(err) : resolve(data);
    });
  });
};

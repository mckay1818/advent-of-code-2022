import {readTextInput} from "../readTextInput";
import {getCalorieCounts} from "./getCalorieCounts";

export const main = async () => {
  const inputText = await readTextInput("src/day1/day1_input.txt");
  const calorieCounts = getCalorieCounts(inputText);
  return Math.max(...calorieCounts);
};

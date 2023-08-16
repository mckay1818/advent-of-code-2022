import {readTextInput} from "../readTextInput";

export const main = async () => {
  try {
    const result = await readTextInput("src/day1/day1_input.txt");
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

main();

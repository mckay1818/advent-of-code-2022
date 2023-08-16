export const getCalorieCounts = (inputText: string) => {
  const calorieCounts = inputText
    .split("\n\n")
    .map((count) =>
      count.split("\n").reduce((acc, cur) => acc + parseInt(cur), 0)
    );
  return calorieCounts;
};

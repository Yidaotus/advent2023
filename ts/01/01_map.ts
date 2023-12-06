const path = "./input.txt";
const file = Bun.file(path);

const text = await file.text();
const lines = text.trim().split("\n");

export const solve = (lines: Array<string>) => {
  return lines
    .map((line) => {
      const numbers = line.split("").filter((c) => parseInt(c));
      return parseInt(numbers[0]) * 10 + parseInt(numbers[numbers.length - 1]);
    })
    .reduce((n, x) => x + n, 0);
};

console.log(solve(lines));

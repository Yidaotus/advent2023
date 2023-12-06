const path = "./input.txt";
const file = Bun.file(path);

const text = await file.text();
const lines = text.trim().split("\n");

export const solve = (lines: Array<string>) => {
  let result = 0;
  lines.map((line) => {
    const numbers = line.replace(/[^\d]/g, "") || [];
    result += parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`);
  });
  return result;
};

console.log(solve(lines));

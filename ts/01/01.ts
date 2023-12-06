const path = "./input.txt";
const file = Bun.file(path);

const text = await file.text();
const lines = text.trim().split("\n");

export const solve = (lines: Array<string>) => {
  let result = 0;
  for (const line of lines) {
    const chars = line.split("");
    let targetNumbers: Array<number> = [];
    for (const char of chars) {
      const parsedChar = Number.parseInt(char.trim());
      if (Number.isInteger(parsedChar)) {
        targetNumbers.push(parsedChar);
      }
    }
    const targetNumber = Number.parseInt(
      String(targetNumbers[0]) + String(targetNumbers[targetNumbers.length - 1])
    );
    result += targetNumber;
  }
  return result;
};

console.log(solve(lines));

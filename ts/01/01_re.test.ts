import { solve } from "./01_re.ts";
import { expect, test } from "bun:test";

const example = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

test("Example", () => {
  const examples = example.trim().split("\n");
  console.log(examples);
  expect(solve(examples)).toBe(142);
});

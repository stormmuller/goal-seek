import { expect, test } from "vitest";
import { newtonRaphsonMethodGoalSeek } from "./newton-raphson-method-goal-seek";

test("newton-raphson method goal seek", () => {
  const fn = (x: number) => x * x;
  const derivativeFn = (x: number) => 2 * x;
  const target = 9;
  const initialGuess = 2;

  const result = newtonRaphsonMethodGoalSeek(fn, derivativeFn, target, initialGuess);

  expect(result).toBeCloseTo(3);
});

test("newton-raphson method goal seek", () => {
  const fn = (x: number) => x * 2;
  const derivativeFn = (x: number) => 2;
  const target = 9;
  const initialGuess = 2;

  const result = newtonRaphsonMethodGoalSeek(fn, derivativeFn, target, initialGuess);

  expect(result).toBeCloseTo(4.5);
});


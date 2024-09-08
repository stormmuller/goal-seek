import { expect, test } from "vitest";
import { newtonRaphsonMethodGoalSeek } from "./newton-raphson-method-goal-seek";

test("newton-raphson simple", () => {
  const fn = (x: number) => x * x;
  const derivativeFn = (x: number) => 2 * x;
  const target = 9;
  const initialGuess = 2;

  const result = newtonRaphsonMethodGoalSeek(fn, derivativeFn, target, initialGuess);

  expect(result).toBeCloseTo(3);
});

test("newton-raphson polynomial", () => {
  const fn = (x: number) => Math.pow(x, 2) - (4 * x) - 7;
  const derivativeFn = (x: number) => (2 * x) - 4;
  const target = 10;
  const initialGuess = 5;

  const result = newtonRaphsonMethodGoalSeek(fn, derivativeFn, target, initialGuess);

  expect(result).toBeCloseTo(6.582);
});

test("newton-raphson local maxima/minima", () => {
  const fn = (x: number) => 27 * Math.pow(x, 3) - (3 * x) + 1;
  const derivativeFn = (x: number) => 81 * Math.pow(x, 2) - 3;
  const target = 0;
  const initialGuess = 0.19;

  const result = newtonRaphsonMethodGoalSeek(fn, derivativeFn, target, initialGuess);

  expect(result).toBeNull();
});

test("newton-raphson zero derivative", () => {
  const fn = (x: number) => Math.pow(x, 3);
  const derivativeFn = (x: number) => 3 * Math.pow(x, 2);
  const target = 0;
  const initialGuess = 0; // Zero derivative here, passes because the result is acceptable and check before checking for divide-by-zero

  const result = newtonRaphsonMethodGoalSeek(fn, derivativeFn, target, initialGuess);

  expect(result).toBe(0);
});

test("newton-raphson oscillation", () => {
  const fn = (x: number) => Math.cos(x);
  const derivativeFn = (x: number) => -Math.sin(x);
  const target = 0;
  const initialGuess = 3; // Near zero crossing of cos(x), oscillation likely

  const result = newtonRaphsonMethodGoalSeek(fn, derivativeFn, target, initialGuess);

  expect(result).toBeCloseTo(-4.7123);
});

test("newton-raphson discontinuity", () => {
  const fn = (x: number) => 1 / x;
  const derivativeFn = (x: number) => -1 / Math.pow(x, 2);
  const target = 0;
  const initialGuess = 0.1; // Close to discontinuity

  const result = newtonRaphsonMethodGoalSeek(fn, derivativeFn, target, initialGuess, 0.0000000000001, 10);

  expect(result).toBeNull(); // Expect failure due to discontinuity near x = 0
});





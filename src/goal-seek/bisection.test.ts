import { expect, test } from "vitest";
import { bisectionGoalSeek } from "./bisection";

test('simple bisection', () => {
    const fn = (x: number) => x * 2;
    const target = 100;
    const lowerBound = 0;
    const upperBound = 1000;

    const solution = bisectionGoalSeek(fn, target, lowerBound, upperBound);

    expect(solution).toBeCloseTo(50);
})

test('unsolvable with newton bisection', () => {
    const fn = (x: number) => 27 * Math.pow(x, 3) - (3 * x) + 1;
    const target = 0;
    const lowerBound = -1;
    const upperBound = 1;

    const solution = bisectionGoalSeek(fn, target, lowerBound, upperBound);

    expect(solution).toBeCloseTo(-0.44);
})
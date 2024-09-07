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
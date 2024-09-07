export function bisectionGoalSeek(
  fn: (x: number) => number,
  target: number,
  lowerBound: number,
  upperBound: number,
  tolerance: number = 0.0001,
  maxIterations: number = 1000,
  currentIteration: number = 0
): number | null {
    const input = (lowerBound + upperBound) / 2;

    const result = fn(input);

    if (Math.abs(result - target) < tolerance) {
        return input;
    }

    let nextIteration = currentIteration + 1;

    if (nextIteration >= maxIterations) {
        return null; // max iterations reached, no solution found!
    }

    if (result < target) {
        return bisectionGoalSeek(fn, target, input, upperBound, tolerance, maxIterations, nextIteration);
    } else {
        return bisectionGoalSeek(fn, target, lowerBound, input, tolerance, maxIterations, nextIteration);
    }
}

export function bisectionGoalSeek(
  fn: (x: number) => number,
  target: number,
  lowerBound: number,
  upperBound: number,
  tolerance: number = 0.0001,
  maxIterations: number = 1000
): number | null {
  let lower = lowerBound;
  let upper = upperBound;
  let mid: number;

  for (
    let currentIteration = 0;
    currentIteration < maxIterations;
    currentIteration++
  ) {
    mid = (lower + upper) / 2;
    const result = fn(mid);

    if (Math.abs(result - target) < tolerance) {
      return mid;
    }

    if (result < target) {
      lower = mid;
    } else {
      upper = mid;
    }
  }

  return null;
}

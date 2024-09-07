export function newtonRaphsonMethodGoalSeek(
  fn: (x: number) => number,
  derivativeFn: (x: number) => number,
  target: number,
  currentGuess: number,
  tolerance: number = 0.0001,
  maxIterations: number = 1000,
  currentIteration:number = 0
): number | null {
    if (currentIteration >= maxIterations) {
        return null;
    }

    const result = fn(currentGuess);
    const derivativeResult = derivativeFn(currentGuess);

    const diff = result - target;

    if (Math.abs(diff) < tolerance) {
        return currentGuess
    }

    if (derivativeResult === 0) {
        // Derivative is zero, can't proceed.
        return null;
    }

    const nextGuess = currentGuess - diff / derivativeResult;

    return newtonRaphsonMethodGoalSeek(fn, derivativeFn, target, nextGuess, tolerance, maxIterations, currentIteration + 1);
}

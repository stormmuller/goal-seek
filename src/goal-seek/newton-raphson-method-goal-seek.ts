export function newtonRaphsonMethodGoalSeek(
  fn: (x: number) => number,
  derivativeFn: (x: number) => number,
  target: number,
  initialGuess: number,
  tolerance: number = 0.0001,
  maxIterations: number = 1000
): number | null {
    let x = initialGuess;

    for (let currentIteration = 0; currentIteration < maxIterations; currentIteration++) {   
        const result = fn(x);
        const derivativeResult = derivativeFn(x);
    
        const diff = result - target;
    
        if (Math.abs(diff) < tolerance) {
            return x;
        }
    
        if (derivativeResult === 0) {
            // Derivative is zero, can't proceed.
            return null;
        }
    
        x = x - diff / derivativeResult;
    }

    return null;
}

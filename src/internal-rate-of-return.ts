import { netPresentValue, netPresentValueDerivative } from "./net-present-value";

export function internalRateOfReturn(
  cashFlows: number[],
  guess: number = 0.1,
  maxIter: number = 100,
  precision: number = 0.00001
): number | null {
    let rate = guess;

    for (let i = 0; i < maxIter; i++) {
        let npvValue = netPresentValue(rate, cashFlows);
        let derivative = netPresentValueDerivative(rate, cashFlows);
        let newRate = rate - npvValue / derivative;

        if (Math.abs(newRate - rate) < precision) {
            return newRate;
        }

        rate = newRate;
    }

    return null; // Return null if no convergence
}

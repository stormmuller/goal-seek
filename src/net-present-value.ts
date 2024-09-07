export function netPresentValue(rate: number, cashFlows: number[]): number {
  let result = 0;

  for (let t = 0; t < cashFlows.length; t++) {
    const cashFlow = cashFlows[t];

    result += (cashFlow / Math.pow((1 + rate), t));
  }

  return result;
}

export function netPresentValueDerivative(rate: number, cashFlows: number[]): number {

    let result = 0;

    for (let t = 0; t < cashFlows.length; t++) {
      const cashFlow = cashFlows[t];
  
      result += (-t * cashFlow / Math.pow((1 + rate), t + 1));
    }
  
    return result;
}
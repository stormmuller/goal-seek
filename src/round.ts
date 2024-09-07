export function round(x: number, decimalPlaces: number = 2) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(x * factor) / factor;
}

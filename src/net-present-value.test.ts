import { expect, test } from 'vitest'
import { netPresentValue, netPresentValueDerivative } from './net-present-value'

test('calculates npv', () => {
  const result = netPresentValue(0.04, [-10000, 1500, 2500, 4500, 3000]);

  expect(result).toBeCloseTo(318.59);
})

test('calculates the derivative of npv', () => {
  const result = netPresentValueDerivative(0.04, [-10000, 1500, 2500, 4500, 3000]);

  expect(result).toBeCloseTo(-27234.8);
})
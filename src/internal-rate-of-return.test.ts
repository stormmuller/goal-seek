import { expect, test } from "vitest";
import { internalRateOfReturn } from "./internal-rate-of-return";

test('Calculates IRR', () => {
    expect(internalRateOfReturn([-10000, 1500, 2500, 4500, 3000])).toBeCloseTo(0.052);
})
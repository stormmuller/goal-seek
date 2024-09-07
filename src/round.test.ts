import { expect, test } from "vitest";
import { round } from "./round";

test('Rounds', () => {
    expect(round(3.14159265359)).toBe(3.14);
    expect(round(-3.14159265359)).toBe(-3.14);
    expect(round(6.283185307179586)).toBe(6.28);
    expect(round(-6.283185307179586)).toBe(-6.28);
    expect(round(-6.28863)).toBe(-6.29);
    expect(round(-6.29863)).toBe(-6.3);
});
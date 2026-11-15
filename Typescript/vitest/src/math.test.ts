import { describe, expect, it, vi } from "vitest";
import { double } from "./math.ts";

describe("double", () => {
  it("doubles", () => { expect(double(2)).toBe(4); });
  it("can spy", () => {
    const fn = vi.fn(double);
    fn(3);
    expect(fn).toHaveBeenCalledWith(3);
  });
});

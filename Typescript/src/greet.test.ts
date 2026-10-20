import { describe, expect, expectTypeOf, it } from "vitest";
import { greet } from "./greet.ts";

describe("greet", () => {
  it("greets by name", () => {
    expect(greet("Nate")).toBe("Hello, Nate!");
  });

  it("returns a string (type test)", () => {
    expectTypeOf(greet).parameters.toEqualTypeOf<[string]>();
    expectTypeOf(greet).returns.toBeString();
  });
});

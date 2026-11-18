import * as matchers from "vitest-axe/matchers";
import { expect } from "vitest";

expect.extend(matchers); // adds .toHaveNoViolations() for accessibility checks

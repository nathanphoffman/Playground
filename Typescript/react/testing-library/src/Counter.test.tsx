import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import { Counter } from "./Counter";

test("increments when clicked", async () => {
  render(<Counter />);
  await userEvent.click(screen.getByRole("button", { name: /count: 0/i }));
  expect(screen.getByRole("button")).toHaveTextContent("Count: 1");
});

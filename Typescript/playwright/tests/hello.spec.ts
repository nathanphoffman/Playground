import { expect, test } from "@playwright/test";

test("button updates the page", async ({ page }) => {
  await page.setContent(`<h1>Hello, Playwright</h1><button onclick="this.textContent='Clicked'">Click</button>`);
  await page.getByRole("button").click();
  await expect(page.getByRole("button")).toHaveText("Clicked");
});

import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173");
});

test("button click opens dialog", async ({ page }) => {
  await page.getByRole("button", { name: "More information" }).first().click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.locator("dialog ul > li")).toContainText([
    "Indentification number",
    "First name",
    "Last name",
    "Birth date",
    "Gender",
  ]);
});
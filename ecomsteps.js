import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("I navigate to {string}", async ({ page }, url) => {
  await page.goto(url);
});

Given("I click on {string}", async ({ page }, MyAccount) => {
  await page.getByRole("button", { name: " My account" }).click();
});

Given("I enter E-Mail Address {string}", async ({ page }, Email) => {
  await page.getByRole("textbox", { name: "E-Mail Address" }).fill(Email);
});

Given("I enter password {string}", async ({ page }, Password) => {
  await page.getByRole("textbox", { name: "Password" }).fill(Password);
});

Given("I click on login button", async ({ page }) => {
  await page.getByRole("button", { name: "Login" }).click();
});

Then("I should verify url contains {string}", async ({ page }, loggedUrl) => {
  await expect(page).toHaveURL(new RegExp(loggedUrl));
});

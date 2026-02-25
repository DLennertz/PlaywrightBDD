import { expect, Page } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();
let newTab;
Given("I am on certificacao page", async ({ page }) => {
  await page.goto("https://qualidade.apprbs.com.br/certificacao");
});

Then("I see form {string}", async ({ page }, keyword) => {
  await expect(
    page.locator("div").filter({ hasText: keyword }).nth(4)
  ).toBeVisible();
});

When("I fill up Nome with {string}", async ({ page }, name) => {
  await page.locator('input[name="pessoa.nome"]').fill(name);
});

When("I fill up Telefone with {string}", async ({ page }, number) => {
  await page.getByPlaceholder("(11) 96123-").fill(number);
});

When("I fill up Email with {string}", async ({ page }, email) => {
  await page.getByPlaceholder("email@exemplo.com").fill(email);
});

When("I click on Avançar", async ({ page }) => {
  await page.getByPlaceholder("email@exemplo.com").press("Tab");
  await page.getByRole("button", { name: "Avançar" }).click();
});

Then("I should see the next step of the form", async ({ page }) => {
  await expect(
    page.locator("div").filter({ hasText: "Inscreva-se agora! 2 / 2" }).nth(4)
  ).toBeVisible();
});

When("I fill all required fields with valid data", async ({ page }) => {
  await page.locator('input[name="pessoa.nome"]').fill("Maria do Carmo");

  await page.getByPlaceholder("(11) 96123-").fill("11992485959");

  await page.getByPlaceholder("email@exemplo.com").fill("email@yahoo.com");

  await page.getByPlaceholder("email@exemplo.com").press("Tab");
});

Then("the button Avançar should be enabled", async ({ page }) => {
  await page.getByRole("button", { name: "Avançar" }).click();
});

When("I click on Quero me certificar", async ({ page }) => {
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page
      .locator("#iwgqid")
      .getByRole("link", { name: "Quero me certificar" })
      .click(),
  ]);

  newTab = popup;

  await newTab.waitForLoadState();
});

Then("I should be redirected to the home page", async ({}) => {
  await expect(newTab).toHaveURL("https://rubeus.com.br/");
});

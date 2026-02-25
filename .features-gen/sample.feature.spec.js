// Generated from: sample.feature
import { test } from "playwright-bdd";

test.describe('Certificacao Page', () => {

  test('Check certificacao page', async ({ Given, Then, page }) => { 
    await Given('I am on certificacao page', null, { page }); 
    await Then('I see form "Inscreva-se agora!"', null, { page }); 
  });

  test('Completar formulario valido', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on certificacao page', null, { page }); 
    await When('I fill up Nome with "João da Silva"', null, { page }); 
    await And('I fill up Telefone with "11961234567"', null, { page }); 
    await And('I fill up Email with "emailemail@gmail.com"', null, { page }); 
    await And('I click on Avançar', null, { page }); 
    await Then('I should see the next step of the form', null, { page }); 
  });

  test('Botão Avançar deve habilitar com dados válidos', async ({ Given, When, Then, page }) => { 
    await Given('I am on certificacao page', null, { page }); 
    await When('I fill all required fields with valid data', null, { page }); 
    await Then('the button Avançar should be enabled', null, { page }); 
  });

  test('"Quero me certificar" should redirect to home with form open', async ({ Given, When, Then, page }) => { 
    await Given('I am on certificacao page', null, { page }); 
    await When('I click on Quero me certificar', null, { page }); 
    await Then('I should be redirected to the home page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('sample.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on certificacao page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then I see form \"Inscreva-se agora!\"","stepMatchArguments":[{"group":{"start":11,"value":"\"Inscreva-se agora!\"","children":[{"start":12,"value":"Inscreva-se agora!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on certificacao page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I fill up Nome with \"João da Silva\"","stepMatchArguments":[{"group":{"start":20,"value":"\"João da Silva\"","children":[{"start":21,"value":"João da Silva","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I fill up Telefone with \"11961234567\"","stepMatchArguments":[{"group":{"start":24,"value":"\"11961234567\"","children":[{"start":25,"value":"11961234567","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I fill up Email with \"emailemail@gmail.com\"","stepMatchArguments":[{"group":{"start":21,"value":"\"emailemail@gmail.com\"","children":[{"start":22,"value":"emailemail@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I click on Avançar","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see the next step of the form","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I am on certificacao page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I fill all required fields with valid data","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the button Avançar should be enabled","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given I am on certificacao page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When I click on Quero me certificar","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the home page","stepMatchArguments":[]}]},
]; // bdd-data-end
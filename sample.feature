Feature: Certificacao Page

    Scenario: Check certificacao page
        Given I am on certificacao page
        Then I see form "Inscreva-se agora!"

    Scenario: Completar formulario valido
        Given I am on certificacao page
        When I fill up Nome with "João da Silva"
        And I fill up Telefone with "11961234567"
        And I fill up Email with "emailemail@gmail.com"
        And I click on Avançar
        Then I should see the next step of the form

    Scenario: Botão Avançar deve habilitar com dados válidos
        Given I am on certificacao page
        When I fill all required fields with valid data
        Then the button Avançar should be enabled

    Scenario: "Quero me certificar" should redirect to home with form open
        Given I am on certificacao page
        When I click on Quero me certificar
        Then I should be redirected to the home page
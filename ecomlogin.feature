Feature: Verify login

    As a user
    I want to login with valid and invalid credentials
    So that I can access my account

    
    Scenario: Verify user is able to login with valid credentials
        Given I navigate to "https://ecommerce-playground.lambdatest.io/"
        And I click on "My Account"
        And I enter E-Mail Address "pranav@testroverautomation.com"
        And I enter password "Test1234"
        And I click on login button
        Then I should verify url contains "route=account/account"
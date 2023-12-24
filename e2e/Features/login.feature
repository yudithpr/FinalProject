Feature: Login

Scenario: User Login with valid email and password
    Given User have LoginPage
    When User have email "yudithriani123@gmail.com"
    When User have password "password"
    When User click on loginbutton
    Then User successfully login

Scenario: User Login with valid email and invalid password
    Given User have LoginPage
    When User have email "yudithriani123@gmail.com"
    When User have password "pass"
    When User click on loginbutton
    Then User failed to login

Scenario: User Login with valid email and invalid password
    Given User have LoginPage
    When User have email "yudith"
    When User have password "password"
    When User click on loginbutton
    Then User failed to login

Scenario: User Login with valid email and invalid password
    Given User have LoginPage
    When User have email "yudith"
    When User have password "pass"
    When User click on loginbutton
    Then User failed to login


Feature: valid login

    Scenario: User Login with valid email and password
    Given User have Loginpage
    When User submit login
    Then User successfully Login


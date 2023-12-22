Feature: valid login

    Scenario: User Login with credential data
    Given User have Loginpage
    When User submit login
    Then User successfully Login
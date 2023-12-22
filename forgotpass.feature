Feature: Forgot password with registered email

    Scenario: User forget password
    Given User have Loginpage
    When User click forgot password
    When User submit registered email
    Then User get password reminder
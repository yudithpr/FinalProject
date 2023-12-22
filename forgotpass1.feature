Feature: Forgot password with unregistered email

    Scenario: User forget password
    Given User have Loginpage
    When User click forgot password
    When User submit unregistered email
    Then User get notification
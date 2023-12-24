Feature: Forgot password

    Scenario: User forgot password registered email
    Given User have Loginpage
    When User have forgot email page
    When User input email "yudithriani123@gmail.com"
    When User click on send reminder button
    Then User get the password

    Scenario: User forgot password unregistered email
    Given User have Loginpage
    When User have forgot email page
    When User input email "yudith@gmail.com"
    When User click on send reminder button
    Then User get the error notification
Feature: Regist Account

    Scenario: User Regist an Account
    Given User have mainpage
    When User Click on registbutton
    When User input Email "yo@gmail.com"
    When User have Password "password"
    When User have repassword "password"
    When User have Full Name "yudith"
    When User have Phone "0821111111"
    When User click on registbutton
    Then User successfully Regist an Account

    Scenario: User Failed Regist an Account
    Given User have mainpage
    When User Click on registbutton
    When User input Email "yudithriani123@gmail.com"
    When User have Password "password"
    When User have repassword "password"
    When User have Full Name "yudith"
    When User have Phone "0821111111"
    When User click on registbutton
    Then User failed to Regist an Account

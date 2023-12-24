/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../PageObject/login.page";

Given ('User have LoginPage', ()=>{
    LoginPage.visit('https://sistemtoko.com/login')
});

When ("User have email {string}", function (email){
    LoginPage.fillemail(email)
});

When ('User have password {string}', function(password){
    LoginPage.fillpassword(password)
});

When ('User click on loginbutton', ()=>{
    LoginPage.submitlogin()
});

Then ('User successfully login',()=>{
    LoginPage.assert1()

});

Then('User failed to login',()=>{
    LoginPage.assert2()
})

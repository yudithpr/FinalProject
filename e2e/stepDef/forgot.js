/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import ForgotPasswordPage from "../PageObject/forgot.page";

Given ('User have Loginpage', ()=>{
    ForgotPasswordPage.visit()
});

When ('User have forgot email page', ()=>{
    ForgotPasswordPage.forgotmypass()
});

When ('User input email {string}', function(email){
    ForgotPasswordPage.fillemail(email)
});

When ('User click on send reminder button', ()=>{
    ForgotPasswordPage.sendreminder()
});

Then ('User get the password',()=>{
    ForgotPasswordPage.assert()

});

Then ('User get the error notification',()=>{
    ForgotPasswordPage.assert1()});

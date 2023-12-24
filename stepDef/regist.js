/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegistPage from "../PageObject/regist.page"

Given('User have mainpage',()=>{
    RegistPage.visit()
})

When('User Click on registbutton',()=>{
    RegistPage.clickregistpage()
})

When('User input Email {string}', function(email1){
    RegistPage.fillemail(email1)
})

When ('User have Password {string}', function(password){
    RegistPage.fillpassword(password)
})

When ('User have repassword {string}', function(repassword){
    RegistPage.fillrepassword(repassword)
})

When ('User have Full Name {string}', function(fullname){
    RegistPage.fillfullname(fullname)
})

When ('User have Phone {string}', function(phone){
    RegistPage.fillphone(phone)
})

When ('User have phone {string}', function(phone){
    RegistPage.fillfullname(phone)
})

When ('User click on registbutton',()=>{
    RegistPage.submitregist()
})

Then('User successfully Regist an Account',()=>{
    RegistPage.assert()
})

Then('User failed to Regist an Account',()=>{
    RegistPage.assert2()
})

/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import MenuPage from "../PageObject/menu.page"


Given('User have main page',()=>{
    MenuPage.visit()
})

When('User clicks on the drop-down menu of features', ()=>{
    MenuPage.dropdownmenu()
})

When('User clicks on Website feature',()=>{
    MenuPage.website()
})

When('User clicks on Sistem Informasi feature',()=>{
    MenuPage.sisteminformasi()
})

When('User clicks on Chatbot feature',()=>{
    MenuPage.chatbot()
})

When('User clicks on Android Store feature',()=>{
    MenuPage.androidstore()
})

When('User clicks on Aplikasi Kasir feature',()=>{
    MenuPage.aplikasikasir()
})

Then('User have Website page', ()=>{
    MenuPage.assert1()
})

Then('User have Sistem Informasi page', ()=>{
    MenuPage.assert2()
})

Then('User have ChatBot page', ()=>{
    MenuPage.assert3()
})

Then('User have Android Store page', ()=>{
    MenuPage.assert4()
})

Then('User have Aplikasi Kasir page', ()=>{
    MenuPage.assert5()
})
/// <reference types= "cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given ('User have Loginpage',()=> {
    cy.visit("https://sistemtoko.com/login")
})

When('User submit login',() =>{
    cy.get('input[name="email"]').type("yudithriani123@gmail.com")
    cy.get('input[name="password"]').type("password")
    cy.get('button').click()
})

When('User submit invalid login1',() =>{
    cy.get('input[name="email"]').type("yudithriani123@gmail.com")
    cy.get('input[name="password"]').type("pass")
    cy.get('button').click()
})

When('User submit invalid login2',() =>{
    cy.get('input[name="email"]').type("yudithriani")
    cy.get('input[name="password"]').type("password")
    cy.get('button').click()
})

When('User submit invalid login3',() =>{
    cy.get('input[name="email"]').type("yudithriani")
    cy.get('input[name="password"]').type("pass")
    cy.get('button').click()
})

Then('User successfully Login', ()=> {
    cy.get('h2.panel-title').should('be.visible')
})

Then('User Failed Login', ()=> {
    cy.get('#title').should('be.visible')
})
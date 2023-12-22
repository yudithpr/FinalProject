/// <reference types= "cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


When('User click forgot password',() =>{
    cy.get('a').contains('I forgot my password').click()
})

When('User submit registered email',() =>{
    cy.get('input[name="email"]').type("yudithriani123@gmail.com")
    cy.get('input[type="submit"]').click()
})

When('User submit unregistered email',() =>{
    cy.get('input[name="email"]').type("yud@gmail.com")
    cy.get('input[type="submit"]').click()
})

Then('User get password reminder', ()=> {
    cy.get('strong').contains("Password reminder sent! !")
})

Then('User get notification', ()=> {
    cy.get('strong').contains("We can't find a user with that e-mail address. !")
})
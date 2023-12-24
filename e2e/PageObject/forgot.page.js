const url = 'https://sistemtoko.com/login'
const sendreminder = 'input[type="submit"]'
const Email='input[type="email"]'


class ForgotPasswordPage{
    static visit(){
    cy.visit(url,{timeload:20000})
    cy.screenshot()
    }

    static forgotmypass(){
        cy.get('a').contains("I forgot my password").click()
    }

    static fillemail(email){
        cy.screenshot()
        cy.get(Email).type(email)
        cy.screenshot()
    }

    static sendreminder(){
        cy.get(sendreminder).click()
    }

    static assert1(){
        cy.get('strong').contains("We can't find a user with that e-mail address. !").should('be.visible')
    }

    static assert(){
        cy.get('strong').contains("Password reminder sent! !").should('be.visible')
    }
}
export default ForgotPasswordPage
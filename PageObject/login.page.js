const url = 'https://sistemtoko.com/login'
const Email = 'input[name="email"]'
const Password = 'input[name="password"]'
const Loginbutton = 'button[type="submit"]'
const assert1 = 'h2.panel-title'
const assert2 = '#modal-alert'

class LoginPage{
    static visit(){
    cy.visit(url,{timeload:10000})
    cy.screenshot()
    }

    static fillemail(email){
        cy.screenshot()
        cy.get(Email).type(email)
        cy.screenshot()
    }

    static fillpassword(password){
        cy.screenshot()
        cy.get(Password).type(password)
        cy.screenshot()
    }

    static submitlogin(){
        cy.screenshot()
        cy.get(Loginbutton).click()
        cy.screenshot()
    }

    static assert1(){
        cy.get(assert1).should('be.visible')
    }

    static assert2(){
        cy.get(assert2).should('be.visible')
    }
}
export default LoginPage
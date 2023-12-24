const url = 'https://sistemtoko.com'
const Email = 'input[type="email"]'
const Password = 'input[name="pswd"]'
const Repassword = 'input[name="password"]'
const Name = 'input[name="name"]'
const Phone = 'input[name="phone"]'
const Submitregist = 'button[type="submit"]'
const assert = '#reason'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

class RegistPage{
    static visit(){
        cy.screenshot()
        cy.visit(url,{timeload:10000})
    }
    static clickregistpage(){
        cy.screenshot()
        cy.get(Submitregist).contains("register").click()
        cy.screenshot()
    }
    static fillemail(email1){
        cy.screenshot()
        cy.get(Email).type(email1)
        cy.screenshot()
    }
    static fillpassword(password1){
        cy.screenshot()
        cy.get(Password).type(password1)
        cy.screenshot()
    }
    static fillrepassword(repassword){
        cy.screenshot()
        cy.get(Repassword).type(repassword)
        cy.screenshot()
    }
    static fillfullname(fullname){
        cy.screenshot()
        cy.get(Name).type(fullname)
        cy.screenshot()
    }
    static fillphone(phone){
        cy.screenshot()
        cy.get(Phone).type(phone)
        cy.screenshot()
    }
    static submitregist(){
        cy.get(Submitregist).click()
    }
    static assert(){
        cy.get(assert).contains("Please check your email, We have sent you a verification code. Check spam folder if in your inbox doesnt appear in 15 mins")
    }
    static assert2(){
        cy.get(assert).contains("The email has already been taken.")
    }
}
export default RegistPage
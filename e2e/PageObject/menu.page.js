const url = 'https://sistemtoko.com'
//const dropdown = 'a.dropdown-menu'
const assert1 = '.header-gray'


class MenuPage{
    static visit(){
        cy.visit(url,{timeload:10000})
    }

    static dropdownmenu(){
        cy.get('a').contains("Fitur").click()
    }

    static website(){
        cy.get('a').contains("Website").click()
    }

    static sisteminformasi(){
        cy.get('a').contains("Sistem Informasi").click()
    }

    static chatbot(){
        cy.get('a').contains("ChatBot").click()
    }

    static androidstore(){
        cy.get('a').contains("Android store").click()
    }

    static aplikasikasir(){
        cy.get('a').contains("Aplikasi Kasir").click()
    }

    static assert1(){
        cy.get(assert1).contains("Miliki website anda sendiri").should('be.visible')
    }

    static assert2(){
        cy.url().should('include','/#sistem')
    }

    static assert3(){
        cy.url().should('include','/#chatbot')
    }

    static assert4(){
        cy.url().should('eq','https://sistemtoko.com/#android')
    }

    static assert5(){
        cy.url().should('include','/#kasir')
    }


}

export default MenuPage
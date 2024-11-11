const { equal } = require("assert")


describe('test', () => {

    it.only('save subject of the command', () => {

        cy.visit('/')
        cy.contains('.menu-title', 'Forms').click()
        cy.contains('.menu-title', 'Form Layouts').click()

        // !!! CANNOT DO THIS !!!
        /*
        let usingTheGrid = cy.contains('nb-card', 'Using the Grid')
        usingTheGrid.find('[for="inputEmail1"]').should('contain', 'Email')
        usingTheGrid.find('[for="inputPassword2"]').should('contain', 'Password')
        */

        // 1. Cypress Alias
        cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')

        // 1. Cypress then() method
        cy.contains('nb-card', 'Using the Grid').then(usingTheGrid => {
            cy.wrap(usingTheGrid).find('[for="inputEmail1"]').should('contain', 'Email')
            cy.wrap(usingTheGrid).find('[for="inputPassword2"]').should('contain', 'Password')
        })

        // Store element text as an alias
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]')
        //     .then(($label) => {
        //         cy.wrap($label.text()).as('emailLabelText')
        //     })

        // cy.get('@emailLabelText').should('equal', "Email")

    })

})
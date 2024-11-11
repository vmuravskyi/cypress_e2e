const { equal } = require("assert")


describe('test', () => {

    // check or uncheck methods should be applied to input fields that have type=radiobutton or type=checkbox

    it('radiobuttons', () => {

        cy.visit('/')
        cy.contains('.menu-title', 'Forms').click()
        cy.contains('.menu-title', 'Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
            cy.wrap(radioButtons).eq(0).check({ force: true }).should('be.checked')
            cy.wrap(radioButtons).eq(1).check({ force: true }).should('be.checked')
            cy.wrap(radioButtons).eq(0).should('not.be.checked')
            cy.wrap(radioButtons).eq(2).should('be.disabled')
        })

    })

    it('checkboxes', () => {

        cy.visit('/')
        cy.contains('.menu-title', 'Forms').click()
        cy.contains('.menu-title', 'Form Layouts').click()

        cy.contains('.menu-title', 'Modal & Overlays').click()
        cy.contains('.menu-title', 'Toastr').click()

        cy.get('[type=checkbox]').check({ force: true })

    })

})
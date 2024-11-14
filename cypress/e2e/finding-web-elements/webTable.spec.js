const { equal } = require("assert")


describe('test', () => {

    it('web table', () => {

        cy.visit('/')
        cy.contains('.menu-title', 'Tables & Data').click()
        cy.contains('.menu-title', 'Smart Table').click()

        // 1. get the row by text
        cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(30)
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '30')
        })

        // 2 get row by index
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(row => {
            cy.wrap(row).find('[placeholder="First Name"]').type("John")
            cy.wrap(row).find('[placeholder="Last Name"]').type("Wick")
            cy.wrap(row).find('[placeholder="Username"]').type("J.Wick")
            cy.wrap(row).find('[placeholder="E-mail"]').type("john.wick@test.com")
            cy.wrap(row).find('[placeholder="Age"]').type("39")
            cy.wrap(row).find('.nb-checkmark').click()
        })
        cy.get('tbody tr').first().find('td').then(tableColumns => {
            cy.wrap(tableColumns).eq(2).should('contain', 'John')
            cy.wrap(tableColumns).eq(3).should('contain', 'Wick')
            cy.wrap(tableColumns).eq(4).should('contain', 'J.Wick')
            cy.wrap(tableColumns).eq(5).should('contain', 'john.wick@test.com')
            cy.wrap(tableColumns).eq(6).should('contain', '39')
        })


    })

})
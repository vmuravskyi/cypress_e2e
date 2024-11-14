const { equal } = require("assert")


describe('test', () => {

    it('tooltip', () => {

        cy.visit('/')
        cy.contains('.menu-title', 'Modal & Overlays').click()
        cy.contains('.menu-title', 'Tooltip').click()

        cy.contains('nb-card', 'Colored Tooltips').contains('Default').click()
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')

    })

    it.only('dialog box', () => {

        cy.visit('/')
        cy.contains('.menu-title', 'Tables & Data').click()
        cy.contains('.menu-title', 'Smart Table').click()

        // 1 option
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', (confirm) => {
            expect(confirm).to.equal('Are you sure you want to delete?')
        })

        // 2 option
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })

        // 3 option
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', () => false)

    })

})
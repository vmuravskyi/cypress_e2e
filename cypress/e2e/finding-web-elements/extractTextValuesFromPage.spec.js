const { equal } = require("assert")


describe('test', () => {

    it.only('extract text values from page', () => {

        cy.visit('/')
        cy.contains('.menu-title', 'Forms').click()
        cy.contains('.menu-title', 'Form Layouts').click()

        // 1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        // 2
        cy.get('[for="exampleInputEmail1"]').then(label => {
            let labelText = label.text()
            expect(labelText).to.equal('Email address')
            cy.wrap(labelText).should('equal', 'Email address')
        })

        // 3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then((text) => {
            expect(text).to.equal('Email address')
        })
        // or
        cy.get('[for="exampleInputEmail1"]').invoke('text').should('equal', 'Email address')
        // or
        cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('equal', 'Email address')

        // 4
        cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(classValue => {
            expect(classValue).to.equal('label')
        })

        // 5 invoke property
        cy.get('#exampleInputEmail1').type('test@gmail.com')
        cy.get('#exampleInputEmail1').invoke('prop', 'value').should('equal', 'test@gmail.com')


    })

})
/// <reference types="cypress" />

// context

describe('First test suite', () => {

    it('first test', () => {

        cy.visit('/')

        const forms = cy.contains('.menu-title', 'Forms').should('be.visible').click()
        const formLayout = cy.contains('.menu-title', 'Form Layouts').should('be.visible').click()

        // by tag name
        cy.get('input')

        // by id
        cy.get('#inputEmail1')

        // by class value
        cy.get('.input-full-width')

        // by attribute name
        cy.get('[fullwidth]')

        // by attribute and value
        cy.get('[placeholder="Email"]')

        // by entire class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // by 2 attributes
        cy.get('[placeholder="Email"][fullwidth]')

        // by tag, attribute id and class
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // by cypress test id
        cy.get('[data-cy="imputEmail1"]')

    })

    // get() - find webelement on the page globally by locator
    // find() - find child elements by locator
    // contains() - find element by HTML text and by text and locator, finds the first matching element
    it.only('second test', () => {
        cy.visit('/')
        const forms = cy.contains('.menu-title', 'Forms').should('be.visible').click()
        const formLayout = cy.contains('.menu-title', 'Form Layouts').should('be.visible').click()

        cy.contains('[status="primary"]', 'Sign in') // text goes as the last parameter
        cy.contains('[status="warning"]', 'Sign in')

        const horizontalForm = cy.contains('nb-card', 'Horizontal form')
        horizontalForm.find('button') // find child element in relation to the parent using find
        cy.contains('nb-card', 'Horizontal form').contains('Sign in') // another option using contains
        // !!! IMPORTANT !!!
        // Chaining from parent element using get() will result in getting all element on a page, not only child
        cy.contains('nb-card', 'Horizontal form').get('button')

        // cypress chains and DOM
        // it is not recommended to chain cypress command after action method such as click, type, etc., because action methods may
        // change the structure of the DOM and cypress may loose the snapshot of the DOM and error will occur that element was detached.
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('span.custom-checkbox')
            .click()
            .should('have.class', 'checked')
    })

})
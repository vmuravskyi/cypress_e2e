const { equal } = require("assert")


describe('test', () => {

    it('date picker', () => {

        function selectDayFromCurrent(daysInFuture) {

            let date = new Date()
            date.setDate(date.getDate() + daysInFuture)
            console.log(date)
            let futureDay = date.getDate()
            let futureMonth = date.toLocaleDateString('en-US', { month: 'short' })
            let futureYear = date.getFullYear()
            let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}`

            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then((dateAttribute) => {
                if (!dateAttribute.includes(futureMonth) || !dateAttribute.includes(futureYear)) {
                    cy.get('[data-name="chevron-right"]').click()
                    selectDayFromCurrent(daysInFuture)
                } else {
                    cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
                }
            })

            return dateToAssert
        }

        cy.visit('/')
        cy.contains('.menu-title', 'Forms').click()
        cy.contains('.menu-title', 'Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()
            let dateToAssert = selectDayFromCurrent(50)
            cy.wrap(input).invoke('prop', 'value').should('equal', dateToAssert)
            cy.wrap(input).should('have.value', dateToAssert)
        })
    })

})
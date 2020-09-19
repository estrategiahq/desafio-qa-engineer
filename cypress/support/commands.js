Cypress.Commands.add("optionForTeacher",() =>  {
    cy.contains('Por professor').then($a => {
        const href = $a.prop('href')
        cy.visit(href)
    })
})

Cypress.Commands.add("accessTeacher",() =>  {
    cy.contains('Ena Loiola').then($a => {
        const href = $a.prop('href')
        cy.visit(href)
    })
})

Cypress.Commands.add("filterCourse",(course) =>  {
    cy.get('.js-filter').type(course)
    cy.get('.search > button > .icon-find').click()
})

Cypress.Commands.add("buyButton",() =>  {
    cy.get(':nth-child(11) > .js-form > .ui-btn').click()
})

Cypress.Commands.add("iForgotMyPassword",() =>  {
    cy.get(':nth-child(5) > .ui-link').click()
})

Cypress.Commands.add("informEmail",(email) =>  {
    cy.get('#entrar_email').type(email)
    cy.get('.ui-group-btn > .ui-button').click()
})

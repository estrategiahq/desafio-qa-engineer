let cookie = ''
Cypress.Commands.add('authRegister', (user) => {
    cy.request({
        method: 'POST',
        url: 'http://54.207.100.192/auth/register',
        body: { 
                name: user.name,
                email: user.email,
                password: user.pass
        }
    }).then(response => {
        cookie = response.token
    })
})

Cypress.Commands.add('login', (user) => {
    cy.request({
        method: 'POST',
        url: 'http://54.207.100.192/auth/register',
        body: { 
                name: user.name,
                email: user.email,
                password: user.pass
        }
    }).then(response => {
        cookie = response.token
    })
})
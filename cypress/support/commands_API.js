let auth = ''
let userID = ''
let projectID = ''

Cypress.Commands.add('authRegister', (user) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('baseUrlAPI')}auth/register`,
        body: { 
                name: user.name,
                email: user.email,
                password: user.pass
        }
    }).then(response => {
        userID = response.user._id
    })
})

Cypress.Commands.add('authenticate', (user) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('baseUrlAPI')}auth/authenticate`,
        body: { 
                email: user.email,
                password: user.pass
        }
    }).then(response => {
        auth = response.token
    })
})

Cypress.Commands.add("createProject", (user) => {

    cy.request({
        headers: {
            "Authorization": 'Bearer ' + auth
        },
        method: 'POST',
        url: `${Cypress.env('baseUrlAPI')}projects`,
        body:
        {
            title: user.name,
            description: user.name,
            tasks: [
              {
                name: user.name,
                assignedTo: userID
              }
            ]
          }
    }).then((response) => {
        projectID = response.project._id
    })
})

Cypress.Commands.add("recoverAllProjects", () => {

    cy.request({
        headers: {
            "Authorization": 'Bearer ' + auth
        },
        method: 'GET',
        url: `${Cypress.env('baseUrlAPI')}projects`,
    })
})

Cypress.Commands.add("recoverProject", () => {

    cy.request({
        headers: {
            "Authorization": 'Bearer ' + auth
        },
        method: 'GET',
        url: `${Cypress.env('baseUrlAPI')}projects/${projectID}`,
    })
})

Cypress.Commands.add("updateProject", (user) => {

    cy.request({
        headers: {
            "Authorization": 'Bearer ' + auth
        },
        method: 'PUT',
        url: `${Cypress.env('baseUrlAPI')}projects/${projectID}`,
        body:
        {
            title: user.email,
            description: user.email,
            tasks: [
              {
                name: user.email,
                assignedTo: userID
              }
            ]
          }
    })
})

Cypress.Commands.add("deleteProject", () => {

    cy.request({
        headers: {
            "Authorization": 'Bearer ' + auth
        },
        method: 'DELETE',
        url: `${Cypress.env('baseUrlAPI')}projects/${projectID}`,
    })
})
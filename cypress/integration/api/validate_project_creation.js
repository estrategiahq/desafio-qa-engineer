/// <reference types="Cypress"/>
import { createEmail, createName } from '../../factory/utils'

describe("validate project creation", () => {

    beforeEach(() => {
        const user = {
            name: createName(),
            email: createEmail(),
            pass: '123456'
        }
        cy.authRegister(user)
        cy.authenticate(user)
    });

    it("create project", () => {
        const user = {
            name: createName(),
            email: createEmail(),
        }
        cy.createProject(user).then((response) => {
            expect(response.body.project.title).to.eq(user.name)
            expect(response.body.project.description).to.eq(user.name)
            expect(response.body.project.tasks.[0].name).to.eq(user.name)
        })

    });

    it("recover all projects", () => {
        const user = {
            name: createName(),
            email: createEmail(),
        }
        cy.createProject(user)
        cy.recoverAllProjects().then((response) => {
            expect(response.body.projects.[0].__v).to.eq(1)
            expect(response.status).to.eq(200)
        })
    });

    it("recover project", () => {
        const user = {
            name: createName(),
            email: createEmail(),
        }
        cy.createProject(user)
        cy.recoverProject().then((response) => {
            expect(response.body.project.title).to.eq(user.name)
            expect(response.body.project.description).to.eq(user.name)
            expect(response.body.project.tasks.[0].name).to.eq(user.name)
        })
    });

    it("update project", () => {
        const user = {
            name: createName(),
            email: createEmail(),
        }
        cy.createProject(user)
        cy.updateProject(user).then((response) => {
            cy.log(response)
            expect(response.body.project.title).to.eq(user.email)
            expect(response.body.project.description).to.eq(user.email)
            expect(response.body.project.tasks.[0].name).to.eq(user.email)
        })
    });

    it.only("delete project", () => {
        const user = {
            name: createName(),
            email: createEmail(),
        }
        cy.createProject(user)
        cy.deleteProject().then((response) => {
            cy.log(response.status)
            expect(response.status).to.eq(200)
        })
    });
})
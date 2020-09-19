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
        cy.createProject(user)
        expect(response.project.title).to.eq(user.name)
        expect(response.project.description).to.eq(user.name)
        expect(response.project.tasks.name).to.eq(user.name)
    });

    it("recover all projects", () => {
        cy.createProject(user)
        cy.recoverAllProjects()
        expect(response.project.title).to.eq(user.name)
        expect(response.project.description).to.eq(user.name)
        expect(response.project.tasks.name).to.eq(user.name)
    });

    it("recover project", () => {
        cy.createProject(user)
        cy.recoverProject()
        expect(response.project.title).to.eq(user.name)
        expect(response.project.description).to.eq(user.name)
        expect(response.project.tasks.name).to.eq(user.name)
    });

    it("update project", () => {
        cy.createProject(user)
        cy.updateProject(user)
        expect(response.project.title).to.eq(user.email)
        expect(response.project.description).to.eq(user.email)
        expect(response.project.tasks.name).to.eq(user.email)
    });

    it("delete project", () => {
        cy.createProject(user)
        cy.deleteProject()
        expect(response.status).to.eq(200)

    });

});
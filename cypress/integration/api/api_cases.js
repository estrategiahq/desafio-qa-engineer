/// <reference types="Cypress"/>
import { createEmail, createName } from '../../factory/utils'

describe("validate login", () => {

    beforeEach(() => {
        const user = {
            name: createName(),
            email: createEmail(),
            pass: '123456'
        }

        cy.authRegister(user)
    });

    it("validate login", () => {

        cy.login(user)
        expect(response.user.name).to.eq(user.name)
        expect(response.user.email).to.eq(user.email)
    });
});
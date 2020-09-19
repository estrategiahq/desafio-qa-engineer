/// <reference types="Cypress"/>
import { createEmail } from '../../factory/utils'

describe("validate search functionality", () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
    });

    it("Validate monthly fee and total", () => {
        const course = "Assinatura Básica 2 Anos - Cartão até 12 x"
        cy.optionForTeacher()
        cy.accessTeacher()
        cy.filterCourse(course)
        cy.get(':nth-child(3) > .card-prod-price').invoke('text').then((text) => {
            const parcelText = text.split('R$ ')
            const parcelValueConversion  = parcelText[1].replace(',', '.')
            const parcelValue = parseFloat(parcelValueConversion)
            cy.get(':nth-child(3) > .card-prod-details').click()
            cy.get('.cur-details-shopping-installments').invoke('text').then((text) => {
                const parcelTextDetails = text.split('R$ ')
                const parcelValueConversion = parcelTextDetails[1].replace(',', '.')
                expect(parcelValueConversion).to.eq(parcelValueConversion)
            })
            cy.get('.value').invoke('text').then((text) => {
                const totalValueText = text.split('R$ ')
                const totalValueConversionFirst = totalValueText[1].replace('.', '')
                const totalValueConversionSecond = totalValueConversionFirst.replace(',', '.')
                const totalCourseValue = totalValueConversionSecond.replace(' ', '')
                const totalValueParcels = parcelValue * 12
                expect(totalValueParcels.toFixed(2)).to.eq(totalCourseValue)
                cy.screenshot()
            })
        })
    })

    it("Validate research with no course", () => {
        const course = "Paraquedismo"
        cy.optionForTeacher()
        cy.accessTeacher()
        cy.filterCourse(course)
        cy.get('._text-center').should('contain', 'Nenhum resultado encontrado.')
        cy.screenshot()
    })

    it("Recover password when making purchase", () => {
        const course = "Assinatura Platinum - Mensal"
        const email = createEmail()
        cy.optionForTeacher()
        cy.accessTeacher()
        cy.filterCourse(course)
        cy.buyButton()
        cy.iForgotMyPassword()
        cy.informEmail(email)
        cy.get('.ui-alert').should('contain', 'Se email corretamente informado, você receberá um link para troca da senha')
        cy.screenshot()
    })

})
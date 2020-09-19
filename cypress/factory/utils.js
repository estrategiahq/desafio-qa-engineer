const faker = require('faker')

export function createEmail() {
    const email = faker.internet.email()
    return email
}

export function createName() {
    const name = faker.name.findName()
    return name
}
# Estratégia Educacional Test

## Automated testing
This project aims to automate Front and API calls in order to facilitate the validation of items in a regressive manner

## Prerequisites

- Have the node and cypress installed on the machine
- Installation link (https://docs.cypress.io/guides/getting-started/installing-cypress.html#Direct-download)
- Install the plugins with the commands "npm i faker -D" and "npm i mochawesome"

## How to run

- Open the terminal service
- Access the directory /desafio-qa-engineer and run the tests with the command below:
   
   * type it "npm run test" to run on chrome
   * type it "npm run test-headless" to run in the headless
   * type it "npm run cypress:open" to open the execution window and select the cases to be executed
   * type it "npx cypress run -b chrome --reporter mochawesome" for execution generating report 
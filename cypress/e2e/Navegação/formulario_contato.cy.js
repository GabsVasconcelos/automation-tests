import { faker } from '@faker-js/faker';

describe('Testes Automatizados com Cypress - Automation Exercise', () => {

  it("Formulário de contato", () => {
    cy.visit("https://automationexercise.com/");

    cy.contains("Contact us").click();

    const nome = faker.person.firstName();
    const email = faker.internet.email();

    cy.get('[data-qa="name"]').type(nome);
    cy.get('[data-qa="email"]').type(email)
    cy.get('[data-qa="subject"]').type('Teste Fale Conosco')
    cy.get('[data-qa="message"]').type('Caso de testes de automação para pagina fale conosco do site automation exercice')
    cy.get('[data-qa="submit-button"]').click()
    cy.get('.status').contains("Success! Your details have been submitted successfully.").should("be.visible");

  });
});
import { faker } from '@faker-js/faker';

describe('Testes Automatizados com Cypress - Automation Exercise', () => {
it("Registrar usuário com e-mail existente", () => {

    const nome = faker.person.firstName();

    cy.visit("https://automationexercise.com/");

    cy.contains("Signup / Login").click();
    cy.get('.signup-form > h2').should('be.visible');
    cy.get('[data-qa="signup-name"]').type(nome);
    cy.get('[data-qa="signup-email"]').type('Lucio.Wuckert25@gmail.com');

    cy.get('[data-qa="signup-button"]').click();

    cy.get('.signup-form > form > p').contains("Email Address already exist!").should("be.visible");
  });
});
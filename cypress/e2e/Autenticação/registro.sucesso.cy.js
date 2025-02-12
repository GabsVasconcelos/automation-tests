import { faker } from '@faker-js/faker';

describe('Testes Automatizados com Cypress - Automation Exercise', () => {
  it("Registro de usuário com sucesso", () => {

    const nome = faker.person.firstName();
    const email = faker.internet.email();
    const senha = faker.internet.password();
    const sobrenome = faker.person.lastName();
    const endereco = faker.location.streetAddress();
    const cidade = faker.location.city();
    const estado = faker.location.state();
    const cep = faker.location.zipCode();
    const telefone = faker.phone.number();

    cy.visit("https://automationexercise.com/");

    cy.contains("Signup / Login").click();
    cy.get('.signup-form > h2').should('be.visible');
    cy.get('[data-qa="signup-name"]').type(nome);
    cy.get('[data-qa="signup-email"]').type(email);

    cy.get('[data-qa="signup-button"]').click();

    cy.get('#id_gender2').click();
    cy.get('[data-qa="password"]').type(senha);
    cy.get('[data-qa="days"]').select("15");
    cy.get('[data-qa="months"]').select("August");
    cy.get('[data-qa="years"]').select("1996");
    cy.get('[data-qa="first_name"]').type(nome);
    cy.get('[data-qa="last_name"]').type(sobrenome);
    cy.get('[data-qa="address"]').type(endereco);
    cy.get('[data-qa="city"]').type(cidade);
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').type(estado);
    cy.get('[data-qa="zipcode"]').type(cep);
    cy.get('[data-qa="mobile_number"]').type(telefone);

    Cypress.env("userData", { nome, email, senha });

    cy.get('[data-qa="create-account"]').click();

    cy.contains("Account Created!").should("be.visible");
  });
});
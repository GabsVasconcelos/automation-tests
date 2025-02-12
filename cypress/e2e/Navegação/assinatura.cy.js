import { faker } from '@faker-js/faker';

describe('Testes Automatizados com Cypress - Automation Exercise', () => {

it("Verificar Asssinatura", () => {
    cy.visit("https://automationexercise.com/");
    const email = faker.internet.email();

    cy.get('.footer-widget > .container').scrollIntoView().should('be.visible')
    cy.get('.single-widget > h2').should('be.visible').and('contain.text', 'Subscription');

    cy.get('#susbscribe_email').type(email);
    cy.get('#subscribe').click()
    cy.get('.alert-success').contains('You have been successfully subscribed!').should('be.visible');


    cy.get('#scrollUp > .fa').click();


  });
});
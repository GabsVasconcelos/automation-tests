import { faker } from '@faker-js/faker';

describe('Testes Automatizados com Cypress - Automation Exercise', () => {
    it("Adicionar avaliação ao produto", () => {
        const nome = faker.person.firstName();
        const email = faker.internet.email();

    cy.visit("https://automationexercise.com/");

        cy.contains("Products").click();
    cy.get('.title').should('be.visible').and('contain.text', 'All Products');
    cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('.product-information').should('be.visible');
    cy.get('.product-information > h2').should('be.visible');
    cy.get('.product-information > :nth-child(3)').should('be.visible');
    cy.get(':nth-child(5) > span').should('be.visible');
    cy.get('label').should('be.visible');
    cy.get('.product-information > :nth-child(6)').should('be.visible');
    cy.get('.product-information > :nth-child(7)').should('be.visible');
    cy.get('.product-information > :nth-child(8)').should('be.visible');
    cy.get('.active > a').contains('Write Your Review').should('be.visible');
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#review').type('Avaliação exempplo para caso de teste automatizado.')
    cy.get('#button-review').click()
    cy.get('.alert-success > span').contains('Thank you for your review.')



  });
});
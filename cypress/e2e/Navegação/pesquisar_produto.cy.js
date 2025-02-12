describe('Testes Automatizados com Cypress - Automation Exercise', () => {

it(" Pesquisar produto", () => {
    cy.visit("https://automationexercise.com/");

    cy.contains("Products").click();
    cy.get('.title').should('be.visible');
    cy.get('#search_product').type('Frozen Tops For Kids')
    cy.get('#submit_search').click();
    cy.get('.productinfo').should('be.visible');
    cy.get('.choose > .nav > li > a').click();
    cy.get('.product-information').should('be.visible');
    cy.get('.product-information > h2').contains('Frozen Tops For Kids').should('be.visible');
    cy.get('.product-information > :nth-child(3)').should('be.visible');
    cy.get(':nth-child(5) > span').should('be.visible');
    cy.get('label').should('be.visible');
    cy.get('.product-information > :nth-child(6)').should('be.visible');
    cy.get('.product-information > :nth-child(7)').should('be.visible');
    cy.get('.product-information > :nth-child(8)').should('be.visible');



  });
});